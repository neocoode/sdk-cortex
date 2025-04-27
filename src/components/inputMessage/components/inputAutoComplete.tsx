import { useTheme } from '@/themes/themeContext';
import React, { forwardRef } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputAutoComplete = forwardRef<HTMLInputElement, InputProps>(({
  value,
  onChange,
  onKeyDown,
  placeholder = 'Digite algo...'
}, ref) => {
  const { themeSelected } = useTheme();
  
  return (
    <input
      ref={ref}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`
        w-full py-1 px-2 bg-transparent outline-none 
        ${themeSelected.colors.text}
        ${themeSelected.typography.fontSize.large}
      `}
      autoComplete="off"
    />
  );
});

InputAutoComplete.displayName = 'Input';

export default InputAutoComplete;
