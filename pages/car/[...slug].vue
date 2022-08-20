<template>
  <div class="">
    <Head>
      <Title>همه آگهی های فروش خودرو</Title>
      <Link href="/css/advertising.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>

      <icons-chevron-left />
      <a href="#" class="breadcrumb__item breadcrumb__item--active"
        >آگهی های خودرو</a
      >
    </section>
    <section class="advertising">
      <div class="advertising__head">
        <h2 class="advertising__title">
          همه آگهی های فروش خودرو
          <span>( {{ splitNumber(data?.data?.entityCount ?? 0) }} آگهی )</span>
        </h2>
        <search-advert class="advertising__serach-box" />

        <button
          class="advertising__filter-btn"
          @click="() => (isOpenModal = true)"
        >
          <template v-if="orderBy == AdvertisementFilterOrderBy.latest">
            جدیدترین آگهی ها
          </template>
          <template v-if="orderBy == AdvertisementFilterOrderBy.popular">
            محبوب ترین آگهی ها
          </template>
          <template v-if="orderBy == AdvertisementFilterOrderBy.visit">
            پر بازدید ترین آگهی ها
          </template>
          <icons-chevron-down />
        </button>
      </div>
      <div class="advertising__middle">
        <div
          class="selected-filters"
          v-click-outside="() => (isOpenFilterDropDown = false)"
        >
          <span class="selected-filters__title">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <mask id="path-1-inside-1_679_1631" fill="white">
                <path
                  d="M16.6626 0H3.33737C0.592209 0 -0.974782 3.2669 0.672312 5.55616L6.22451 13.2731C6.51283 13.6738 6.66868 14.1612 6.66868 14.6621V21.6805C6.66868 23.6433 8.86481 24.7155 10.3113 23.459L12.5322 21.5298C13.0386 21.0899 13.3313 20.4383 13.3313 19.7513V14.6621C13.3313 14.1612 13.4872 13.6738 13.7755 13.2731L19.3277 5.55616C20.9748 3.2669 19.4078 0 16.6626 0Z"
                ></path>
              </mask>
              <path
                d="M16.6626 0H3.33737C0.592209 0 -0.974782 3.2669 0.672312 5.55616L6.22451 13.2731C6.51283 13.6738 6.66868 14.1612 6.66868 14.6621V21.6805C6.66868 23.6433 8.86481 24.7155 10.3113 23.459L12.5322 21.5298C13.0386 21.0899 13.3313 20.4383 13.3313 19.7513V14.6621C13.3313 14.1612 13.4872 13.6738 13.7755 13.2731L19.3277 5.55616C20.9748 3.2669 19.4078 0 16.6626 0Z"
                stroke="#0F0F10"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                mask="url(#path-1-inside-1_679_1631)"
              ></path>
              <path
                d="M7 5H13"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            فیلتر های انتخاب شده ({{ advertFilter.getFilterCount() }})
          </span>
          <span
            class="selected-filters__btn"
            v-if="advertFilter.getFilterCount() > 0"
            @click="() => (isOpenFilterDropDown = !isOpenFilterDropDown)"
          >
            مشاهده
            <icons-chevron-up
              v-if="isOpenFilterDropDown"
              :width="14"
              :height="8"
              hash-color="var(--color-blue)"
            />

            <icons-chevron-down
              v-else
              :width="14"
              :height="8"
              hash-color="var(--color-blue)"
            />
          </span>
          <Transition
            enter-active-class="animate__animated animate__fadeIn animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
          >
            <div
              v-if="isOpenFilterDropDown"
              class="selected-filters__content selected-filters__content--open"
            >
              <search-advert-selected-filters
                @closed="() => (isOpenFilterDropDown = false)"
              />
            </div>
          </Transition>
        </div>
        <div class="other-filters">
          <div
            :class="['order-btn', { active: showType == 1 }]"
            @click="() => (showType = 1)"
          >
            <icons-lines />
          </div>
          <div
            :class="['order-btn', { active: showType == 0 }]"
            @click="() => (showType = 0)"
          >
            <icons-boxs />
          </div>
          <span class="other-filters__line"></span>
          <h-select-box
            name="orderBy"
            type="modern"
            class="other-filters__btn"
            :data="[
              {
                label: 'پربازدید ترین آگهی',
                value: AdvertisementFilterOrderBy.visit,
              },
              {
                label: 'محبوب ترین آگهی ها',
                value: AdvertisementFilterOrderBy.popular,
              },
              {
                label: 'جدید ترین آگهی ها',
                value: AdvertisementFilterOrderBy.latest,
              },
            ]"
            v-model="orderBy"
          ></h-select-box>
        </div>
      </div>
      <div class="advertising__wrapper">
        <search-advert-desktop-filter
          :model="model ?? ''"
          :brand="brand ?? ''"
          v-if="isMobile == false"
        />
        <div class="advertising__container">
          <search-advert-car-price />
          <skeleton-loading-search-advert
            :show-type="showType"
            v-if="pending && pageId == 1"
          />

          <div
            :class="[
              'advertising__row',
              { 'advertising__row--wide-item': showType == 1 },
            ]"
            v-else-if="cars.length >= 1"
          >
            <advert-card v-for="item in cars" :key="item.id" :advert="item" />
          </div>
          <skeleton-loading-search-advert
            :show-type="showType"
            v-if="nextPageLoading"
          />
          <search-advert-no-result
            v-if="pending == false && cars.length == 0"
          />
        </div>
      </div>
      <search-advert-mobile-filter
        :advert-count="data?.data?.entityCount"
        v-if="isMobile"
      />
    </section>
    <h-modal title="مرتب سازی بر اساس" v-model="isOpenModal">
      <br />
      <div class="row justify-content-space-between">
        <label for="vis">پر بازدید ترین آگهی ها</label>
        <h-switch
          id="vis"
          type="radio"
          name="orderBy_"
          @click="() => (orderBy = AdvertisementFilterOrderBy.visit)"
        />
      </div>
      <div class="row justify-content-space-between mt-1">
        <label for="pop">محبوب ترین آگهی ها</label>
        <h-switch
          id="pop"
          type="radio"
          name="orderBy_"
          @click="() => (orderBy = AdvertisementFilterOrderBy.popular)"
        />
      </div>
      <div class="row justify-content-space-between mt-1">
        <label for="late">جدید ترین آگهی ها</label>
        <h-switch
          type="radio"
          name="orderBy_"
          id="late"
          @click="() => (orderBy = AdvertisementFilterOrderBy.latest)"
        />
      </div>
    </h-modal>
  </div>
