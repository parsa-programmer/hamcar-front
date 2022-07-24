import { AdvertisementFilterParams } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { BodyCondition } from "~~/models/advertisements/enums/BodyCondition";
import { Color } from "~~/models/advertisements/enums/Color";
import { AdvertisementPrice } from "~/models/advertisements/valueObjects/AdvertisementPrice";
import { defineStore } from "pinia";
import { Brand } from "~~/models/utilities/Brand";
import { Model } from "~~/models/utilities/Model";
import { Year } from "~~/models/utilities/Year";
import { Trim } from "~~/models/utilities/Trim";
import { GetBrands } from "~/services/brand.service";
import { CarType } from "~~/models/advertisements/enums/CarType";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { Ghesti } from "~~/models/advertisements/valueObjects/Ghesti";
import { GhestiPaymentType } from "~~/models/advertisements/enums/GhestiPaymentType";

const defaultState = () => ({
  currentStep: 1,
  steps: {
    one: {
      brandId: "",
      modelId: "",
      yearId: "",
      trimId: "",
    },
    two: {
      carType: null as CarType | null,
      milage: "" ,
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
      province: "",
      city: "",
      address: "",
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
    changeStep(step: number) {
      this.currentStep = step;
    },
    setStepData(stepData: any) {
      switch (this.currentStep) {
        case 1: {
          this.steps.one = stepData;
          break;
        }
        case 2: {
          this.steps.two = stepData;
          break;
        }
        case 3: {
          this.steps.three = stepData;
          break;
        }
        case 4: {
          this.steps.four = stepData;
          break;
        }
        case 5: {
          this.steps.five = stepData;
          break;
        }
      }
    },
    setBrands(): Promise<void> {
      return GetBrands().then((res) => {
        this.brands = res.data!;
      });
    },
  },
});
