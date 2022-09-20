import { Color } from "csstype";
import { AdvertisementFilterParams } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementFilterOrderBy } from "~~/models/advertisements/enums/AdvertisementFilterOrderBy";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import { BodyType } from "~~/models/advertisements/enums/BodyType";
import { CarFuel } from "~~/models/advertisements/enums/CarFuel";
import { CylinderCount } from "~~/models/advertisements/enums/CylinderCount";
import { Differential } from "~~/models/advertisements/enums/Differential";
import { EngineVolume } from "~~/models/advertisements/enums/EngineVolume";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";
import { ModelCarType } from "~~/models/advertisements/enums/ModelCarType";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import { Brand } from "~~/models/utilities/Brand";
import { Country } from "~~/models/utilities/Country";
import { Model } from "~~/models/utilities/Model";
import { GetByFilter } from "~~/services/advertisement.service";
import { UseUtilStore } from "~~/stores/util.store";
import { RemoveEmptyProps } from "~~/utilities/objectUtils";

export const useAdverFilter = () => {
  const route = useRoute();
  const router = useRouter();
  const utilStore = UseUtilStore();

  const url = "/search";
  if (
    route.path.toLowerCase().startsWith("/car") ||
    route.path.toLowerCase().startsWith("/motor")
  ) {
    route.path.toLowerCase().startsWith("/car") ? "/car" : "/motor";
  }
  const { slug } = route.params;
  if (slug && slug[1]) {
    router.push(url);
  }
  var _slug = slug ?? [];
  var params = (_slug[0] ?? "").split("-");
  const brand: string | null = params[0] ?? null;
  const model: string | null = params[1] ?? null;
  const trim = params[2];

  const isCarFilter = () => {
    return url === "/car";
  };
  const justGhesti = async (val: boolean) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        justGhesti: `${val}`,
      },
    });
  };
  const justHaveImage = async (val: boolean) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        haveImage: `${val}`,
      },
    });
  };
  const justHavePrice = async (val: boolean) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        havePrice: `${val}`,
      },
    });
  };
  const changeYear = async (
    startYear: string | null,
    endYear: string | null
  ) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        startYear,
        endYear,
      },
    });
  };
  const changePrice = async (startPrice: string, endPrice: string) => {
    console.log(endPrice, startPrice);
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        startPrice: startPrice,
        endPrice: endPrice,
      },
    });
  };
  const changeMilage = async (startMileage: string, endMileage: string) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        startMileage,
        endMileage,
      },
    });
  };
  const changeDifferential = async (differential: Differential[]) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        differential,
      },
    });
  };
  const changeQueryParams = async (
    data: any,
    key: string,
    isRemoveBrandAndModel: boolean = false
  ) => {
    await router.push({
      path: isRemoveBrandAndModel ? url : route.path,
      query: {
        ...route.query,
        [key]: data,
      },
    });
  };
  const changeOrderBy = async (orderBy: AdvertisementFilterOrderBy) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        orderBy,
      },
    });
  };
  const removeBrandFilter = async () => {
    await router.push({
      path: `${url}`,
      query: route.query,
    });
  };
  const removeModel = async () => {
    await router.push({
      path: `${url}/${brand}`,
      query: {
        ...route.query,
      },
    });
  };

  const changeBrand = async (brand: string) => {
    await router.push(`${url}/${brand}`);
  };
  const removeAllFilters = async () => {
    await router.push(url);
  };
  const changeModel = async (model: string) => {
    await router.push(`${url}/${brand}-${model}`);
  };

  ////////////
  const getBrands = async (
    car: boolean = true,
    search: string
  ): Promise<Brand[]> => {
    await utilStore.setBrands();
    if (car) {
      return utilStore.getCarBrands("");
    } else {
      return utilStore.getMotorBrands("");
    }
  };

  const GetModels = async (
    search: string = "",
    brands: string[] | null = null
  ): Promise<Model[]> => {
    if (brand) {
      var b = utilStore.getBrandBySlug(brand);
      if (b) {
        await utilStore.setModels(b.id);
        return utilStore.getModels(search, [b.id]);
      }
    } else {
      var currentBrands = brands ?? getFilterQueryParams().brand;
      if (currentBrands?.length ?? 0 > 0) {
        var bradIds: string[] = [];
        currentBrands?.map(async (f) => {
          var bran = utilStore.getBrandBySlug(f);
          if (bran) {
            bradIds.push(bran.id);
            await utilStore.setModels(bran.id);
          }
        });
        return utilStore.getModels(search, bradIds);
      }
    }
    return [];
  };

  const getAdverts = (
    pageId: number = 1,
    take: number = 12,
    exhibitionTitle: string | null = null
  ) => {
    return GetByFilter({
      advertisementType: AdvertisementType.car,
      brand:
        brand == null || brand == ""
          ? (route.query.brands as string[] | null) ?? null
          : [brand],
      model:
        model == null || model == ""
          ? (route.query.models as string[] | null) ?? null
          : [model],
      trim,
      year: route.query.year?.toString() ?? null,
      fuel: (route.query.fuel as CarFuel[] | null) ?? null,
      startPrice: route.query.startPrice?.toString() ?? null,
      endPrice: route.query.endPrice?.toString() ?? null,
      pageId: pageId,
      take: take,
      havePrice: (route.query.havePrice as boolean | null) ?? false,
      haveImage: (route.query.haveImage as boolean | null) ?? false,
      justGhesti: (route.query.justGhesti as boolean | null) ?? false,
      city: (route.query.city as string) ?? "",
      province: (route.query.province as string) ?? "",
      differential: (route.query.differential as Differential[] | null) ?? null,
      engineVolume: (route.query.engineVolume as EngineVolume[] | null) ?? null,
      country: (route.query.country as Country[] | null) ?? null,
      startMileage: route.query.startMileage?.toString() ?? null,
      endMileage: route.query.endMileage?.toString() ?? null,
      isPersonalAdvertisement:
        (route.query.isPersonalAdvertisement as boolean | null) ?? false,
      modelType: (route.query.modelType as BodyType[] | null) ?? null,
      gearBox: (route.query.gearBox as GearBox[] | null) ?? null,
      specialCases: (route.query.specialCases as SpecialCases[] | null) ?? null,
      carType: (route.query.carType as ModelCarType[] | null) ?? null,
      colors: (route.query.colors as Color[] | null) ?? null,
      cylinderCount:
        (route.query.cylinderCount as CylinderCount[] | null) ?? null,
      exhibitionTitle:
        (route.query.exhibitionTitle as string | null) ?? exhibitionTitle,
      manufacture: (route.query.manufacture as Manufacture[] | null) ?? null,
      search: (route.query.search as string | null) ?? "",
      startYear: (route.query.startYear as string | null) ?? null,
      endYear: (route.query.endYear as string) ?? null,
      orderBy: (route.query.orderBy as AdvertisementFilterOrderBy) ?? null,
    });
  };
  const getFilterQueryParams = (): AdvertisementFilterParams => {
    var res = {
      advertisementType: AdvertisementType.car,
      brand:
        brand == null || brand == ""
          ? (route.query.brands as string[] | null) ?? null
          : [brand],
      model:
        model == null || model == ""
          ? (route.query.models as string[] | null) ?? null
          : [model],
      trim,
      year: route.query.year?.toString() ?? "",
      fuel: (route.query.fuel as CarFuel[] | null) ?? null,
      startPrice: route.query.startPrice?.toString() ?? "0",
      endPrice: route.query.endPrice?.toString() ?? "5000000000",
      pageId: (route.query.pageId as number | null) ?? 1,
      take: (route.query.take as number | null) ?? 10,
      havePrice: (route.query.havePrice as boolean | null) ?? false,
      haveImage: (route.query.haveImage as boolean | null) ?? false,
      justGhesti: (route.query.justGhesti as boolean | null) ?? false,
      city: (route.query.city as string) ?? "",
      province: (route.query.province as string) ?? "",
      differential: (route.query.differential as Differential[] | null) ?? null,
      engineVolume: (route.query.engineVolume as EngineVolume[] | null) ?? null,
      colors: (route.query.colors as Color[] | null) ?? null,
      country: (route.query.country as Country[] | null) ?? null,
      startMileage: route.query.startMileage?.toString() ?? "0",
      endMileage: route.query.endMileage?.toString() ?? "500000",
      isPersonalAdvertisement:
        (route.query.isPersonalAdvertisement as boolean | null) ?? false,
      modelType: (route.query.modelType as BodyType[] | null) ?? null,
      gearBox: (route.query.gearBox as GearBox[] | null) ?? null,
      specialCases: (route.query.specialCases as SpecialCases[] | null) ?? null,
      carType: (route.query.carType as ModelCarType[] | null) ?? null,
      cylinderCount:
        (route.query.cylinderCount as CylinderCount[] | null) ?? null,
      exhibitionTitle: (route.query.exhibitionTitle as string | null) ?? "",
      manufacture: (route.query.manufacture as Manufacture[] | null) ?? null,
      search: (route.query.search as string | null) ?? "",
      startYear: (route.query.startYear as string | null) ?? "",
      endYear: (route.query.endYear as string) ?? "",
      orderBy: (route.query.orderBy as AdvertisementFilterOrderBy) ?? null,
    };
    if (res.brand) {
      if (typeof res.brand == "string") {
        res.brand = [res.brand];
      }
    }
    if (res.model && res.model != null) {
      if (typeof res.model == "string") {
        res.model = [res.model];
      }
    }
    return res;
  };

  const getFilterCount = (): number => {
    const filter = getFilterQueryParams();
    RemoveEmptyProps(filter);
    //@ts-ignore
    delete filter["take"];
    //@ts-ignore
    delete filter["pageId"];
    //@ts-ignore
    delete filter["orderBy"];
    //@ts-ignore
    delete filter["advertisementType"];

    if (filter.startMileage == "0") {
      //@ts-ignore
      delete filter["startMileage"];
    }
    if (filter.haveImage?.toString() == "false") {
      //@ts-ignore
      delete filter["haveImage"];
    }
    if (filter.havePrice?.toString() == "false") {
      //@ts-ignore
      delete filter["havePrice"];
    }
    if (filter.justGhesti?.toString() == "false") {
      //@ts-ignore
      delete filter["justGhesti"];
    }
    if (filter.startPrice == "0") {
      //@ts-ignore
      delete filter["startPrice"];
    }
    if (filter.endPrice == "5000000000") {
      //@ts-ignore
      delete filter["endPrice"];
    }
    if (filter.endMileage == "500000") {
      //@ts-ignore
      delete filter["endMileage"];
    }
    return Object.keys(filter).length;
  };
  return {
    changeYear,
    changePrice,
    changeMilage,
    getBrands,
    changeBrand,
    changeModel,
    getAdverts,
    GetModels,
    getFilterQueryParams,
    justGhesti,
    justHaveImage,
    justHavePrice,
    changeOrderBy,
    getFilterCount,
    removeAllFilters,
    removeBrandFilter,
    removeModel,
    changeQueryParams,
    brand,
    model,
    trim,
    isCarFilter,
  };
};
