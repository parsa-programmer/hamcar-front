<template>
  <template v-if="filters.gearBox?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر  گیربکس</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.gearBox"
      :key="index"
    >
      <label class="selected-filters__name" :for="`gearBox_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`gearBox_${item}`"
        name="gearBox_"
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