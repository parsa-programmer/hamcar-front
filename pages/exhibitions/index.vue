<template>
  <div class="">
    <Head>
      <Title>همه نمایشگاه های خودرو</Title>
    </Head>
    <section class="breadcrumb" v-if="pending">
      <h-skeletor width="400px" style="height: 10px" />
    </section>
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active"
        >نمایشگاه های خودرو</a
      >
    </section>
    <section class="advertising">
      <div class="advertising__head">
        <h1 class="advertising__title">
          همه نمایشگاه های خودرو
          <span
            >( {{ splitNumber(data?.data?.entityCount ?? 0) }} نمایشگاه )</span
          >
        </h1>
        <div class="input-group advert__search-box">
          <input
            type="text"
            class="form-control bg-transparent"
            placeholder="جستجو میان همه نمایشگاه ها..."
            :value="$route.query.search"
            @keyup.enter="searchExhibition"
          />
          <icons-search
            class="input-icon"
            hash-color="var(--color-gray-500)"
          ></icons-search>
        </div>

        <button
          class="advertising__filter-btn"
          @click="() => (isOpenModal = true)"
        >
          <template v-if="orderBy == ExhibitionFilterOrderBy.popular">
            محبوب ترین نمایشگاه ها
          </template>
          <template v-if="orderBy == ExhibitionFilterOrderBy.creationDate">
            جدید ترین نمایشگاه ها
          </template>
          <icons-chevron-down :width="14" :height="8" hash-color="#ABADB3" />
        </button>
      </div>

      <div class="advertising__middle" v-if="isMobile == false">
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
            فیلتر های انتخاب شده ({{ filterCount }})
          </span>
          <span
            class="selected-filters__btn"
            @click="() => (isOpenFilterDropDown = !isOpenFilterDropDown)"
            v-if="filterCount > 0"
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
              <exhibitions-selected-filters
                @closed="() => (isOpenFilterDropDown = false)"
              />
            </div>
          </Transition>
        </div>
        <div class="other-filters">
          <h-select-box
            name="orderBy"
            type="modern"
            class="other-filters__btn"
            :data="[
              {
                label: 'محبوب ترین نمایشگاه ها',
                value: ExhibitionFilterOrderBy.popular,
              },
              {
                label: 'جدید ترین نمایشگاه ها',
                value: ExhibitionFilterOrderBy.creationDate,
              },
            ]"
            v-model="orderBy"
          ></h-select-box>
        </div>
      </div>
      <div class="advertising__wrapper">
        <exhibitions-desktop-filter v-if="isMobile == false" />
        <div class="advertising__container">
          <skeleton-loading-search-advert
            :show-type="0"
            v-if="pending && pageId == 1"
          />

          <div
            :class="[
              'advertising__row',
              { 'advertising__row--wide-item': isMobile == false },
            ]"
            v-else-if="exhibitions.length >= 1"
          >
            <exhibitions-card
              v-for="item in exhibitions"
              :exhibition="item"
              :key="item.id"
            />
          </div>
          <skeleton-loading-search-advert
            :show-type="0"
            v-if="nextPageLoading"
          />
          <search-advert-no-result
            v-if="pending == false && exhibitions.length == 0"
          />
        </div>
      </div>
      <exhibitions-mobile-filter
        :exhibition-count="data?.data?.entityCount"
        v-if="isMobile"
      />
    </section>
    <h-modal title="مرتب سازی بر اساس" v-model="isOpenModal">
      <br />
      <div class="row justify-content-space-between">
        <label for="vis">جدید ترین نمایشگاه ها</label>
        <h-switch
          id="vis"
          type="radio"
          name="orderBy_"
          @click="() => (orderBy = ExhibitionFilterOrderBy.creationDate)"
        />
      </div>
      <div class="row justify-content-space-between mt-1">
        <label for="pop">محبوب ترین نمایشگاه ها ها</label>
        <h-switch
          id="pop"
          type="radio"
          name="orderBy_"
          @click="() => (orderBy = ExhibitionFilterOrderBy.popular)"
        />
      </div>
    </h-modal>
  </div>
</template>
  
  <script setup lang="ts">
import { splitNumber } from "~~/utilities/numberUtils";
import { Ref, ref } from "vue";
import {
  RemoveDubplicateObjects,
  RemoveEmptyProps,
} from "~~/utilities/objectUtils";
import { GetByFilter } from "~~/services/exhibition.service";
import {
  ExhibitionFilterData,
  ExhibitionFilterOrderBy,
} from "~~/models/exhibitions/Exhibition.Models";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";

const route = useRoute();
const router = useRouter();

const nextPageLoading = ref(false);
const isOpenModal = ref(false);
const isOpenFilterDropDown = ref(false);
const filterCount = ref(0);

const pageId = ref(Number(route.query.pageId ?? 1));

const isMobile = ref(false);
const exhibitions: Ref<ExhibitionFilterData[]> = ref([]);
const orderBy: Ref<ExhibitionFilterOrderBy> = ref(
  ExhibitionFilterOrderBy.popular
);

const { data, refresh, pending } = await useAsyncData(
  "exhibitions",
  () =>
    GetByFilter({
      hasZeroMileageCar: route.query.hasZeroMileageCar?.toString() ?? "false",
      orderBy: orderBy.value,
      pageId: pageId.value,
      province: route.query.province?.toString() ?? null,
      take: 12,
      specialCases: (route.query.specialCases as SpecialCases[]) ?? null,
      title: route.query.search?.toString() ?? null,
      manufacture: (route.query.manufacture as Manufacture[]) ?? null,
    }),
  {
    initialCache: false,
    server: true,
  }
);
exhibitions.value = data?.value?.data?.data ?? [];

const searchExhibition = async (e: any) => {
  await router.push({
    path: route.path,
    query: {
      search: e.target.value,
    },
  });
};
watch(data, async (val) => {
  if (val?.data?.data?.length ?? 0 > 0) {
    if (pageId.value == 1) {
      exhibitions.value = val?.data?.data ?? [];
    } else {
      exhibitions.value.push(...(val?.data?.data ?? []));
      exhibitions.value = RemoveDubplicateObjects(exhibitions.value);
    }
  } else {
    exhibitions.value = [];
  }
});
watch(
  () => route.query,
  async () => {
    setFilterCount();
    await refresh();
  }
);
watch(orderBy, async () => {
  await refresh();
});
const onResize = () => {
  if (window.innerWidth <= 600) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  exhibitions.value = [];
});
onMounted(async () => {
  setFilterCount();
  onResize();
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });

  window.onscroll = async () => {
    let bottomOfWindow =
      Math.ceil(document.documentElement.scrollTop + window.innerHeight) ===
      document.documentElement.offsetHeight;

    if (bottomOfWindow) {
      if (pageId.value < (data.value?.data?.pageCount ?? 1)) {
        pageId.value += 1;
        nextPageLoading.value = true;
        refresh().finally(() => {
          nextPageLoading.value = false;
        });
      }
    }
  };
});
const setFilterCount = () => {
  var hasZeroMileageCar = route.query.haveZeroMileage?.toString() == "true";
  var hasProvince = route.query.province?.toString();
  var specialCases = route.query.specialCases?.toString();
  var manufacture = route.query.manufacture?.toString();
  var res = {
    hasZeroMileageCar,
    hasProvince,
    specialCases,
    manufacture,
  };
  RemoveEmptyProps(res);
  filterCount.value = Object.keys(res).length;
};
</script>
  
  <style  scoped>
.order-btn {
  cursor: pointer;
}
.order-btn.active {
  background-color: var(--color-white);
  border: 2px solid var(--color-blue);
}
</style>