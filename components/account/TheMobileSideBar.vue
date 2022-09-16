<template>
  <div :class="['bottom__sheet', { 'bottom__sheet-close': isOpen == false }]">
    <Transition
      enter-active-class="animate__animated  animate__fadeIn animate__faster"
      leave-active-class="animate__animated  animate__fadeOut animate__faster"
    >
      <div
        class="bottom__sheet-background"
        v-if="isOpen"
        @click.self="() => (isOpen = false)"
      ></div>
    </Transition>
    <div class="sheet__wrapper" @click="openSheet">
      <div class="bottom__sheet-botton">
        <account-icons-bottom-sheet-header v-model="isOpen" />
      </div>
      <div class="botton__sheet-content">
        <template v-if="$slots.default">
          <slot />
        </template>
        <template v-else>
          <client-only>
            <div
              class="item verify"
              v-if="
                accountStore.exhibition &&
                (accountStore.exhibition.status ==
                  ExhibitionStatus.shouldCompleteAccount ||
                  accountStore.exhibition.status == ExhibitionStatus.rejected)
              "
            >
              <nuxt-link class="item-icon" to="/account/exhibition/verify">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00146 15.5902C8.98425 11.6263 12.6385 8.98207 16.6514 10.0573C20.6643 11.1326 22.5069 15.2497 21.3761 19.174"
                    stroke="#02ADA6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.5007 16.801C12.0241 14.7092 13.7872 13.2686 15.6633 13.7713C17.5393 14.2739 18.346 16.4032 17.7534 18.4764"
                    stroke="#02ADA6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.99069 17.353C2.95694 16.8166 2.5172 16.3918 1.97972 16.3918C1.41221 16.3918 0.956774 16.867 0.991785 17.4334C1.46491 25.0879 3.91248 27.5355 11.567 28.0086C12.1334 28.0436 12.6086 27.5882 12.6086 27.0207C12.6086 26.4832 12.1838 26.0434 11.6474 26.0097C10.3463 25.9278 9.2447 25.7878 8.30764 25.5796C6.68587 25.2192 5.68212 24.6813 5.00059 23.9998C4.31906 23.3183 3.78122 22.3145 3.4208 20.6927C3.21254 19.7557 3.07258 18.6541 2.99069 17.353ZM26.9099 17.353C26.9436 16.8166 27.3834 16.3918 27.9208 16.3918C28.4883 16.3918 28.9438 16.867 28.9088 17.4334C28.4356 25.0879 25.9881 27.5355 18.3335 28.0086C17.7671 28.0436 17.2919 27.5882 17.2919 27.0207C17.2919 26.4832 17.7167 26.0434 18.2531 26.0097C19.5542 25.9278 20.6558 25.7878 21.5929 25.5796C23.2147 25.2192 24.2184 24.6813 24.9 23.9998C25.5815 23.3183 26.1193 22.3145 26.4798 20.6927C26.688 19.7557 26.828 18.6541 26.9099 17.353ZM29.0004 14.1056C29.0004 14.0871 29.0004 14.0686 29.0004 14.0501C29.0004 14.0316 29.0004 14.0131 29.0004 13.9946V14.1056ZM28.9088 10.6668C28.9438 11.2333 28.4883 11.7084 27.9208 11.7084C27.3834 11.7084 26.9436 11.2837 26.9099 10.7472C26.828 9.44614 26.688 8.34453 26.4798 7.40747C26.1193 5.7857 25.5815 4.78195 24.9 4.10042C24.2184 3.41889 23.2147 2.88105 21.5929 2.52063C20.6558 2.31237 19.5542 2.17241 18.2531 2.09053C17.7167 2.05677 17.2919 1.61703 17.2919 1.07955C17.2919 0.512037 17.7671 0.0566049 18.3335 0.0916158C25.9881 0.56474 28.4356 3.01231 28.9088 10.6668ZM2.99069 10.7472C2.95694 11.2837 2.5172 11.7084 1.97972 11.7084C1.41221 11.7084 0.956774 11.2333 0.991785 10.6668C1.46491 3.01233 3.91248 0.564748 11.567 0.0916182C12.1334 0.0566067 12.6086 0.512039 12.6086 1.07955C12.6086 1.61703 12.1838 2.05677 11.6474 2.09053C10.3463 2.17241 9.2447 2.31237 8.30764 2.52063C6.68587 2.88105 5.68212 3.41889 5.00059 4.10042C4.31906 4.78195 3.78122 5.7857 3.4208 7.40747C3.21254 8.34453 3.07258 9.44614 2.99069 10.7472ZM14.9503 0L14.9724 3.01618e-06H14.9282L14.9503 0Z"
                    fill="#02ADA6"
                  />
                </svg>
              </nuxt-link>
              احراز هویت
            </div>
          </client-only>
          <div :class="['item', { active: path == '/account' }]">
            <nuxt-link class="item-icon" to="/account">
              <icons-menu />
            </nuxt-link>
            صفحه اصلی
          </div>
          <div :class="['item', { active: path == '/account/adverts' }]">
            <nuxt-link class="item-icon" to="/account/adverts">
              <account-icons-adverts />
            </nuxt-link>
            آگهی های من
          </div>
          <div :class="['item', { active: path == '/account/saved' }]">
            <nuxt-link class="item-icon" to="/account/saved">
              <icons-save hash-color="#CD6AFF" :width="23" :height="28" />
            </nuxt-link>
            ذخیره شده ها
          </div>
          <div :class="['item', { active: path == '/account/notify' }]">
            <nuxt-link to="/account/notify" class="item-icon">
              <icons-notification
                hash-color="#0FE784"
                :width="23"
                :height="28"
              />
            </nuxt-link>
            گوش به زنگ
          </div>
          <div :class="['item', { active: path == '/account/parking' }]">
            <nuxt-link to="/account/parking" class="item-icon">
              <icons-parking hash-color="#F724D5" :width="28" :height="28" />
            </nuxt-link>
            پارکینگ
          </div>
          <div :class="['item', { active: path == '/account/messages' }]">
            <nuxt-link to="/account/messages" class="item-icon">
              <account-icons-comment />
            </nuxt-link>
            پیام های من
          </div>
          <div :class="['item', { active: path == '/account/transactions' }]">
            <nuxt-link to="/account/transactions" class="item-icon">
              <icons-wallet :width="28" :height="28" hash-color="#FFD600" />
            </nuxt-link>
            لیست تراکنش ها
          </div>
          <div :class="['item', { active: path == '/account/notes' }]">
            <nuxt-link to="/account/notes" class="item-icon">
              <icons-edit :width="28" :height="28" hash-color="#5B6CFF" />
            </nuxt-link>
            یادداشت ها
          </div>
          <div :class="['item', { active: path == '/account/packages' }]">
            <nuxt-link to="/account/packages" class="item-icon">
              <icons-megaphone hash-color="#07DCD5" />
            </nuxt-link>
            پکیج ها
          </div>
          <div class="item">
            <nuxt-link class="item-icon">
              <icons-exit :width="26" :height="28" />
            </nuxt-link>
            خروج
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { useAccountStore } from "~~/stores/account.store";

