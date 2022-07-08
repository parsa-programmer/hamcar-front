export interface TransactionFilterData {
  id: number;
  userId: string;
  amount: number;
  orderType: string;
  gateway: string;
  status: string;
  paymentDate: Date;
}
