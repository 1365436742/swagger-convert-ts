import express, { Router } from 'express'
import { ConfigOptions } from '../types'
import { successRes, errorRes } from '../utils/response'
import { GetMockInfoParams } from '../types/jsRequestInterception'
import { generateGetMockInfo } from '../utils/getMockInfo'
export default (options: ConfigOptions): Router => {
  const router = express.Router()
  const getMockInfo = generateGetMockInfo(options)
  router.post('/getMockInfo', async (req, res) => {
    const { url = '', method = '', params } = req.body as GetMockInfoParams
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
