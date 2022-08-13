<template>
  <div>
    <Head>
      <Title>قیمت روز خودرو</Title>
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">قیمت روز خودرو</a>
    </section>
    <section class="price__content">
      <div class="flex price__header">
        <div
          class="
            flex
            align-items-center
            justify-content-center
            price__header__title
          "
        >
          <h1 class="page__title">قیمت روز خودرو</h1>
           
          <span class="page__sub-title"
            >(امروز: {{ new Date().toLocaleDateString("fa-IR") }})</span
          >
        </div>
        <div class="input-group advert__search-box">
          <input
            type="text"
            class="form-control bg-transparent"
            placeholder="جستجو میان همه برند ها، مدل ها و."
            v-model="search"
            @keydown="searchAgain"
          />
          <icons-search class="input-icon" hash-color="var(--color-gray-600)" />
        </div>
      </div>
      <div class="flex wrap justify-content-space-between filter mt-1_5">
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.همه)"
          :class="{ active: searchOn == CarPriceSearchOn.همه }"
          >قیمت روز همه خودرو ها</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.داخلی)"
          :class="{ active: searchOn == CarPriceSearchOn.داخلی }"
          >قیمت روز خودرو های داخلی</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.وارداتی)"
          :class="{ active: searchOn == CarPriceSearchOn.وارداتی }"
          >قیمت روز خودرو های وارداتی</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.قیمت_نمایندگی)"
          :class="{ active: searchOn == CarPriceSearchOn.قیمت_نمایندگی }"
          >قیمت روز نمایندگی</h-button
        >
      </div>
      <div v-if="pending == false">
        <div
          class="price-list__item mt-3"
          v-for="(item, index) in data"
          :key="index"
        >
          <h3 class="price-list__item__header">
            <h-image
              :src="GetBrandImage(item.carPriceBrand.imageName)"
              style="max-width: 100px; margin-left: 5px"
            />
            قیمت روز خودرو های {{ item.carPriceBrand.title }}
          </h3>
          <car-price-list-data
            v-for="(priceDetail, index) in item.details"
            :key="index"
            :detail="priceDetail"
          />
        </div>
      </div>
      <div v-else>
        <icons-loading />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { CarPriceSearchOn } from "~~/models/carPrices/CarPriceSearchOn";
import { GetMainPage } from "~~/services/carPrice.service";
import { ref } from "#imports";
import { CarPriceMainPage } from "~~/models/carPrices/CarPriceModels";
import { GetBrandImage } from "~~/utilities/imageUtil";
import debounce from "lodash/debounce.js";

//@ts-ignore
const searchOn: Ref<CarPriceSearchOn> = ref(CarPriceSearchOn.همه);
const route = useRoute();
const { search: s } = route.query;
const search = ref(s?.toString());
const { data, refresh, pending } = await useAsyncData("carPrices", () =>
  GetMainPage(search.value, searchOn.value),{
    initialCache:false
  }
);

const ReSearch = async (search: CarPriceSearchOn) => {
  searchOn.value = search;
  await refresh();
};
const loadingSearch = ref(false);
const searchAgain = async (e: any) => {
  if (loadingSearch.value) return;
  const deb = debounce(() => {
    setTimeout(async () => {
      if (e.target.value == search.value) {
        loadingSearch.value = true;
        await refresh();
        setTimeout(() => {
          loadingSearch.value = false;
        }, 1000);
      }
    }, 1000);
  }, 500);
  deb();
};
</script>

<style scoped>
.price-list__item__header {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  display: flex;
  align-items: center;
}

.filter .btn-default {
  background: var(--color-white);
}
.price__content .filter button {
  font-family: var(--t3-font-family) !important;
  font-size: var(--t3-font-size) !important;
  width: 296px;
  height: 71px;
  text-align: right;
  letter-spacing: -0.02em;
  line-height: 180%;
}
.filter button.active {
  color: var(--color-white) !important;
  background-color: var(--color-blue) !important;
}
.price__header {
  justify-content: space-between;
}
.price-list__item__body .item__price {
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
}
.price-list__item__body:nth-child(odd) {
  background: var(--color-white);
}

.price-list__item__body {
  display: flex;
  justify-content: space-between;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black);
  padding: 1.5rem 1rem;
}
@media screen and (max-width: 768px) {
  .price-list__item__body {
    background: var(--color-white);
    box-shadow: 0px 6px 27px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    font-family: var(--t7-font-family);
    font-size: var(--t7-font-size);
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.03em;
    margin-top: 8px !important;
    border-radius: 12px;
  }

  .price-list__item__header {
    margin-bottom: 1rem;
    font-family: var(--t3-font-family);
    font-size: var(--t3-font-size);
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .price-list__item__header img {
    max-width: 55px !important;
  }

  .filter button.active {
    color: var(--color-black) !important;
    background-color: var(--color-gray-300) !important;
  }
  .price__content .filter button {
    margin-top: 1rem;
    width: 184px !important;
    height: 48px !important;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    line-height: 21.46px !important;
    text-align: center;
    padding: 0 1rem !important;
  }
}
</style>