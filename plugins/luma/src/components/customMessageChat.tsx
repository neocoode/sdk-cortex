'use client';
import { CoreMessageResponse } from '@/interface/chats';
import React, { useRef, useEffect } from 'react';

interface CustomMessageChatProps {
  messageResponse?: CoreMessageResponse;
}

const CustomMessageChat: React.FC<CustomMessageChatProps> = ({ messageResponse }) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messageResponse]);

  return (
    <div ref={messagesRef} className="flex-1 overflow-y-auto p-4">
      <div className="text-white">{}</div>
    </div>
  );
};

export default CustomMessageChat;
