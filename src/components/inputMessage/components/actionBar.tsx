'use client';

import { useTheme } from '@/themes/themeContext';
import { Mic, Plus, SendHorizonal } from 'lucide-react';
import React from 'react';
import Footer from './footer';

interface ActionBarProps {
  value: string;
  onAdd?: () => void;
  onSubmit?: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  value,
  onAdd,
  onSubmit,
}) => {
  const { themeSelected } = useTheme();

  return (
    <div className="flex justify-between items-center px-4 pb-4">
      <Plus
        className={`
          cursor-pointer
          ${themeSelected.colors.text} 
        `}
        onClick={onAdd}
        size={30}
      />
      <Footer  />
      {value.trim() ? (
        <SendHorizonal
          className={`
            ${themeSelected.colors.text} 
            cursor-pointer
          `}
          onClick={onSubmit}
          size={30}
        />
      ) : (
        <Mic
          className={`
            ${themeSelected.colors.text} 
            cursor-pointer
          `}
          onClick={onSubmit}
          size={30}
        />
      )}
    </div>
  );
};

export default ActionBar; 