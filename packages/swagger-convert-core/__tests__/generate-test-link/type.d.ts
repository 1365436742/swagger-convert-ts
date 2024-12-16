namespace IRequest {
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

  export interface DeleteItemBody {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  }

  export interface DeleteItemBodyListItem {
    number?: number;
    text?: string;
  }

  export interface Item {
    number?: number;
    text?: string;
  }

  export interface ItemBody {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface ItemBodyListItem {
    number?: number;
    text?: string;
  }

  export interface DeleteRequestBodyListItemsUsingDELETEParams {
    length?: number;
  }

  export interface DeleteRequestBodyListItemsUsingDELETEBody {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  }

  export interface DeleteRequestBodyListItemsUsingDELETEResponses {
    /**
     * 删除列表内容
     */
    listItems?: DeleteItemBodyListItem[];
    name?: string;
    text?: string;
  }

  export interface DeleteRequestSearchItemsUsingDELETEParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export interface DeleteRequestSearchItemsUsingDELETEResponses {
    number?: number;
    text?: string;
  }

  export interface DeleteRequestGetUserByIdUsingDELETEParams {
    id?: number;
  }

  export interface DeleteRequestGetUserByIdsUsingDELETEParams {
    id?: number;
    spanceId?: string;
  }

  export interface GetRequestBodyListItemsUsingGETParams {
    length?: number;
  }

  export interface GetRequestBodyListItemsUsingGETBody {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface GetRequestBodyListItemsUsingGETResponses {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PutRequestBodyListItemsUsingPUTParams {
    length?: number;
  }

  export interface PutRequestBodyListItemsUsingPUTBody {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PutRequestBodyListItemsUsingPUTResponses {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PostRequestBodyListItemsUsingPOSTParams {
    length?: number;
  }

  export interface PostRequestBodyListItemsUsingPOSTBody {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PostRequestBodyListItemsUsingPOSTResponses {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PatchRequestBodyListItemsUsingPATCHParams {
    length?: number;
  }

  export interface PatchRequestBodyListItemsUsingPATCHBody {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface PatchRequestBodyListItemsUsingPATCHResponses {
    listItems?: ItemBodyListItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }

  export interface GetRequestSearchItemsUsingGETParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export interface GetRequestSearchItemsUsingGETResponses {
    number?: number;
    text?: string;
  }

  export interface PutRequestSearchItemsUsingPUTParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export interface PutRequestSearchItemsUsingPUTResponses {
    number?: number;
    text?: string;
  }

  export interface PostRequestSearchItemsUsingPOSTParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export interface PostRequestSearchItemsUsingPOSTResponses {
    number?: number;
    text?: string;
  }

  export interface PatchRequestSearchItemsUsingPATCHParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export interface PatchRequestSearchItemsUsingPATCHResponses {
    number?: number;
    text?: string;
  }

  export interface GetRequestGetUserByIdUsingGETParams {
    id?: number;
  }

  export interface PutRequestGetUserByIdUsingPUTParams {
    id?: number;
  }

  export interface PostRequestGetUserByIdUsingPOSTParams {
    id?: number;
  }

  export interface PatchRequestGetUserByIdUsingPATCHParams {
    id?: number;
  }

  export interface GetRequestGetUserByIdsUsingGETParams {
    id?: number;
    spanceId?: string;
  }

  export interface PutRequestGetUserByIdsUsingPUTParams {
    id?: number;
    spanceId?: string;
  }

  export interface PostRequestGetUserByIdsUsingPOSTParams {
    id?: number;
    spanceId?: string;
  }

  export interface PatchRequestGetUserByIdsUsingPATCHParams {
    id?: number;
    spanceId?: string;
  }
}
