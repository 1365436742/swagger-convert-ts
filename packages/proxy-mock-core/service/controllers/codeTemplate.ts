import express, { Router } from 'express'
import { ConfigOptions } from '../types'
import { successRes } from '../utils/response'
import { isEjs } from '../utils'
import { cjsTemplate, ejsTemplate } from '../template'
export default (_options: ConfigOptions): Router => {
  const router = express.Router()
  router.get('/senceDefault', (_req, res) => {
    let code = cjsTemplate
    if (isEjs()) {
      code = ejsTemplate
    }
    res.send(successRes({ code }, '切换成功'))
  })
  return router
}
