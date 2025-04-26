'use client';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { hideToast } from '@/modules/toast/slice';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, type, isVisible } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (isVisible) {
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

      const timer = setTimeout(() => {
        toast.dismiss(toastId);
        dispatch(hideToast());
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, message, type, dispatch]);

  return null;
};

export default Toast;
