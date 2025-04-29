export type IConfigAllField = any | string | number | boolean | null;

export interface IConfigAllFields {
  [key: string]: IConfigAllField;
}

export interface IConfigAllState {
  fields: IConfigAllFields;
}

