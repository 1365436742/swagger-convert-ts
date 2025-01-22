import { ConfigOptions } from '../types'
import { createFileDir } from './file'
export async function initFile(options: ConfigOptions) {
  const { generatedCodeFileUrl, mockDataFileUrl } = options
  mockDataFileUrl && createFileDir(mockDataFileUrl)
  generatedCodeFileUrl && createFileDir(generatedCodeFileUrl)
}
