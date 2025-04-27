/**
 * @file toast.tsx
 * @description Componente responsável por exibir notificações toast na aplicação.
 * Utiliza react-toastify para renderizar diferentes tipos de mensagens (success, error, info, warning).
 * O toast é controlado através do estado global do Redux.
 */

'use client';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { hideToast } from '@/modules/toast/slice';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  // Hooks do Redux para gerenciar o estado do toast
  const dispatch = useDispatch();
  const { message, type, isVisible } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (isVisible) {
      // Função imediatamente invocada para determinar o tipo de toast
      const toastId = (() => {
        switch (type) {
          case 'success':
            return toast.success(message);
          case 'error':
            return toast.error(message);
          case 'info':
            return toast.info(message);
          case 'warning':
            return toast.warning(message);
          default:
            return toast(message);
        }
      })();

      // Timer para fechar o toast após 15 segundos
      const timer = setTimeout(() => {
        toast.dismiss(toastId);
        dispatch(hideToast());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, message, type, dispatch]);

  return (
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toast;
