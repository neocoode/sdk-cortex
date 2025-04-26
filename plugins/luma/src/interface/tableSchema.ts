export enum ETableType {
    schema = 'schema',
}

export interface ITableSchema {
    field: string;
    type: string;
    example: string | number | object;
    description: string;
    source: string;
}

export interface ITable {
    type: ETableType;
    fields: Array<ITableSchema>;
}
