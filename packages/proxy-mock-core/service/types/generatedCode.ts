export interface GeneratedCodeRequestList {
    key?: string
    requestUrl: string
    method: string
    responseMockjs?: Record<string, any>
}

export interface MockJsParams {
    swaggerUrl: string,
    generatedCodeList: GeneratedCodeRequestList[]
}