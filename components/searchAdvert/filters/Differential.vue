<template>
  <search-advert-collapsible-card
    title="دیفرانسیل"
    :is-open="advertFilter.getFilterQueryParams().differential != null"
  >
    <template v-for="(item, index) in Object.values(Differential)" :key="index">
      <div
        class="filter__item"
        v-if="typeof item == 'string'"
      >
        <h-input
          type="checkbox"
          :input-id="`diff${item}`"
          name="differential"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .differential?.toString()
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
import { Differential } from "~~/models/advertisements/enums/Differential";

const advertFilter = useAdverFilter();

async function changeData() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=differential]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await advertFilter.changeQueryParams(values, "differential");
}
</script>

<style>
</style>