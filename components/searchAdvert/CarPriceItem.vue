<template>
  <div class="car__price-item">
    <div class="row justify-content-space-around align-items-center w-50">
      <div class="item__title row justify-content-space-between font-5">
        <span>{{ item.carPriceModel.title }} {{ item.year }}</span>
        <span>{{ brandName }}</span>
      </div>
      <div class="item__time">
        <span class="font-5 color_gray_600">{{ TimeAgo(item.dateTime) }}</span>
      </div>
    </div>
    <div class="row w-50 justify-content-flex-end align-items-center">
      <div class="item__percentage">
        <p
          :class="[
            'font-4',
            { 'color-green': percentage > 0 },
            { 'color-error': percentage < 0 },
            { 'text-muted': percentage == 0 },
            'grow-1',
          ]"
        >
          <template v-if="percentage % 1 == 0">
            {{ percentage.toString().replace("-", "") }}%
          </template>
          <template v-else>
            {{ percentage.toFixed(2).toString().replace("-", "") }}%
          </template>
          <icons-triangle-top
            class="mr-0_5"
            hash-color="var(--color-green)"
            v-if="percentage > 0"
          />
          <icons-triangle-down
            class="mr-0_5"
            hash-color="var(--color-error)"
            v-else-if="percentage < 0"
          />
          <span v-else-if="percentage == 0" class="mr-0_5 rectangel"></span>
        </p>
      </div>
      <div class="item__price font-2">
        {{ splitNumber(item.lastPrice) }} تومان
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CarPriceDetail } from "~~/models/carPrices/CarPriceModels";
import { splitNumber } from "~~/utilities/numberUtils";
import { ref } from "#imports";
import { TimeAgo } from "~~/utilities/dateUtil";

const props = defineProps<{
  item: CarPriceDetail;
  brandName: string;
}>();
const percentage = ref(0);
const data = unref(props.item);

onMounted(() => {
  const detailPrices = data?.prices.reverse();
  if (detailPrices.length > 1) {
    percentage.value =
      ((detailPrices[detailPrices.length - 1] -
        detailPrices[detailPrices.length - 2]) /
        detailPrices[detailPrices.length - 2]) *
      100;
  }
});
</script>

<style scoped>
.w-50 {
  width: 50%;
}
.w-50 {
  width: 50%;
}
.justify-content-flex-end {
  justify-content: flex-end;
}
.car__price-item {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
}
.item__time {
  flex-grow: 2;
  text-align: center;
}
.item__title {
  gap: 2rem;
}
.item__title span:first-child {
  position: relative;
}
.item__title span:first-child::after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 1px;
  top: 2px;
  height: 85%;
  background: var(--color-gray-400);
  left: -1rem;
}
</style>