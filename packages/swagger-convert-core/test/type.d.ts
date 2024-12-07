namespace IApi {
  type DeleteRequestGetUserByIdUsingDELETEResponses = string;

  type DeleteRequestGetUserByIdsUsingDELETEResponses = string;

  type GetRequestGetUserByIdUsingGETResponses = string;

  type PutRequestGetUserByIdUsingPUTResponses = string;

  type PostRequestGetUserByIdUsingPOSTResponses = string;

  type PatchRequestGetUserByIdUsingPATCHResponses = string;

  type GetRequestGetUserByIdsUsingGETResponses = string;

  type PutRequestGetUserByIdsUsingPUTResponses = string;

  type PostRequestGetUserByIdsUsingPOSTResponses = string;

  type PatchRequestGetUserByIdsUsingPATCHResponses = string;

  export type DeleteItemBody = {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  };

  export type DeleteItemBodyListItem = {
    number?: number;
    text?: string;
  };

  export type Item = {
    number?: number;
    text?: string;
  };

  export type ItemBody = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type ItemBodyListItem = {
    number?: number;
    text?: string;
  };

  export type DeleteRequestBodyListItemsUsingDELETEParams = {
    length?: number;
  };

  export type DeleteRequestBodyListItemsUsingDELETEBody = {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  };

  export type DeleteRequestBodyListItemsUsingDELETEResponses = {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  };

  export type DeleteRequestSearchItemsUsingDELETEParams = {
    length?: number;
    query?: number;
    text?: string;
  };

  export type DeleteRequestSearchItemsUsingDELETEResponses = {
    number?: number;
    text?: string;
  };

  export type DeleteRequestGetUserByIdUsingDELETEParams = {
    id?: number;
  };

  export type DeleteRequestGetUserByIdsUsingDELETEParams = {
    id?: number;
    spanceId?: string;
  };

  export type GetRequestBodyListItemsUsingGETParams = {
    length?: number;
  };

  export type GetRequestBodyListItemsUsingGETBody = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type GetRequestBodyListItemsUsingGETResponses = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PutRequestBodyListItemsUsingPUTParams = {
    length?: number;
  };

  export type PutRequestBodyListItemsUsingPUTBody = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PutRequestBodyListItemsUsingPUTResponses = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PostRequestBodyListItemsUsingPOSTParams = {
    length?: number;
  };

  export type PostRequestBodyListItemsUsingPOSTBody = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PostRequestBodyListItemsUsingPOSTResponses = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PatchRequestBodyListItemsUsingPATCHParams = {
    length?: number;
  };

  export type PatchRequestBodyListItemsUsingPATCHBody = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type PatchRequestBodyListItemsUsingPATCHResponses = {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type GetRequestSearchItemsUsingGETParams = {
    length?: number;
    query?: number;
    text?: string;
  };

  export type GetRequestSearchItemsUsingGETResponses = {
    number?: number;
    text?: string;
  };

  export type PutRequestSearchItemsUsingPUTParams = {
    length?: number;
    query?: number;
    text?: string;
  };

  export type PutRequestSearchItemsUsingPUTResponses = {
    number?: number;
    text?: string;
  };

  export type PostRequestSearchItemsUsingPOSTParams = {
    length?: number;
    query?: number;
    text?: string;
  };

  export type PostRequestSearchItemsUsingPOSTResponses = {
    number?: number;
    text?: string;
  };

  export type PatchRequestSearchItemsUsingPATCHParams = {
    length?: number;
    query?: number;
    text?: string;
  };

  export type PatchRequestSearchItemsUsingPATCHResponses = {
    number?: number;
    text?: string;
  };

  export type GetRequestGetUserByIdUsingGETParams = {
    id?: number;
  };

  export type PutRequestGetUserByIdUsingPUTParams = {
    id?: number;
  };

  export type PostRequestGetUserByIdUsingPOSTParams = {
    id?: number;
  };

  export type PatchRequestGetUserByIdUsingPATCHParams = {
    id?: number;
  };

  export type GetRequestGetUserByIdsUsingGETParams = {
    id?: number;
    spanceId?: string;
  };

  export type PutRequestGetUserByIdsUsingPUTParams = {
    id?: number;
    spanceId?: string;
  };

  export type PostRequestGetUserByIdsUsingPOSTParams = {
    id?: number;
    spanceId?: string;
  };

  export type PatchRequestGetUserByIdsUsingPATCHParams = {
    id?: number;
    spanceId?: string;
  };
}
