import { Color } from "csstype";
import { BodyCondition } from "../enums/BodyCondition";
import { CarType } from "../enums/CarType";

export class CarAdvertisementDetail {
  constructor(
    public bodyCondition: BodyCondition,
    public exteriorColor: Color,
    public interiorColor: Color,
    public carType: CarType
  ) {}
}
