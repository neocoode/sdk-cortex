'use client';

import React from 'react';
import InputForm from './components/inputForm';

interface InputMessageProps {
  onSend?: () => void;
  onAdd?: () => void;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e?: React.FormEvent) => void;
  version?: string;
  date?: string;
}

const InputMessage: React.FC<InputMessageProps> = (props) => {
  return (
    <footer className="flex flex-col m-1 mb-5 mx-[5%] pb-10 overflow-visible">
      <InputForm {...props} />
    </footer>
  );
};

export default InputMessage;
