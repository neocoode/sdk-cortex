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

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-between bg-[#1e1e1e] m-3 rounded-4xl overflow-hidden"
    >
      <div className="flex items-center p-5 w-full overflow-hidden">
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
                  onSubmit?.();
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 pb-4">
        <button
          type="button"
          className="p-2 hover:bg-gray-700 rounded-full"
          onClick={onAdd}
        >
          <SvgIcon name="plus" className="text-white bg-[#464646]" />
        </button>
        <button
          type="submit"
          className="p-2 hover:bg-gray-700 rounded-full"
          onClick={(e) => {
            e.preventDefault(); // evita duplo envio se necessário
            onSubmit?.();
          }}
        >
          <SvgIcon name="record" className="text-white bg-[#c5c5c5]" />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
