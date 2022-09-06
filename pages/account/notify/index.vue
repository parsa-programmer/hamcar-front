<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar :is-show-cards="false" />
      <account-page-title
        title="لیست درخواست گوش به زنگ"
        :loading="loading"
        :sub-title="`(${accessCount} درخواست باقی مانده)`"
        :button-text="accessCount == 0 ? '' : 'ثبت گوش به زنگ'"
      >
        <nuxt-link
          to="/account/notify/create?type=car"
          class="grow-1 btn btn-primary"
        >
          <div class="row align-items-center font-4">
            <account-icons-mini-car />
            ثبت گوش به زنگ خودرو
          </div>
        </nuxt-link>
        <nuxt-link
          to="/account/notify/create?type=motor"
          class="grow-1 btn btn-primary"
        >
          <div class="row align-items-center">
            <icons-motor />
            <span> ثبت گوش به زنگ موتور سیکلت</span>
          </div>
        </nuxt-link>
      </account-page-title>

      <div class="content">
        <skeleton-loading-search-advert
          :show-type="1"
          style="width: 100%; overflow: hidden"
          v-if="loading"
        />
        <div class="advertising__row advertising__row--wide-item">
          <account-notify-card
            v-for="item in notifies"
            :notify="item"
            :key="item.id"
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
                  delete
                "
                @click="openDeletePopup(item.id)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  class="d-mobile-none"
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
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="d-mobile-block"
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
          </account-notify-card>
        </div>
        <div
          class="profile__not-Found"
          v-if="loading == false && notifies.length == 0"
        >
          <p class="font-2 color_gray_600">
            شما هنوز درخواست گوش به زنگ ثبت نکرده اید!
          </p>
        </div>
      </div>
    </client-only>
    <h-delete-popup
      title="حذف درخواست"
      description="آیا از حذف درخواست خود اطمینان دارید ؟"
      v-model="isOpenDeleteModal"
      @accepted="deleteNotify"
    ></h-delete-popup>
  </div>
</template>
  
  <script setup lang="ts">
import { ref, onMounted } from "#imports";
import { Ref } from "vue";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { NotifyFilterData } from "~~/models/notify/Notify.Models";
import {
  DeleteNotify,
  GetNotifies,
  GetRemainingNotifiesCount,
} from "~~/services/notify.service";
import { authStore } from "~~/stores/auth.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
definePageMeta({
  layout: "account-layout",
  title:"گوش به زنگ"
});
const isOpenDeleteModal = ref(false);
const selectedNotify: Ref<string | null> = ref(null);

const accessCount = ref(0);
const notifies: Ref<NotifyFilterData[]> = ref([]);
const loading = ref(false);
const auth = authStore();
const toast = useToast();

const deleteNotify = async () => {
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () => DeleteNotify(selectedNotify.value ?? ""),
    loading
  );
  if (res.isSuccess) {
    toast.showToast("گوش به زنگ با موفقیت حذف  شد");
    notifies.value = notifies.value.filter(
      (f) => f.id !== selectedNotify.value
    );
    selectedNotify.value = null;
    accessCount.value += 1;
  }
};
const openDeletePopup = (id: string) => {
  isOpenDeleteModal.value = true;
  selectedNotify.value = id;
};

onMounted(async () => {
  loading.value = true;
  var res = await GetRemainingNotifiesCount();
  accessCount.value = res.data ?? 0;
  const result = await ProssesAsync<
    IApiResponse<FilterResult<NotifyFilterData>>
  >(
    () =>
      GetNotifies({
        pageId: 1,
        take: 50,
      }),
    loading
  );
  notifies.value = result.data?.data ?? [];
});
</script>
  
  <style scoped>
@media screen and (max-width: 768px) {
  .delete {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    margin-left: 0.5rem;
  }
}
</style>