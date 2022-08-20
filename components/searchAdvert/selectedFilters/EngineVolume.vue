<template>
  <template v-if="filters.engineVolume?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر حجم موتور</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.engineVolume"
      :key="index"
    >
      <label class="selected-filters__name" :for="`engineVolume_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`engineVolume_${item}`"
        name="engineVolume_"
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