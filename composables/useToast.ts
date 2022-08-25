import { useToast as Toaster } from "vue-toastification";

export class Toast {
  constructor(
    public message: string,
    public type: ToastType,
    public duration: number = 3000
  ) {}

  public static Error(message: string, duration: number = 3000) {
    return new Toast(message, ToastType.error, duration);
  }
}
export enum ToastType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}

export const useToast = () => {
  const showToast = (
    message: string,
    type: ToastType = ToastType.success,
    duration: number = 3000
  ) => {
    const toast = Toaster();
    switch (type) {
      case ToastType.success: {
        toast.success(message, { timeout: duration });
        break;
      }
      case ToastType.error: {
        toast.error(message, { timeout: duration });
        break;
      }
      case ToastType.warning: {
        toast.warning(message, { timeout: duration });
        break;
      }
      case ToastType.info: {
        toast.info(message, { timeout: duration });
        break;
      }
    }
  };

  return { showToast };
};
