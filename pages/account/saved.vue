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
        <div class="d-mobile-none" v-if="accountStore.advertSaved.length >= 1">
          <p
            class="color-error font-4 cursor-pointer"
            @click="openDeletePopup('all')"
          >
            حذف همه
          </p>
        </div>
      </div>
      <skeleton-loading-search-advert
        :show-type="1"
        style="width: 100%; overflow: hidden"
        v-if="accountStore.loading"
      />
      <div
        class="advertising__row advertising__row--wide-item"
        v-else-if="accountStore.advertSaved.length >= 1"
      >
        <advert-custom-card
          v-for="item in accountStore.advertSaved"
          :key="item.id"
          :advert="item.advertisement"
          class="mobile-card"
          :show-price="true"
          has-link
        >
          <template #actions>
            <p
              class="
                color-error
                row
                align-items-center
                gap-0_5
                font-5
                cursor-pointer
              "
              @click="openDeletePopup(item.id)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 3.75H6M17.25 3.75H12M2.25 3.75L3.32985 14.5485C3.48321 16.0821 4.77371 17.25 6.31497 17.25H11.685C13.2263 17.25 14.5168 16.0821 14.6701 14.5485L15.75 3.75M9 8.25V12.75M12.375 8.25L12 12.75M5.625 8.25L6 12.75M12 3.75H9H6M12 3.75H6M12 3.75V2.25C12 1.42157 11.3284 0.75 10.5 0.75H7.5C6.67157 0.75 6 1.42157 6 2.25V3.75"
                  stroke="#EF3838"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              حذف
            </p>
          </template>
        </advert-custom-card>
      </div>
      <h-delete-popup
        @accepted="deleteSaved"
        v-model="isOpenModal"
      ></h-delete-popup>
    </client-only>
    <loadings-full-loading v-if="loading" />
  </div>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { IApiResponse } from "~~/models/IApiResponse";
import {
  DeleteAllSavedItem,
  DeleteSavedItem,
} from "~~/services/account.service";
import { useAccountStore } from "~~/stores/account.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const accountStore = useAccountStore();
const selectedItem: Ref<string> = ref("");

const isOpenModal = ref(false);
const loading = ref(false);
const toast = useToast();

const openDeletePopup = (id: string) => {
  selectedItem.value = id;
  isOpenModal.value = true;
};
const deleteSaved = async () => {
  if (selectedItem.value == "all") {
    var res = await ProssesAsync<IApiResponse<undefined>>(
      () => DeleteAllSavedItem(selectedItem.value),
      loading
    );
    if (res.isSuccess) {
      toast.showToast("عملیات با موفقیت انجام شد");
      accountStore.deleteAllSavedItem();
      selectedItem.value = "";
    }
  } else {
    var res = await ProssesAsync<IApiResponse<undefined>>(
      () => DeleteSavedItem(selectedItem.value),
      loading
    );
    if (res.isSuccess) {
      toast.showToast("عملیات با موفقیت انجام شد");
      accountStore.deleteSavedItem(selectedItem.value);
      selectedItem.value = "";
    }
  }
};

definePageMeta({
  layout: "account-layout",
  title:"ذخیره شده ها"
});
</script>

<style>
</style>