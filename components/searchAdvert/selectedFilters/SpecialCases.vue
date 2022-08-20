<template>
  <template v-if="filters.specialCases?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر موارد خاص</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.specialCases"
      :key="index"
    >
      <label class="selected-filters__name" :for="`specialCases_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`specialCases_${item}`"
        name="specialCases_"
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