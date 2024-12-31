import { ConfigOptions, MainServiceReturn } from "./types";
import path from "path"
import express from "express"
import cors from "cors"
import mockRouter from "./controllers/mock"
import generatedCodeRouter from "./controllers/generatedCode"
import { getMockConfig, getMockList } from "./fileModel/mockList";
import { dynamicReadJs, sleep } from "./utils";
import { initFile } from "./utils/init";
const app = express();
const mainService = (options: ConfigOptions = {}): MainServiceReturn => {
    const { port = 3001 } = options;
    const serviceUrl = `http://localhost:${port}/`;

    app.use(cors());
    app.use(express.json({ limit: "50mb" }));

    app.use('/mock', mockRouter(options));
    app.use('/generatedCode', generatedCodeRouter(options));

    const publicRouter = express.Router();
    publicRouter.use(express.static(path.join(__dirname, "public")));
    app.use('/public', publicRouter);
    
    app.listen(port, () => {
        console.log(`mock服务启动:${serviceUrl}`);
    })
    
    initFile(options);
    const getMockInfo = async (url: string, method: string, proxyParams: any) => {
        if (!options.mockDataFileUrl) return false
        const list = await getMockList(options.mockDataFileUrl);
        const findMock = list.find(item => item.method === method.toLocaleUpperCase() && item.url === url);
        if (!findMock) return false;
        const { mockConfigJson, mockFileUrl } = await getMockConfig(options.mockDataFileUrl, findMock);
        if (!mockConfigJson.mock || !mockFileUrl) return false;
        await sleep(mockConfigJson.delay);
        const fn = await dynamicReadJs(mockFileUrl);
        return await fn(...proxyParams)
    }
    return {
        getMockInfo,
        serviceUrl: `http://localhost:${port}/`
    }
}
export default mainService