'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomHeader from '@/components/customHeader';
import LeftSidebar from '@/components/leftSidebar';
import { chatSelectedMessageClear } from '@/modules/chatSelected/slice';
import { sendMessageRequest } from '@/modules/sendMessage/slice';
import { RootState } from '@/store';
import InputMessage from './inputMessage';
import CustomMessageChat from './renderMessageChat';

const CustomChat: React.FC = () => {
  const dispatch = useDispatch();

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [message, setMessage] = useState('');

  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);

  useEffect(() => {
    dispatch(chatSelectedMessageClear());
  }, []);

  const handleChatSelect = (chatId: string) => {
    console.log('Chat selecionado:', chatId);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim()) return;

    if (!chatSelectedState.chatId) {
      console.error('Chat ID não selecionado');
      return;
    }

    dispatch(sendMessageRequest({ chatId: chatSelectedState.chatId, message }));
    setMessage('');
  };

  return (
    <div className="flex w-full h-screen bg-black">
      <LeftSidebar onSelectChat={handleChatSelect} isSidebarVisible={isSidebarVisible} />

      <main className="flex-1 flex flex-col">
        <div className="flex h-full  flex-col relative ">
          <CustomHeader toggleSidebar={toggleSidebar} />
          <CustomMessageChat />
          <InputMessage
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
};

export default CustomChat;

