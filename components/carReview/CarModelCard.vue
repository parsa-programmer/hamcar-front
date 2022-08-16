<template>
  <nuxt-link
    :to="`/car-reviews/${item.brandSlug}/${item.slug}`"
    class="model__card"
  >
    <h-image class="model__card-img" :src="GetModelImage(item.imageName)" />
    <div class="model__card-footer">
      <h3 class="model__card-title">{{ item.brand }} {{ item.model }}</h3>
      <h3 class="model__card-sub-title">{{ item.slug.replace("-"," ") }}</h3>
    </div>
  </nuxt-link>
</template>


<script setup lang="ts">
import { CarReviewFilterData } from "~~/models/carReviews/CarReviewModels";
import { GetModelImage } from "~~/utilities/imageUtil";
defineProps<{
  item: CarReviewFilterData;
}>();
</script>
<style scoped>
a{
  color: unset;
}
</style>