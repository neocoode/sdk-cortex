'use client';

import { suggestionsRequest } from '@/redux/suggestions/slice';
import { RootState } from '@/store';
import { useTheme } from '@/themes/themeContext';
import React, { RefObject, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // 👈 IMPORTA
import ActionBar from './actionBar';
import AutoCompleteInput from './autoCompleteInput';

interface InputFormProps {
  onSend?: () => void;
  onAdd?: () => void;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e?: React.FormEvent) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  onAdd,
  placeholder = 'Pergunte alguma coisa',
  value,
  onChange,
  onSubmit,
}) => {
  const { themeSelected } = useTheme();
  const dispatch = useDispatch(); // 👈 USA DISPATCH
  const inputRef = useRef<HTMLInputElement>(null);
  const chatSelectedState = useSelector((state: RootState) => state.chatSelected);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmitPrivate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    onSubmit?.();
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    onSubmit?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onChange(e);

    if (text.length > 3) {
      dispatch(suggestionsRequest({ chatId: chatSelectedState.chatId || '', message: text })); // 👈 FAZ O DISPATCH
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
          `}
        >
          <AutoCompleteInput
            inputRef={inputRef as RefObject<HTMLInputElement>}
            value={value}
            onChange={handleChange} // 👈 AGORA USA handleChange (não onChange direto)
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <ActionBar
        value={value}
        onAdd={onAdd}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default InputForm;