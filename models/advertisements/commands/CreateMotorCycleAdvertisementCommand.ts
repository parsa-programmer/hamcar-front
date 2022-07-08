import { Address } from "~~/models/utilities/Address";
import { AdvertisementPrice } from "../AdvertisementPrice";
import { GearBox } from "../enums/GearBox";
import { MotorCycleAdvertisementDetail } from "../MotorCycleAdvertisementDetail";

export class CreateMotorCycleAdvertisementCommand {
  constructor(
    public BrandId: string,
    public ModelId: string,
    public YearId: string,
    public TrimId: string,
    public Description: string,
    public Mileage: number,
    public GearBox: GearBox,
    public Address: Address,
    public Price: AdvertisementPrice,
    public MotorCycleDetail: MotorCycleAdvertisementDetail
  ) {}
}
