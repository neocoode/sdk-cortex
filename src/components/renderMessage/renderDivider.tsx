import { useTheme } from "@/themes/themeContext";
const RenderDivider: React.FC = () => {
  const { themeSelected } = useTheme();

  return (
    <div 
      className={`
        w-full flex items-center justify-center py-1 mt-2 mb-2      
      `}
    >
      <div 
        className={`
          w-full h-[2px]
          ${themeSelected.colors.backgroundTertiary}
          ${themeSelected.borderRadius.xxlarge}
          ${themeSelected.shadows.medium}
        `} 
      />
    </div>
  );
};

export default RenderDivider;
