<template>
  <div class="car__price-list" v-if="prices">
    <search-advert-car-price-item
      v-for="(item, index) in prices.details"
      :key="index"
      :item="item"
      :brand-name="prices.carPriceBrand.title"
    />
    <div class="car__price-brand row justify-content-space-between">
      <div class="row align-items-center">
        <h-image :src="GetBrandImage(prices.carPriceBrand.imageName)" />
        <span class="font-5"
          >قیمت روز <b v-text="prices.carPriceBrand.title"></b
        ></span>
      </div>
      <div>
        <nuxt-link class="font-4 show-all" to="/price"
          >مشاهده لیست قیمت ها</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import {
  CarPriceDetail,
  CarPriceMainPage,
} from "~~/models/carPrices/CarPriceModels";
import { GetByBrand } from "~~/services/carPrice.service";
import { TimeAgo } from "~~/utilities/dateUtil";
import { GetBrandImage } from "~~/utilities/imageUtil";

const advertFilter = useAdverFilter();
const brand = advertFilter.brand;
const model = advertFilter.model;
const trim = advertFilter.trim;
const prices: Ref<CarPriceMainPage | null> = ref(null);

onMounted(async () => {
  if (brand) {
    var res = await GetByBrand(brand, model, trim);
    prices.value = res ?? null;
  }
});
</script>

<style scoped>
.car__price-brand img {
  width: 40px;
  height: 40px;
}
.car__price-brand {
  width: 77%;
  position: absolute;
  bottom: -16%;
  padding: 1rem 3rem;
  background: var(--color-white);
  border-radius: 14px;
  left: 50%;
  transform: translate(-50%, 0);
}
.show-all {
  color: var(--color-blue);
}

.car__price-list {
  background: var(--color-white);
  padding: 1.5rem 2rem;
  border-radius: var(--app-border-radius);
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 2.5rem;
}

</style>