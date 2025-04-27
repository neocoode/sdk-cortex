import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import { Repeat } from 'lucide-react';

const RenderUser: React.FC<IResponseChat> = ({ key, value, onReplay }) => {
  const { themeSelected } = useTheme();

  return (
    <div
      key={key}
      className={`
        flex flex-wrap text-justify items-center flex-row justify-between mt-1 mb-2 py-2 pr-3  
        ${themeSelected.colors.backgroundTertiary} 
        ${themeSelected.borderRadius.xxlarge} 
      `}
    >
      <div
        className={`
          pr-1 pl-1 mx-2
          ${themeSelected.typography.fontSize.medium} 
          ${themeSelected.colors.text} 
        `}
      >
        {value}
      </div>
      <Repeat 
        size={20}
        className={`
          cursor-pointer
          ${themeSelected.colors.text} 
        `}
        onClick={onReplay ? () => onReplay(value) : undefined}
      />
    </div>
  );
};

export default RenderUser;
