<template>
  <div class="chat__content" id="chat__content">
    <div class="security__alert">
      <div class="chat__center">
        ! توجه: اطلاعات شخصی خود را برای دیگران ارسال نکنید، درصورت مشاهده
        هرگونه تخلف آن را گزارش دهید..
      </div>
      <p class="text-center">
        {{
          getPersianDate(
            chatStore.selectedGroup?.createDate ?? new Date(),
            "M/dd"
          )
        }}
      </p>
    </div>
    <div class="chats">
      <div
        v-for="item in chatStore.chats"
        :class="item.userId == authData.user.id ? 'chat__you' : 'chat__other'"
        :key="item.id"
      >
        <div class="content">
          <p>
            {{ item.messageText }}
          </p>
          <span>
            <svg
              v-if="
                item.isSeen &&
                item.userId == authData.user.id &&
                utilStore.isMobile == false
              "
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.56201 1L6.39874 5.68974L5.49658 4.99609"
                stroke="#ABADB3"
                stroke-linecap="round"
              />
              <path
                d="M6.39893 1L3.23565 5.68974L1.477 4.50352"
                stroke="#ABADB3"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="
                item.isSeen &&
                item.userId == authData.user.id &&
                utilStore.isMobile
              "
            >
              <path
                d="M15 4.19141L10.074 11.418L8.67486 10.353"
                stroke="#007AFF"
                stroke-width="1.84615"
                stroke-linecap="round"
              />
              <path
                d="M8.55469 4.41406L3.97356 11.1762L1.6935 9.131"
                stroke="#007AFF"
                stroke-width="1.84615"
                stroke-linecap="round"
              />
            </svg>

            {{ GetTime(new Date(item.creationDate)) }}
          </span>
        </div>
      </div>
      <div
        class="chat__you row justify-content-center"
        v-if="chatStore.loading"
      >
        <loadings-spinner class="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { authStore } from "~~/stores/auth.store";
import { UseChatStore } from "~~/stores/chat.store";
import { UseUtilStore } from "~~/stores/util.store";
import { getPersianDate, GetTime } from "~~/utilities/dateUtil";

const chatStore = UseChatStore();
const utilStore = UseUtilStore();
const authData = authStore();

watch(
  () => chatStore.loading,
  (val) => {
    if (val == false) {
      if (utilStore.isMobile) {
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 100);
      } else {
        setTimeout(() => {
          var content = document.getElementById("chat__content");
          content!.scrollTop = content!.scrollHeight;
        }, 100);
      }
    }
  }
);
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .chat__you .content {
    background: rgba(172, 212, 255, 0.3) !important;
  }
  .chats {
    padding: 0 0.5rem !important;
  }
  .security__alert .chat__center {
    background: var(--color-gray-200);
    border: none;
    text-align: justify;
  }
  .security__alert {
    width: 100% !important;
  }
  .security__alert p {
    font-family: var(--t4-font-family) !important;
    font-size: var(--t4-font-size) !important;
    color: var(--color-gray-600) !important;
    margin-bottom: 1.5rem !important;
  }
}
.chat__you {
  margin-bottom: 0.5rem;
}
.chat__content {
  padding-top: 1.5rem;
  margin-bottom: 10rem;
  overflow: auto;

  scroll-behavior: smooth;
}
.chat__content::-webkit-scrollbar {
  width: 9px;
}
.chat__content::-webkit-scrollbar-track {
  background: var(--color-white);
}

.chat__content::-webkit-scrollbar-thumb {
  background: var(--color-gray-400);
  border-radius: 10px;
}
.security__alert {
  color: var(--color-black-200);
  width: 80%;
  margin: auto;
}
.security__alert p {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  margin-top: 0.5rem;
  margin-bottom: 14px;
}

.chat__center {
  padding: 15px 1.5rem;
  border: 1px solid var(--color-gray-400);
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  border-radius: 12px;
  width: 100%;
}
.chats {
  padding: 0 2rem;
}
.chat__yout {
  margin-bottom: 0.5rem;
}
.chat__you .content {
  background: var(--color-gray-200);
  border-radius: 12px 12px 0px 12px;
  width: fit-content !important;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  padding: 12px 1rem 0 2rem;
}
.chat__you .content span {
  font-family: var(--t6-font-family);
  font-size: 12px;
  color: var(--color-gray-600);
}

.chat__other {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}
.chat__other .content {
  background: var(--color-gray-200);
  border-radius: 12px 12px 12px 0px;
  width: fit-content !important;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  padding: 12px 1rem 0 2rem;
}
.chat__other .content span {
  font-family: var(--t6-font-family);
  font-size: 12px;
  color: var(--color-gray-600);
}
</style>