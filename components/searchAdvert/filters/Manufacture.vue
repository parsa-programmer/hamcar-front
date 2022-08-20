<template>
  <search-advert-collapsible-card
    title="تولید"
    :is-open="advertFilter.getFilterQueryParams().manufacture != null"
  >
    <template v-for="(item, index) in Object.values(Manufacture)" :key="index">
      <div class="filter__item" v-if="typeof item == 'string'">
        <h-input
          type="checkbox"
          :input-id="`mnf${item}`"
          name="manufacture"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .manufacture?.toString()
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
import { Manufacture } from '~~/models/advertisements/enums/Manufacture';

const advertFilter = useAdverFilter();

const changeData = async () => {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=manufacture]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await advertFilter.changeQueryParams(values, "manufacture");

};
</script>