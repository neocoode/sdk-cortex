/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IResponseChat } from "@/interface/chats";
import { ETableType, ITable } from "@/interface/tableSchema";
import RenderTableSchema from "./renderTableSchema";
import CustomCard from "../customCard";
import SvgIcon from "../svgIcon";

const RenderTable: React.FC<IResponseChat> = ({ value }) => {
  const renderTableContent = () => {
    try {
      const data = JSON.parse(value) as ITable;
      switch (data.type) {
        case ETableType.schema:
          return <RenderTableSchema fields={data.fields} />
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
        <SvgIcon name="copy" className="bg-[#4f4f4f]" width={35} height={35} />
      </div>}
    >
      {renderTableContent()}
    </CustomCard>
    
  </div>;
};

export default RenderTable;