const accountStore = useAccountStore();
const isOpen: Ref<boolean> = ref(false);
const route = useRoute();
const path = ref(route.path);

watch(
  () => route.path,
  (val) => {
    setTimeout(() => {
      isOpen.value = false;
      path.value = val;
    }, 100);
  }
);
const openSheet = () => {
  if (isOpen.value == false) {
    isOpen.value = true;
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .bottom__sheet {
    display: block !important;
  }
}
@media screen and (max-width: 428px) {
  .bottom__sheet-close .bottom__sheet-botton svg {
    top: -1% !important;
  }
}
@media screen and (max-width: 347px) {
  .bottom__sheet-close .bottom__sheet-botton svg {
    top: -0.5% !important;
  }
}
.item.active .item-icon {
  background: var(--color-gray-200);
}
.item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-black-200);
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  flex-grow: 1;
  width: 70px;
  text-align: center;
}
.item-icon {
  border: 2px solid var(--color-gray-200);
  background: transparent;
  border-radius: 20px;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botton__sheet-content {
  padding: 2.5rem 26px;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-height: 600px;
  overflow: auto;
}
.bottom__sheet-botton svg {
  top: -23px;
  width: 100%;
  position: absolute;
}
.bottom__sheet-close {
  z-index: 10 !important;
  height: fit-content !important;
  bottom: 50px !important;
}
.bottom__sheet {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}
.bottom__sheet-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0f0f1075;
  top: 0;
  right: 0;
  z-index: 200;
}
.sheet__wrapper {
  background: var(--color-white);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: fit-content;
  z-index: 300;
  transition: all ease 0.2s;
  border-radius: 20px 20px 0px 0px;
}
.bottom__sheet-close .botton__sheet-content {
  opacity: 0;
  padding-top: 5rem !important;
}
.bottom__sheet-close .sheet__wrapper {
  transform: translateY(95%);
  background: transparent !important;
}
.verify {
  position: relative;
}
.verify::after {
  content: " ";
  background: var(--color-error);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  top: 15px;
  right: 2.1rem;
}
</style>