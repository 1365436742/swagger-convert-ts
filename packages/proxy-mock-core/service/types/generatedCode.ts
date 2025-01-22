export interface GeneratedCodeRequestList {
  key?: string
  requestUrl: string
  method: string
  responseMockjs?: Record<string, any>
}

export interface MockJsParams {
  swaggerUrl: string
  generatedCodeList: GeneratedCodeRequestList[]
}
export interface SpaceConfigJson {
  filterUrl: string[]
  importStr?: string
}
export interface SapceItem {
  spaceName: string
  configJson: SpaceConfigJson
}
