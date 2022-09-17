import { string } from "yup";

export interface ChassisLandingDto {
  name: string;
  advertCount: number;
}
export interface LandingBrandItemDto {
  isCar: boolean;
  name: string;
  slug: string;
  alphabet: string;
}

export interface LandingBrandsDto {
  brands: LandingBrandItemDto[];
  alphabet: string;
}