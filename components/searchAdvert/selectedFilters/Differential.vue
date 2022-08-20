<template>
  <template v-if="filters.differential?.length ?? 0 > 0">
    <h5 class="text-center">فیلتر دیفرانسیل</h5>
    <div
      class="selected-filters__item"
      v-for="(item, index) in filters.differential"
      :key="index"
    >
      <label class="selected-filters__name" :for="`differential_${item}`">{{
        item.toString().replaceAll("_", " ")
      }}</label>
      <h-input
        type="checkbox"
        checked
        :input-id="`differential_${item}`"
        name="differential_"
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