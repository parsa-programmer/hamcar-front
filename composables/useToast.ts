import debounce from "lodash/debounce";

export class Toast {
  constructor(
    public message: string,
    public type: ToastType,
    public show: boolean = true,
    public duration: number = 3000
  ) {}

  public static Error(message: string, duration: number = 3000) {
    return new Toast(message, ToastType.error, true, duration);
  }
}
export enum ToastType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}
export const useToast = () => {
  const toastRef = useState<Toast>("--toast--", () => ({
    show: false,
    message: "",
    type: ToastType.info,
    duration: 3000,
  }));

  const debounceClose = debounce(() => {
    toastRef.value = { ...toastRef.value, show: false };
  }, toastRef.value.duration);

  const showToast = (
    message: string,
    type: ToastType = ToastType.success,
    duration: number = 3000
  ) => {
    toastRef.value = {
      duration: duration,
      message: message,
      show: true,
      type: type,
    };
    debounceClose();
  };

  return { showToast, toastRef };
};
