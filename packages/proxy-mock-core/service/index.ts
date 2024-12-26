import { ConfigOptions, MainServiceReturn } from "./types";
import express from "express"
import cors from "cors"
import mockRouter from "./controllers/mock"
import generatedCodeRouter from "./controllers/generatedCode"
const app = express();
const mainService = (options: ConfigOptions = {}): MainServiceReturn => {
    const { port = 3001 } = options;
    const serviceUrl = `http://localhost:${port}/`;
    app.use(cors());
    app.use(express.json({ limit: "50mb" }));

    app.use('/mock', mockRouter(options));
    app.use('/generatedCode', generatedCodeRouter(options));

    app.listen(port, () => {
        console.log(`mock服务启动:${serviceUrl}`);
    })
    return {
        getMockInfo(url, method) {
            return ""
        },
        serviceUrl: `http://localhost:${port}/`
    }
}
export default mainService