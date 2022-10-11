<template>
  <div>
    <Head>
      <Title>مشخصات فنی خودرو های مدل {{ brand }}</Title>
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
      <a class="breadcrumb__item breadcrumb__item--active"
        >مشخصات فنی خودرو های مدل {{ data?.data?.brandName }}
      </a>
    </section>
    <section class="technical">
      <div class="technical__head">
        <h1 class="technical__title">
          مشخصات فنی خودرو های مدل {{ data?.data?.brandName }}
        </h1>
        <search-advert />
      </div>

      <div class="technical__content">
        <div class="row wrap" v-if="data?.data?.entityCount ?? 0 > 0">
          <div
            class="model-items"
            v-for="(modelItem, index) in data?.data?.data"
            :key="index"
          >
            <car-model-card :item="modelItem"></car-model-card>
          </div>
        </div>
        <div v-else>
          <h-alert :type="AlertType.Warning">
            موردی برای نمایش وجود ندارد
          </h-alert>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { GetByFilter } from "~/services/carReview.service";
import { CarReviewFilterOrderBy } from "~~/models/carReviews/CarReviewModels";
import { AlertType } from "~~/models/utilities/AlertType";
const route = useRoute();

const brand = route.params.brand;
const { data } = await useAsyncData(
  "carReview-brands",
  () =>
    GetByFilter({
      pageId: 1,
      brandSlug: brand.toString(),
      take: 100,
      orderBy: CarReviewFilterOrderBy.visit,
      search: "",
    }),
  {
    initialCache: false,
  }
);
</script>

<style scoped>
@media (max-width: 425px) {
  .row {
    justify-content: center;
  }
  .model-items {
    text-align: center;
    width: 100%;
  }
  .model-items a {
    width: 275px;
    height: 193px !important;
  }
  .technical__head {
    margin-bottom: 1rem;
  }
  h1{
    font-size: var(--t3-font-size);
    font-family: var(--t3-font-family);
  }
}
.technical__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
</style>