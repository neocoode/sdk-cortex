'use client';

import { useTheme } from '@/themes/themeContext';
import React, { useRef } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder = 'Digite sua mensagem...',
  onKeyDown,
}) => {
  const { themeSelected } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex-1">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className={`
          w-full py-1 px-2 bg-transparent outline-none 
          ${themeSelected.colors.text}
          ${themeSelected.typography.fontSize.large}
        `}
      />
    </div>
  );
};

export default InputField; 