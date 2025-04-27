/**
 * @file TableHeader.tsx
 * @description Componente responsável por renderizar o cabeçalho da tabela de schema.
 * Importa as interfaces e hooks necessários para a renderização do cabeçalho.
 */

import { ITableSchema } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";

const TableHeader: React.FC<{ fields: ITableSchema[] }> = ({ fields }) => {
    const { themeSelected } = useTheme();
    
    return (
      <thead>
        <tr className={themeSelected.colors.backgroundTableHeader}>
          {fields[0] && Object.keys(fields[0]).map((key) => (
            <th
              key={key}
              className={`
                px-4 py-2 border-b text-left uppercase tracking-wider
                ${themeSelected.typography.fontSize.small}
                ${themeSelected.colors.text}
                ${themeSelected.borders.default}
              `}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

export default TableHeader;