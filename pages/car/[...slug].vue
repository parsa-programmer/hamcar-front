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

        <button class="advertising__filter-btn">
          جدیدترین آگهی ها
          <icons-chevron-down />
        </button>
      </div>
      <div class="advertising__middle">
        <div class="selected-filters">
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
            فیلتر های انتخاب شده (0)
          </span>
          <span
            class="selected-filters__btn"
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
              <div class="selected-filters__item">
                <label class="selected-filters__name" for="100"
                  >فیلتر انتخاب شده اول</label
                >
                <h-input type="checkbox" input-id="100" name="filter" />
              </div>

              <div class="selected-filters__action">
                <button
                  class="
                    btn btn-sm btn-transparent
                    selected-filters__delete-btn
                  "
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
                    ></path>
                  </svg>
                  حذف همه
                </button>
                <button
                  class="btn btn-sm btn-primary selected-filters__submit-btn"
                >
                  اعمال
                </button>
              </div>
            </div>
          </Transition>
        </div>
        <div class="other-filters">
          <div
            :class="['order-btn', { active: showType == 1 }]"
            @click="() => (showType = 1)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 1H20C21.6569 1 23 2.34315 23 4V7C23 8.65685 21.6569 10 20 10H4C2.34315 10 1 8.65685 1 7V4C1 2.34315 2.34315 1 4 1Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4 14H20C21.6569 14 23 15.3431 23 17V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V17C1 15.3431 2.34315 14 4 14Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div
            :class="['order-btn', { active: showType == 0 }]"
            @click="() => (showType = 0)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 5.5C1 6.60949 1.06075 7.43281 1.19863 8.0532C1.33399 8.66225 1.53001 9.01274 1.75864 9.24136C1.98726 9.46999 2.33775 9.66601 2.9468 9.80137C3.56719 9.93925 4.39051 10 5.5 10C6.60949 10 7.43281 9.93925 8.0532 9.80137C8.66225 9.66601 9.01274 9.46999 9.24136 9.24136C9.46999 9.01274 9.66601 8.66225 9.80137 8.0532C9.93925 7.43281 10 6.60949 10 5.5C10 4.39051 9.93925 3.56719 9.80137 2.9468C9.66601 2.33775 9.46999 1.98726 9.24136 1.75864C9.01274 1.53001 8.66225 1.33399 8.0532 1.19863C7.43281 1.06075 6.60949 1 5.5 1C4.39051 1 3.56719 1.06075 2.9468 1.19863C2.33775 1.33399 1.98726 1.53001 1.75864 1.75864C1.53001 1.98726 1.33399 2.33775 1.19863 2.9468C1.06075 3.56719 1 4.39051 1 5.5Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 18.5C1 19.6095 1.06075 20.4328 1.19863 21.0532C1.33399 21.6622 1.53001 22.0127 1.75864 22.2414C1.98726 22.47 2.33775 22.666 2.9468 22.8014C3.56719 22.9392 4.39051 23 5.5 23C6.60949 23 7.43281 22.9392 8.0532 22.8014C8.66225 22.666 9.01274 22.47 9.24136 22.2414C9.46999 22.0127 9.66601 21.6622 9.80137 21.0532C9.93925 20.4328 10 19.6095 10 18.5C10 17.3905 9.93925 16.5672 9.80137 15.9468C9.66601 15.3378 9.46999 14.9873 9.24136 14.7586C9.01274 14.53 8.66225 14.334 8.0532 14.1986C7.43281 14.0608 6.60949 14 5.5 14C4.39051 14 3.56719 14.0608 2.9468 14.1986C2.33775 14.334 1.98726 14.53 1.75864 14.7586C1.53001 14.9873 1.33399 15.3378 1.19863 15.9468C1.06075 16.5672 1 17.3905 1 18.5Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 5.5C14 6.60949 14.0608 7.43281 14.1986 8.0532C14.334 8.66225 14.53 9.01274 14.7586 9.24136C14.9873 9.46999 15.3378 9.66601 15.9468 9.80137C16.5672 9.93925 17.3905 10 18.5 10C19.6095 10 20.4328 9.93925 21.0532 9.80137C21.6622 9.66601 22.0127 9.46999 22.2414 9.24136C22.47 9.01274 22.666 8.66225 22.8014 8.0532C22.9392 7.43281 23 6.60949 23 5.5C23 4.39051 22.9392 3.56719 22.8014 2.9468C22.666 2.33775 22.47 1.98726 22.2414 1.75864C22.0127 1.53001 21.6622 1.33399 21.0532 1.19863C20.4328 1.06075 19.6095 1 18.5 1C17.3905 1 16.5672 1.06075 15.9468 1.19863C15.3378 1.33399 14.9873 1.53001 14.7586 1.75864C14.53 1.98726 14.334 2.33775 14.1986 2.9468C14.0608 3.56719 14 4.39051 14 5.5Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M14 18.5C14 19.6095 14.0608 20.4328 14.1986 21.0532C14.334 21.6622 14.53 22.0127 14.7586 22.2414C14.9873 22.47 15.3378 22.666 15.9468 22.8014C16.5672 22.9392 17.3905 23 18.5 23C19.6095 23 20.4328 22.9392 21.0532 22.8014C21.6622 22.666 22.0127 22.47 22.2414 22.2414C22.47 22.0127 22.666 21.6622 22.8014 21.0532C22.9392 20.4328 23 19.6095 23 18.5C23 17.3905 22.9392 16.5672 22.8014 15.9468C22.666 15.3378 22.47 14.9873 22.2414 14.7586C22.0127 14.53 21.6622 14.334 21.0532 14.1986C20.4328 14.0608 19.6095 14 18.5 14C17.3905 14 16.5672 14.0608 15.9468 14.1986C15.3378 14.334 14.9873 14.53 14.7586 14.7586C14.53 14.9873 14.334 15.3378 14.1986 15.9468C14.0608 16.5672 14 17.3905 14 18.5Z"
                stroke="var(--color-black)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <span class="other-filters__line"></span>
          <h-select-box
            name="orderBy"
            type="modern"
            class="other-filters__btn"
            :data="[
              { label: 'پربازدید ترین آگهی', value: 'visit' },
              { label: 'محبوب ترین آگهی ها', value: 'popular' },
              { label: 'جدید ترین آگهی ها', value: 'latest' },
            ]"
            v-model="orderBy"
          ></h-select-box>
        </div>
      </div>
      <div class="advertising__wrapper">
        <search-advert-desktop-filter />
        <div class="advertising__container">
          <!--   (advertising__row--wide-item) class name for wide carts   -->
          <div
            :class="[
              'advertising__row',
              { 'advertising__row--wide-item': showType == 1 },
            ]"
            v-if="data?.data?.data?.length ?? 0 >= 1"
          >
            <advert-card
              v-for="item in data?.data?.data ?? []"
              :key="item.id"
              :advert="item"
            />
          </div>
          <search-advert-no-result v-else />
        </div>
      </div>
      <search-advert-mobile-filter />
    </section>
  </div>
