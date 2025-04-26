import { IResponseChat } from "@/interface/chats";

const RenderUser: React.FC<IResponseChat> = ({ value }) => {
  return (
    <div className="flex flex-wrap text-xl py-2  text-justify">
        {value}
      </div>
  );
};

export default RenderUser;
