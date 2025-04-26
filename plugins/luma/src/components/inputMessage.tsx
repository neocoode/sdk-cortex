'use client';
import SvgIcon from '@/components/svgIcon';
import React, { useEffect, useRef } from 'react';

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

  const iconName = value.trim() ? 'send' : 'record';

  return (
    <footer className="flex flex-col m-1 mb-5 mx-[5%] ">
      <form
        onSubmit={onSubmitPrivate}
        className="flex flex-col justify-between bg-[#1e1e1e] m-2 rounded-4xl overflow-hidden shadow-[0_0_10px_rgba(128,128,128,0.8)]"
      >
        <div className="flex items-center p-3 w-full overflow-hidden">
          <div className="flex items-center justify-between w-full bg-[#434343] rounded-2xl p-1">
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 bg-transparent text-white outline-none text-2xl"
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
          <SvgIcon name="plus" className="text-white bg-[#464646]" onClick={onAdd} />
          <div className="flex justify-center items-center pt-2  text-1xl">
            Luma Beta - 04/2025
          </div>
          <SvgIcon 
            name={iconName} 
            className="text-white bg-[#c5c5c5]" 
            onClick={handleSubmit} 
          />
        </div>
      </form>
    </footer>
  );
};

export default InputMessage;
