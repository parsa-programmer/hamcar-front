<template>
  <div class="profile__content">
    <Head>
      <Title>آگهی های من</Title>
    </Head>
    <client-only>
      <account-top-bar class="mb-mobile-40" />
      <account-page-title
        title="پارکینگ"
        :loading="loading"
        :sub-title="`(${adverts.length} آگهی)`"
      />
      <div class="content">
        <p class="font-5 row alert">
          <icons-danger />
          <span>
            <b>پارکینگ:</b>هنگامی که شما به هر دلیل آگهی خود را حذف میکنید ،
            آگهی حذف شده به پارکینگ منتقل می گردد
          </span>
        </p>
        <div
          class="profile__not-Found"
          v-if="adverts.length <= 0 && loading == false"
        >
          <p class="font-2 color_gray_600">پارکینگ خالی است !</p>
        </div>
        <skeleton-loading-search-advert
          :show-type="1"
          style="width: 100%; overflow: hidden"
          v-if="loading"
        />
        <div
          class="advertising__row advertising__row--wide-item"
          v-else-if="adverts.length >= 1"
        >
          <account-parking-advert-card
            v-for="item in adverts"
            :key="item.id"
            :advert="item"
            class="mobile-card disable__image"
            :show-price="true"
            @useNardebanClicked="openNardebanModal"
          >
            <template #actions>
              <h-button class="btn-sm nardeban" @click="openNardebanModal(item)"
                >نردبان</h-button
              >
              <div class="row d-mobile-none desk__actions"></div>
            </template>
          </account-parking-advert-card>
        </div>
      </div>
      <h-modal v-model="isOpenNardebanModal" :show-header="false">
        <account-advert-use-nardeban-content
          :showTitle="false"
          description="برای فعال سازی این اگهی و انتقال آن به صدر لیست آگهی ها باید از نردبان استفاده کنید. و یا میتوانید بعد از پایان زمان پارکینگ، آگهی را دوباره ثبت کنید"
          v-model="selectedAdvert"
          @closed="nardebanUsed"
        />
      </h-modal>
    </client-only>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AdvertisementFilterData } from "~~/models/advertisements/Advertisement.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { GetParkingData } from "~~/services/advertisement.service";
import { useAccountStore } from "~~/stores/account.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

definePageMeta({
  layout: "account-layout",
});

const toast = useToast();
const accountStore = useAccountStore();

const adverts: Ref<AdvertisementFilterData[]> = ref([]);

const loading = ref(false);
const isOpenNardebanModal = ref(false);
const selectedAdvert: Ref<AdvertisementFilterData | null> = ref(null);

const nardebanUsed = () => {
  adverts.value = adverts.value.filter(
    (f) => f.id != selectedAdvert.value?.id
  );
  isOpenNardebanModal.value = false;
};
const openNardebanModal = (advert: any) => {
  selectedAdvert.value = advert;
  isOpenNardebanModal.value = true;
};

onMounted(async () => {
  var res = await ProssesAsync<IApiResponse<AdvertisementFilterData[]>>(
    () => GetParkingData(),
    loading
  );
  adverts.value = res.data ?? [];
});
</script>
  
  <style scoped>
.color_black_200 {
  color: var(--color-black-200) !important;
}

.nardeban {
  width: 64px !important;
  height: 32px !important;
  border-radius: 8px !important;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  display: none;
}
.nardebans__footer {
  display: flex;
  gap: 1rem;
}
.actions {
  display: flex;
  gap: 1rem;
}
@media screen and (max-width: 768px) {
  .alert svg {
    display: none;
  }
  .alert b {
    display: none;
  }
  .alert {
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
    margin-top: 0 !important;
  }
  .card {
    margin-top: 40px;
  }
  .nardebans__footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .actions {
    display: block !important;
    width: 100%;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price .font-4 {
    font-weight: 800;
    margin: 0;
  }
  .nardeban {
    display: flex !important;
  }
  .mb-mobile-40 {
    margin-bottom: 24px;
  }
}
.desk__actions {
  gap: 0;
}

.desk__actions p {
  border-left: 1px solid var(--color-gray-400);
  padding: 0 1rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
.desk__actions p:last-child {
  border: none;
}
.alert {
  color: var(--color-black-200);
  margin-block: 1rem;
  margin-top: 0.5rem;
  padding-right: 1rem;
}
</style>