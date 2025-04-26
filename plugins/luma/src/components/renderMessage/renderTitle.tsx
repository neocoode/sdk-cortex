import { IResponseChat } from "@/interface/chats";

const RenderTitle: React.FC<IResponseChat> = ({ value }) => {
  return (
    <div className="flex flex-wrap text-2xl font-bold py-2 pt-5">
      {value}
    </div>
  );
};

export default RenderTitle;
