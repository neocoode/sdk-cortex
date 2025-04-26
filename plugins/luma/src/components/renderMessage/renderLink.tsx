import { IResponseChat } from "@/interface/chats";

const RenderLink: React.FC<IResponseChat> = ({ value }) => {
  return (
    <div className="flex flex-wrap py-1">
      <a 
        href={value} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 hover:text-blue-600 underline text-1xl"
      >
        {value}
      </a>
    </div>
  );
};

export default RenderLink;
