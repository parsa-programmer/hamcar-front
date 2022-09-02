<template>
  <div class="profile__content">
    <Head>
      <Title>پیام ها</Title>
    </Head>
    <client-only>
      <account-messages-mobile-data v-if="isMobile" />
      <template v-else>
        <account-top-bar :is-show-cards="false" />
        <div class="chat-wrapper">
          <div class="wrapper__header d-mobile-none">
            <div
              class="
                row
                align-items-center
                justify-content-center
                main__info
                gap-0_5
              "
            >
              <icons-gear
                hash-color="var(--color-black-200)"
                :width="24"
                :height="24"
              />
              چت همکار
            </div>
            <div class="header__info">
              <div class="info">
                <template v-if="chatStore.selectedGroup">
                  <h3>{{ chatStore.selectedGroup.title }}</h3>
                  <span>آفلاین</span>
                </template>
                <template v-else>
                  <h3> </h3>
                  <span> </span>
                </template>
              </div>
              <div class="actions" v-if="chatStore.selectedGroup">
                <icons-phone
                  :width="22"
                  hash-color="var(--color-black)"
                  :height="22"
                />

                <div
                  class="actions__more"
                  v-click-outside="() => (showDeleteAction = false)"
                >
                  <svg
                    width="4"
                    height="22"
                    viewBox="0 0 4 22"
                    class="cursor-pointer"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="showDeleteAction = !showDeleteAction"
                  >
                    <circle cx="2" cy="2" r="2" fill="var(--color-black)" />
                    <circle cx="2" cy="11" r="2" fill="var(--color-black)" />
                    <circle cx="2" cy="20" r="2" fill="var(--color-black)" />
                  </svg>
                  <ul class="menu" v-show="showDeleteAction">
                    <li class="row" @click="isOpenDeletePopup = true">
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.1259 14.8372C1.18566 15.1059 1.24309 15.366 1.2987 15.6178C1.61966 17.0714 1.87978 18.2494 2.17557 19.2264C2.52129 20.3684 2.89106 21.1448 3.38872 21.6988C4.35505 22.7747 6.02351 23.25 10 23.25C13.9765 23.25 15.6449 22.7747 16.6113 21.6988C17.1089 21.1448 17.4787 20.3684 17.8244 19.2264C18.1202 18.2494 18.3803 17.0714 18.7013 15.6179C18.7569 15.3661 18.8143 15.106 18.8741 14.8372C19.6576 11.3137 19.1667 9.44488 17.8886 8.37512C17.2135 7.81002 16.244 7.39657 14.9154 7.12899C13.5888 6.86182 11.9556 6.75 10 6.75C8.04435 6.75 6.41116 6.86182 5.08463 7.12899C3.75603 7.39657 2.78651 7.81002 2.11139 8.37512C0.833353 9.44488 0.342414 11.3137 1.1259 14.8372Z"
                          stroke="#85858F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 12V18M6 12V18M14 12V18"
                          stroke="#85858F"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.0001 2.07058C15.6539 2.33516 18.1084 3.29618 19.5158 4.14321C19.989 4.428 20.1417 5.04247 19.8569 5.51566C19.5721 5.98886 18.9577 6.14158 18.4845 5.85679C17.1809 5.07224 14.4556 4 10.0001 4C5.52988 4 2.72875 5.0786 1.54035 5.84152C1.0756 6.13988 0.456969 6.00499 0.158607 5.54023C-0.139756 5.07548 -0.00486638 4.45685 0.45989 4.15848C1.8081 3.29297 4.33316 2.3338 8.00012 2.07024V2C8.00012 1.44772 8.44784 1 9.00012 1H11.0001C11.5524 1 12.0001 1.44772 12.0001 2V2.07058Z"
                          fill="#85858F"
                        />
                      </svg>

                      حذف و اتمام چت
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper__content">
            <div class="chat__sidebar">
              <template v-if="chatStore.groupsLoading">
                <div class="chat__item" v-for="item in 5" :key="item">
                  <div class="w-full">
                    <h-skeletor width="100%" height="40px" />
                  </div></div
              ></template>
              <div
                :class="[
                  'chat__item',
                  { active: item.groupId == chatStore.selectedGroup?.groupId },
                ]"
                v-for="item in chatStore.groups.filter(
                  (f) => f.lastMessage != null
                )"
                :key="item.groupId"
                @click="GetChats(item)"
              >
                <h-image
                  :src="
                    GetBitMapAdvertImage(item.advertisementId, item.imageName)
                  "
                />
                <div class="item__body">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.lastMessage }}</p>
                </div>
                <span class="text__description time" v-if="item.lastMessage">{{
                  TimeAgo(item.lastMessageDate)
                }}</span>
                <span
                  class="have__new__message font-6 color-white"
                  v-if="item.haveNewMessage"
                  >جدید</span
                >
              </div>
            </div>
            <div
              :class="['chat__body', { no__content: !chatStore.selectedGroup }]"
            >
              <div class="no__content__wrapper" v-if="!chatStore.selectedGroup">
                <button>یک گفت و گو را آغاز کنید!</button>
              </div>
              <template v-if="chatStore.selectedGroup">
                <account-messages-content />
                <account-messages-send-message />
              </template>
            </div>
          </div>
        </div>
        <loadings-full-loading v-if="loading" />
        <h-delete-popup
          title="حذف چت"
          description="آیا از حذف این چت مطمئن هستید؟ مخاطب نیز امکان ادامه چت را نخواهد داشت."
          @accepted="deleteChat"
          v-model="isOpenDeletePopup"
        >
        </h-delete-popup>
      </template>
    </client-only>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref } from "#imports";
