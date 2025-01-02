import instance, { ResResult } from '..';

export interface AddSenceParams {
  url: string;
  method: string;
  senceName: string;
  senceContent: string;
}

export interface DeleteSenceParams {
  url: string;
  method: string;
  senceName: string;
}

export interface UpdateSenceParams {
  url: string;
  method: string;
  senceName: string;
  senceContent: string;
  oldSenceName?: string;
}

export interface SenceDetailRes {
  senceName: string;
  senceContent: string;
}
export const addSence = (params: AddSenceParams) => {
  return instance.post<ResResult>('/mockSence/addSence', params);
};

export const deleteSence = (params: DeleteSenceParams) => {
  return instance.post<ResResult>('/mockSence/deleteSence', params);
};

export const updateSence = (params: UpdateSenceParams) => {
  return instance.post<ResResult>('/mockSence/updateSence', params);
};

export const selectSence = (params: DeleteSenceParams) => {
  return instance.post<ResResult>('/mockSence/selectSence', params);
};

export const senceDetail = (params: DeleteSenceParams) => {
  return instance.post<ResResult<SenceDetailRes>>(
    '/mockSence/senceDetail',
    params
  );
};
