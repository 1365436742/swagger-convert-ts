/* 代码为自动生成、请勿手动修改 */

namespace IRequest {
  export interface DeleteItemBody {
    /**
     * 删除列表内容
     */
    listItems?: Item[];
    name?: string;
    text?: string;
  }
  export interface Item {
    number?: number;
    text?: string;
  }

  export interface ItemBody {
    listItems?: Item[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  }
  export interface DeleteRequestBodyListItemsUsingDELETEParams {
    length?: number;
  }

  export type DeleteRequestBodyListItemsUsingDELETEBody = DeleteItemBody;

  export type DeleteRequestBodyListItemsUsingDELETEResponses = DeleteItemBody[];

  export interface DeleteRequestSearchItemsUsingDELETEParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export type DeleteRequestSearchItemsUsingDELETEResponses = Item[];

  export interface DeleteRequestGetUserByIdUsingDELETEParams {
    id?: number;
  }

  export type DeleteRequestGetUserByIdUsingDELETEResponses = string;

  export interface DeleteRequestGetUserByIdsUsingDELETEParams {
    id?: number;
    spanceId?: string;
  }

  export type DeleteRequestGetUserByIdsUsingDELETEResponses = string;

  export interface GetRequestBodyListItemsUsingGETParams {
    length?: number;
  }

  export type GetRequestBodyListItemsUsingGETBody = ItemBody;

  export type GetRequestBodyListItemsUsingGETResponses = ItemBody[];

  export interface PutRequestBodyListItemsUsingPUTParams {
    length?: number;
  }

  export type PutRequestBodyListItemsUsingPUTBody = ItemBody;

  export type PutRequestBodyListItemsUsingPUTResponses = ItemBody[];

  export interface PostRequestBodyListItemsUsingPOSTParams {
    length?: number;
  }

  export type PostRequestBodyListItemsUsingPOSTBody = ItemBody;

  export type PostRequestBodyListItemsUsingPOSTResponses = ItemBody[];

  export interface PatchRequestBodyListItemsUsingPATCHParams {
    length?: number;
  }

  export type PatchRequestBodyListItemsUsingPATCHBody = ItemBody;

  export type PatchRequestBodyListItemsUsingPATCHResponses = ItemBody[];

  export interface GetRequestSearchItemsUsingGETParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export type GetRequestSearchItemsUsingGETResponses = Item[];

  export interface PutRequestSearchItemsUsingPUTParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export type PutRequestSearchItemsUsingPUTResponses = Item[];

  export interface PostRequestSearchItemsUsingPOSTParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export type PostRequestSearchItemsUsingPOSTResponses = Item[];

  export interface PatchRequestSearchItemsUsingPATCHParams {
    length?: number;
    query?: number;
    text?: string;
  }

  export type PatchRequestSearchItemsUsingPATCHResponses = Item[];

  export interface GetRequestGetUserByIdUsingGETParams {
    id?: number;
  }

  export type GetRequestGetUserByIdUsingGETResponses = string;

  export interface PutRequestGetUserByIdUsingPUTParams {
    id?: number;
  }

  export type PutRequestGetUserByIdUsingPUTResponses = string;

  export interface PostRequestGetUserByIdUsingPOSTParams {
    id?: number;
  }

  export type PostRequestGetUserByIdUsingPOSTResponses = string;

  export interface PatchRequestGetUserByIdUsingPATCHParams {
    id?: number;
  }

  export type PatchRequestGetUserByIdUsingPATCHResponses = string;

  export interface GetRequestGetUserByIdsUsingGETParams {
    id?: number;
    spanceId?: string;
  }

  export type GetRequestGetUserByIdsUsingGETResponses = string;

  export interface PutRequestGetUserByIdsUsingPUTParams {
    id?: number;
    spanceId?: string;
  }

  export type PutRequestGetUserByIdsUsingPUTResponses = string;

  export interface PostRequestGetUserByIdsUsingPOSTParams {
    id?: number;
    spanceId?: string;
  }

  export type PostRequestGetUserByIdsUsingPOSTResponses = string;

  export interface PatchRequestGetUserByIdsUsingPATCHParams {
    id?: number;
    spanceId?: string;
  }

  export type PatchRequestGetUserByIdsUsingPATCHResponses = string;
}
