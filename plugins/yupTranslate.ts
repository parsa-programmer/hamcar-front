import { setLocale, addMethod, string } from "yup";
import { phoneNumberValidator } from "@persian-tools/persian-tools";

export default defineNuxtPlugin(() => {
  setLocale({
    mixed: {
      default: "ورودی نامعتبر است",
      required: "${path}  را وارد کنید ",
    },
    string: {
      email: "ایمیل نامعتبر است",
    },
    number: {
      min: " حداقل مقدار ${path} ${min} است",
      
    }
  });
  addMethod(string, "phoneNumber", function phoneNumber(phoneNumber: string) {
    return this.test("phoneNumber","شماره موبایل نامعتبر است",function (value) {
        if(value===undefined) return true;
        return phoneNumberValidator(value?.toString()!);
    });
  });
 
});
