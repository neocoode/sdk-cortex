'use client';
import { CoreMessageResponse } from '@/interface/chats';
import { RootState } from '@/store';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import DisplaySentense from './displaySentense';
import DisplaySentenseUser from './displaySentenseUser';

interface CustomMessageChatProps {
  messageResponse?: CoreMessageResponse;
}

interface ResponseChat {
  type: string;
  value: string;
}

const CustomMessageChat: React.FC<CustomMessageChatProps> = ({ messageResponse }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);
  const [messages, setMessages] = useState<ResponseChat[]>([]);
  const [shouldScroll, setShouldScroll] = useState(false);

  const formattedMessageToMessage = async (responses: CoreMessageResponse[]): Promise<ResponseChat[]> => {
    const messages: ResponseChat[] = [];

    if (Array.isArray(responses)) {
      console.log('responses:', responses);
      for (const response of responses) {
        messages.push({ type: "messageUser", value: response.message });

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

  // useEffect(() => {
  //   if (shouldScroll) {
  //     messagesRef.current?.scrollTo({
  //       top: messagesRef.current.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [messageResponse, shouldScroll]);

  return (
    <div 
      ref={messagesRef} 
      className={`flex h-[77%] overflow-y-auto bg-black`}
    >
      <div className="flex flex-col">
        {messages.map((message) => (
          <div
            key={message.value}
            className={`flex flex-row ${message.type === 'messageUser' ? 'justify-end' : 'justify-start'} items-center`}
          >
            <div className={`flex p-3 ${message.type === 'messageUser'
                ? 'text-white'
                : 'text-white'
              }`}>
              {message.type === 'messageUser' ?
                <DisplaySentenseUser message={message.value} />
                :
                <DisplaySentense message={message.value} disableAnimation={message.value.length > 50} />
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomMessageChat;
