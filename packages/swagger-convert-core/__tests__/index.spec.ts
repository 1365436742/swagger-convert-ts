import fs from 'fs';
import path from 'path';
const { generatedFileCode, jsonSchemaToTsCode, parseSwagger } = require("../dist/index")

describe("文件生成测试", () => {
    const config = {
        /** swagger地址。支持https|http、本地文件目录 */
        swaggerOpenApiUrl: path.resolve(__dirname, './swagger/index.json'),
        generatedCodeFileUrl: path.resolve(__dirname, './generate-test'),
        /** 生成本次接口的应用空间名称 */
        requestSpanceName: 'request-test',
    };
    const { swaggerOpenApiUrl, generatedCodeFileUrl, requestSpanceName } = config;
    const { definitionSchemaJson, requestFileCodeSort } = parseSwagger(swaggerOpenApiUrl);
    it('debug文件生成', async () => {
        fs.writeFileSync(
            path.resolve(__dirname, './generate-test/output.json'),
            JSON.stringify(definitionSchemaJson, null, 2)
        );
        fs.writeFileSync(
            path.resolve(__dirname, './generate-test/requestFileCodeSort.json'),
            JSON.stringify(requestFileCodeSort, null, 2)
        );
        expect(definitionSchemaJson).toBeDefined();
        expect(requestFileCodeSort).toBeDefined();
    });
    it('ts code 生成', async () => {
        const code = await jsonSchemaToTsCode(definitionSchemaJson);
        fs.writeFileSync(path.resolve(__dirname, './generate-test/type.d.ts'), code);
        expect(code).toBeDefined();
    });
    it('request code 生成', async () => {
        await generatedFileCode({
            requestFileCodeSort,
            generatedCodeFileUrl,
            requestSpanceName
        })
        expect(swaggerOpenApiUrl).toBeDefined();
    });
});
