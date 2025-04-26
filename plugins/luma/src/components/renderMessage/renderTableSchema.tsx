import { ITableSchema } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";

const RenderTableSchema: React.FC<{ fields: ITableSchema[], key: string }> = ({ fields, key }) => {
  const { themeSelected } = useTheme();
  const renderTable = () => {
    return (
      <div key={key} className="overflow-x-auto">
          <table className={`
            w-full
            ${themeSelected.colors.backgroundTable}
            ${themeSelected.borderRadius.xxlarge}
          `}>
            <thead>
              <tr className={`
                ${themeSelected.colors.backgroundTableHeader}
              `}>
                <th className={`
                  w-[20%] px-4 py-2 border-b text-left uppercase tracking-wider
                  ${themeSelected.typography.fontSize.small}
                  ${themeSelected.colors.text}
                  ${themeSelected.borders.default}
                `}>
                  Campo
                </th>
                <th className={`
                  w-[20%] px-4 py-2 border-b text-left uppercase tracking-wider
                  ${themeSelected.typography.fontSize.msmall}
                  ${themeSelected.colors.text}
                  ${themeSelected.borders.default}
                `}>
                  Tipo
                </th>
                <th className={`
                  w-[20%] px-4 py-2 border-b text-left uppercase tracking-wider
                  ${themeSelected.typography.fontSize.msmall}
                  ${themeSelected.colors.text}
                  ${themeSelected.borders.default}
                `}>
                  Exemplo
                </th>
                <th className={`
                  w-[25%] px-4 py-2 border-b text-left uppercase tracking-wider
                  ${themeSelected.typography.fontSize.msmall}
                  ${themeSelected.colors.text}
                  ${themeSelected.borders.default}
                `}>
                  Descrição
                </th>
                <th className={`
                  w-[15%] px-4 py-2 border-b text-left uppercase tracking-wider
                  ${themeSelected.typography.fontSize.msmall}
                  ${themeSelected.colors.text}
                  ${themeSelected.borders.default}
                `}>
                  Fonte
                </th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={index} className={`
                  ${themeSelected.colors.backgroundTable}
                `}>
                  <td className={`
                    w-[20%] px-4 py-2 border-bbreak-words
                    ${themeSelected.borders.default}
                    ${themeSelected.typography.fontSize.msmall}
                    ${themeSelected.colors.text}
                  `}>
                    {field.field}
                  </td>
                  <td className={`
                    w-[20%] px-4 py-2 border-b break-words
                    ${themeSelected.borders.default}
                    ${themeSelected.typography.fontSize.msmall}
                    ${themeSelected.colors.text}
                  `}>
                    {field.type}
                  </td>
                  <td className={`
                    w-[20%] px-4 py-2 border-b break-words
                    ${themeSelected.borders.default}
                    ${themeSelected.typography.fontSize.msmall}
                    ${themeSelected.colors.text}
                  `}>
                    {typeof field.example === 'object' ? JSON.stringify(field.example) : field.example}
                  </td>
                  <td className={`
                    w-[25%] px-4 py-2 border-b break-words
                    ${themeSelected.borders.default}
                    ${themeSelected.typography.fontSize.msmall}
                    ${themeSelected.colors.text}
                  `}>
                    {field.description}
                  </td>
                  <td className={`
                    w-[15%] px-4 py-2 border-b break-words
                    ${themeSelected.borders.default}
                    ${themeSelected.typography.fontSize.msmall}
                    ${themeSelected.colors.text}
                  `}>
                    {field.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    );
  };
  return renderTable();
};

export default RenderTableSchema;
