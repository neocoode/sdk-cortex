import { EMessageType, IResponseChat } from "@/interface/chats";
import RenderCode from "./renderCode";
import RenderDivider from "./renderDivider";
import RenderGroupLink from "./renderGroupLink";
import RenderImageUrl from "./renderImageUrl";
import RenderLink from "./renderLink";
import RenderMessage from "./renderMessage";
import RenderTable from "./renderTable/renderTable";
import RenderText from "./renderText";
import RenderTitle from "./renderTitle";
import RenderUser from "./renderUser";


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
    case EMessageType.groupLink:
      return <RenderGroupLink {...data} />;
    case EMessageType.table:
      return <RenderTable {...data} />;
    case EMessageType.text:
      return <RenderText {...data} />;
    case EMessageType.code:
      return <RenderCode {...data} />;
    case EMessageType.divider:
      return <RenderDivider />;
    case EMessageType.imageUrl:
      return <RenderImageUrl {...data} />;
  }
};

export default DisplaySentenseUser;
