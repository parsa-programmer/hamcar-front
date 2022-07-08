import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const SendBugReport = (
  command: SenBugReportCommand
): Promise<IApiResponse<undefined>> => {
  return FetchApi(
    "/bugReport",
    {
      body: command,
      method: "post",
    },
    {
      setToken: true,
    }
  );
};

interface SenBugReportCommand {
  title: string;
  description: string;
  reportFor: BugReportFor;
  linkId: string;
}
export enum BugReportFor {
  carPrice = "carPrice",
  review = "review",
  advertisement = "advertisement",
}
