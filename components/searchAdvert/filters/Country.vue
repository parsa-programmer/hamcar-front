<template>
  <search-advert-collapsible-card
    title="کشور سازنده"
    :is-open="advertFilter.getFilterQueryParams().country != null"
  >
    <template v-for="(item, index) in Object.values(Country)" :key="index">
      <div class="filter__item" v-if="typeof item == 'string'">
        <h-input
          type="checkbox"
          :input-id="`cnt${item}`"
          name="country"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .country?.toString()
              .includes(item.toString())
          "
        >
          <span class="filter__data">{{
            item.toString().replace("_", " ")
          }}</span>
        </h-input>
      </div>
    </template>
  </search-advert-collapsible-card>
</template>

<script setup lang="ts">
import { Country } from "~~/models/utilities/Country";
const advertFilter = useAdverFilter();


const changeData = async () => {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=country]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await advertFilter.changeQueryParams(values, "country");
};
</script>

<style>
</style>