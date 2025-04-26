import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
interface iprops extends IResponseChat {}

const RenderLink: React.FC<iprops> = ({ value }) => {
  const { themeSelected } = useTheme();

  return (
    <div className="flex flex-wrap pb-1">
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`
          text-blue-400 hover:text-blue-600 underline
          ${themeSelected.typography.fontSize.large}
        `}
      >
        {value}
      </a>
    </div>
  );
};

export default RenderLink;
