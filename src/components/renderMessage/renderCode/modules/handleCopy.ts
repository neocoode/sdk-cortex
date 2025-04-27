/**
 * Função para copiar o código para a área de transferência
 * 
 * Esta função:
 * - Verifica se o código é maior que 1MB
 * - Se for maior, redireciona para download
 * - Se não, copia para a área de transferência
 * - Exibe feedback visual através de toast
 * 
 * @param value - String contendo o código a ser copiado
 * @param dispatch - Função dispatch do Redux para gerenciar estados
 */

import { showToast } from "@/modules/toast/slice";
import { handleDownload } from "./handleDownload";

export const handleCopy = async (value: string, dispatch: any) => {
    try {
      // Verifica se o código é maior que 1MB
      if (value.length > 1000000) { // 1MB
        handleDownload(value as string, dispatch);
        return;
      }

      // Copia o código para a área de transferência
      await navigator.clipboard.writeText(value as string);
      dispatch(showToast({ message: 'Código copiado com sucesso!', type: 'success' }));
    } catch (error) {
      // Feedback de erro
      dispatch(showToast({ message: 'Erro ao copiar código', type: 'error' }));
      console.error('Erro ao copiar:', error);
    }
  };
