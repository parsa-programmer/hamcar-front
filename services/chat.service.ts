import {
  ChatGroupDto,
  ChatMessageDto,
  SendChatMessage,
  SendChatMessageResponseDto,
} from "~~/models/chats/Chat.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { FetchApi } from "~~/utilities/customFetchApi";

export const SendMessage = (
  command: SendChatMessage
): Promise<IApiResponse<SendChatMessageResponseDto>> => {
  return FetchApi("/chat", {
    body: JSON.stringify(command),
    method: "POST",
  });
};
export const GetNewMessageCount = (): Promise<IApiResponse<number>> => {
  return FetchApi("/chat/newMessageCount");
};
export const GetGroups = (): Promise<IApiResponse<ChatGroupDto[]>> => {
  return FetchApi("/chat");
};

export const GetMessages = (
  groupId: string
): Promise<IApiResponse<ChatMessageDto[]>> => {
  return FetchApi(`/chat/${groupId}`);
};

export const DeleteGroup = (
  groupId: string
): Promise<IApiResponse<undefined>> => {
  return FetchApi(`/chat?groupId=${groupId}`, {
    method: "DELETE",
  });
};
