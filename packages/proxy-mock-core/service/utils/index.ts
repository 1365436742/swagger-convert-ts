import { FileListItem } from "../types/fileMock";
import { PackageJsonOptions } from '../types/index';
import fs from "fs";
/** 获取根目录的package.json信息、判断是ejs还是cjs **/
let packageJson: PackageJsonOptions | null = null;

export const fileNameToUrl = (fileName: string) => {
  const fileNameSplit = fileName.split('_');
  const lastIndex = fileNameSplit.length - 1;
  const method = fileNameSplit[lastIndex].toLocaleUpperCase();
  const url = '/' + fileNameSplit.slice(0, lastIndex).join('/');
  return {
    url,
    method,
  };
};
export const urlToFileName = ({ url, method }: FileListItem) => {
  return `${url
    .replace(/^\/+/, '')
    .replace(/\//g, '_')}_${method.toLocaleUpperCase()}`;
};

export const sleep = (time: number = 0) => {
    return new Promise((resolve) => {
        if (!time) return resolve("");
        setTimeout(() => {
            resolve("")
        }, time);
    })
}

export const readJson = async (url: string) => {
    try {
        const indexJson = await fs.promises.readFile(url, "utf-8");
        return JSON.parse(indexJson)
    } catch (error) {
        console.error("获取配置文件失败", error)
        return {}
    }
}

/** 获取根目录的package.json信息、判断是ejs还是cjs */
export const getPackageJson = () => {
  if (packageJson) return packageJson;
  packageJson = readJson('package.json') as { type?: string };
  return packageJson;
};


export async function dynamicReadJs(url: string) {
    const os = process.platform;
    let filePrefix = os === 'win32' ? "file://" : "";
    const importUrl = filePrefix + url;
    if (require?.cache) {
        delete require.cache[url];
        return await require(importUrl)
    } else {
        const fn = await import(`${importUrl}?t=${Date.now()}`);
        return fn.default
    }
}
