import { LoginOrRegister, LogOut, ValidateCode } from "~/services/auth.service";
import { authStore } from "~/stores/auth.store";

export const useAuth = () => {
  const loading = ref(false);
  const store = authStore();
  const { showToast } = useToast();

  const login = async (phoneNumber: string): Promise<boolean> => {
    loading.value = true;
    var result = await LoginOrRegister(phoneNumber);
    loading.value = false;
    if (result.metaData.message == "برای ارسال مجدد کد باید 2 دقیقه صبر کنید") {
      return true;
    }
    return result.isSuccess;
  };

  const validateCode = async (
    phoneNumber: string,
    code: string
  ): Promise<boolean> => {
    loading.value = true;
    var result = await ValidateCode(phoneNumber, code);
    loading.value = false;
    if (result.isSuccess) {
      store.setLoginData(result.data!);
      localStorage.setItem("auth-data", JSON.stringify(result.data!));

      const expiryDate = new Date();
      var token = useCookie("token", {
        maxAge: expiryDate.setMonth(expiryDate.getMonth() + 1),
      });
      token.value = result.data?.token ?? "";
    }
    return result.isSuccess;
  };

  const logout = async (): Promise<boolean> => {
    loading.value = true;
    document.cookie = "token=;Max-Age=0";

    if (store.isLogin == false) {
      loading.value = false;
      return true;
    }
    var result = await LogOut();

    loading.value = false;
    localStorage.removeItem("auth-data");
    return result.isSuccess;
  };

  return { login, logout, validateCode, loading };
};
