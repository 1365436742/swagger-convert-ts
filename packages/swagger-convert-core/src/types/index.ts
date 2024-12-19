export type JSONSchema = Record<string, any>

export interface SwaggerOpenApiType {
    components: {
        schemas: JSONSchema
    },
    paths: Record<string, Record<string, {
        operationId: string;
        tags: string[];
        parameters: {
            name: string;
            required: boolean;
            schema: JSONSchema;
        }[];
        requestBody: Record<string, any>;
        responses: Record<string, any>;
    }>>
}
export interface RequestCodeProps {
    /** 生成请求的方法名字 */
    requestMethodName: string;
    /** 接口url地址 */
    url: string;
    /** 请求类型是get还是post等 */
    method: string;
    /** query参数的类型名字 */
    paramsTypeName: string;
    /** body请求参数的类型名字 */
    dataTypeName: string;
    /** 相应参数类型名称 */
    responseTypeName: string;
    /** 生成ts的命名空间，默认IApi */
    nameSpance?: string
}
export type RequestFileCodeSort = Record<string, RequestCodeProps[]>;


export interface MockJsonBase {
    /** 接口url地址 */
    url: string;
    /** 请求类型是get还是post等 */
    method: string;
    /** 响应结果的mockjs */
    responseMockjs: Record<string, any>;
}

export type MockJsonInfo = Record<string, MockJsonBase[]>;


export interface GeneratedRequestCodeProps {
    requestFileCodeSort: RequestFileCodeSort
    directoryPath: string
    /** 
     * 导入函数
     * @eg
     * "import request from '../index';"
     */
    importStr: string
    /** 生成ts的命名空间，默认IApi */
    nameSpance?: string
}

export interface GeneratedTsTypeCodeProps {
    definitionSchemaJson: JSONSchema,
    /** ts的命名空间 */
    namespace?: string
}

export interface MockJson {
    url: string;
    /** 请求类型是get还是post等 */
    method: string;
    /** mockjsInfo输出 */
    mockjsInfo: Record<string, any>
}