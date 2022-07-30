import { ProssesAsync } from "~~/utilities/ProssesAsync";
import {
  getCities as GetCities,
  getProvinces as GetProvin,
} from "~~/services/iranDivision.service";
import { IApiResponse } from "~~/models/IApiResponse";
import { City, ProvinceModel } from "~~/models/iranDivision/province";
import { SelectData } from "~~/models/utilities/SelectData";

export const useIranDivision = () => {
  const loading = ref(false);

  const getProvinces = async (): Promise<SelectData[]> => {
    var result = await ProssesAsync<IApiResponse<ProvinceModel[]>>(
      () => GetProvin(),
      loading
    );
    var province = result.data ?? [];

    var selectData = province.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    });

    return selectData;
  };

  const getCities = async (provinceId: number): Promise<SelectData[]> => {
    var result = await ProssesAsync<IApiResponse<City[]>>(
      () => GetCities(provinceId),
      loading
    );
    var cities = result.data ?? [];
    var selectData = cities.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    });
    return selectData;
  };

  return { getProvinces, getCities, loading };
};
