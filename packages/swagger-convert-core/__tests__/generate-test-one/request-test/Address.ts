import request from "../index";
export function create_address_api_wechataddress_pc_address_post({
  data,
}: { data?: IApi.AddressCreateAddressApiWechataddressPcAddressPostBody } = {}) {
  return request<IApi.AddressCreateAddressApiWechataddressPcAddressPostResponses>(
    {
      url: `/api/wechataddress/pc/address`,
      method: "post",

      data: data || {},
    },
  );
}
export function delete_address_api_wechataddress_pc_address_delete({
  params,
}: {
  params?: IApi.AddressDeleteAddressApiWechataddressPcAddressDeleteParams;
} = {}) {
  return request<IApi.AddressDeleteAddressApiWechataddressPcAddressDeleteResponses>(
    {
      url: `/api/wechataddress/pc/address`,
      method: "delete",
      params: params || {},
    },
  );
}
export function update_address_api_wechataddress_pc_address_patch({
  data,
}: {
  data?: IApi.AddressUpdateAddressApiWechataddressPcAddressPatchBody;
} = {}) {
  return request<IApi.AddressUpdateAddressApiWechataddressPcAddressPatchResponses>(
    {
      url: `/api/wechataddress/pc/address`,
      method: "patch",

      data: data || {},
    },
  );
}
export function get_addresses_api_wechataddress_pc_addresses_get({
  params,
}: {
  params?: IApi.AddressGetAddressesApiWechataddressPcAddressesGetParams;
} = {}) {
  return request<IApi.AddressGetAddressesApiWechataddressPcAddressesGetResponses>(
    {
      url: `/api/wechataddress/pc/addresses`,
      method: "get",
      params: params || {},
    },
  );
}
