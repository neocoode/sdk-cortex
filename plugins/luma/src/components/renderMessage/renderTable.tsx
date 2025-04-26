/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponseChat } from "@/interface/chats";
import { ETableType, ITable } from "@/interface/tableSchema";
import { useTheme } from "@/themes/themeContext";
import CustomCard from "../customCard";
import SvgIcon from "../svgIcon";
import RenderTableSchema from "./renderTableSchema";

const RenderTable: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();

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

  return <div className="flex flex-col my-4">
    <CustomCard
      title="Tabela"
      rightIcon={<div>
        <SvgIcon name="copy" className={`
          ${themeSelected.colors.text}
        `} width={35} height={35} />
      </div>}
    >
      {renderTableContent()}
    </CustomCard>
    
  </div>;
};

export default RenderTable;
