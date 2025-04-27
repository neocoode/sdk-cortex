/**
 * @file downloadTableSchema.ts
 * @description Este módulo contém a função responsável por baixar o schema da tabela em formato CSV.
 * A função converte os dados da tabela em um formato CSV, cria um arquivo para download
 * e gerencia as mensagens de feedback para o usuário através de toasts.
 */

import { ETableType } from "@/interface/tableSchema";
import { showToast } from "@/modules/toast/slice";
import { strToITable } from "@/utils/strToITable";

interface IDownloadTableSchema {
  dispatch: any;
}

export const downloadTableSchema = (value: string, { dispatch }: IDownloadTableSchema) => {
  if (!dispatch) return;

  try {
    const data = strToITable(value);
    if (data.type == ETableType.error) {
      dispatch(showToast({ message: 'Não foi possível baixar!', type: 'error' }));
      return;
    }

    if (!data.fields || !Array.isArray(data.fields)) {
      dispatch(showToast({ message: 'Não foi possível baixar!', type: 'error' }));
      return;
    }

    const csvRows = [];
    // Cabeçalho dinâmico
    const header = Object.keys(data.fields[0] || {}).map(key => key.charAt(0).toUpperCase() + key.slice(1));
    csvRows.push(header.join(","));
    // Linhas
    data.fields.forEach(field => {
      csvRows.push(header.map(key => {
        const value = (field as unknown as Record<string, unknown>)[key.toLowerCase()];
        if (typeof value === 'object') return `"${JSON.stringify(value)}"`;
        return `"${value}"`;
      }).join(","));
    });

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'tableSchema.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    dispatch(showToast({ message: 'Download efetuado com sucesso!', type: 'success' }));
  } catch (error) {
    dispatch(showToast({ message: 'Não foi possível baixar!', type: 'error' }));
  }
}