import { IResponseChat } from "@/interface/chats";
import { useTheme } from "@/themes/themeContext";
import RenderLink from "./renderLink";

const RenderGroupLink: React.FC<IResponseChat> = ({ value, type }) => {
  const { themeSelected } = useTheme();

  return (
    <div className={`
      flex flex-wrap my-3 flex-col
    `}>
      <div 
        className={`
          flex
          ${themeSelected.colors.text}
          ${themeSelected.typography.fontSize.xlarge}
        `}
      >
        Links
      </div>
      {Array.isArray(value) && value.map((link, index) => (
        <div className="flex" key={index}>
          <RenderLink value={link} type={type} />
        </div>
      ))}
    </div>
  );
};

export default RenderGroupLink;
