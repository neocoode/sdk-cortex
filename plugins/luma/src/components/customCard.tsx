import { useTheme } from "@/themes/themeContext";
interface CustomCardProps {
  title?: string;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, rightIcon, children }) => {
  const { themeSelected } = useTheme();

  return (
    <div className={`
      w-full bg-[#4f4f4f] p-2 rounded-md
      ${themeSelected.colors.backgroundTertiary}
      ${themeSelected.borderRadius.xxlarge}
      ${themeSelected.colors.textPrimary}
    `}>
      {(title || rightIcon) && (
        <div className="flex justify-between items-center mb-1">
          {title && <h3 className={`
            ${themeSelected.colors.text}
            ${themeSelected.typography.fontSize.small}
            ${themeSelected.typography.fontWeight.xbold}
            `}>{title}</h3>}
          {rightIcon && <div
            className={`flex items-center m-2`}
          >{rightIcon}</div>}
        </div>
      )}
      <div className={`
        w-full
        ${themeSelected.colors.backgroundPrimary}
        ${themeSelected.borderRadius.medium}
      `}>
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
