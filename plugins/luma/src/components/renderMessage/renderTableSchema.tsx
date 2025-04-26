import { ITableSchema } from "@/interface/tableSchema";

const RenderTableSchema: React.FC<{ fields: ITableSchema[] }> = ({ fields }) => {
  const renderTable = () => {
    return (
      <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr className="bg-gray-900">
                <th className="w-[20%] px-4 py-2 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Campo
                </th>
                <th className="w-[20%] px-4 py-2 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="w-[20%] px-4 py-2 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Exemplo
                </th>
                <th className="w-[25%] px-4 py-2 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="w-[15%] px-4 py-2 border-b border-gray-700 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Fonte
                </th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="w-[20%] px-4 py-2 border-b border-gray-700 text-gray-300 break-words">
                    {field.field}
                  </td>
                  <td className="w-[20%] px-4 py-2 border-b border-gray-700 text-gray-300 break-words">
                    {field.type}
                  </td>
                  <td className="w-[20%] px-4 py-2 border-b border-gray-700 text-gray-300 break-words">
                    {typeof field.example === 'object' ? JSON.stringify(field.example) : field.example}
                  </td>
                  <td className="w-[25%] px-4 py-2 border-b border-gray-700 text-gray-300 break-words">
                    {field.description}
                  </td>
                  <td className="w-[15%] px-4 py-2 border-b border-gray-700 text-gray-300 break-words">
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
