'use client';

import { useTheme } from '@/themes/themeContext';
import React, { forwardRef } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
  value,
  onChange,
  placeholder = 'Digite sua mensagem...',
  onKeyDown,
}, ref) => {
  const { themeSelected } = useTheme();

  return (
    <div className="flex-1">
      <input
        ref={ref}
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
});

InputField.displayName = 'InputField';

export default InputField; 