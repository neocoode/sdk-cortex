/**
 * Função para fazer download do código como arquivo de texto
 * 
 * Esta função:
 * - Cria um blob com o conteúdo do código
 * - Gera uma URL temporária para download
 * - Cria um elemento <a> temporário para iniciar o download
 * - Remove os elementos temporários após o download
 * - Exibe feedback visual através de toast
 * 
 * @param value - String contendo o código a ser baixado
 * @param dispatch - Função dispatch do Redux para gerenciar estados
 */

import { showToast } from "@/modules/toast/slice";

export const handleDownload = (value: string, dispatch: any) => {
    try {
      // Cria um blob com o conteúdo do código
      const blob = new Blob([value as string], { type: 'text/plain' });
      
      // Gera URL temporária para download
      const url = window.URL.createObjectURL(blob);
      
      // Cria e configura elemento <a> para download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'codigo.txt';
      
      // Adiciona elemento à página, clica e remove
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      // Feedback de sucesso
      dispatch(showToast({ message: 'Download efetuado com sucesso!', type: 'success' }));
    } catch (error) {
      // Feedback de erro
      dispatch(showToast({ message: 'Erro ao baixar arquivo', type: 'error' }));
      console.error('Erro ao baixar:', error);
    }
  };