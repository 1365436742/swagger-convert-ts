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
}
export type RequestFileCodeSort = Record<string, RequestCodeProps[]>