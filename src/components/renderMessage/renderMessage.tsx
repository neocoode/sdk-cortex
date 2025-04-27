import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";

const RenderMessage: React.FC<IResponseChat> = ({ value, key }) => {
  const { themeSelected } = useTheme();

  return (
    <div 
      key={key} 
      className={`
        flex flex-wrap py-2 mb-2 text-justify 
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.large}
      `}>
      {value}
    </div>
  );
};

export default RenderMessage;
