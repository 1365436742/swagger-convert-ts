import fs from "fs";
import path from "path"
import { fileNameToUrl, readJson, urlToFileName } from "../utils";
import { FileListItem, MockConfig, MockConfigJson } from "../types/fileMock";
import { createFileDir } from "../utils/file";
import { isEqual } from "lodash-es"

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

/** 更新Mock数据 */
export async function updateMock(mockDataFileUrl: string, MockOpOptions: FileListItem & MockConfigJson, sourceFileInfo?: FileListItem) {
    const { url, method, ...configJson } = MockOpOptions;
    const fileInfo = { url, method }
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    if (sourceFileInfo && !isEqual(sourceFileInfo, fileInfo)) {
        const OldFileName = urlToFileName(sourceFileInfo);
        const OldBaseUrl = path.join(mockDataFileUrl, OldFileName);
        await fs.promises.rename(OldBaseUrl, baseUrl);
    } else {
        await createFileDir(baseUrl);
    }
    const indexJsonUrl = path.join(baseUrl, "index.json");
    const oldMockConfigJson: MockConfigJson = await readJson(indexJsonUrl);
    await fs.promises.writeFile(indexJsonUrl, JSON.stringify(Object.assign(oldMockConfigJson, configJson), null, 2));
}

/** 删除该mock */
export async function deleteMock(mockDataFileUrl: string, fileInfo: FileListItem) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    await fs.promises.rm(baseUrl, { recursive: true })
}

/** 切换是否打开Mock */
export async function toggleMock(mockDataFileUrl: string, fileInfo: FileListItem) {
    const fileName = urlToFileName(fileInfo);
    const baseUrl = path.join(mockDataFileUrl, fileName);
    const indexJsonUrl = path.join(baseUrl, "index.json");
    const mockConfigJson: MockConfigJson = await readJson(indexJsonUrl);
    mockConfigJson.mock = !mockConfigJson.mock;
    await fs.promises.writeFile(indexJsonUrl, JSON.stringify(mockConfigJson, null, 2));
}