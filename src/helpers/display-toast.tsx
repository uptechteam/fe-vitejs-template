import { toast } from 'react-toastify';

export const displayToastError = (title: string) => {
  toast.error(title);
};

export const displayToastSuccess = (title: string) => {
  toast.success(title);
};
