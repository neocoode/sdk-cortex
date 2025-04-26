interface CustomCardProps {
  title?: string;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, rightIcon, children }) => {
  return (
    <div className="w-full bg-[#4f4f4f] text-white p-2 rounded-md">
      {(title || rightIcon) && (
        <div className="flex justify-between items-center mb-1">
          {title && <h3 className="text-xl font-bold text-[#161616]">{title}</h3>}
          {rightIcon && <div className="flex items-center">{rightIcon}</div>}
        </div>
      )}
      <div className="w-full bg-[#1f1f1f]">
        {children}
      </div>
    </div>
  );
};

export default CustomCard;
