<template>
  <section class="breadcrumb">
    <nuxt-link to="/" class="breadcrumb__item">
      <icons-home />
      همکار
    </nuxt-link>

    <template v-if="advert.motorCycleDetail == null">
      <icons-chevron-left />
      <nuxt-link to="/car" class="breadcrumb__item">خودرو</nuxt-link>
    </template>
    <template v-else>
      <icons-chevron-left />
      <nuxt-link to="/motorcycle" class="breadcrumb__item"
        >موتورسیکلت</nuxt-link
      >
    </template>

    <icons-chevron-left />
    <nuxt-link :to="`/car/${advert.brand.slug}`" class="breadcrumb__item">{{
      advert.brand.title
    }}</nuxt-link>

    <icons-chevron-left />
    <nuxt-link
      :to="`/car/${advert.brand.slug}-${advert.model.slug}`"
      class="breadcrumb__item"
      >{{ advert.model.title }}</nuxt-link
    >

    <template v-if="advert.trim">
      <icons-chevron-left />
      <nuxt-link
        :to="`/car/${advert.brand.slug}-${advert.model.slug}-${advert.trim.englishTitle}`"
        class="breadcrumb__item"
        >{{ advert.trim.title }}</nuxt-link
      >
    </template>

    <icons-chevron-left />
    <a class="breadcrumb__item breadcrumb__item--active">جزییات</a>
  </section>
</template>

<script setup lang="ts">
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";

defineProps<{
  advert: AdvertisementDto;
}>();
</script>

<style>
</style>