</template>

<script setup lang="ts">
import { splitNumber } from "~~/utilities/numberUtils";
import { AdvertisementFilterOrderBy } from "~~/models/advertisements/enums/AdvertisementFilterOrderBy";
import { Ref } from "vue";
import { ref } from "#imports";
import { AdvertisementFilterData } from "~~/models/advertisements/Advertisement.Models";
import {
  containsObject,
  RemoveDubplicateObjects,
} from "~~/utilities/objectUtils";

const showType = ref(0);
const isOpenModal = ref(false);
const isOpenFilterDropDown = ref(false);
const route = useRoute();
const advertFilter = useAdverFilter();
const nextPageLoading = ref(false);
const pageId = ref(advertFilter.getFilterQueryParams().pageId);
const selectedFilters = advertFilter.getFilterQueryParams();

const brand = selectedFilters.brand;
const model = selectedFilters.model;
const trim = selectedFilters.trim;
const isMobile = ref(false);
const cars: Ref<AdvertisementFilterData[]> = ref([]);
const orderBy: Ref<AdvertisementFilterOrderBy> = ref(
  AdvertisementFilterOrderBy.latest
);

const { data, refresh, pending } = await useAsyncData(
  "carFilter",
  () => advertFilter.getAdverts(pageId.value, 12),
  {
    initialCache: false,
    server: true,
    lazy: true,
  }
);
cars.value = data?.value?.data?.data ?? [];

watch(data, async (val) => {
  if (val.data?.data?.length ?? 0 > 0) {
    cars.value.push(...(val.data?.data ?? []));
    cars.value = RemoveDubplicateObjects(cars.value);
  } else {
    cars.value = [];
  }
});
watch(orderBy, (val) => {
  advertFilter.changeOrderBy(val);
});
watch(
  () => route.query,
  async (newVal) => {
    await refresh();
  }
);
const onResize = () => {
  if (window.innerWidth <= 600) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
onMounted(async () => {
  onResize();
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });

  window.onscroll = async () => {
    let bottomOfWindow =
      Math.ceil(document.documentElement.scrollTop + window.innerHeight) ===
      document.documentElement.offsetHeight;

    if (bottomOfWindow) {
      if (pageId.value < (data.value.data?.pageCount ?? 1)) {
        pageId.value += 1;
        nextPageLoading.value = true;
        refresh().finally(() => {
          nextPageLoading.value = false;
        });
      }
    }
  };
});
</script>

<style scoped>
.order-btn {
  cursor: pointer;
}
.order-btn.active {
  background-color: var(--color-white);
  border: 2px solid var(--color-blue);
}
</style>