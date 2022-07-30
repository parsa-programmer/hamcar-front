export interface ProvinceModel {
  id: number;
  name: string;
}
export interface City {
  provinceId: number;
  name: string;
}