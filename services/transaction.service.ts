import {
  FilterParams,
  FilterResult,
  IApiResponse,
} from "~~/models/IApiResponse";
import { CreateTransactionsCommand } from "~~/models/transactions/CreateTransactionCommand";
import { TransactionFilterData } from "~~/models/transactions/TransactionsFilterData";
import { FetchApi } from "~~/utilities/customFetchApi";

export const CreateTransaction = (
  command: CreateTransactionsCommand
): Promise<IApiResponse<string>> => {
  return FetchApi("/transaction", {
    body: command,
    method: "post",
  });
};

export const GetTransactions = (
  filterParams: FilterParams
): Promise<IApiResponse<FilterResult<TransactionFilterData>>> => {
  return FetchApi("/transaction",{
    params:filterParams
  });
};
