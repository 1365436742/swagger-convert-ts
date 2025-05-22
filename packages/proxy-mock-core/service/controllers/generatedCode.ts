import express, { Router } from 'express'
import { ConfigOptions } from '../types'
import {
  generatedFileCode,
  generatedMockJson,
  jsonSchemaToTsCode,
  parseSwagger,
} from 'swagger-convert-core'
import { errorRes, successRes } from '../utils/response'
import {
  GeneratedCodeRequestList,
  MockJsParams,
  SapceItem,
} from '../types/generatedCode'
import { getMockList, updateMock } from '../fileModel/mockList'
import { updateSence } from '../fileModel/mockSence'
import { isEjs } from '../utils'
import { cjsMockTemplate, ejsMockTemplate } from '../template'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'prettier'
import {
  deleteCodeSpace,
  getCodeSpaceList,
  updateCodeSpace,
  writeTsCode,
} from '../fileModel/generateCode'
import { filterMockJson, filterRequestFileCodeSort } from '../utils/filter'

export default (options: ConfigOptions): Router => {
  const { mockDataFileUrl = '', generatedCodeFileUrl = '' } = options
  const router = express.Router()
  // http://localhost:3001/generatedCode/parseSwagger?swaggerUrl=http%3A%2F%2Flocalhost%3A8080%2Fv3%2Fapi-docs
  router.get('/parseSwagger', async (req, res) => {
    const body = req.query as { swaggerUrl: string }
    if (!body.swaggerUrl) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    try {
      const { requestFileCodeSort } = await parseSwagger(body.swaggerUrl)
      const requestList: GeneratedCodeRequestList[] = []
      for (const key in requestFileCodeSort) {
        const element = requestFileCodeSort[key]
        requestList.push(
          ...element.map(item => ({
            key: uuidv4(),
            requestUrl: item.url,
            method: item.method,
          })),
        )
      }
      res.send(successRes({ requestList }))
    } catch (error) {
      res.send(errorRes(error, '输入链接有误'))
    }
  })

  router.post('/mockjs', async (req, res) => {
    const body = req.body as MockJsParams
    if (!body.swaggerUrl || !body.generatedCodeList.length) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    try {
      const { requestFileCodeSort, definitionSchemaJson } = await parseSwagger(
        body.swaggerUrl,
      )
      if (!requestFileCodeSort || !definitionSchemaJson) {
        res.send(
          errorRes(
            { requestFileCodeSort, definitionSchemaJson },
            'parseSwagger解析失败',
          ),
        )
        return
      }

      const mockJson = generatedMockJson({
        definitionSchemaJson,
        requestFileCodeSort,
      })

      const mockList = await getMockList(mockDataFileUrl)
      const filterJson = await filterMockJson(
        mockJson,
        body.generatedCodeList,
        async ({ responseMockjs, url, method }) => {
          const senceName = 'mockjs_' + uuidv4().split('-')[0]
          let senceContent = isEjs()
            ? ejsMockTemplate(responseMockjs)
            : cjsMockTemplate(responseMockjs)
          senceContent = await format(senceContent, { parser: 'typescript' })
          if (
            !mockList.some(item => item.method === method && item.url === url)
          ) {
            await updateMock(mockDataFileUrl, {
              sence: senceName,
              delay: 0,
              mock: false,
              url,
              method,
            })
          }
          await updateSence(
            mockDataFileUrl,
            {
              url,
              method,
            },
            {
              senceContent,
              senceName,
            },
          )
        },
      )
      res.send(successRes({ filterJson }))
    } catch (error) {
      res.send(errorRes(error, '输入链接有误'))
    }
  })

  router.post('/createSpace', async (req, res) => {
    const body = req.body as SapceItem
    if (!body.spaceName) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    const list = await getCodeSpaceList(generatedCodeFileUrl)
    const findName = list.find(item => item.spaceName === body.spaceName)
    if (findName) {
      res.send(errorRes(findName, '空间名已存在'))
      return
    }
    try {
      await updateCodeSpace(generatedCodeFileUrl, body)
      res.send(successRes({}, '创建成功'))
    } catch (error) {
      res.send(errorRes(error, '创建失败'))
    }
  })

  router.post('/deleteSpace', async (req, res) => {
    const body = req.body as Pick<SapceItem, 'spaceName'>
    if (!body.spaceName) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    try {
      await deleteCodeSpace(generatedCodeFileUrl, body.spaceName)
      res.send(successRes({}, '删除成功'))
    } catch (error) {
      res.send(errorRes(error, '删除失败'))
    }
  })

  router.post('/updateSpace', async (req, res) => {
    const body = req.body as SapceItem & {
      oldSpaceName: string
    }
    if (!body.spaceName || !body.oldSpaceName) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    const list = await getCodeSpaceList(generatedCodeFileUrl)
    const findName = list.find(item => item.spaceName === body.spaceName)
    if (findName) {
      res.send(errorRes(findName, '空间名已存在'))
      return
    }
    try {
      await updateCodeSpace(generatedCodeFileUrl, body)
      res.send(successRes({}, '修改成功'))
    } catch (error) {
      res.send(errorRes(error, '修改失败'))
    }
  })

  router.get('/getSpaceList', async (_req, res) => {
    try {
      const list = await getCodeSpaceList(generatedCodeFileUrl)
      res.send(successRes(list, '修改成功'))
    } catch (error) {
      res.send(errorRes(error, '修改失败'))
    }
  })

  router.post('/axiosCode', async (req, res) => {
    const body = req.body as SapceItem & { swaggerUrl: string }
    if (!body.spaceName) {
      res.send(errorRes(body, '缺少参数'))
      return
    }
    try {
      const { definitionSchemaJson, requestFileCodeSort } = await parseSwagger(
        body.swaggerUrl,
      )
      if (!requestFileCodeSort || !definitionSchemaJson) {
        res.send(
          errorRes(
            { requestFileCodeSort, definitionSchemaJson },
            'parseSwagger解析失败',
          ),
        )
        return
      }
      const curRequestFileCodeSort = filterRequestFileCodeSort(
        requestFileCodeSort,
        body.configJson.filterUrl,
      )
      await updateCodeSpace(generatedCodeFileUrl, body)
      const tsCode = await jsonSchemaToTsCode({
        definitionSchemaJson,
      })
      const defaultImportStr = "import request from '../index';"
      await generatedFileCode({
        requestFileCodeSort: curRequestFileCodeSort,
        generatedCodeFileUrl,
        requestSpanceName: body.spaceName,
        importStr: body?.configJson?.importStr || defaultImportStr,
      })
      await writeTsCode(generatedCodeFileUrl, body.spaceName, tsCode)
      res.send(successRes({}, '生成代码成功'))
    } catch (error) {
      res.send(errorRes(error, '生成失败'))
    }
  })
  return router
}
