<template>
  <nuxt-link
    :to="`/car-reviews/${item.brandSlug}/${item.slug}`"
    class="model__card"
  >
    <h-image class="model__card-img" :src="GetModelImage(item.imageName)" />
    <div class="model__card-footer">
      <h3 class="model__card-title">{{ item.brand }} {{ item.model }}</h3>
      <h3 class="model__card-sub-title">{{ item.slug.replace("-", " ") }}</h3>
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
a {
  color: unset;
}
@media screen and (max-width: 768px) {
  .model__card {
    padding: 0;
    border-radius: 12px;
    display: inline-block;
    position: relative;
    height: fit-content;
    width: 184px;
    height: 128px !important;
  }

  .model__card-img {
    width: 100%;
    height: 100% !important;
    margin: 0 !important;
  }

  .model__card-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(24px);
    border-radius: 0px 0px 12px 12px;
    padding: 7px 12px;
    align-items: center;
  }

  .model__card-title {
    font-size: 12px !important;
    line-height: 18.19px;
    font-weight: 400 !important;
  }

  .model__card-sub-title {
    font-size: 10px !important;
    line-height: 17px;
    font-weight: 400 !important;
    color: var(--color-black) !important;
  }
}
.model__card {
  background-color: var(--color-white);
  border-radius: 18px;
  width: 296px;
  height: 288px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
}

.model__card .model__card-img {
  width: 275px;
  height: 182px;
  border-radius: 18px;
  margin-bottom: 16px;
}

.model__card .model__card-title {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  color: var(--black);
  line-height: 31.5px;
}

.model__card-footer {
  align-self: flex-start;
}

.model__card .model__card-sub-title {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-gray-600);
  line-height: 27.2px;
  font-weight: 400;
}
</style>