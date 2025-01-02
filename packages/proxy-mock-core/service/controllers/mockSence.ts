import express from "express"
import { ConfigOptions } from "../types";
import { FileListItem, SenceOptions } from "../types/fileMock";
import { errorRes, successRes } from "../utils/response";
import { deleteSence, updateSence } from "../fileModel/mockSence";
export default (options: ConfigOptions) => {
    const { mockDataFileUrl = '' } = options
    const router = express.Router();

    router.post('/addSence', async (req, res) => {
        const { url, method, ...senceOptions } = req.body as (FileListItem & Omit<SenceOptions, 'oldSenceName'>);
        if (!url || !method || !senceOptions) {
            res.send(errorRes(req.body, "缺少参数"));
        }
        try {
            await updateSence(mockDataFileUrl, { url, method }, senceOptions);
            res.send(successRes({}, "创建成功"));
        } catch (error) {
            res.send(errorRes(error, "创建失败"));
        }
    });

    router.post('/deleteSence', async (req, res) => {
        const { senceName, ...fileInfo } = req.body as (FileListItem & { senceName: string });
        if (!fileInfo?.url || !fileInfo.method || !senceName) {
            res.send(errorRes(req.body, "缺少参数"));
            return
        }
        try {
            await deleteSence(mockDataFileUrl, fileInfo, senceName);
            res.send(successRes({}, "删除成功"));
        } catch (error) {
            res.send(errorRes(error, "删除失败"));
        }
    });

    router.post('/updateSence', async (req, res) => {
        const { url, method, ...senceOptions } = req.body as (FileListItem & SenceOptions);
        if (!url || !method || !senceOptions.oldSenceName) {
            res.send(errorRes(req.body, "缺少参数"));
        }
        try {
            await updateSence(mockDataFileUrl, { url, method }, senceOptions);
            res.send(successRes({}, "更新成功"));
        } catch (error) {
            res.send(errorRes(error, "更新失败"));
        }
    });

    router.post('/senceDetail', async (req, res) => {
        
    });
    
    router.post('/selectSence', async (req, res) => {
            
        });
    return router
}
