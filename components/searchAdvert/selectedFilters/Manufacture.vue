<template>
  <template v-if="filters.manufacture?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر تولید</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.manufacture"
      :key="index"
    >
      <label class="selected-filters__name" :for="`manufacture_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`manufacture_${item}`"
        name="manufacture_"
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