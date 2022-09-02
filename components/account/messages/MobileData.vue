<template>
  <div>
    <account-page-title
      class="mt-1"
      title="چت همکار"
      :sub-title="`(${chatStore.activeGroupCounts} گفتوگو)`"
    />
    <div class="w-full" v-if="chatStore.groupsLoading">
      <h-skeletor class="mt-1" type="avatar" />
      <h-skeletor class="mt-1" type="avatar" />
      <h-skeletor class="mt-1" type="avatar" />
      <h-skeletor class="mt-1" type="avatar" />
      <h-skeletor class="mt-1" type="avatar" />
    </div>
    <template v-else>
      <div class="not__content" v-if="chatStore.activeGroupCounts == 0">
        <img src="/img/Message.png" />
        <p>شما هنوز گفت و گویی را آغاز نکردید!</p>
      </div>
      <div v-else>
        <div
          class="chat__item"
          v-for="item in chatStore.groups.filter((f) => f.lastMessage != null)"
          :key="item.groupId"
          @click="GetChats(item)"
        >
          <h-image
            :src="GetBitMapAdvertImage(item.advertisementId, item.imageName)"
          />
          <div class="item__body">
            <h5 class="font-4">{{ item.title }}</h5>
            <p class="text__description font-6">{{ item.lastMessage }}</p>
          </div>
          <span class="text__description time" v-if="item.lastMessage">{{
            TimeAgo(item.lastMessageDate)
          }}</span>
          <span v-if="item.haveNewMessage" class="have__new__message font-6 color-white">جدید</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ChatGroupDto } from "~~/models/chats/Chat.Models";
import { UseChatStore } from "~~/stores/chat.store";
import { TimeAgo } from "~~/utilities/dateUtil";
import { GetBitMapAdvertImage } from "~~/utilities/imageUtil";

const chatStore = UseChatStore();
const router = useRouter();

const GetChats = async (group: ChatGroupDto) => {
  group.haveNewMessage = false;
  await router.push("/account/messages/" + group.groupId);
};
</script>

<style scoped>
  .have__new__message{
    position: absolute;
    background: var(--color-error);
    padding: .2rem;
    border-radius: 8px;
  }
.not__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  color: var(--color-black-200);
}
.chat__item {
  display: flex;
  margin-top: 13px;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}
.chat__item img {
  width: 88px;
  height: 56px;
  border-radius: 8px;
}
.time {
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  position: absolute;
  left: 0;
}
.item__body p {
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>