import { Ref } from "vue";
import { ChatGroupDto } from "~~/models/chats/Chat.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { DeleteGroup, GetGroups } from "~~/services/chat.service";
import { UseChatStore } from "~~/stores/chat.store";
import { UseUtilStore } from "~~/stores/util.store";
import { TimeAgo } from "~~/utilities/dateUtil";
import { GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

definePageMeta({
  layout: "account-layout",
});
const chatStore = UseChatStore();
const utilStore = UseUtilStore();
const route = useRoute();
const router = useRouter();
const toast = useToast();

const GetChats = async (item: ChatGroupDto) => {
  item.haveNewMessage = false;
  chatStore.setChats(item);
};
const showDeleteAction = ref(false);
const isOpenDeletePopup = ref(false);
const loading = ref(false);
const isMobile = ref(false);

const deleteChat = async () => {
  loading.value = true;
  var res = await DeleteGroup(chatStore.selectedGroup?.groupId ?? "");
  if (res.isSuccess) {
    chatStore.groups = chatStore.groups.filter(
      (f) => f.groupId != chatStore.selectedGroup?.groupId
    );
    chatStore.selectedGroup = null;
    chatStore.chats = [];
    toast.showToast("چت با موفقیت حذف شد");
  }
  loading.value = false;
};
onMounted(async () => {
  isMobile.value = utilStore.isMobile;
  await chatStore.SetGroups();
  chatStore.newMessageCount = 0;
  var id = route.query.id;
  if (id?.toString()) {
    if (isMobile.value) {
      
      await router.push("/account/messages");
      await router.push("/account/messages/" + id);
    } else {
      var group = chatStore.groups.find((f) => f.groupId == id);
      if (group) {
        chatStore.setChats(group);
      }
    }
  }
});
onUnmounted(() => {
  chatStore.selectedGroup = null;
});
</script>
  
  <style scoped>
.have__new__message {
  position: absolute;
  right: 1px;
  top: 2px;
  background: var(--color-error);
  border-radius: 8px;
  padding: 2px;
  font-size: 10px !important;
}
.wrapper__header {
  background: var(--color-gray-300);
  padding: 0.7rem 2rem;
  border-radius: 18px 18px 0px 0px;
  display: flex;
  justify-content: space-between;
}
.main__info {
  flex-grow: 1;
  justify-content: start;
  color: var(--color-black-200);
  width: 44.5%;
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
  position: relative;
}
.main__info::after {
  content: "";
  position: absolute;
  left: -1px;
  width: 2px;
  height: 80%;
  background: var(--color-gray-400);
}
.header__info h3 {
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
}
.header__info span {
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-black-200);
}
.header__info .actions {
  display: flex;
  gap: 2rem;
  align-self: center;
  position: relative;
  top: 5px;
}
.header__info {
  flex-grow: 2;
  width: 65%;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
}
.wrapper__content {
  background: var(--color-white);
  height: 617px;
  border: 2px solid var(--color-gray-400);
  border-top: none;
  border-radius: 0 0px 18px 18px;
  display: flex;
}
.chat__sidebar {
  border-left: 2px solid var(--color-gray-300);
  flex-grow: 1;
  width: 45%;
  overflow: auto;
}
.chat__item:first-child {
  margin-top: 12px;
}
.chat__item {
  display: flex;
  position: relative;
  gap: 0.5rem;
  position: relative;
  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: all ease 0.3s;
}
.chat__item:hover {
  opacity: 0.8;
}
.chat__item.active {
  background: var(--color-gray-300);
}
.item__body {
  display: flex;
  flex-direction: column;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
.chat__item img {
  width: 72px;
  height: 48px;
  border-radius: 8px;
}
.item__body p {
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-black-200);
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.chat__item .time {
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  position: absolute;
  left: 30px;
}
/* //////////////// */

.chat__body {
  flex-grow: 2;
  width: 65%;
  display: flex;
  position: relative;
}
.no__content {
  justify-content: center;
  align-items: center;
}
.no__content__wrapper button {
  padding: 1.1rem 67px;
  border: 2px solid var(--color-gray-600);
  border-radius: 14px;
  align-self: center;
  cursor: pointer;
  background: transparent;
  color: var(--color-gray-600);
}
.actions__more {
  position: relative;
}
.actions__more .menu {
  position: absolute;
  background: var(--color-white);
  padding: 1rem 1rem;
  top: 100%;
  left: 100%;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-gray-600);
  width: 217px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 0px 12px 12px 12px;
  z-index: 100;
}
.actions__more .menu li {
  cursor: pointer;
  align-items: center;
  transition: all ease 0.2s;
}
.actions__more .menu li:hover {
  opacity: 0.7;
}
</style>