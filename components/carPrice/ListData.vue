<template>
  <nuxt-link
    :to="`/price/${detail.carPriceSlug}?year=${detail.year}`"
    class="price-list__item__body card-color-dark"
  >
    <div class="flex grow-1 justify-content-space-between section__1">
      <p class="brand">
        {{ detail.carPriceModel?.title }}
        <template v-if="detail.trim">،{{ detail.trim.title }}</template>
      </p>
      <p>
        {{ detail.year }}
        <span class="text-muted" v-if="detail.builderOrSeller">|</span
        >{{ detail.builderOrSeller }}
      </p>
      <p class="d-sm__none desc">
        {{ detail.priceType }} - {{ TimeAgo(detail.dateTime) }}
      </p>
      <p class="d-sm__block d-none desc">{{ TimeAgo(detail.dateTime) }}</p>
    </div>
    <div class="flex justify-content-space-between grow-1 section__2">
      <p class="price__chart">
        <client-only>
          <apexchart
            width="59"
            type="line"
            height="24px"
            :options="options"
            :series="series"
          ></apexchart>
        </client-only>
      </p>
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
      <p class="item__price">{{ splitNumber(detail.lastPrice) }} تومان</p>
      <p class="d-sm__block d-none desc" style="order: 4">
        {{ detail.priceType }}
      </p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { CarPriceDetail } from "~~/models/carPrices/CarPriceModels";
import { splitNumber } from "~~/utilities/numberUtils";
import { ref } from "#imports";
import { TimeAgo } from "~~/utilities/dateUtil";
import { orderBy } from "lodash";

const props = defineProps<{
  detail: CarPriceDetail;
}>();
const percentage = ref(0);
const data = unref(props.detail);

onMounted(() => {
  const detailPrices = data?.prices.reverse();
  if (detailPrices.length > 1) {
    percentage.value =
      ((detailPrices[detailPrices.length - 1] -
        detailPrices[detailPrices.length - 2]) /
        detailPrices[detailPrices.length - 2]) *
      100;
  }
  series.value = [
    {
      data: detailPrices,
    },
  ];
});

const options = ref({
  chart: {
    id: "vuechart-example",
    sparkline: { enabled: true },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: percentage.value >= 0 ? ["#02C7BE"] : ["#FF5252"],
    width: 2,
    dashArray: 0,
  },
  tooltip: {
    enabled: false,
  },
});

const series = ref();
const router = useRouter();
const showDetail = () => {
  router.push(`/carPrice/${data.carPriceSlug}`);
};
</script>

<style scoped>
.price-list__item__body {
  cursor: pointer;
  transition: all ease 0.2s;
}
.price-list__item__body:hover {
  background: var(--color-white);
}
.price__chart {
  flex-grow: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  align-content: space-around;
}
@media screen and (max-width: 768px) {
  .desc {
    color: var(--color-black-200) !important;
  }
  .d-sm__block {
    display: block !important;
  }
  [data-theme="dark"] .desc {
    color: #606066 !important;
  }
  .d-sm__none {
    display: none !important;
  }
  .price__header {
    justify-content: flex-start !important;
  }
  .section__1 {
    flex-direction: column;
  }
  .section__1 p {
    margin-top: 0.5rem;
  }
  .section__1 p:first-child {
    margin-top: 0 !important;
  }
  .section__2 {
    flex-direction: column;
    align-items: flex-end;
  }
  .item__price {
    order: 1;
  }
  .section__2 .font-4 {
    order: 2;
    display: flex;
    align-items: center;
    align-content: center;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
  }
  .price__header__title {
    flex-grow: 1;
    justify-content: space-between;
  }
  .section__1 .brand {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    font-weight: 500;
  }
  .price__chart {
    display: none;
  }
}
</style>