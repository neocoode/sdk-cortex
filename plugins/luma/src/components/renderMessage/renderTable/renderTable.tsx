/**
 * @file renderTable.tsx
 * @description Componente responsável por renderizar uma tabela com funcionalidade de download.
 * Permite visualizar dados em formato de tabela e baixar o schema em formato CSV.
 * Implementa proteção contra múltiplos cliques no botão de download.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponseChat } from "@/interface/chats";
import { ETableType } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";
import { Download } from 'lucide-react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import CustomCard from "../../customCard";
import { RenderTableContent } from "./components/renderTableContent";
import { downloadTableSchema } from "./modules/downloadTableSchema";

const RenderTable: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();
  const dispatch = useDispatch();
  const [isTableType, setIsTableType] = useState<ETableType | undefined>(undefined);

  let lastClickTime = 0;
  return <div className="flex flex-col my-4 w-full">
    <CustomCard
      title="Tabela"
      rightIcon={<div>
        <Download
          size={20}
          className={`
            cursor-pointer
          ${themeSelected.colors.text} 
        `}
        onClick={() => {
          const now = Date.now();
          if (now - lastClickTime < 3000) return; // Previne múltiplos cliques em 1 segundo
          lastClickTime = now;
          if (isTableType === ETableType.schema && typeof value === 'string') {
            downloadTableSchema(value as string, { dispatch});
          }
        }}
        />
      </div>}
    >
      <RenderTableContent value={value as string} key={key} setIsTableType={setIsTableType} />
    </CustomCard>

  </div>;
};

export default RenderTable;
