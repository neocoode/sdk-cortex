import { IResponseChat } from "@/interface/chats";

const RenderText: React.FC<IResponseChat> = ({ value }) => {
  return (
    <div className="flex flex-wrap text-xl py-2 text-justify text-[#b8b8b8]">
      {value}
    </div>
  );
};

export default RenderText;
