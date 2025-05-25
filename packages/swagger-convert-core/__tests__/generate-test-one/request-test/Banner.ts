import request from "../index";
export function upload_file_api_wechatbanner_pc_upload_post() {
  return request<IApi.BannerUploadFileApiWechatbannerPcUploadPostResponses>({
    url: `/api/wechatbanner/pc/upload`,
    method: "post",
  });
}
export function get_banners_api_wechatbanner_pc__get() {
  return request<IApi.BannerGetBannersApiWechatbannerPc_GetResponses>({
    url: `/api/wechatbanner/pc/`,
    method: "get",
  });
}
export function delete_file_api_wechatbanner_pc__delete({
  params,
}: { params?: IApi.BannerDeleteFileApiWechatbannerPc_DeleteParams } = {}) {
  return request<IApi.BannerDeleteFileApiWechatbannerPc_DeleteResponses>({
    url: `/api/wechatbanner/pc/`,
    method: "delete",
    params: params || {},
  });
}
export function get_banners_api_wechatbanner__get() {
  return request<IApi.BannerGetBannersApiWechatbanner_GetResponses>({
    url: `/api/wechatbanner/`,
    method: "get",
  });
}
