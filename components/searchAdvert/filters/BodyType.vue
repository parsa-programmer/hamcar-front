<template>
  <search-advert-collapsible-card
    title="وضغیت بدنه"
    :is-open="advertFilter.getFilterQueryParams().gearBox != null"
  >
    <template v-for="(item, index) in Object.values(GearBox)" :key="index">
      <div class="filter__item" v-if="typeof item == 'string'">
        <h-input
          type="checkbox"
          :input-id="`bt${item}`"
          name="bodyTypes"
          :value="item"
          @change="changeGearBox"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .gearBox?.toString()
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
import { GearBox } from "~~/models/advertisements/enums/GearBox";

const advertFilter = useAdverFilter();

async function changeGearBox() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=bodyTypes]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  advertFilter.changeQueryParams(values, "bodyType");
}
</script>

<style>
</style>