</template>

<script setup lang="ts">
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import { BodyType } from "~~/models/advertisements/enums/BodyType";
import { CarFuel } from "~~/models/advertisements/enums/CarFuel";
import { Differential } from "~~/models/advertisements/enums/Differential";
import { Fuel } from "~~/models/advertisements/enums/Fuel";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";
import { ModelCarType } from "~~/models/advertisements/enums/ModelCarType";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import { Country } from "~~/models/utilities/Country";
import { GetByFilter } from "~~/services/advertisement.service";
import { splitNumber } from "~~/utilities/numberUtils";

const showType = ref(0);
const isOpenFilterDropDown = ref(false);
const route = useRoute();
const router = useRouter();
const queryParams = route.query;
const { slug } = route.params;
if (slug[1]) {
  router.push("/car");
}
var params = (slug[0] ?? "").split("-");
const brand = params[0];
const model = params[1];
const trim = params[2];
const fuel = (queryParams.fuel as CarFuel | null) ?? null;
const orderBy = ref("latest");
const { data } = useAsyncData(
  "carFilter",
  () =>
    GetByFilter({
      advertisementType: AdvertisementType.car,
      brand,
      model,
      trim,
      year: queryParams.year?.toString() ?? null,
      fuel,
      bodyType: (queryParams.bodyType as BodyType | null) ?? null,
      startPrice: queryParams.startPrice?.toString() ?? null,
      endPrice: queryParams.endPrice?.toString() ?? null,
      pageId: (queryParams.pageId as number | null) ?? 1,
      take: (queryParams.take as number | null) ?? 10,
      havePrice: (queryParams.havePrice as boolean | null) ?? false,
      haveImage: (queryParams.haveImage as boolean | null) ?? false,
      city: (queryParams.city as string) ?? null,
      province: (queryParams.province as string) ?? null,
      differential: (queryParams.differential as Differential | null) ?? null,
      engineVolume: (queryParams.engineVolume as number | null) ?? null,
      country: (queryParams.country as Country | null) ?? null,
      startMileage: queryParams.startMileage?.toString() ?? null,
      endMileage: queryParams.endMileage?.toString() ?? null,
      isPersonalAdvertisement:
        (queryParams.isPersonalAdvertisement as boolean | null) ?? false,
      modelType: (queryParams.modelType as BodyType | null) ?? null,
      gearBox: (queryParams.gearbox as GearBox | null) ?? null,
      specialCases: (queryParams.specialCases as SpecialCases | null) ?? null,
      carType: (queryParams.carType as ModelCarType | null) ?? null,
      cylinderCount: (queryParams.cylinderCount as number | null) ?? null,
      exhibitionTitle: (queryParams.exhibitionTitle as string | null) ?? null,
      manufacture: (queryParams.manufacturer as Manufacture | null) ?? null,
      search: (queryParams.search as string | null) ?? null,
    }),
  {
    initialCache: false,
    server: true,
    lazy: true,
  }
);

let isDropdownOpen = false;

onMounted(() => {
 
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