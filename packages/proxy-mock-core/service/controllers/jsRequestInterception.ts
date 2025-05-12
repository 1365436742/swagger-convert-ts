import express from 'express'
import { ConfigOptions } from '../types'
import { successRes, errorRes } from '../utils/response'
import { GetMockInfoParams } from '../types/jsRequestInterception'
import { generateGetMockInfo } from '../utils/getMockInfo'
export default (options: ConfigOptions) => {
  const router = express.Router()
  const getMockInfo = generateGetMockInfo(options)
  router.get('/getMockInfo', async (req, res) => {
    const { url = '', method = '', params } = req.query as GetMockInfoParams
    const json = await getMockInfo(url, method, { params })
    if (json) {
      res.send(successRes(json, 'mock成功'))
      return
    } else {
      res.send(errorRes(false, '未mock'))
    }
  })
  return router
}
