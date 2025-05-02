/* eslint-disable @typescript-eslint/no-explicit-any */

export type IConfigAllField = any | string | number | boolean | null;

export interface IConfigAllFields {
  showModalWelcomeCreative?: boolean;
  SESSION_TIMEOUT_MINUTES?: number;
  [key: string]: IConfigAllField;
}

export interface IConfigAllState {
  fields: IConfigAllFields;
}

