import { defineStore } from "pinia";
import { VerifyExhibitionAccount } from "~~/services/exhibition.service";

const defaultState = () => ({
  stepOne: null,
  stepTwo: null,
  stepThree: null,
  stepFour: null,
  stepFive: {
    address: "",
    phoneNumberOne: "",
    phoneNumberTwo: "",
    phoneNumberTree: "",
    visitImage: null,
  },
  parvaneKasb: null,
  CartMeli: null,
  MoarefiName: null,
  loading: false,
});
export const useExhibitionRegister = defineStore("registerExhibition", {
  state: defaultState,
  actions: {
    getStepTitle(step: number): string {
      switch (step) {
        case 1:
          return "نمای خارجی نمایشگاه ";
        case 2:
          return "تابلو نمایشگاه";
        case 3:
          return "عکس از نمایشگاه و خودروهای موجود";
        case 4:
          return "لوگو نمایشگاه ";
        case 5:
          return "آدرس و تلفن (های) ثابت ";
        case 6:
          return "پروانه کسب نمایشگاه";
        case 7:
          return "کارت ملی مدیر نمایشگاه ";
        case 8:
          return "معرفی‌نامه نماینده نمایشگاه";
      }
      return "";
    },
    isValidSteps(): boolean {
      return (
        this.stepOne != null &&
        this.stepTwo != null &&
        this.stepThree != null &&
        this.stepFour != null &&
        this.stepFive.address != "" &&
        this.stepFive.phoneNumberOne != "" &&
        this.stepFive.visitImage != null &&
        this.parvaneKasb != null &&
        this.CartMeli != null &&
        this.MoarefiName != null
      );
    },
    isCompleteCurrentStep(step: number): boolean {
      switch (step) {
        case 1:
          return this.stepOne != null;
        case 2:
          return this.stepTwo != null;
        case 3:
          return this.stepThree != null;
        case 4:
          return this.stepFour != null;
        case 5:
          return (
            this.stepFive.address != "" &&
            this.stepFive.phoneNumberOne != "" &&
            this.stepFive.phoneNumberOne.length == 11 &&
            this.stepFive.visitImage != null
          );
        case 6:
          return this.parvaneKasb != null;
        case 7:
          return this.CartMeli != null;
        case 8:
          return this.MoarefiName != null;
      }
      return false;
    },
    async VerifyAccount(): Promise<boolean> {
      this.loading = true;
      var formData = new FormData();

      formData.append("Address", this.stepFive.address);
      formData.append("Telephone", this.stepFive.phoneNumberOne);
      if (this.stepFive.phoneNumberTwo) {
        formData.append("MobilePhoneTwo", this.stepFive.phoneNumberTwo);
      }
      if (this.stepFive.phoneNumberTree) {
        formData.append("MobilePhoneTree", this.stepFive.phoneNumberTree);
      }
      formData.append("LogoImage", this.stepFour!);
      formData.append("NationalCardImage", this.CartMeli!);
      formData.append("TabloImage", this.stepTwo!);
      formData.append("InnerExhibitionImage", this.stepThree!);
      formData.append("OutSideExhibitionImage", this.stepOne!);
      formData.append("VisitingCardImage", this.stepFive.visitImage!);
      formData.append("ParvaneKasbImage", this.parvaneKasb!);
      formData.append("MoarefiNameImageName", this.MoarefiName!);

      var res = await VerifyExhibitionAccount(formData);
      this.loading = false;
      return res.isSuccess;
    },
  },
});
