import fs from 'fs';
import path from 'path';
import { convertSchemaToMock } from '../../convertSchemaToMock';
import { getTestDataJsonList } from '..';

describe("convertSchemaToMock测试用例", () => {
    const jsonList = getTestDataJsonList(path.resolve(__dirname, "./test-data"))
    jsonList.forEach(({ fileName, value, expectValue }) => {
        it(`解析${fileName}文件，测试用例`, async () => {
            const convertData = convertSchemaToMock(value);
            console.log(JSON.stringify(expectValue),"3522222ss")
            console.log(JSON.stringify(convertData))
            expect(convertData).toBe(expectValue)
        });
    })

});
