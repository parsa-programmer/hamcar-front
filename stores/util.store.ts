import { Mode } from "fs";
import { defineStore } from "pinia";
import { Brand } from "~~/models/utilities/Brand";
import { Model } from "~~/models/utilities/Model";
import { Trim } from "~~/models/utilities/Trim";
import {
  GetBrands,
  GetModels,
  GetTrimsByModelId,
} from "~~/services/brand.service";

const defaultState = () => ({
  showBlackBackGround: false,
  brands: [] as Brand[],
  models: [] as Model[],
  Trims: [] as Trim[],
});

export const UseUtilStore = defineStore("util", {
  state: defaultState,
  actions: {
    ChangeShowBlackBackGround(val: boolean) {
      this.showBlackBackGround = val;
    },
    setBrands(): Promise<void> {
      if (this.brands.length ?? 0 > 0) {
        return new Promise((resolve) => resolve());
      }
      return GetBrands().then((res) => {
        this.brands = res.data!;
      });
    },
    setModels(brandId: string): Promise<void> {
      if (
        this.models?.length > 0 &&
        this.models?.find((x) => x.brandId === brandId)
      ) {
        return new Promise((resolve) => resolve());
      }
      return GetModels(brandId).then((res) => {
        this.models.push(...res.data!);
      });
    },
    setTrims(modelId: string): Promise<void> {
      return GetTrimsByModelId(modelId).then((res) => {
        this.Trims = res.data!;
      });
    },
  },
  getters: {
    isMobile() {
      var width = window.innerWidth;
      return width < 768;
    },
    getCarBrands() {
      return (search: string = ""): Brand[] =>
        this.brands.filter(
          (f) =>
            (f.isCar && f.title.includes(search)) || f.slug.includes(search)
        );
    },
    getMotorBrands() {
      return (search: string = ""): Brand[] =>
        this.brands.filter(
          (f) =>
            (f.isCar == false && f.title.includes(search)) ||
            f.slug.includes(search)
        );
    },
    getBrandBySlug() {
      return (slug: string): Brand =>
        this.brands.filter((f) => f.slug == slug)[0];
    },
    getModelBySlug() {
      return (slug: string): Model =>
        this.models.filter((f) => f.slug == slug)[0];
    },
    getBrandById() {
      return (id: string): Brand =>
        this.brands.filter((f) => f.id == id)[0];
    },
    getModelById() {
      return (id: string): Model =>
        this.models.filter((f) => f.id == id)[0];
    },
    getTrimById() {
      return (id: string): Trim | null =>
        this.Trims.filter((f) => f.id == id)[0];
    },
    getModels() {
      return (search: string, brands: string[] = []): Model[] =>
        this.models.filter(
          (f) =>
            (f.title.includes(search) || f.slug.includes(search)) &&
            brands.includes(f.brandId)
        );
    },
    getTrims() {
      return (search: string): Trim[] =>
        this.Trims.filter(
          (f) => f.title.includes(search) || f.englishTitle.includes(search)
        );
    },
  },
});
