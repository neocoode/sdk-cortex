'use client';

import { createContext, FC, useContext, useState } from 'react';

import { IModalContextType, IModalProviderProps, IOpenModal, IOpenModalProps } from './types';
import ModalRoot from '@/components/modals/modalRoot';

const ModalContext = createContext<IModalContextType | undefined>(undefined);

export function ModalProvider({ children }: IModalProviderProps) {
  const [isOpen, setIsOpen] = useState<IOpenModal | null>(null);
  
  const onClose = () => {
    setIsOpen(null);
  }

  const onOpen = (content: FC, props?: IOpenModalProps) => {
    setIsOpen({ Content: content, props: props || {} });
  }

  return (
    <ModalContext.Provider value={{  onClose, onOpen }}>
      <ModalRoot isOpen={isOpen} onClose={onClose} />
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
} 