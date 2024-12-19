import fs from 'fs';
import path from 'path';

export const getTestDataJsonList = (folderPath: string) => {
    const files = fs.readdirSync(folderPath);
    // 过滤出所有 .json 文件
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
    /** 找出名字去重 */
    const fileNameList = Array.from(new Set(jsonFiles.map(file => file.split('.')[0])));
    const useJsonFiles: string[] = [];
    fileNameList.forEach(file => {
        if (jsonFiles.includes(file + ".json") && jsonFiles.includes(file + ".expect.json")) {
            useJsonFiles.push(file)
        }
    })
    const jsonList: { fileName: string, value: any, expectValue: any }[] = []
    useJsonFiles.forEach(jsonFile => {
        const filePath = path.join(folderPath, jsonFile);
        // 异步读取文件内容
        const data = fs.readFileSync(filePath + ".json", 'utf8');
        const expectData = fs.readFileSync(filePath + '.expect.json', 'utf8');
        try {
            // 解析 JSON 数据
            const value = JSON.parse(data);
            const expectValue = JSON.parse(expectData);
            jsonList.push({ fileName: jsonFile, value, expectValue })
        } catch (parseErr) {
            console.error('Error parsing JSON from file ' + jsonFile + ': ' + parseErr);
        }
    });
    return jsonList
}

