import express from 'express'
import { ConfigOptions } from '../types'
import { FileListItem, SenceOptions } from '../types/fileMock'
import { errorRes, successRes } from '../utils/response'
import {
  deleteSence,
  getSenceDetail,
  getSenceList,
  selectSence,
  updateSence,
} from '../fileModel/mockSence'
export default (options: ConfigOptions) => {
  const { mockDataFileUrl = '' } = options
  const router = express.Router()

  router.post('/addSence', async (req, res) => {
    const { url, method, ...senceOptions } = req.body as FileListItem &
      Omit<SenceOptions, 'oldSenceName'>
    if (!url || !method || !senceOptions) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      const senceList = await getSenceList(mockDataFileUrl, { url, method })
      if (senceList.includes(senceOptions.senceName)) {
        res.send(errorRes({}, '该场景已经创建'))
        return
      }
      await updateSence(mockDataFileUrl, { url, method }, senceOptions)
      res.send(successRes({}, '创建成功'))
    } catch (error) {
      res.send(errorRes(error, '创建失败'))
    }
  })

  router.post('/deleteSence', async (req, res) => {
    const { senceName, ...fileInfo } = req.body as FileListItem & {
      senceName: string
    }
    if (!fileInfo?.url || !fileInfo.method || !senceName) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      await deleteSence(mockDataFileUrl, fileInfo, senceName)
      res.send(successRes({}, '删除成功'))
    } catch (error) {
      res.send(errorRes(error, '删除失败'))
    }
  })

  router.post('/updateSence', async (req, res) => {
    const { url, method, ...senceOptions } = req.body as FileListItem &
      SenceOptions
    if (!url || !method || !senceOptions.oldSenceName) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      const senceList = await getSenceList(mockDataFileUrl, { url, method })
      if (
        senceList.includes(senceOptions.senceName) &&
        senceOptions.oldSenceName !== senceOptions.senceName
      ) {
        res.send(errorRes({}, '该场景名称重复'))
        return
      }
      await updateSence(mockDataFileUrl, { url, method }, senceOptions)
      res.send(successRes({}, '更新成功'))
    } catch (error) {
      res.send(errorRes(error, '更新失败'))
    }
  })

  router.post('/senceDetail', async (req, res) => {
    const { senceName, ...fileInfo } = req.body as FileListItem & {
      senceName: string
    }
    if (!fileInfo?.url || !fileInfo.method || !senceName) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      const senceContent = await getSenceDetail(
        mockDataFileUrl,
        fileInfo,
        senceName,
      )
      res.send(successRes({ senceName, senceContent }, '场景详情读取成功'))
    } catch (error) {
      res.send(errorRes(error, '场景详情读取失败'))
    }
  })

  router.post('/selectSence', async (req, res) => {
    const { senceName, ...fileInfo } = req.body as FileListItem & {
      senceName: string
    }
    if (!fileInfo?.url || !fileInfo.method || !senceName) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      await selectSence(mockDataFileUrl, fileInfo, senceName)
      res.send(successRes({}, '设置场景成功'))
    } catch (error) {
      res.send(errorRes(error, '设置场景失败'))
    }
  })
  return router
}
