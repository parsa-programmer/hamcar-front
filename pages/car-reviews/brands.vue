<template>
  <div>
    <Head>
      <Title>برند ها</Title>
      <Link href="/css/technical.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <nuxt-link to="/car-reviews" class="breadcrumb__item"
        >مشخصات فنی خودرو</nuxt-link
      >
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">برند های خودرو</a>
    </section>
    <section class="technical">
      <div class="technical__head">
        <h1 class="technical__title">برند های خودرو</h1>
        <search-advert />
      </div>

      <div class="technical__content" v-if="data.data != undefined">
        <div class="row wrap justify-content-center">
          <template v-for="(item, index) in data.data" :key="index">
            <nuxt-link
              v-if="item"
              :to="`/car-reviews/${item.slug}`"
              class="brand__card"
            >
              <h-image
                class="brand__card-img"
                placeholder="/img/placeholder.png"
                :src="GetBrandImage(item.imageName)"
              />
              <h3 class="brand__card-title mt-1">{{ item.title }}</h3>
              <h3 class="brand__card-sub-title">{{ item.slug }}</h3>
            </nuxt-link>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import { GetBrandImage } from "~/utilities/imageUtil";
import { GetBrands } from "~~/services/brand.service";
const { data } = await useAsyncData("carReview-brands", () => GetBrands(), {
  initialCache: false,
});
</script>

<style>
</style>