import request from "../index";
export function login_for_access_token_api_wechatuser_pc_login_post({
  data,
}: { data?: IApi.UserLoginForAccessTokenApiWechatuserPcLoginPostBody } = {}) {
  return request<IApi.UserLoginForAccessTokenApiWechatuserPcLoginPostResponses>(
    {
      url: `/api/wechatuser/pc/login`,
      method: "post",

      data: data || {},
    },
  );
}
export function get_users_api_wechatuser_pc_wechat_get({
  params,
}: { params?: IApi.UserGetUsersApiWechatuserPcWechatGetParams } = {}) {
  return request<IApi.UserGetUsersApiWechatuserPcWechatGetResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "get",
    params: params || {},
  });
}
export function unban_wechat_user_api_wechatuser_pc_wechat_post({
  params,
}: { params?: IApi.UserUnbanWechatUserApiWechatuserPcWechatPostParams } = {}) {
  return request<IApi.UserUnbanWechatUserApiWechatuserPcWechatPostResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "post",
    params: params || {},
  });
}
export function ban_wechat_user_api_wechatuser_pc_wechat_delete({
  params,
}: { params?: IApi.UserBanWechatUserApiWechatuserPcWechatDeleteParams } = {}) {
  return request<IApi.UserBanWechatUserApiWechatuserPcWechatDeleteResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "delete",
    params: params || {},
  });
}
export function modify_balance_api_wechatuser_pc_wechat_patch({
  params,
}: { params?: IApi.UserModifyBalanceApiWechatuserPcWechatPatchParams } = {}) {
  return request<IApi.UserModifyBalanceApiWechatuserPcWechatPatchResponses>({
    url: `/api/wechatuser/pc/wechat`,
    method: "patch",
    params: params || {},
  });
}
export function send_verification_code_api_wechatuser_pc_send_verification_code_post() {
  return request<IApi.UserSendVerificationCodeApiWechatuserPcSendVerificationCodePostResponses>(
    {
      url: `/api/wechatuser/pc/send-verification-code`,
      method: "post",
    },
  );
}
export function wechat_login_api_wechatuser_login_post({
  data,
}: { data?: IApi.UserWechatLoginApiWechatuserLoginPostBody } = {}) {
  return request<IApi.UserWechatLoginApiWechatuserLoginPostResponses>({
    url: `/api/wechatuser/login`,
    method: "post",

    data: data || {},
  });
}
export function wechat_authentication_api_wechatuser_authentication_post({
  data,
}: {
  data?: IApi.UserWechatAuthenticationApiWechatuserAuthenticationPostBody;
} = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserAuthenticationPostResponses>(
    {
      url: `/api/wechatuser/authentication`,
      method: "post",

      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_receive_post({
  data,
}: { data?: IApi.UserWechatAuthenticationApiWechatuserReceivePostBody } = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserReceivePostResponses>(
    {
      url: `/api/wechatuser/receive`,
      method: "post",

      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_receive_patch({
  data,
}: { data?: IApi.UserWechatAuthenticationApiWechatuserReceivePatchBody } = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserReceivePatchResponses>(
    {
      url: `/api/wechatuser/receive`,
      method: "patch",

      data: data || {},
    },
  );
}
export function wechat_authentication_api_wechatuser_status_get({
  params,
}: {
  params?: IApi.UserWechatAuthenticationApiWechatuserStatusGetParams;
} = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserStatusGetResponses>({
    url: `/api/wechatuser/status`,
    method: "get",
    params: params || {},
  });
}
export function wechat_authentication_api_wechatuser_information_get({
  params,
}: {
  params?: IApi.UserWechatAuthenticationApiWechatuserInformationGetParams;
} = {}) {
  return request<IApi.UserWechatAuthenticationApiWechatuserInformationGetResponses>(
    {
      url: `/api/wechatuser/information`,
      method: "get",
      params: params || {},
    },
  );
}
export function send_verification_code_api_wechatuser_send_verification_code_post({
  data,
}: {
  data?: IApi.UserSendVerificationCodeApiWechatuserSendVerificationCodePostBody;
} = {}) {
  return request<IApi.UserSendVerificationCodeApiWechatuserSendVerificationCodePostResponses>(
    {
      url: `/api/wechatuser/send-verification-code`,
      method: "post",

      data: data || {},
    },
  );
}
export function verify_code_api_wechatuser_verify_code_post({
  data,
}: { data?: IApi.UserVerifyCodeApiWechatuserVerifyCodePostBody } = {}) {
  return request<any>({
    url: `/api/wechatuser/verify-code`,
    method: "post",

    data: data || {},
  });
}
export function registry_api_wechatuser_registry_post({
  data,
}: { data?: IApi.UserRegistryApiWechatuserRegistryPostBody } = {}) {
  return request<any>({
    url: `/api/wechatuser/registry`,
    method: "post",

    data: data || {},
  });
}
