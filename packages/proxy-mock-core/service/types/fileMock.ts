export interface MockConfigJson {
  sence?: string
  mock?: boolean
  delay: number
}
export interface MockConfig {
  mockFileUrl: string
  mockConfigJson: MockConfigJson
}
export interface FileListItem {
  url: string
  method: string
}

export interface SenceOptions {
  senceName: string
  senceContent: string
  oldSenceName?: string
}
