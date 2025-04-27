/**
 * Componente RenderCode
 * 
 * Este componente é responsável por renderizar blocos de código com funcionalidades de:
 * - Copiar código para a área de transferência
 * - Download do código como arquivo de texto
 * - Suporte a temas
 * - Interface adaptativa
 * 
 * @component
 * @param {IResponseChat} props - Props do componente
 * @param {string} props.value - Conteúdo do código a ser renderizado
 * @param {string} props.key - Chave única do componente
 */

import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import { Copy, Download } from 'lucide-react';
import { useDispatch } from "react-redux";
import CustomCard from "../../customCard";
import { handleCopy } from "./modules/handleCopy";
import { handleDownload } from "./modules/handleDownload";

const RenderCode: React.FC<IResponseChat> = ({ value, key }) => {
  // Hook para gerenciar o tema atual
  const { themeSelected } = useTheme();
  // Hook para disparar ações do Redux
  const dispatch = useDispatch();

  return (
    <CustomCard
      key={key}
      title="Código"
      rightIcon={
        <div className="flex gap-2">
          {/* Botão de copiar com tooltip */}
          <div className="tooltip">
            <Copy
              size={20}
              onClick={() => handleCopy(value as string, dispatch)}
              className={`
                cursor-pointer
                ${themeSelected.colors.text} 
              `}
            />
            <span className="tooltip-text">Copiar</span>
          </div>
          {/* Botão de download com tooltip */}
          <div className="tooltip">
            <Download
              size={20}
              onClick={() => handleDownload(value as string, dispatch)}
              className={`
                cursor-pointer
                ${themeSelected.colors.text} 
              `}
            />
            <span className="tooltip-text">Baixar</span>
          </div>
        </div>
      }
    >
      {/* Container do código com estilização baseada no tema */}
      <pre className={`
        w-full flex flex-wrap
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.small}
        bg-[#151515] p-4 rounded-md overflow-x-auto
      `}>
        <code>{value}</code>
      </pre>
    </CustomCard>
  );
};

export default RenderCode;
