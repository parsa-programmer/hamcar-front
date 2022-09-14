<template>
  <aside class="profile__sidebar mobile-card">
    <ul class="sidebar__menu">
      <template v-if="$slots.default">
        <slot />
      </template>
      <template v-else>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account' },
          ]"
          @click="$router.push('/account')"
        >
          <icons-menu
            :width="20"
            :height="20"
            hash-color="var(--color-black)"
          />
          صفحه اصلی
        </li>
        <li
          :class="['sidebar__item']"
          @click="$router.push('/account/exhibition/verify')"
          v-if="
            accountStore.exhibition &&
            (accountStore.exhibition.status ==
              ExhibitionStatus.shouldCompleteAccount ||
              accountStore.exhibition.status == ExhibitionStatus.rejected)
          "
          style="color: #02ada6"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00104 11.637C6.70304 8.80561 9.31324 6.91688 12.1796 7.68491C15.0459 8.45295 16.3621 11.3937 15.5543 14.1968"
              stroke="#02ADA6"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.50024 12.5001C8.87409 11.006 10.1335 9.977 11.4735 10.3361C12.8136 10.6951 13.3897 12.216 12.9664 13.6968"
              stroke="#02ADA6"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.59881 12.9772C2.57023 12.5481 2.2187 12.2084 1.78874 12.2084C1.33468 12.2084 0.970078 12.5888 0.999589 13.0419C1.34918 18.4093 3.09074 20.1509 8.45814 20.5005C8.91124 20.53 9.29162 20.1654 9.29162 19.7113C9.29162 19.2814 8.9519 18.9298 8.52289 18.9012C7.64082 18.8425 6.89335 18.7453 6.25671 18.6038C5.11869 18.3509 4.43523 17.9782 3.97856 17.5215C3.52189 17.0648 3.14918 16.3814 2.89626 15.2433C2.75477 14.6067 2.65759 13.8592 2.59881 12.9772ZM19.3297 12.9772C19.3583 12.5481 19.7098 12.2084 20.1398 12.2084C20.5938 12.2084 20.9584 12.5888 20.9289 13.0419C20.5793 18.4093 18.8378 20.1509 13.4704 20.5005C13.0173 20.53 12.6369 20.1654 12.6369 19.7113C12.6369 19.2814 12.9766 18.9298 13.4056 18.9012C14.2877 18.8425 15.0352 18.7453 15.6718 18.6038C16.8098 18.3509 17.4933 17.9782 17.95 17.5215C18.4066 17.0648 18.7793 16.3814 19.0323 15.2433C19.1737 14.6067 19.2709 13.8592 19.3297 12.9772ZM21 10.575C21 10.562 21.0001 10.5489 21.0001 10.5358C21.0001 10.5227 21 10.5096 21 10.4966V10.575ZM20.9289 8.02969C20.9584 8.48278 20.5938 8.86316 20.1398 8.86316C19.7098 8.86316 19.3583 8.52345 19.3297 8.09444C19.2709 7.21236 19.1737 6.46488 19.0323 5.82824C18.7793 4.69022 18.4066 4.00676 17.95 3.55009C17.4933 3.09342 16.8098 2.72071 15.6718 2.46779C15.0352 2.3263 14.2877 2.22912 13.4056 2.17034C12.9766 2.14176 12.6369 1.79023 12.6369 1.36027C12.6369 0.906211 13.0173 0.541608 13.4704 0.571119C18.8378 0.920707 20.5793 2.66227 20.9289 8.02969ZM2.59881 8.09443C2.57023 8.52345 2.2187 8.86316 1.78874 8.86316C1.33468 8.86316 0.970077 8.48278 0.999588 8.02969C1.34918 2.66227 3.09073 0.920713 8.45814 0.57112C8.91124 0.541609 9.29162 0.906213 9.29162 1.36027C9.29162 1.79023 8.9519 2.14176 8.52289 2.17035C7.64082 2.22912 6.89335 2.32631 6.25671 2.46779C5.11869 2.72071 4.43523 3.09342 3.97856 3.55009C3.52189 4.00676 3.14918 4.69022 2.89626 5.82824C2.75477 6.46488 2.65759 7.21236 2.59881 8.09443ZM10.9643 0.5L10.98 0.500002H10.9485L10.9643 0.5Z"
              fill="#02ADA6"
            />
          </svg>
          احراز هویت
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/adverts' },
          ]"
          @click="$router.push('/account/adverts')"
        >
          <account-icons-adverts
            :width="20"
            :height="21"
            hash-color="var(--color-black)"
          />
          آگهی های من
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/saved' },
          ]"
          @click="$router.push('/account/saved')"
        >
          <icons-save
            hash-color="var(--color-black)"
            :width="17"
            :height="21"
          />
          ذخیره شده ها
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/notify' },
          ]"
          @click="$router.push('/account/notify')"
        >
          <icons-notification />
          گوش به زنگ
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/parking' },
          ]"
          @click="$router.push('/account/parking')"
        >
          <icons-parking />
          پارکینگ
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/messages' },
          ]"
          @click="$router.push('/account/messages')"
        >
          <account-icons-comment
            :width="20"
            :height="21"
            hash-color="var(--color-black)"
          />
          پیام های من
          <span class="sidebar__badge" v-if="chatStore.newMessageCount > 0">{{
            chatStore.newMessageCount
          }}</span>
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/transactions' },
          ]"
          @click="$router.push('/account/transactions')"
        >
          <icons-wallet />
          لیست تراکنش ها
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/notes' },
          ]"
          @click="$router.push('/account/notes')"
        >
          <icons-edit :width="20" :height="21" />
          یادداشت ها
        </li>
        <li
          :class="[
            'sidebar__item',
            { 'sidebar__item--active': path == '/account/packages' },
          ]"
          @click="$router.push('/account/packages')"
        >
          <icons-megaphone :width="20" :height="19" />
          پکیج ها
          <span class="sidebar__badge">جدید!</span>
        </li>
      </template>
    </ul>
    <span class="dashboard__logout" @click="logout">
      <icons-exit />
      خروج
    </span>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { useAccountStore } from "~~/stores/account.store";
import { authStore } from "~~/stores/auth.store";
import { UseChatStore } from "~~/stores/chat.store";

const store = authStore();
const route = useRoute();
const router = useRouter();
const chatStore = UseChatStore();
const accountStore = useAccountStore();

const path = ref(route.path);
watch(
  () => route.path,
  (val) => {
    path.value = val;
  }
);
const logout = async () => {
  router.push("/");
  await store.logout(true);
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .profile__sidebar {
    display: none !important;
  }
}
.profile__sidebar {
  border-radius: var(--app-border-radius);
  background-color: var(--color-white);
  padding: 1.5rem;
  width: 18.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar__menu {
}
.sidebar__item {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  cursor: pointer;
  user-select: none;
  position: relative;
}
.sidebar__item--active {
  border-radius: 14px;
  background-color: var(--color-gray-300);
}
.sidebar__badge {
  border-radius: 0.5rem;
  background-color: #ef3838;
  padding: 0 7px;
  color: var(--color-white);
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  margin-right: auto;
  display: block;
  position: absolute;
  left: 0;
}
.dashboard__logout {
  color: var(--color-gray-600);
  padding: 1.2rem 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  cursor: pointer;
  /*margin-top: 1.5rem;*/
}
</style>