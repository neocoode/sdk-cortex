/**
 * Componente RenderLink
 * 
 * Este componente renderiza um link clicável com as seguintes características:
 * - Abre em nova aba (target="_blank")
 * - Segurança aprimorada (rel="noopener noreferrer")
 * - Estilização dinâmica baseada no tema
 * - Tamanho de fonte ajustável
 * - Efeito hover na cor
 * - Texto sublinhado
 */

import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";

const RenderLink: React.FC<IResponseChat> = ({ value }) => {
  const { themeSelected } = useTheme();

  return (
    <div className="flex flex-wrap pb-1">
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`
          text-blue-400 hover:text-blue-600 underline
          ${themeSelected.typography.fontSize.large}
        `}
      >
        {value}
      </a>
    </div>
  );
};

export default RenderLink;
