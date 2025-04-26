'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CoreMessageResponse, IResponseChat } from '@/interface/chats';
import { showToast } from '@/modules/toast/slice';
import { RootState } from '@/store';
import RenderMessage from './renderMessage';

interface iprops {
  messageResponse?: CoreMessageResponse;
}


const RenderMessageChat: React.FC<iprops> = ({ messageResponse }) => {
  const dispatch = useDispatch();
  
  const messagesRef = useRef<HTMLDivElement>(null);
  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);
  const [messages, setMessages] = useState<IResponseChat[]>([]);
  const [shouldScroll, setShouldScroll] = useState(false);

  const formattedMessageToMessage = async (responses: CoreMessageResponse[]): Promise<IResponseChat[]> => {
    try {
      const messages: IResponseChat[] = [];
      console.log('>>>>>>:', responses);
      if (Array.isArray(responses)) {
        for (const response of responses) {
          messages.push({ type: "user", value: response.message });

          if (Array.isArray(responses)) {
            for (const responseItem of response.response) {
              messages.push({ type: responseItem.type, value: responseItem.value });
            }
          }
          messages.push({ type: "divider", value: "" });
        }
      }

      setMessages(messages);
      setShouldScroll(messages.length > 10); // Habilita scroll após 10 mensagens
      return messages;
    } catch (error) {
      dispatch(showToast({ message: 'Erro ao processar as mensagens', type: 'error' }));
      console.error('Erro ao processar mensagens:', error);
      return [];
    }
  };

  useEffect(() => {
    formattedMessageToMessage(chatSelectedState?.messages);
  }, [chatSelectedState?.messages]);

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
      <div className="flex flex-col w-full">
        {messages.length > 0 && messages.map((message, index) => (
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

export default RenderMessageChat;
