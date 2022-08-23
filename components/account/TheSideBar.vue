<template>
  <aside class="sidebar">
    <ul class="sidebar__menu">
      <li class="sidebar__item sidebar__item--active">
        <icons-menu :width="20" :height="20" hash-color="var(--color-black)" />
        صفحه اصلی
      </li>
      <li class="sidebar__item">
        <account-icons-adverts
          :width="20"
          :height="21"
          hash-color="var(--color-black)"
        />
        آگهی های من
      </li>
      <li class="sidebar__item">
        <icons-save hash-color="var(--color-black)" :width="17" :height="21" />
        ذخیره شده ها
      </li>
      <li class="sidebar__item">
        <icons-notification />
        گوش به زنگ
      </li>
      <li class="sidebar__item">
        <icons-parking />
        پارکینگ
      </li>
      <li class="sidebar__item">
        <account-icons-comment
          :width="20"
          :height="21"
          hash-color="var(--color-black)"
        />
        پیام های من
        <span class="sidebar__badge">2</span>
      </li>
      <li class="sidebar__item">
        <icons-wallet />
        لیست تراکنش ها
      </li>
      <li class="sidebar__item">
        <icons-edit :width="20" :height="21" />
        یادداشت ها
      </li>
      <li class="sidebar__item">
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

const store = authStore();

const logout = async () => {
  await store.logout(true);
};
</script>

<style scoped>
.sidebar {
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
  background-color: var(--color-gray-200);
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