export class CreateTransactionsCommand {
  constructor(
    public orderId: string | null | undefined,
    public orderType: TransactionOrderType,
    public planId: number | null | undefined,
    public successCallBack: string,
    public errorCallBack: string,
    public nardebanCount: number | null | undefined
  ) {}
}

export enum TransactionOrderType {
  personalPlan = "personalPlan",
  nardeban = "nardeban",
  advertisementPlan = "advertisementPlan",
  exhibitionPlan = "exhibitionPlan",
  changeAdvertisementPlan = "changeAdvertisementPlan",
}
