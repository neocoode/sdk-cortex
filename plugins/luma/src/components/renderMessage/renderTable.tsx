/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponseChat } from "@/interface/chats";
import { ETableType, ITable } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";
import CustomCard from "../customCard";
import RenderTableSchema from "./renderTableSchema";
import { useDispatch } from "react-redux";
import { showToast } from "@/modules/toast/slice";
import { Copy } from 'lucide-react';

const RenderTable: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();
  const dispatch = useDispatch();

  const renderTableContent = () => {
    try {
      const data = JSON.parse(value as string) as ITable;
      switch (data.type) {
        case ETableType.schema:
          return <RenderTableSchema key={key} fields={data.fields} />
        default:
          return <></>
      }
    } catch (error: any) {
      return <></>
    }
  };

  const downloadTable = () => {
    try {
      const data = JSON.parse(value as string) as ITable;
      if (!data.fields || !Array.isArray(data.fields)) return;
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
      dispatch(showToast({ message: 'Tabela baixada com sucesso!', type: 'success' }));
    } catch (error) {
      dispatch(showToast({ message: 'Erro ao baixar tabela!', type: 'error' }));
      // erro silencioso
    }
  }

  let lastClickTime = 0;
  return <div className="flex flex-col my-4 w-full">
    <CustomCard
      title="Tabela"
      rightIcon={<div>
        <Copy
          size={20}
          className={`
            cursor-pointer
          ${themeSelected.colors.text} 
        `}
        onClick={() => {
          const now = Date.now();
          if (now - lastClickTime < 3000) return; // Previne múltiplos cliques em 1 segundo
          lastClickTime = now;
          downloadTable();
        }}
        />
      </div>}
    >
      {renderTableContent()}
    </CustomCard>

  </div>;
};

export default RenderTable;
