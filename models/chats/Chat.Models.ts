export interface SendChatMessage {
  message: string | null;
  groupId: string | null;
  advertisementId: string | null;
}
export interface ChatGroupDto {
  groupId: string;
  advertisementId: string;
  imageName: string;
  title: string;
  lastMessage: string;
  haveNewMessage: boolean;
  lastMessageDate: Date;
}
export interface ChatMessageDto {
  id: string;
  creationDate: Date;
  groupId: string;
  userId: string;
  messageText: string;
  isSeen: boolean;
}
export interface SendChatMessageResponseDto {
  createdNewGroup: boolean;
  title: string;
  imagName: string;
  creationDate: Date;
  groupId: string;
}
