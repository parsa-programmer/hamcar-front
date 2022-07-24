import { GhestiPaymentType } from "../enums/GhestiPaymentType";

export class Ghesti {
constructor(
public tedadeGhestHa: string,
public pishPardakht: string ,
public ghestiPaymentType: GhestiPaymentType,
public amountPricePerGhest: string,
public deliveryDate: number
) { }
}
