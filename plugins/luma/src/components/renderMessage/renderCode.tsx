import { IResponseChat } from "@/interface/chats";
import CustomCard from "../customCard";
import SvgIcon from "../svgIcon";

const RenderCode: React.FC<IResponseChat> = ({ value }) => {
  return (
    <CustomCard
      title="Código"
      rightIcon={<div>
        <SvgIcon name="copy" className="bg-[#4f4f4f]" width={35} height={35} />
      </div>}
    >
      <pre className="w-full flex flex-wrap text-1xl bg-[#151515] p-4 rounded-md overflow-x-auto">
        <code>{value}</code>
      </pre>
    </CustomCard>
  );
};

export default RenderCode;
