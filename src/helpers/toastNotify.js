import { toast } from 'react-toastify';

const toastConfig = {
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const notifySuccess = message =>
  toast.success(message, { ...toastConfig });

export const notifyError = message => toast.error(message, { ...toastConfig });
