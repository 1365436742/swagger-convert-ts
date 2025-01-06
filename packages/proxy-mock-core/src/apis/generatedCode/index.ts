import instance, { ResResult } from "..";

export interface ParseSwaggerByUrlParams {
    swaggerUrl: string
}
export interface ParseSwaggerByUrlRes {
    key: string;
    requestUrl: string
    method: string
}
export const parseSwaggerByUrl = (params: ParseSwaggerByUrlParams) => {
    return instance.get<ResResult<{ requestList: ParseSwaggerByUrlRes[] }>>('/generatedCode/parseSwagger', {
        params
    });
};
