/**
 * @file TableCell.tsx
 * @description Componente responsável por renderizar uma célula da tabela de schema.
 * Recebe o conteúdo, largura e tema selecionado para exibir as informações formatadas.
 * Suporta tanto conteúdo textual quanto objetos JSON.
 */

const TableCell: React.FC<{ 
    content: string | object,
    width: string,
    themeSelected: any 
  }> = ({ content, width, themeSelected }) => (
    <td className={`
      ${width} px-4 py-2 border-b break-words
      ${themeSelected.borders.default}
      ${themeSelected.typography.fontSize.small}
      ${themeSelected.colors.text}
    `}>
      {typeof content === 'object' ? JSON.stringify(content) : content}
    </td>
  );

export default TableCell;