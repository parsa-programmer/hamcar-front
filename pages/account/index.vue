<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar />
      <div class="row">
        <div class="profile__card">
          <div class="profile-card__banner">
            <img
              src="/img/Notification.png"
              alt="Notification"
              class="profile-card__logo"
            />
          </div>
          <h3 class="profile-card__title">گوش به زنگ</h3>
          <span class="profile-card__value"
            >({{ accountStore.gooshBeZangs }} آگهی گوش به زنگ)</span
          >
        </div>
        <div class="profile__card">
          <div class="profile-card__banner">
            <img src="/img/Saved.png" alt="Notification" class="profile-card__logo" />
          </div>
          <h3 class="profile-card__title">ذخیره ها</h3>
          <span class="profile-card__value"
            >({{ accountStore.advertSaved.length }} آگهی ذخیره شده)</span
          >
        </div>
        <div class="profile__card">
          <div class="profile-card__banner">
            <img
              src="/img/Notification.png"
              alt="Notification"
              class="profile-card__logo"
            />
          </div>
          <h3 class="profile-card__title">پکیج ها</h3>
          <a href="#" class="profile-card__value">خرید پکیج</a>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { useAuth } from "~~/composables/auth/useAuth";
import auth from "~~/middleware/auth";
import { useAccountStore } from "~~/stores/account.store";

const accountStore = useAccountStore();

onMounted(async () => {
  await accountStore.initData();
});
definePageMeta({
  layout: "account-layout",
});
</script>


<style>
.profile__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}
.profile__card {
  background-color: var(--color-white);
  border-radius: var(--app-border-radius);
  padding: 0.5rem;
  flex-grow: 1;
  width: 18.5rem;
}
.profile-card__banner {
  background-color: #e7f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  min-height: 221px;
}
.profile-card__title {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  margin-bottom: 0.5rem;
  text-align: center;
  margin-top: 3.6rem;
}
.profile-card__value {
  display: block;
  text-align: center;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black-200);
  margin-bottom: 3.6rem;
}
</style>