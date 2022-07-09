import { GhestiPaymentType } from "../enums/GhestiPaymentType";

export class Ghesti {
constructor(
public tedadeGhestHa: number,
public pishPardakht: number,
public ghestiPaymentType: GhestiPaymentType,
public amountPricePerGhest: number,
public deliveryDate: number
) { }
}
