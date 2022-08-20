import { FetchApi } from "~/utilities/customFetchApi";
import {
  CarPrice,
  CarPriceDetail,
  CarPriceMainPage,
} from "~~/models/carPrices/CarPriceModels";
import { CarPriceSearchOn } from "~~/models/carPrices/CarPriceSearchOn";
import { FilterResult } from "~~/models/IApiResponse";

export async function GetMainPage(
  search: string = "",
  searchOn: CarPriceSearchOn = CarPriceSearchOn.همه
): Promise<CarPriceMainPage[]> {
  var result = await FetchApi<FilterResult<CarPriceMainPage>>(
    `/CarPrice?search=${search}&searchOn=${searchOn.toString()}`
  );
  return result.data!.data!;
}

export async function GetBySlug(slug: string): Promise<CarPrice | undefined> {
  var result = await FetchApi<CarPrice>(`/CarPrice/${slug}`);
  return result.data;
}

export async function GetByBrand(
  brand: string,
  model: string | null,
  trim: string | null
): Promise<CarPriceMainPage | undefined> {
  var result = await FetchApi<CarPriceMainPage>(
    `/CarPrice/byBrand/${brand}`,
    {
      params: {
        modelSlug: model,
        trim,
      },
    },
    {
      ignoreErrors: true,
    }
  );
  return result.data;
}
