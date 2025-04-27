'use client';

import { useTheme } from '@/themes/themeContext';
import React, { useEffect, useRef } from 'react';
import { Mic, SendHorizonal, Plus } from 'lucide-react';

interface InputMessageProps {
  onSend?: () => void;
  onAdd?: () => void;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e?: React.FormEvent) => void;
}

const InputMessage: React.FC<InputMessageProps> = ({
  onAdd,
  placeholder = 'Digite sua mensagem...',
  value,
  onChange,
  onSubmit,
}) => {
  const { themeSelected } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmitPrivate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    onSubmit?.();
  }

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    onSubmit?.();
  }

  return (
    <footer className="flex flex-col m-1 mb-5 mx-[5%] pb-10 ">
      <form
        onSubmit={onSubmitPrivate}
        className={`
          flex flex-col justify-between m-2 overflow-hidden 
          ${themeSelected.colors.backgroundPrimary} 
          ${themeSelected.borderRadius.xxxlarge} 
          ${themeSelected.shadows.medium}
        `}
      >
        <div className="flex items-center p-3 w-full overflow-hidden">
          <div
            className={`
              flex items-center justify-between w-full p-1
              ${themeSelected.colors.backgroundAccent} 
              ${themeSelected.borderRadius.xxlarge} 
            `}>
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
                  w-full py-1 px-2 bg-transparent outline-none 
                  ${themeSelected.colors.text}
                  ${themeSelected.typography.fontSize.large}
                `}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit(e);
                    if (inputRef.current) {
                      inputRef.current.value = '';
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 pb-4">
          <Plus
            className={`
              cursor-pointer
              ${themeSelected.colors.text} 
            `}
            onClick={onAdd}
            size={30}
          />
          <div 
            className={`
              flex justify-center items-center pt-2 
              ${themeSelected.typography.fontSize.medium} 
              ${themeSelected.colors.textSecondary}
            `}
          >
            Luma Beta - 04/2025
          </div>

          {value.trim() ? (
            <SendHorizonal
              className={`
                ${themeSelected.colors.text} 
                cursor-pointer
              `}
              onClick={handleSubmit}
              size={30}
            />
          ) : (
            <Mic
              className={`
                ${themeSelected.colors.text} 
                cursor-pointer
              `}
              onClick={handleSubmit}
              size={30}
            />
          )}
        </div>
      </form>
    </footer>
  );
};

export default InputMessage;
