import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import CustomCard from "../customCard";
import SvgIcon from "../svgIcon";

const RenderCode: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();

  return (
    <CustomCard
      key={key}
      title="Código"
      rightIcon={<div>
        <SvgIcon name="copy" className="bg-[#4f4f4f]" width={35} height={35} />
      </div>}
    >
      <pre className={`
        w-full flex flex-wrap
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.small}
        bg-[#151515] p-4 rounded-md overflow-x-auto
      `}>
        <code>{value}</code>
      </pre>
    </CustomCard>
  );
};

export default RenderCode;
