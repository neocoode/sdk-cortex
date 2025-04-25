'use client';
import { useEffect, useState } from 'react';

import CustomHeader from '@/components/customHeader';
import InputMessage from '@/components/inputMessage';
import LeftSidebar from '@/components/leftSidebar';
import { chatSelectedMessageClear } from '@/modules/chatSelected/slice';
import { sendMessageRequest } from '@/modules/sendMessage/slice';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import CustomMessageChat from './customMessageChat';

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
  };

  return (
    <div className="flex w-full h-screen bg-black relative">
      <LeftSidebar onSelectChat={handleChatSelect} isSidebarVisible={isSidebarVisible} />

      <main className="flex-1 flex flex-col">
        <CustomHeader toggleSidebar={toggleSidebar} />
        <div className="flex h-full mx-[4%] my-2 flex-col relative">
          <CustomMessageChat />
          <footer className="flex flex-col m-1 bg-red-500">
            <InputMessage
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onSubmit={handleSubmit}
            />
            <div className="flex justify-center items-center p-3 text-1xl">
              Luma Beta - 04/2025
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default CustomChat;

