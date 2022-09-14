import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import { group } from "console";
import { defineStore } from "pinia";
import { ToastType } from "~~/composables/useToast";
import { ChatGroupDto, ChatMessageDto } from "~~/models/chats/Chat.Models";
import { AlertType } from "~~/models/utilities/AlertType";
import {
  GetGroups,
  GetMessages,
  GetNewMessageCount,
  SendMessage,
} from "~~/services/chat.service";

const defaultState = () => ({
  connection: null as HubConnection | null,
  selectedGroup: null as ChatGroupDto | null,
  chats: [] as ChatMessageDto[],
  groups: [] as ChatGroupDto[],
  loading: false,
  groupsLoading: false,
  newMessageCount: 0 as number,
});
export const UseChatStore = defineStore("chatStore", {
  state: defaultState,
  getters: {
    activeGroupCounts(): number {
      return this.groups.filter((f) => f.lastMessage != null).length;
    },
  },
  actions: {
    async initConnection() {
      if (this.connection) {
        return;
      }
      const toast = useToast();
      const cookie = useCookie("token");

      var messageCount = await GetNewMessageCount();
      this.newMessageCount = messageCount.data ?? 0;
      const connection = new HubConnectionBuilder()
        .withUrl(`http://test13.ir/chatEndpoint`, {
          accessTokenFactory: () => cookie.value,
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Critical)
        .build();

      connection.on("ReceiveMessage", (data: any) => {
        if (this.selectedGroup?.groupId != data.group.groupId) {
          this.newMessageCount += 1;
          this.groups.find(
            (f) => f.groupId == data.group.groupId
          )!.haveNewMessage = true;
        } else {
          this.chats.push({
            groupId: data.group.groupId,
            creationDate: new Date(),
            id: "123",
            isSeen: false,
            messageText: data.message,
            userId: "123",
          });
        }
      });
      connection.on("CreateGroup", (group: any) => {
        toast.showToast("یک گفتوگوی جدید آغاز شد", ToastType.info);
        this.newMessageCount += 1;
      });

      connection.start();
      this.connection = connection;
    },
    async setChats(group: ChatGroupDto) {
      this.selectedGroup = group;
      this.chats = [];
      this.loading = true;
      var res = await GetMessages(group.groupId);
      this.chats = res.data ?? [];
      this.loading = false;
    },
    async SetGroups() {
      this.groupsLoading = true;
      var res = await GetGroups();
      this.groups = res.data ?? [];
      this.groupsLoading = false;
    },
    async sendMessage(message: string, userId: string) {
      this.loading = true;
      var res = await SendMessage({
        advertisementId: this.selectedGroup!.advertisementId,
        groupId: this.selectedGroup!.groupId,
        message: message,
      });
      if (res.isSuccess) {
        this.chats.push({
          creationDate: new Date(),
          groupId: this.selectedGroup!.groupId,
          isSeen: false,
          messageText: message,
          id: "",
          userId: userId,
        });
      }
      this.loading = false;
    },
  },
});
