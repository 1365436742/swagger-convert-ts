import {
  MockJsonBase,
  MockJsonInfo,
  RequestCodeProps,
  RequestFileCodeSort,
} from 'swagger-convert-core/dist/types'
import { GeneratedCodeRequestList } from '../types/generatedCode'
import micromatch from 'micromatch'

/** 根据选中的url过滤出需要生成的json数据 */
export async function filterMockJson(
  source: MockJsonInfo,
  filterList: GeneratedCodeRequestList[],
  onFilterItem: (data: MockJsonBase) => Promise<void>,
) {
  if (!filterList?.length) return source
  const result: MockJsonInfo = {}
  for (const key in source) {
    const element = source[key]
    const curList: MockJsonBase[] = []
    for (let i = 0; i < element.length; i++) {
      const { url, method } = element[i]
      if (filterList.some(i => i.requestUrl === url && i.method === method)) {
        curList.push({
          ...element[i],
        })
        if (onFilterItem) {
          await onFilterItem(element[i])
        }
      }
    }
    if (curList.length) {
      result[key] = curList
    }
  }
  return result
}

/** 根据选中的url过滤出需要生成的接口 */
export function filterRequestFileCodeSort(
  source: RequestFileCodeSort,
  filterList: string[],
) {
  if (!filterList?.length) return source
  const result: RequestFileCodeSort = {}
  for (const key in source) {
    const element = source[key]
    const curList: RequestCodeProps[] = []
    for (let i = 0; i < element.length; i++) {
      const { url } = element[i]
      if (filterList.some(i => micromatch.isMatch(url, i))) {
        curList.push({
          ...element[i],
        })
      }
    }
    if (curList.length) {
      result[key] = curList
    }
  }
  return result
}
