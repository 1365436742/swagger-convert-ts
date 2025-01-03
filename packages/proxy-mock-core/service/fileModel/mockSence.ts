import fs from "fs";
import path from "path"
import { FileListItem, MockConfigJson, SenceOptions } from "../types/fileMock";
import { readJson, urlToFileName } from "../utils";

export async function getSenceList(mockDataFileUrl: string, fileInfo: FileListItem) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const files = await fs.promises.readdir(baseUrl);
    const jsFiles = files.filter(file => path.extname(file) === '.js');
    return jsFiles.map(file => path.basename(file, path.extname(file)));
}

export async function updateSence(mockDataFileUrl: string, fileInfo: FileListItem, senceOptions: SenceOptions) {
    const { senceContent, senceName, oldSenceName } = senceOptions
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const senceUrl = path.join(baseUrl, senceName + ".js");
    if (oldSenceName && oldSenceName !== senceName) {
        const oldSenceUrl = path.join(baseUrl, oldSenceName + ".js");
        await fs.promises.rename(oldSenceUrl, senceUrl);
    }
    if (senceContent) {
        await fs.promises.writeFile(senceUrl, senceContent);
    }
}

export async function deleteSence(mockDataFileUrl: string, fileInfo: FileListItem, senceName: string) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const senceUrl = path.join(baseUrl, senceName + ".js");
    await fs.promises.unlink(senceUrl);
}

export async function selectSence(mockDataFileUrl: string, fileInfo: FileListItem, senceName: string) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const indexJsonUrl = path.join(baseUrl, "index.json");
    const mockConfigJson: MockConfigJson = await readJson(indexJsonUrl);
    mockConfigJson.sence = senceName;
    await fs.promises.writeFile(indexJsonUrl, JSON.stringify(mockConfigJson, null, 2))
}

export async function getSenceDetail(mockDataFileUrl: string, fileInfo: FileListItem, senceName: string) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const senceUrl = path.join(baseUrl, senceName + ".js");
    return await fs.promises.readFile(senceUrl, 'utf8')
}