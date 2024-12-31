import fs from "fs";
/** 创建文件夹 */
export async function createFileDir(fileUrl: string) {
    const isExists = fs.existsSync(fileUrl);
    if (!isExists) {
        await fs.promises.mkdir(fileUrl)
    }
}