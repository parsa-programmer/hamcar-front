<template>
  <search-advert-collapsible-card
    title="موارد خاص"
    :is-open="advertFilter.getFilterQueryParams().specialCases != null"
  >
    <template v-for="(item, index) in Object.values(SpecialCases)" :key="index">
      <div
        class="filter__item"
        v-if="typeof item == 'string' && item != SpecialCases.نا_مشخص"
      >
        <h-input
          type="checkbox"
          :input-id="`spci_${item}`"
          name="specialCases"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .specialCases?.toString()
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
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
const advertFilter = useAdverFilter();
const router = useRouter();
const changeData = async () => {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=specialCases]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  advertFilter.changeQueryParams(values, "specialCases");
};
</script>

<style>
</style>