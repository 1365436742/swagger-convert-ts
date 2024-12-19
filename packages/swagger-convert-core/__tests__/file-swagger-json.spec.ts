import path from 'path';
import { generatedFileCode, generatedMockJson, jsonSchemaToTsCode, parseSwagger } from '../dist/index'
import { JSONSchema, RequestFileCodeSort } from '../dist/types';
import { writeFileSync } from '.';

const config = {
    /** swagger地址。支持https|http、本地文件目录 */
    swaggerOpenApiUrl: path.resolve(__dirname, './swagger/index.json'),
    debugFileUrl: "debugger",
    generatedCodeFileUrl: path.resolve(__dirname, './generate-test'),
    /** 生成本次接口的应用空间名称 */
    requestSpanceName: 'request-test',
};
const { swaggerOpenApiUrl, generatedCodeFileUrl, requestSpanceName, debugFileUrl } = config;
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
        writeFileSync(
            path.join(generatedCodeFileUrl, debugFileUrl, 'mockJson.json'),
            JSON.stringify(mockJson, null, 2)
        )
        expect(mockJson).toBeDefined();
    });
    it('debug文件生成', async () => {
        writeFileSync(
            path.join(generatedCodeFileUrl, debugFileUrl, 'output.json'),
            JSON.stringify(definitionSchemaJson, null, 2)
        );
        writeFileSync(
            path.join(generatedCodeFileUrl, debugFileUrl, 'requestFileCodeSort.json'),
            JSON.stringify(requestFileCodeSort, null, 2)
        );
        expect(definitionSchemaJson).toBeDefined();
        expect(requestFileCodeSort).toBeDefined();
    });
    it('ts code 生成', async () => {
        const code = await jsonSchemaToTsCode({ definitionSchemaJson });
        writeFileSync(path.join(generatedCodeFileUrl, 'type.d.ts'), code);
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
