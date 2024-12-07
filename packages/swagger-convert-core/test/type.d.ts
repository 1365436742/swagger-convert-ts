namespace IApi {
  type GetRequestGetUserByIdUsingGETResponses = string;

  type GetRequestGetUserByIdsUsingGETResponses = string;

  export type Item = {
    number?: number;
    text?: string;
  };

  export type ItemBody = {
    listItems?: ListItemElement[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    text?: string;
  };

  export type ListItemElement = {
    number?: number;
    text?: string;
  };

  export type GetRequestBodyListItemsUsingGETParams = {
    length?: number;
  };

  export type GetRequestBodyListItemsUsingGETBody = {
    listItems?: ListItemElement[];
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
    listItems?: ListItemElement[];
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

  export type GetRequestGetUserByIdUsingGETParams = {
    id?: number;
  };

  export type GetRequestGetUserByIdsUsingGETParams = {
    id?: number;
    spanceId?: string;
  };
}
