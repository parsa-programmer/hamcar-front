export class CreateTransactionsCommand {
  constructor(
    public orderId: string | undefined,
    public orderType: TransactionOrderType,
    public planId: number,
    public successCallBack: string,
    public errorCallBack: string
  ) {}
}

export enum TransactionOrderType {
  personalPlan = "personalPlan",
  nardeban = "nardeban",
  advertisementPlan = "advertisementPlan",
  exhibitionPlan = "exhibitionPlan",
}
