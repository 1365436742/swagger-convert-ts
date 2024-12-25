import { PluginOption } from 'vite';
import mainService from "./dist/index"
export default function devServicePlugin(): PluginOption {
    const port = mainService()
    return {
        name: 'dev-service-plugin', // 插件名称
        handleHotUpdate() {
            setTimeout(() => {
                console.log('服务端口', port);
            }, 0)
        }
    };
}
