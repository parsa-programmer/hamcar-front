import { Color } from "csstype";
import { Fuel } from "./enums/Fuel";
import { MotorType } from "./enums/MotorType";

export class MotorCycleAdvertisementDetail {
  constructor(public MotorType: MotorType, public Fuel: Fuel, Color: Color) {}
}
