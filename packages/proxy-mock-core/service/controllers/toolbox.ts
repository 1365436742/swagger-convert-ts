import express from 'express'
import { ConfigOptions } from '../types'
import { errorRes, successRes } from '../utils/response'
import { convertJsonToTs } from '../utils'
export default (_options: ConfigOptions) => {
  const router = express.Router()
  router.post('/jsonToTs', async (req, res) => {
    const body = req.body as { json: string }
    if (!body.json) {
      res.send(errorRes(req.body, '缺少参数'))
      return
    }
    try {
      const { lines } = await convertJsonToTs(body.json)
      const tsCode = lines.join('\n')
      res.send(successRes({ tsCode }, '转换成功'))
    } catch (error) {
      res.send(errorRes(error, '转换失败'))
    }
  })
  return router
}
