import fs from 'fs';
import path from 'path';
import { generatedFileCode, generatedMockJson, jsonSchemaToTsCode, parseSwagger } from '../dist/index'
import { JSONSchema, RequestFileCodeSort } from '../dist/types';
const config = {
    /** swagger地址。支持https|http、本地文件目录 */
    swaggerOpenApiUrl: "http://localhost:8080/v3/api-docs",
    generatedCodeFileUrl: path.resolve(__dirname, './generate-test-link'),
    /** 生成本次接口的应用空间名称 */
    requestSpanceName: 'request-link-test',
    tsNameSpance: 'IRequest'
};
const { swaggerOpenApiUrl, generatedCodeFileUrl, requestSpanceName, tsNameSpance } = config;
let definitionSchemaJson: JSONSchema;
let requestFileCodeSort: RequestFileCodeSort;
describe("链接生成测试", () => {
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
        const code = await jsonSchemaToTsCode({ definitionSchemaJson, tsNameSpance });
        fs.writeFileSync(path.join(generatedCodeFileUrl, 'type.d.ts'), code);
        expect(code).toBeDefined();
    });
    it('request code 生成', async () => {
        await generatedFileCode({
            requestFileCodeSort,
            generatedCodeFileUrl,
            requestSpanceName,
            tsNameSpance
        })
        expect(swaggerOpenApiUrl).toBeDefined();
    });
});
