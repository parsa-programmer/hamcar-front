import { Color } from "../enums/Color";
import { Fuel } from "../enums/Fuel";
import { MotorType } from "../enums/MotorType";

export interface MotorCycleAdvertisementDetail {
  motorType: MotorType;
  fuel: Fuel;
  color: Color;
}
