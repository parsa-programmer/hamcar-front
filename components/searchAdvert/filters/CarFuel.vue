<template>
  <search-advert-collapsible-card
    title="سوخت"
    :is-open="advertFilter.getFilterQueryParams().fuel != null"
  >
    <template v-for="(item, index) in Object.values(CarFuel)" :key="index">
      <div
        class="filter__item"
        v-if="typeof item == 'string' && item != CarFuel.نا_مشخص"
      >
        <h-input
          type="checkbox"
          :input-id="`fu${item}`"
          name="fuels"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .fuel?.toString()
              .includes(item.toString())
          "
        >
          <span class="filter__data">{{
            item.toString().replaceAll("_", " ")
          }}</span>
        </h-input>
      </div>
    </template>
  </search-advert-collapsible-card>
</template>

<script setup lang="ts">
import { CarFuel } from "~~/models/advertisements/enums/CarFuel";

const advertFilter = useAdverFilter();

async function changeData() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=fuels]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await advertFilter.changeQueryParams(values, "fuel");
}
</script>

<style>
</style>