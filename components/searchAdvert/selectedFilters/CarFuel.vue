<template>
  <template v-if="filters.fuel?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر سوخت</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.fuel"
      :key="index"
    >
      <label class="selected-filters__name" :for="`cfuel_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`cfuel_${item}`"
        name="fuel_"
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