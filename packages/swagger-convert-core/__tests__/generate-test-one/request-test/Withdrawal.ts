import request from "../index";
export function get_withdrawal_api_wechatwithdrawal_withdrawal_get({
  params,
}: {
  params?: IApi.WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetParams;
} = {}) {
  return request<IApi.WithdrawalGetWithdrawalApiWechatwithdrawalWithdrawalGetResponses>(
    {
      url: `/api/wechatwithdrawal/withdrawal`,
      method: "get",
      params: params || {},
    },
  );
}
export function create_withdrawal_api_wechatwithdrawal_withdrawal_post({
  data,
}: {
  data?: IApi.WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostBody;
} = {}) {
  return request<IApi.WithdrawalCreateWithdrawalApiWechatwithdrawalWithdrawalPostResponses>(
    {
      url: `/api/wechatwithdrawal/withdrawal`,
      method: "post",

      data: data || {},
    },
  );
}
export function get_withdrawal_api_wechatwithdrawal_pc_withdrawal_get({
  params,
}: {
  params?: IApi.WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetParams;
} = {}) {
  return request<IApi.WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawalGetResponses>(
    {
      url: `/api/wechatwithdrawal/pc/withdrawal`,
      method: "get",
      params: params || {},
    },
  );
}
export function update_withdrawal_api_wechatwithdrawal_pc_withdrawal_patch({
  params,
}: {
  params?: IApi.WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchParams;
} = {}) {
  return request<IApi.WithdrawalUpdateWithdrawalApiWechatwithdrawalPcWithdrawalPatchResponses>(
    {
      url: `/api/wechatwithdrawal/pc/withdrawal`,
      method: "patch",
      params: params || {},
    },
  );
}
export function get_withdrawal_api_wechatwithdrawal_pc_withdrawal__user_id__get(
  user_id: string,
  {
    params,
  }: {
    params?: IApi.WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetParams;
  } = {},
) {
  return request<IApi.WithdrawalGetWithdrawalApiWechatwithdrawalPcWithdrawal_UserId_GetResponses>(
    {
      url: `/api/wechatwithdrawal/pc/withdrawal/${user_id}`,
      method: "get",
      params: params || {},
    },
  );
}
