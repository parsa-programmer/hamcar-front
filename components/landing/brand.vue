<template>
  <div class="container">
    <h-skeletor width="100%" height="400" v-if="loading" />
    <div class="info-data" v-else>
      <div class="info-data__header">
        <input
          type="text"
          v-model="search"
          class="form-control info-data__input"
          placeholder="برند مورد نظرتان را اینجا جستجو کنید ..."
        />
        <div class="info-data__countries">
          <div
            :class="[`info-data__country w-50`, { active: searchBy == 'car' }]"
            @click="searchBy = 'car'"
          >
            <icons-car
              :width="40"
              :height="40"
              hash-color="var(--color-black-300)"
            />
            ماشین
          </div>
          <div
            :class="[
              `info-data__country w-50`,
              { active: searchBy == 'motor' },
            ]"
            @click="searchBy = 'motor'"
          >
            <icons-motor
              :width="40"
              :height="40"
              hash-color="var(--color-black-300)"
            />
            موتورسیکلت
          </div>
        </div>
      </div>
      <div class="info-data__main">
        <div class="brand">
          <template v-for="(item, index) in data" :key="index">
            <h4 class="brand__letter">{{ item.alphabet }}</h4>
            <nuxt-link
              v-for="(brand, i) in item.brands"
              :key="i"
              class="brand__name"
              :to="brand.isCar ? `/car/${brand.slug}` : `/motor/${brand.slug}`"
            >
              {{ brand.name }}
            </nuxt-link>
          </template>
        </div>
      </div>
      <div class="info-data__main-mobile">
        <div class="brand__wrapper" v-for="(item, index) in data" :key="index">
          <h4 class="brand__letter">{{ item.alphabet }}</h4>
          <div class="brand__list">
            <nuxt-link
              :to="brand.isCar ? `/car/${brand.slug}` : `/motor/${brand.slug}`"
              class="brand__name"
              v-for="(brand, i) in item.brands"
              :key="i"
            >
              {{ brand.name }}
            </nuxt-link>
          </div>
        </div>
        <a href="#" class="brand__scroll">
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.44531 6.66664L7.00087 1.11108M7.00087 1.11108L7.00087 18.8889M7.00087 1.11108L12.5564 6.66664"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <div class="info-data__footer" v-if="pageCount > 1">
        <div class="navigation">
          <a
            href="javascript:void(0)"
            class="navigation__link"
            @click="currentPage -= 1"
            v-if="currentPage > 1"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            قبلی
          </a>
          <div class="navigation__dots">
            <span
              v-for="item in pageCount"
              :key="item"
              :class="[
                'navigation__dot',
                { 'navigation__dot--active': item == currentPage },
              ]"
            ></span>
          </div>
          <a
            href="javascript:void(0)"
            class="navigation__link navigation__link--active"
            v-if="currentPage < pageCount"
            @click="currentPage += 1"
          >
            بعدی
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M7 13L1 7L7 1"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { UseUtilStore } from "~~/stores/util.store";
import { LandingBrandsDto } from "~~/models/LandingDto";
import { Ref } from "vue";
import { getPaginatedItems } from "~~/utilities/objectUtils";
const pageCount = ref(1);
const currentPage = ref(1);
const data: Ref<LandingBrandsDto[]> = ref([]);
const search = ref("");
const searchBy = ref("");
const loading = ref(false);

const utilStore = UseUtilStore();

watch(search, (val) => {
  var brands = getBrands();
  currentPage.value = 1;
  var res = getPaginatedItems(brands, currentPage.value, 5);
  pageCount.value = res.total_pages;
  data.value = res.data;
});
watch(currentPage, (val) => {
  var brands = getBrands();
  var res = getPaginatedItems(brands, val, 5);
  pageCount.value = res.total_pages;
  data.value = res.data;
});
watch(searchBy, (val) => {
  var brands = getBrands();
  var res = getPaginatedItems(brands, currentPage.value, 5);
  pageCount.value = res.total_pages;
  data.value = res.data;
});
onMounted(async () => {
  loading.value=true;
  await utilStore.setLandingBrands();
  loading.value=false;

  var brands = getBrands();
  var res = getPaginatedItems(brands, currentPage.value, 5);
  pageCount.value = res.total_pages;
  data.value = res.data;
});

const getBrands = () => {
  var res = utilStore.getLandingBrands(search.value);
  if (searchBy.value == "car") {
    return res.filter((r) => r.brands.some((f) => f.isCar == true));
  } else if (searchBy.value == "motor") {
    return res.filter((r) => r.brands.some((f) => f.isCar == false));
  }

  return res;
};
</script>

<style scoped>
.info-data {
  position: relative !important;
  display: block !important;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.navigation__link {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  color: var(--color-gray-600);
  display: flex;
  align-items: center;
  gap: 1rem;
}
[data-theme='dark'] .info-data__country.active{
  background: var(--color-dark-black-200) !important;
}
.navigation__link--active {
  color: var(--color-black);
}
.navigation__dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.navigation__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background-color: var(--color-gray-500);
}
.navigation__dot--active {
  transform: scale(1.5);
  background-color: var(--color-black);
}
</style>