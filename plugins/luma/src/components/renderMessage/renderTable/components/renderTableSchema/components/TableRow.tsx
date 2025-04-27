/**
 * @file TableRow.tsx
 * @description Componente responsável por renderizar uma linha da tabela de schema.
 * Recebe os dados do campo, índice e tema selecionado para exibir as informações formatadas.
 */

import { ITableSchema } from "@/interface/tableSchema";
import TableCell from "./TableCell";

const TableRow: React.FC<{ 
    field: ITableSchema,
    index: number,
    themeSelected: any 
  }> = ({ field, index, themeSelected }) => (
    <tr key={index} className={themeSelected.colors.backgroundTable}>
      <TableCell content={String(field.field)} width="w-[20%]" themeSelected={themeSelected} />
      <TableCell content={String(field.type)} width="w-[20%]" themeSelected={themeSelected} />
      <TableCell content={String(field.example)} width="w-[20%]" themeSelected={themeSelected} />
      <TableCell content={String(field.description)} width="w-[25%]" themeSelected={themeSelected} />
      <TableCell content={String(field.source)} width="w-[15%]" themeSelected={themeSelected} />
    </tr>
  );


export default TableRow;