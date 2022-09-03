<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar :showAdvertCount="true" />
      <div class="prof_row">
        <div class="profile__card mobile-card">
          <div class="profile-card__banner mobile-card">
            <img
              src="/img/Notification.png"
              alt="Notification"
              class="profile-card__logo"
            />
          </div>
          <div class="card__desc">
            <h3 class="profile-card__title">گوش به زنگ</h3>
            <span class="profile-card__value"
              >({{ accountStore.gooshBeZangs }} آگهی گوش به زنگ)</span
            >
          </div>
        </div>
        <div class="profile__card mobile-card">
          <div class="profile-card__banner">
            <img
              src="/img/Saved.png"
              alt="Notification"
              class="profile-card__logo"
            />
          </div>
          <div class="card__desc">
            <h3 class="profile-card__title">ذخیره ها</h3>
            <span class="profile-card__value"
              >({{ accountStore.advertSaved.length }} آگهی ذخیره شده)</span
            >
          </div>
        </div>
        <div class="profile__card mobile-card">
          <div class="profile-card__banner">
            <img
              src="/img/Notification.png"
              alt="Notification"
              class="profile-card__logo"
            />
          </div>
          <div class="card__desc">
            <template v-if="authData.user?.plan">
              <h3 class="profile-card__title mt-1">پکیج ها</h3>

              <div class="package__info mb-1_5">
                <span class="profile-card__value"
                  >(پکیج کلاس {{ authData.user.plan.planId }})</span
                >
                <span class="badge profile-card__value font-6">
                  اعتبار تا
                  {{ RemainingTime(new Date(authData.user.plan.expireDate)) }} روز دیگر
                </span>
                <span class="profile-card__value font-6">
                  {{ toPersianDate(new Date(authData.user.plan.expireDate)) }}
                </span>
              </div>
            </template>
            <template v-else>
              <h3 class="profile-card__title">پکیج ها</h3>
              <nuxt-link
                to="/account/packages"
                class="profile-card__value mb_3-5 color-blue"
                >خرید پکیج</nuxt-link
              >
            </template>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { RemainingTime } from "~~/utilities/dateUtil";
import { useAuth } from "~~/composables/auth/useAuth";
import auth from "~~/middleware/auth";
import { useAccountStore } from "~~/stores/account.store";
import { authStore } from "~~/stores/auth.store";
import { toPersianDate } from "~~/utilities/dateUtil";

const accountStore = useAccountStore();
const authData = authStore();

definePageMeta({
  layout: "account-layout",
});
</script>


<style>
.package__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.package__info .badge {
  background: var(--color-gray-300);
  color: var(--color-gray-600);
  padding: 3px 1rem;
  width: fit-content;
  border-radius: 6px;
}
.profile__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
}
.profile-card__title.mt-1{
  margin-top: 1.5rem;
}
.profile__card:hover{
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.06);
}
.profile__card {
  background-color: var(--color-white);
  border-radius: var(--app-border-radius);
  padding: 0.5rem;
  flex-grow: 1;
  width: 18.5rem;
  transition: all ease .3s;
}
.profile-card__banner {
  background-color: #e7f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 221px;
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
}
.mb_3-5{
  margin-bottom: 3.5rem;
}
.prof_row {
  display: flex;
  gap: 1rem;
}
@media screen and (max-width: 992px) {
  .profile-card__title {
    margin-top: 1rem !important;
  }
  .profile-card__value {
    margin-block: 1rem;
  }
}
.profile-card__value.color-blue {
  color: var(--color-blue) !important;
}
@media screen and (max-width: 768px) {
  .prof_row {
    flex-direction: column;
  }
  .profile__card {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .profile__card .profile-card__banner {
    width: 50%;
    height: 176px;
  }
}
</style>