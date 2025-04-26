import { EMessageType, IResponseChat } from "@/interface/chats";
import RenderMessage from "./renderMessage";
import RenderTitle from "./renderTitle";
import RenderLink from "./renderLink";
import RenderTable from "./renderTable";
import RenderText from "./renderText";
import RenderUser from "./renderUser";
import RenderCode from "./renderCode";


const DisplaySentenseUser: React.FC<IResponseChat> = (data) => {
  switch (data.type) {
    case EMessageType.user:
      return <RenderUser {...data} />;
    case EMessageType.message:
      return <RenderMessage {...data} />;
    case EMessageType.title:
      return <RenderTitle {...data} />;
    case EMessageType.link:
      return <RenderLink {...data} />;
    case EMessageType.table:
      return <RenderTable {...data} />;
    case EMessageType.text:
      return <RenderText {...data} />;
    case EMessageType.code:
      return <RenderCode {...data} />;
  }
};

export default DisplaySentenseUser;
