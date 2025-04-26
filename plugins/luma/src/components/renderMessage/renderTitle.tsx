import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";

const RenderTitle: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();

  return (
    <div 
      key={key} 
      className={`
        flex flex-wrap text-2xl font-bold py-2 pt-5
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.xxlarge}
      `}>
      {value}
    </div>
  );
};

export default RenderTitle;
