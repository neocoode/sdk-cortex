'use client';

import { useTheme } from '@/themes/themeContext';
import React, { RefObject, useEffect, useRef } from 'react';
import ActionBar from './actionBar';
import AutoCompleteInput from './autoCompleteInput';

interface InputFormProps {
  onSend?: () => void;
  onAdd?: () => void;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e?: React.FormEvent) => void;
  version?: string;
  date?: string;
}

const InputForm: React.FC<InputFormProps> = ({
  onAdd,
  placeholder = 'Digite sua mensagem...',
  value,
  onChange,
  onSubmit,
  version,
  date,
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  return (
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
          <AutoCompleteInput
            inputRef={inputRef as RefObject<HTMLInputElement>}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <ActionBar
        value={value}
        onAdd={onAdd}
        onSubmit={handleSubmit}
        version={version}
        date={date}
      />
    </form>
  );
};

export default InputForm; 