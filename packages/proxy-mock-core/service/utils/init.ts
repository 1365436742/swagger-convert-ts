import fs from "fs"
import { ConfigOptions } from "../types"
export async function initFile(options: ConfigOptions) {
    const { generatedCodeFileUrl, mockDataFileUrl } = options
    if (mockDataFileUrl) {
        const isExists = fs.existsSync(mockDataFileUrl);
        if (!isExists) {
            await fs.promises.mkdir(mockDataFileUrl)
        }
    }
    if (generatedCodeFileUrl) {
        const isExists = fs.existsSync(generatedCodeFileUrl);
        if (!isExists) {
            await fs.promises.mkdir(generatedCodeFileUrl)
        }
    }
}
