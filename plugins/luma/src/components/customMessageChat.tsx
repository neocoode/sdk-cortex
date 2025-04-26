'use client';
import { CoreMessageResponse, IResponseChat } from '@/interface/chats';
import { RootState } from '@/store';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import RenderMessage from './renderMessage';
interface CustomMessageChatProps {
  messageResponse?: CoreMessageResponse;
}


const CustomMessageChat: React.FC<CustomMessageChatProps> = ({ messageResponse }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);
  const [messages, setMessages] = useState<IResponseChat[]>([]);
  const [shouldScroll, setShouldScroll] = useState(false);

  const formattedMessageToMessage = async (responses: CoreMessageResponse[]): Promise<IResponseChat[]> => {
    const messages: IResponseChat[] = [];

    if (Array.isArray(responses)) {
      console.log('responses:', responses);
      for (const response of responses) {
        messages.push({ type: "user", value: response.message });

        if (Array.isArray(responses)) {
          for (const responseItem of response.response) {
            messages.push({ type: responseItem.type, value: responseItem.value });
          }
        }
      }
    }

    setMessages(messages);
    setShouldScroll(messages.length > 10); // Habilita scroll após 10 mensagens
    return messages;
  };

  useEffect(() => {
    console.log('chatSelectedState.messages:', chatSelectedState.messages);
    formattedMessageToMessage(chatSelectedState.messages);
  }, [chatSelectedState.messages]);

  useEffect(() => {
    if (shouldScroll) {
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messageResponse, shouldScroll]);

  return (
    <div
      ref={messagesRef}
      className={`flex h-full w-full overflow-y-auto px-[5%] `}
    >
      <div className="flex flex-col  w-full">
        {messages.map((message, index) => (
          <div key={index}
            className={`flex flex-row ${message.type === 'user' ? 'justify-end' : 'justify-start'} items-center `}
          >
            <RenderMessage {...message} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomMessageChat;
