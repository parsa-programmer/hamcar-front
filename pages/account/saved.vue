<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar :is-show-cards="false" />
      <div class="card row justify-content-space-between">
        <div>
          <p class="font-4">
            ذخیره شده ها

            <small class="text__description font-5"
              >( {{ accountStore.advertSaved.length }} آگهی ذخیره شده)</small
            >
          </p>
        </div>
        <div class="d-mobile-none">
          <p class="color-error font-4 cursor-pointer">حذف همه</p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from "~~/stores/account.store";

const accountStore = useAccountStore();

definePageMeta({
  layout: "account-layout",
});
</script>

<style>
</style>