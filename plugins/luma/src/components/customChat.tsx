'use client';
import { useState } from 'react';

import LeftSidebar from '@/components/leftSidebar';
import InputMessage from '@/components/inputMessage';
import CustomHeader from '@/components/customHeader';
import CustomMessageChat from './customMessageChat';
import { CoreMessageResponse } from '@/interface/chats';

const CustomChat: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [message, setMessage] = useState('');
  const [messageResponse, setMessageResponse] = useState<CoreMessageResponse>();
  

  const handleChatSelect = (chatId: string) => {
    console.log('Chat selecionado:', chatId);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim()) return;

    console.log('Mensagem enviada:', message);
    setMessage('');
  };

  return (
    <div className="flex w-full h-screen bg-black">
      <LeftSidebar onSelectChat={handleChatSelect} isSidebarVisible={isSidebarVisible} />

      <main className="flex-1 flex flex-col">
        <CustomHeader toggleSidebar={toggleSidebar} />
        <div className="flex-1 px-[4%] py-2 flex flex-col justify-between">
          <CustomMessageChat messageResponse={messageResponse} />
          <footer className="p-1">
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
