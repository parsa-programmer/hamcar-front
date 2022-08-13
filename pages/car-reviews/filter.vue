<template>
  <div>
    <Head>
      <Title>جستوجو میان مدل ها</Title>
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
      <a class="breadcrumb__item breadcrumb__item--active">
        جستوجو میان مدل ها
      </a>
    </section>
    <section class="technical">
      <div class="technical__head">
        <h1 class="technical__title">مشخصات فنی و مقایسه خودرو ها</h1>
        <div class="input-group advert__search-box">
          <input
            type="text"
            class="form-control bg-transparent"
            placeholder="جستجو میان همه مدل ها..."
            v-model="searchValue"
            @keydown.enter="search"
          />
          <icons-search class="input-icon" hash-color="#C6C7CC"></icons-search>
        </div>
      </div>
      <div class="row wrap" v-if="pending && pageId == 1">
        <lazy-skeleton-loading-car-review-model-card />
        <lazy-skeleton-loading-car-review-model-card />
        <lazy-skeleton-loading-car-review-model-card />
        <lazy-skeleton-loading-car-review-model-card />
      </div>
      <div class="row wrap" v-else>
        <CarModelCard
          v-for="item in cars"
          :key="item.id"
          :item="item"
        ></CarModelCard>

        <lazy-skeleton-loading-car-review-model-card v-if="nextPageLoading" />
        <lazy-skeleton-loading-car-review-model-card v-if="nextPageLoading" />
        <lazy-skeleton-loading-car-review-model-card v-if="nextPageLoading" />
        <lazy-skeleton-loading-car-review-model-card v-if="nextPageLoading" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { GetByFilter } from "~/services/carReview.service";
import {
  CarReviewFilterData,
  CarReviewFilterOrderBy,
} from "~~/models/carReviews/CarReviewModels";
import { GetModelImage } from "~/utilities/imageUtil";

const isLoading = ref(true);
const searchValue = ref("");
const route = useRoute();
const pageId = ref(1);
const nextPageLoading = ref(false);
const cars: Ref<CarReviewFilterData[]> = ref([]);
let orderBy: CarReviewFilterOrderBy = CarReviewFilterOrderBy.visit;
if (route.query.orderBy) {
  orderBy = route.query.orderBy.toString() as CarReviewFilterOrderBy;
}
const { data, pending, refresh } = await useAsyncData(
  "filter-reviews",
  () =>
    GetByFilter({
      brandSlug: "",
      orderBy: orderBy,
      pageId: pageId.value,
      take: 12,
      search: searchValue.value,
    })
);
cars.value = data.value.data?.data ?? [];

watch(data, async (val) => {
  if (val) {
    val.data!.data!.forEach((element) => {
      cars.value.push(element);
    });
  }
});

const search = () => {
  isLoading.value = true;
  pageId.value = 1;
  cars.value = [];
  refresh();
};
onMounted(() => {
  window.onscroll = () => {
    let bottomOfWindow =
      Math.ceil(document.documentElement.scrollTop + window.innerHeight) ===
      document.documentElement.offsetHeight;

    if (bottomOfWindow) {
      if (pageId.value < data.value.data?.pageCount!) {
        pageId.value++;
        nextPageLoading.value = true;
        refresh().finally(() => {
          nextPageLoading.value = false;
        });
      }
    }
  };
});
</script>

<style>
</style>