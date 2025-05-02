/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { IOpenModal } from '@/contexts/modalContext/types';
import { useTheme } from '@/themes/themeContext';
import React from 'react';
import { createPortal } from 'react-dom';

export interface IModalRoot {
  isOpen: IOpenModal | null;
  onClose: () => void;
}

const ModalRoot = ({ isOpen }: IModalRoot) => {
  const { themeSelected } = useTheme();

  if (!isOpen) return null;
  if (!isOpen.Content) return null;

  const Content: any = isOpen.Content;

  return createPortal(
    <div className="fixed  inset-0 z-50 bg-black/50 flex items-center justify-center  ">
      <div
        className={`
        w-[550px] overflow-hidden
        ${themeSelected.colors.backgroundQuaternary}
        ${themeSelected.borders.secondary}
        ${themeSelected.borderRadius.xxlarge}
        ${themeSelected.shadows.large}
      `}
      >
        <Content {...isOpen.props || {}} />
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default ModalRoot;
