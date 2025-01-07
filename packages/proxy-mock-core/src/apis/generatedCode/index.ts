import instance, { ResResult } from "..";

export interface ParseSwaggerByUrlParams {
  swaggerUrl: string;
}
export interface ParseSwaggerByUrlRes {
  key: string;
  requestUrl: string;
  method: string;
}
export const parseSwaggerByUrl = (params: ParseSwaggerByUrlParams) => {
  return instance.get<ResResult<{ requestList: ParseSwaggerByUrlRes[] }>>(
    "/generatedCode/parseSwagger",
    {
      params,
    }
  );
};

export interface GeneratedCodeMockjsParams {
  swaggerUrl: string;
  generatedCodeList: ParseSwaggerByUrlRes[];
}
export const generatedCodeMockjs = (params: GeneratedCodeMockjsParams) => {
  return instance.post<ResResult>("/generatedCode/mockjs", params);
};

export interface SpaceConfigJson {
  filterUrl: string[];
  importStr?: string;
}

export interface SapceItem {
  spaceName: string;
  configJson: SpaceConfigJson;
}

export interface GeneratedCreateSpaceParams {
  spaceName: string;
  configJson: SpaceConfigJson;
}
export const generatedCodeCreateSpace = (
  params: GeneratedCreateSpaceParams
) => {
  return instance.post<ResResult>("/generatedCode/createSpace", params);
};

export const generatedCodeDeleteSpace = (
  params: Pick<SapceItem, "spaceName">
) => {
  return instance.post<ResResult>("/generatedCode/deleteSpace", params);
};

export interface GeneratedCodeUpdateSpaceParams extends Partial<SapceItem> {
  oldSpaceName: string;
}
export const generatedCodeUpdateSpace = (
  params: GeneratedCodeUpdateSpaceParams
) => {
  return instance.post<ResResult>("/generatedCode/updateSpace", params);
};

export const generatedCodeGetSpaceList = () => {
  return instance.get<ResResult<SapceItem[]>>("/generatedCode/getSpaceList");
};

/** 生成axios代码 */
export const generatedCodAxiosCode = (
  params: SapceItem & { swaggerUrl: string }
) => {
  return instance.post<ResResult>("/generatedCode/axiosCode", params);
};
