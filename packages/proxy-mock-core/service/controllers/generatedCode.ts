import express from "express"
import { ConfigOptions } from "../types";
import { parseSwagger } from 'swagger-convert-core';
import { errorRes, successRes } from "../utils/response";
export default (options: ConfigOptions) => {
    const router = express.Router();
    // http://localhost:3001/generatedCode/parseSwagger?swaggerUrl=http%3A%2F%2Flocalhost%3A8080%2Fv3%2Fapi-docs
    router.get('/parseSwagger', async (req, res) => {
        const body = req.query as { swaggerUrl: string }
        if (!body.swaggerUrl) {
            res.send(errorRes(body, "缺少参数"));
            return
        }
        try {
            const { requestFileCodeSort } = await parseSwagger(body.swaggerUrl);
            const requestList: { requestUrl: string, method: string }[] = [];
            for (const key in requestFileCodeSort) {
                const element = requestFileCodeSort[key];
                requestList.push(...element.map(item => ({
                    key: item.url + item.method,
                    requestUrl: item.url,
                    method: item.method
                })))
            }
            res.send(successRes({ requestList }));
        } catch (error) {
            res.send(errorRes(error, "输入链接有误"))
        }
    });
    return router
}