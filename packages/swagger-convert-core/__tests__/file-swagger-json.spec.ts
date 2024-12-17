import fs from 'fs';
import path from 'path';
import { generatedFileCode, generatedMockJson, jsonSchemaToTsCode, parseSwagger } from '../dist/index'
import { JSONSchema, RequestFileCodeSort } from '../dist/types';

const config = {
    /** swagger地址。支持https|http、本地文件目录 */
    swaggerOpenApiUrl: path.resolve(__dirname, './swagger/index.json'),
    generatedCodeFileUrl: path.resolve(__dirname, './generate-test'),
    /** 生成本次接口的应用空间名称 */
    requestSpanceName: 'request-test',
};
const { swaggerOpenApiUrl, generatedCodeFileUrl, requestSpanceName } = config;
let definitionSchemaJson: JSONSchema;
let requestFileCodeSort: RequestFileCodeSort;
describe("文件生成测试", () => {
    beforeAll(async () => {
        const res = await parseSwagger(swaggerOpenApiUrl);
        definitionSchemaJson = res.definitionSchemaJson!;
        requestFileCodeSort = res.requestFileCodeSort!;
    })
    it('mock schema Json生成', async () => {
        const mockJson = generatedMockJson({
            definitionSchemaJson,
            requestFileCodeSort
        })
        fs.writeFileSync(
            path.join(generatedCodeFileUrl, 'mockJson.json'),
            JSON.stringify(mockJson, null, 2)
        );
        expect(mockJson).toBeDefined();
    });
    it('debug文件生成', async () => {

        fs.writeFileSync(
            path.join(generatedCodeFileUrl, 'output.json'),
            JSON.stringify(definitionSchemaJson, null, 2)
        );
        fs.writeFileSync(
            path.join(generatedCodeFileUrl, 'requestFileCodeSort.json'),
            JSON.stringify(requestFileCodeSort, null, 2)
        );
        expect(definitionSchemaJson).toBeDefined();
        expect(requestFileCodeSort).toBeDefined();
    });
    it('ts code 生成', async () => {
        const code = await jsonSchemaToTsCode({ definitionSchemaJson });
        fs.writeFileSync(path.join(generatedCodeFileUrl, 'type.d.ts'), code);
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
