import express from "express"
import { ConfigOptions } from "../types";
import { FileListItem, MockConfigJson } from "../types/fileMock";
import { deleteMock, getMockConfig, getMockList, updateMock } from "../fileModel/mockList";
import { errorRes, successRes } from "../utils/response";
import { getSenceList } from "../fileModel/mockSence";
export default (options: ConfigOptions) => {
    const { mockDataFileUrl = '' } = options
    const router = express.Router();

    router.post('/addMock', async (req, res) => {
        const body = req.body as FileListItem & MockConfigJson;
        try {
            await updateMock(mockDataFileUrl, body);
            res.send(successRes({}, "创建成功"));
        } catch (error) {
            res.send(errorRes(error, "创建失败"));
        }
    });

    router.post('/deleteMock', async (req, res) => {
        const body = req.body as FileListItem;
        if (!body?.url || !body.method) {
            res.send(errorRes(body, "缺少参数"));
            return
        }
        try {
            await deleteMock(mockDataFileUrl, body);
            res.send(successRes({}, "删除成功"));
        } catch (error) {
            res.send(errorRes(error, "删除失败"));
        }
    });

    router.post('/updateMock', async (req, res) => {
        const { sourceFileInfo, ...mockOpOptions } = req.body as FileListItem & MockConfigJson & { sourceFileInfo: FileListItem };
        if (!sourceFileInfo?.url || !sourceFileInfo.method) {
            res.send(errorRes(sourceFileInfo, "缺少参数"));
            return
        }
        try {
            await updateMock(mockDataFileUrl, mockOpOptions, sourceFileInfo);
            res.send(successRes(mockOpOptions, "更新成功"));
        } catch (error) {
            res.send(errorRes(error, "更新失败"));
        }
    });

    router.get('/mockList', async (req, res) => {
        try {
            const list = await getMockList(mockDataFileUrl);
            const listInfo: (FileListItem & MockConfigJson & { senceList: string[] })[] = [];
            for (let i = 0; i < list.length; i++) {
                const fileInfo = list[i];
                const configJson = await getMockConfig(mockDataFileUrl, fileInfo);
                const senceList = await getSenceList(mockDataFileUrl, fileInfo);
                const dataInfo = {
                    ...fileInfo,
                    ...configJson.mockConfigJson,
                    senceList
                }
                listInfo.push(dataInfo);
            }
            res.send(successRes(listInfo));
        } catch (error) {
            res.send(errorRes(error, "列表获取失败"));
        }
    });


    return router
}