import { PluginOption } from 'vite';
import mainService from "./dist/index";
import path from "path";
export default function devServicePlugin(): PluginOption {
    const generatedCodeFileUrl = path.resolve(__dirname, "./src/request-apis")
    const mockDataFileUrl = path.resolve(__dirname, "./mock")
    const mainServiceInfo = mainService({
        generatedCodeFileUrl,
        mockDataFileUrl
    })
    return {
        name: 'dev-service-plugin', // 插件名称
        handleHotUpdate() {
            setTimeout(() => {
                console.log('服务端口', mainServiceInfo.serviceUrl);
            }, 0)
        }
    };
}
