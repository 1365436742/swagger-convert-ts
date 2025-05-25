import request from "../index";
export function upload_file_api_wechatorder_upload_post() {
  return request<IApi.OrderUploadFileApiWechatorderUploadPostResponses>({
    url: `/api/wechatorder/upload`,
    method: "post",
  });
}
export function get_products_api_wechatorder_products_get({
  params,
}: { params?: IApi.OrderGetProductsApiWechatorderProductsGetParams } = {}) {
  return request<IApi.OrderGetProductsApiWechatorderProductsGetResponses>({
    url: `/api/wechatorder/products`,
    method: "get",
    params: params || {},
  });
}
export function add_products_api_wechatorder_products_post({
  data,
}: { data?: IApi.OrderAddProductsApiWechatorderProductsPostBody } = {}) {
  return request<IApi.OrderAddProductsApiWechatorderProductsPostResponses>({
    url: `/api/wechatorder/products`,
    method: "post",

    data: data || {},
  });
}
export function delete_products_api_wechatorder_products__product_id__delete(
  product_id: string,
  {
    params,
  }: {
    params?: IApi.OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteParams;
  } = {},
) {
  return request<IApi.OrderDeleteProductsApiWechatorderProducts_ProductId_DeleteResponses>(
    {
      url: `/api/wechatorder/products/${product_id}`,
      method: "delete",
      params: params || {},
    },
  );
}
export function get_orders_wx_api_wechatorder_orders_get({
  params,
}: { params?: IApi.OrderGetOrdersWxApiWechatorderOrdersGetParams } = {}) {
  return request<IApi.OrderGetOrdersWxApiWechatorderOrdersGetResponses>({
    url: `/api/wechatorder/orders`,
    method: "get",
    params: params || {},
  });
}
export function add_orders_api_wechatorder_orders_post({
  data,
}: { data?: IApi.OrderAddOrdersApiWechatorderOrdersPostBody } = {}) {
  return request<IApi.OrderAddOrdersApiWechatorderOrdersPostResponses>({
    url: `/api/wechatorder/orders`,
    method: "post",

    data: data || {},
  });
}
export function delivery_orders_api_wechatorder_orders_delivery_post({
  data,
}: {
  data?: IApi.OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostBody;
} = {}) {
  return request<IApi.OrderDeliveryOrdersApiWechatorderOrdersDeliveryPostResponses>(
    {
      url: `/api/wechatorder/orders/delivery`,
      method: "post",

      data: data || {},
    },
  );
}
export function return_orders_api_wechatorder_orders_return_get({
  params,
}: {
  params?: IApi.OrderReturnOrdersApiWechatorderOrdersReturnGetParams;
} = {}) {
  return request<IApi.OrderReturnOrdersApiWechatorderOrdersReturnGetResponses>({
    url: `/api/wechatorder/orders/return`,
    method: "get",
    params: params || {},
  });
}
export function get_orders_pc_api_wechatorder_pc_orders_get({
  params,
}: { params?: IApi.OrderGetOrdersPcApiWechatorderPcOrdersGetParams } = {}) {
  return request<IApi.OrderGetOrdersPcApiWechatorderPcOrdersGetResponses>({
    url: `/api/wechatorder/pc/orders`,
    method: "get",
    params: params || {},
  });
}
export function update_orders_pc_api_wechatorder_pc_orders_patch({
  params,
  data,
}: {
  params?: IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchParams;
  data?: IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchBody;
} = {}) {
  return request<IApi.OrderUpdateOrdersPcApiWechatorderPcOrdersPatchResponses>({
    url: `/api/wechatorder/pc/orders`,
    method: "patch",
    params: params || {},
    data: data || {},
  });
}
export function update_orders_status_pc_api_wechatorder_pc_orders_status_patch({
  params,
}: {
  params?: IApi.OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchParams;
} = {}) {
  return request<IApi.OrderUpdateOrdersStatusPcApiWechatorderPcOrdersStatusPatchResponses>(
    {
      url: `/api/wechatorder/pc/orders/status`,
      method: "patch",
      params: params || {},
    },
  );
}
export function add_return_goods_api_wechatorder_pc_return_post({
  data,
}: { data?: IApi.OrderAddReturnGoodsApiWechatorderPcReturnPostBody } = {}) {
  return request<IApi.OrderAddReturnGoodsApiWechatorderPcReturnPostResponses>({
    url: `/api/wechatorder/pc/return`,
    method: "post",

    data: data || {},
  });
}
export function update_products_pc_api_wechatorder_pc_products_patch({
  params,
  data,
}: {
  params?: IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchParams;
  data?: IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchBody;
} = {}) {
  return request<IApi.OrderUpdateProductsPcApiWechatorderPcProductsPatchResponses>(
    {
      url: `/api/wechatorder/pc/products`,
      method: "patch",
      params: params || {},
      data: data || {},
    },
  );
}
export function export_order_excel_api_wechatorder_pc_orders__order_id__export_get(
  order_id: string,
  {
    params,
  }: {
    params?: IApi.OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetParams;
  } = {},
) {
  return request<IApi.OrderExportOrderExcelApiWechatorderPcOrders_OrderId_ExportGetResponses>(
    {
      url: `/api/wechatorder/pc/orders/${order_id}/export`,
      method: "get",
      params: params || {},
    },
  );
}
