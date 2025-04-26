import { IResponseChat } from "@/interface/chats";

const RenderUser: React.FC<IResponseChat> = ({ value }) => {
  return (
    <div className="flex flex-wrap text-xl py-2 text-justify">
        <div className="bg-[#292929] rounded-full px-4 py-2 text-white text-xl mx-2">
        {value}
      </div>
    </div>
  );
};

export default RenderUser;
