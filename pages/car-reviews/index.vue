<template>
  <div>
    <Head>
      <Title>مشخصات فنی و مقایسه خودرو ها</Title>
      <Link href="/css/technical.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">مشخصات فنی خودرو</a>
    </section>
    <section class="technical">
      <div class="technical__head">
        <h1 class="technical__title">مشخصات فنی و مقایسه خودرو ها</h1>
        <search-advert />
      </div>

      <div class="technical__content">
        <div class="brand__heading row justify-content-space-between">
          <h2 class="page__sub__title">برند ها</h2>
          <nuxt-link to="/car-reviews/brands" class="blue-link bold-500">
            مشاهده همه
            <icons-chevron-left
              hash-color="#007AFF"
              :width="6"
              :height="11"
            ></icons-chevron-left>
          </nuxt-link>
        </div>
        <h-slider :items="data.data?.brands" v-if="data?.data">
          <template #item="{ item }" class="row">
            <nuxt-link :to="`/car-reviews/${item.slug}`" class="brand__card">
              <h-image
                class="brand__card-img"
                placeholder="/img/placeholder.png"
                :src="GetBrandImage(item.imageName)"
              />
              <h3 class="brand__card-title mt-1">{{ item.title }}</h3>
              <h3 class="brand__card-sub-title">{{ item.slug }}</h3>
            </nuxt-link>
          </template>
        </h-slider>
        <h-skeletor v-else width="100%" style="height: 100px" />
        <hr />
        <div
          class="
            brand__heading
            row
            justify-content-space-between
            mt__mobile__24
          "
        >
          <h2 class="page__sub__title">مدل های پربازدید</h2>
          <nuxt-link
            to="/car-reviews/filter?orderBy=visit"
            class="blue-link bold-500"
          >
            مشاهده همه
            <icons-chevron-left
              hash-color="#007AFF"
              :width="6"
              :height="11"
            ></icons-chevron-left>
          </nuxt-link>
        </div>
        <h-slider
          :items="data?.data?.topVisitReviews"
          :arrows="false"
          v-if="data?.data"
        >
          <template #item="{ item }" class="row">
            <CarModelCard :item="item"></CarModelCard>
          </template>
        </h-slider>
        <h-skeletor v-else width="100%" style="height: 100px" />

        <hr />
        <template v-if="data?.data">
          <div
            class="brand__model__box"
            v-for="brandData in data?.data?.carReviews"
            :key="brandData.brand.id"
          >
            <h-slider :items="brandData.carReviews" :arrows="false">
              <template #first-item>
                <div class="slider-item">
                  <div class="brand__card spec">
                    <div class="spec__header">
                      <h-image
                        class="brand__card-img"
                        placeholder
                        :src="GetBrandImage(brandData.brand.imageName)"
                      />
                      <div class="spec__header-title text-center">
                        <h3 class="brand__card-title">
                          {{ brandData.brand.title }}
                        </h3>
                        <h3 class="brand__card-sub-title">
                          {{ brandData.brand.slug }}
                        </h3>
                      </div>
                    </div>
                    <nuxt-link
                      :to="`/car-reviews/${brandData.brand.slug}`"
                      class="btn btn-primary-outline"
                    >
                      مشاهده همه
                      <icons-chevron-left
                        hash-color="#007AFF"
                        :width="8"
                        :height="13"
                        class="mr"
                      ></icons-chevron-left>
                    </nuxt-link>
                  </div>
                </div>
              </template>
              <template #item="{ item }" class="row">
                <CarModelCard :item="item"></CarModelCard>
              </template>
            </h-slider>
          </div>
        </template>
        <h-skeletor v-else width="100%" style="height: 300px" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { GetMainPageData } from "~/services/carReview.service";
import { GetBrandImage, GetModelImage } from "~~/utilities/imageUtil";
const { data } = await useAsyncData("reviews", () => GetMainPageData(), {
  server: true,
  lazy: true,
  initialCache: false,
});
</script>


<style scoped>
.brand__card {
  color: var(--color-black);
}
.model__card {
  color: var(--color-black);
}
.brand__model__box {
  margin-bottom: 3rem;
}
.technical__content {
  margin-top: 46px;
}
.page__sub__title {
  margin-bottom: 24px;
}
.spec {
  width: 296px;
  height: 288px;
  justify-content: space-evenly;
}
.btn-primary-outline {
  width: 172px;
  height: 72px;
}
@media screen and (max-width: 768px) {
  hr {
    display: none;
  }
  .mt__mobile__24 {
    margin-top: 24px;
  }
  .brand__model__box {
    margin-bottom: 1.5rem;
  }
}
</style>