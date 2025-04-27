import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import CustomCard from "../customCard";
import { Copy } from 'lucide-react';

const RenderCode: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();

  return (
    <CustomCard
      key={key}
      title="Código"
      rightIcon={<div>
        <Copy
          size={20}
          className={`
            cursor-pointer
          ${themeSelected.colors.text} 
        `}
        />
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
