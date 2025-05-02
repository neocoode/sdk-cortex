/* eslint-disable @typescript-eslint/no-explicit-any */

export type IConfigAllField = any | string | number | boolean | null;

export interface IConfigAllFields {
  showModalWelcomeCreative?: boolean;
  [key: string]: IConfigAllField;
}

export interface IConfigAllState {
  fields: IConfigAllFields;
}

