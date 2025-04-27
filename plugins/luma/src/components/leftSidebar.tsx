'use client';
import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useTheme } from '@/themes/themeContext';

interface LeftSidebarProps {
  onSelectChat?: (chatId: string) => void;
  isSidebarVisible: boolean;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ onSelectChat, isSidebarVisible }) => {
  const [renderContent, setRenderContent] = useState(isSidebarVisible);
  const { themeSelected } = useTheme();

  // Controla renderização interna com atraso para permitir a animação de fechamento
  useEffect(() => {
    if (isSidebarVisible) {
      setRenderContent(true);
    } else {
      const timeout = setTimeout(() => setRenderContent(false), 300); // mesma duração da transição
      return () => clearTimeout(timeout);
    }
  }, [isSidebarVisible]);

  return (
    <aside
      className={`
        bg-[#1e1e1e] 
        text-white 
        flex flex-col 
        h-full 
        overflow-hidden 
        transition-all 
        duration-300 
        ${isSidebarVisible ? 'w-80 opacity-100' : 'w-0 opacity-0'}
      `}
    >
      {renderContent && (
        <>
          {/* Topo */}
          <div className="p-4 flex justify-between items-center">
            <h3 className="font-semibold text-2xl">Luma Beta</h3>
            <Plus
              className={`
              cursor-pointer
              my-1
              ${themeSelected.colors.text} 
            `}
              size={30}
            />
          </div>

          {/* Centro - Lista de Chats */}
          <div className="flex-grow overflow-y-auto p-4">
            <div className="space-y-2">
              {/* <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                  <div>
                    <p className="font-medium">Chat #1</p>
                    <p className="text-sm text-gray-400">Última mensagem...</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Rodapé */}
          <div className="p-4">
            {/* <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
              Novo Chat
            </button> */}
          </div>
        </>
      )}
    </aside>
  );
};

export default LeftSidebar;
