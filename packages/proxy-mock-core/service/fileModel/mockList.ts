import fs from "fs";
import path from "path"
import { fileNameToUrl, readJson, urlToFileName } from "../utils";
import { FileListItem, MockConfig, MockConfigJson } from "../types/fileMock";
export async function getMockList(mockDataFileUrl: string): Promise<FileListItem[]> {
    const files = await fs.promises.readdir(mockDataFileUrl);
    return files.map(item => {
        return fileNameToUrl(item)
    })
}

export async function getMockConfig(mockDataFileUrl: string, fileInfo: FileListItem): Promise<MockConfig> {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName)
    const indexJsonUrl = path.join(baseUrl, "index.json");
    const mockConfigJson: MockConfigJson = await readJson(indexJsonUrl);
    const mockFileUrl = mockConfigJson.sence ? path.join(baseUrl, mockConfigJson.sence + ".js") : "";
    return {
        mockConfigJson,
        mockFileUrl
    }
}