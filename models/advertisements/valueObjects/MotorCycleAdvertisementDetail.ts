import { Color } from "../enums/Color";
import { Fuel } from "../enums/Fuel";
import { MotorType } from "../enums/MotorType";

export class MotorCycleAdvertisementDetail {
  constructor(public MotorType: MotorType, public Fuel: Fuel, Color: Color) {}
}
