namespace IApi {
  export interface GenerAA {
    bar?: string;
    enum?: Enum;
    foo?: string;
    union?: boolean | number;
  }

  export enum Enum {
    Blue = "blue",
    Green = "green",
    Red = "red",
  }
}
