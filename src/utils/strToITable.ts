/**
 * @file strToITable.ts
 * @description Este arquivo contém uma função utilitária que converte uma string JSON em um objeto ITable.
 * A função faz a validação do tipo de tabela e retorna um objeto ITable com os campos apropriados.
 * Se houver erro na conversão ou o tipo não for schema, retorna um objeto de erro.
 */

import { ETableType, ITable } from "@/interface/tableSchema";

export const strToITable = (value: string): ITable => {
    try {
        const data = JSON.parse(value) as ITable;
        if (data.type === ETableType.schema) {
            return data;
        }

        return {
            type: ETableType.error,
            fields: []
        }
    } catch (error) {
        return {
            type: ETableType.error,
            fields: []
        }
    }
};
