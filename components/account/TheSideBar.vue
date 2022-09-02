<template>
  <aside class="profile__sidebar mobile-card">
    <ul class="sidebar__menu">
      <li
        :class="[
          'sidebar__item',
          { 'sidebar__item--active': path == '/account' },
        ]"
        @click="$router.push('/account')"
      >
        <icons-menu :width="20" :height="20" hash-color="var(--color-black)" />
        صفحه اصلی
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
        <icons-save hash-color="var(--color-black)" :width="17" :height="21" />
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
    </ul>
    <span class="dashboard__logout" @click="logout">
      <icons-exit />
      خروج
    </span>
  </aside>
</template>

<script setup lang="ts">
import { authStore } from "~~/stores/auth.store";
import { UseChatStore } from "~~/stores/chat.store";

const store = authStore();
const route = useRoute();
const chatStore = UseChatStore();

const path = ref(route.path);

watch(
  () => route.path,
  (val) => {
    path.value = val;
  }
);
const logout = async () => {
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