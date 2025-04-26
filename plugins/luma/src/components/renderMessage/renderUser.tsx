import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import SvgIcon from "../svgIcon";
interface iprops extends IResponseChat {
}

const RenderUser: React.FC<iprops> = ({ key, value, onReplay }) => {
  const { themeSelected } = useTheme();

  return (
    <div 
      key={key} 
      className={`
        flex flex-wrap py-1 text-justify items-center flex-row justify-between px-1 mt-1 mb-2
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
      <SvgIcon
        name="replay"
        className={`
          cursor-pointer
          ${themeSelected.colors.text} 
          ${themeSelected.colors.backgroundTertiary} 
          ${themeSelected.borderRadius.xxlarge} 
          hover:${themeSelected.colors.backgroundSecondary}
        `}
        onClick={onReplay ? () => onReplay(value) : undefined}
      />
    </div>
  );
};

export default RenderUser;
