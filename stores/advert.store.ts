import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { BodyCondition } from "~~/models/advertisements/enums/BodyCondition";
import { Color } from "~~/models/advertisements/enums/Color";
import { Brand } from "~~/models/utilities/Brand";
import { CarType } from "~~/models/advertisements/enums/CarType";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { Ghesti } from "~~/models/advertisements/valueObjects/Ghesti";
import { GhestiPaymentType } from "~~/models/advertisements/enums/GhestiPaymentType";
import { ToastType } from "~~/composables/useToast";
import { CreateAdvertisement } from "~~/services/advertisement.service";
import { defineStore } from "pinia";
import { GetBrands } from "~~/services/brand.service";
import { CreateConsultAdvert } from "~~/services/consultant.service";

const defaultState = () => ({
  currentStep: 1,
  loading: false,
  steps: {
    one: {
      brandId: "",
      modelId: "",
      yearId: "",
      trimId: "",
    },
    two: {
      carType: null as CarType | null,
      milage: "",
      description: "",
      bodyCondition: null as BodyCondition | null,
      exteriorColor: null as Color | null,
      interiorColor: null as Color | null,
      gearBox: null as GearBox | null,
    },
    three: {
      advertisementPaymentType: null as AdvertisementPaymentType | null,
      amount: "" as string,
      ghest: {
        amountPricePerGhest: "",
        deliveryDate: 2,
        ghestiPaymentType: null as GhestiPaymentType | null,
        pishPardakht: "",
        tedadeGhestHa: "",
      } as Ghesti,
    },
    four: {
      Province: "",
      City: "",
      PostalAddress: "",
    },
    five: {
      images: [],
    },
  },
  brands: [] as Brand[],
});

export const advertStore = defineStore("advert", {
  state: defaultState,
  getters: {
    getCarBrands(): Brand[] {
      return this.brands.filter((f) => f.isCar);
    },
    getMotorBrands(): Brand[] {
      return this.brands.filter((f) => f.isCar == false);
    },
  },
  actions: {
    async createCarAdvert(): Promise<void> {
      const toast = useToast();
      const route = useRoute();
      const router = useRouter();

      if (this.validateCarData() == false) {
        toast.showToast("لطفا تمامی موارد را تکمیل کنید", ToastType.error);
        return;
      }
      this.loading = true;

      var data = new FormData();
      data.append("BrandId", this.steps.one.brandId);
      data.append("ModelId", this.steps.one.modelId);
      data.append("YearId", this.steps.one.yearId);
      if (this.steps.one.trimId != "") {
        data.append("TrimId", this.steps.one.trimId);
      }
      data.append("Description", this.steps.two.description);
      data.append(
        "Milage",
        this.steps.two.milage == "" ? "0" : this.steps.two.milage
      );
      data.append("GearBox", this.steps.two.gearBox!.toString());
      data.append(
        "CarDetail.BodyCondition",
        this.steps.two.bodyCondition!.toString()
      );
      data.append(
        "CarDetail.ExteriorColor",
        this.steps.two.exteriorColor!.toString()
      );
      data.append(
        "CarDetail.InteriorColor",
        this.steps.two.interiorColor!.toString()
      );
      data.append("CarDetail.CarType", this.steps.two.carType!);

      data.append(
        "Price.AdvertisementPaymentType",
        this.steps.three.advertisementPaymentType!.toString()
      );
      data.append(
        "Price.StaticAmount",
        this.steps.three.amount == "" ? "0" : this.steps.three.amount
      );
      if (
        this.steps.three.advertisementPaymentType ==
        AdvertisementPaymentType.قسطی
      ) {
        data.append(
          "Price.TedadeGhestHa",
          this.steps.three.ghest.tedadeGhestHa
        );
        data.append("Price.PishPardakht", this.steps.three.ghest.pishPardakht);
        data.append(
          "Price.GhestiPaymentType",
          this.steps.three.ghest.ghestiPaymentType
        );
        data.append(
          "Price.AmountPricePerGhest",
          this.steps.three.ghest.amountPricePerGhest
        );
        data.append(
          "Price.DeliveryDate",
          this.steps.three.ghest.deliveryDate.toString()
        );
      }
      data.append("Province", this.steps.four.Province);
      data.append("City", this.steps.four.City);
      data.append("PostalAddress", this.steps.four.PostalAddress);
      for (let i = 0; i < this.steps.five.images.length; i++) {
        data.append(
          "Images", //PropertyName
          this.steps.five.images[i], //File
          //@ts-ignore
          this.steps.five.images[i].name //FileName
        );
      }
      if (route.query.exhibition) {
        if (route.query.special) {
          data.append("IsSpecialExhibitionAdvert", "true");
        }
        return CreateConsultAdvert(data)
          .then((res) => {
            if (res.isSuccess) {
              this.currentStep = 6;
              if (route.query.special) {
                router.replace("/sell/finish?id=" + res.data);
              } else {
                router.replace("/sell/selectPlan");
              }
            }
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        return CreateAdvertisement(data)
          .then((res) => {
            if (res.isSuccess) {
              this.currentStep = 6;
              const router = useRouter();
              router.push("/sell/selectPlan");
            }
          })
          .catch((err) => {
            toast.showToast("مشکلی در عملیات رخ داده", ToastType.error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    changeStep(step: number) {
      this.currentStep = step;
    },
    setBrands(): Promise<void> {
      return GetBrands().then((res) => {
        this.brands = res.data!;
      });
    },
    validateCarData(): boolean {
      let stepOne = this.steps.one;
      let stepTwo = this.steps.two;

      if (
        stepOne.brandId == "" ||
        stepOne.modelId == "" ||
        stepOne.yearId == ""
      ) {
        return false;
      }
      if (
        stepTwo.carType == null ||
        (stepTwo.carType == CarType.کارکرده &&
          (stepTwo.milage == "" || stepTwo.milage == "0")) ||
        stepTwo.description == "" ||
        stepTwo.bodyCondition == null ||
        stepTwo.exteriorColor == null ||
        stepTwo.interiorColor == null ||
        stepTwo.gearBox == null
      ) {
        return false;
      }

      return true;
    },
  },
});
