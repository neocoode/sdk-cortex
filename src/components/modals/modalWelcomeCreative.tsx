/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-di, { use }sable @typescript-eslint/no-explicit-any */

// Modal.tsx
import { useModal } from '@/contexts/modalContext';
import { configNameSet } from '@/redux/configAll/slice';
import { useTheme } from '@/themes/themeContext';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ModalProps {
  [key: string]: any;
}

const ModalWelcomeCreative: React.FC<ModalProps> = ({ }) => {
  const { onClose } = useModal();
  const { themeSelected } = useTheme();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(configNameSet({ name: 'showModalWelcomeCreative', value: true }));
    onClose();
  };

  return (
    <div className='relative'>
      <button onClick={handleClose} className="absolute top-2 right-4 text-white text-2xl font-bold cursor-pointer">×</button>
      <div className="flex flex-row  justify-center items-center   ">
        <img src={'/assets/svg/welcome.svg'} alt="Luma é uma IA" />
      </div>
      <div className=" p-7 text-center text-white space-y-4 ">
        <p className={`${themeSelected.title.quinary} pt-0`}>
          Crie sua conta gratuitamente e explore novas possibilidades sem limites
        </p>
        <button className={`${themeSelected.button.primary}`}>
          Entrar
        </button>
        <button className={`${themeSelected.button.secondary}`}>
          Cadastrar-se gratuitamente
        </button>
        <a href="#" onClick={handleClose}
          className={`${themeSelected.link.primary}`}
        >
          Permanecer desconectado
        </a>
      </div>
    </div>
  );
};

export default ModalWelcomeCreative;
