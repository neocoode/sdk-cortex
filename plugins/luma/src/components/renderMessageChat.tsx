'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CoreMessageResponse, IResponseChat } from '@/interface/chats';
import { sendMessageRequest } from '@/modules/sendMessage/slice';
import { showToast } from '@/modules/toast/slice';
import { RootState } from '@/store';
import { useTheme } from '@/themes/themeContext';
import RenderMessage from './renderMessage';

interface iprops {
  messageResponse?: CoreMessageResponse;
}


const RenderMessageChat: React.FC<iprops> = ({ messageResponse }) => {
  const { themeSelected } = useTheme();
  const dispatch = useDispatch();
  
  const messagesRef = useRef<HTMLDivElement>(null);
  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);
  const [messages, setMessages] = useState<IResponseChat[]>([]);
  const [shouldScroll, setShouldScroll] = useState(true);

  const formattedMessageToMessage = async (responses: CoreMessageResponse[]): Promise<IResponseChat[]> => {
    try {
      let messages: IResponseChat[] = [];
      if (Array.isArray(responses)) {
        for (const response of responses) {
          messages.push({ type: "user", value: response.message, onReplay: () => {
            if (!chatSelectedState.chatId) {
              dispatch(showToast({ message: 'Selecione um chat para enviar a mensagem', type: 'error' }));
              return;
            }
            dispatch(sendMessageRequest({ chatId: chatSelectedState.chatId, message: response.message }));
          } });

          if (Array.isArray(responses)) {
            for (const responseItem of response.response) {
              messages.push({ type: responseItem.type, value: responseItem.value });
            }
          }
          messages.push({ type: "divider", value: "" });
        }
      }

      const processedMessages: IResponseChat[] = [];
      let currentLinkGroup: string[] = [];
      
      for (let i = 0; i < messages.length; i++) {
        const currentMessage = messages[i];
        if (currentMessage.type === 'link') {
          if (typeof currentMessage.value === 'string') {
            currentLinkGroup.push(currentMessage.value);
          }
          
          if (i === messages.length - 1 || messages[i + 1].type !== 'link') {
            if (currentLinkGroup.length > 1) {
              processedMessages.push({
                type: 'groupLink',
                value: currentLinkGroup
              });
              currentLinkGroup = [];
            } else {
              processedMessages.push(currentMessage);
            }
          }
        } else {
          processedMessages.push(currentMessage);
        }
      }

      messages = processedMessages;

      setMessages(messages);
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
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, messageResponse]);

  return (
    <div
      ref={messagesRef}
      className={`flex h-full w-full overflow-y-auto px-[6%] pt-10 pb-10`}
    >
      <div className="flex flex-col w-full">
        {messages.length > 0 && messages.map((message, index) => (
          <div key={index}
            className={`flex flex-row ${message.type === 'user' ? 'justify-end' : 'justify-start'} items-center ${themeSelected.spacing.msmall}`}
          >
            <RenderMessage key={`${message.type}-${index}`} {...message} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderMessageChat;
