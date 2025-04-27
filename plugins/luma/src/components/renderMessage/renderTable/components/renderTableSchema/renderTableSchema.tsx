/**
 * @file renderTableSchema.tsx
 * @description Componente responsável por renderizar uma tabela de schema com campos personalizados.
 * Exibe informações como campo, tipo, exemplo, descrição e fonte em um formato tabular.
 * Utiliza temas dinâmicos para estilização e suporta dados de exemplo em formato JSON.
 */

import { ITableSchema } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

// Componente principal que renderiza a tabela de schema
// Recebe os campos e uma chave única como props
// Utiliza o hook useTheme para acessar o tema atual
const RenderTableSchema: React.FC<{ fields: ITableSchema[], key: string }> = ({ fields, key }) => {
  const { themeSelected } = useTheme();

  return (
    // Container com scroll horizontal para tabelas grandes
    <div key={key} className="overflow-x-auto">
      {/* Tabela principal com estilos dinâmicos do tema */}
      <table className={`
        w-full
        ${themeSelected.colors.backgroundTable}
        ${themeSelected.borderRadius.xxlarge}
      `}>
        {/* Cabeçalho da tabela */}
        <TableHeader fields={fields} />
        <tbody>
          {/* Mapeia cada campo para uma linha da tabela */}
          {fields.map((field, index) => (
            <TableRow 
              key={index}
              field={field}
              index={index}
              themeSelected={themeSelected}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderTableSchema;
