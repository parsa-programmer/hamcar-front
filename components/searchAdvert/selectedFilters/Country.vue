<template>
  <template v-if="filters.country?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر کشور سازنده</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.country"
      :key="index"
    >
      <label class="selected-filters__name" :for="`country_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`country_${item}`"
        name="country_"
        :value="item"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { AdvertisementFilterParams } from "~~/models/advertisements/Advertisement.Models";

const { filters } = defineProps<{
  filters: AdvertisementFilterParams;
}>();
</script>

<style>
</style>