<template>
  <div>
    <render-seo-data :meta="carReview.seoData" />
    <h-modal title="گزارش اشکال" v-model="isOpenBugReportModal">
      <report-bug :reportFor="BugReportFor.review" :link-id="carReview.id" />
    </h-modal>
    <h-modal
      title="اشتراک گذاری"
      sub-title="با استفاده از روش های زیر میتوانید این صفحه را با دوستان خود به اشتراک بگذارید."
      v-model="isOpenShareModal"
    >
      <share-page
        v-model="isOpenShareModal"
        :link="`/car-review/${carReview.carReviewBrand.slug}/${carReview.slug}`"
      />
    </h-modal>
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
      <nuxt-link
        :to="`/car-reviews/${carReview.carReviewBrand.slug}`"
        class="breadcrumb__item"
        >{{ carReview.carReviewBrand.title }}</nuxt-link
      >

      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active"
        >{{ carReview.carReviewBrand.title }}
        {{ carReview.carReviewModel.title }}</a
      >
    </section>
    <section class="technical">
      <div class="technical__head">
        <h2 class="technical__title">
          {{ carReview.carReviewBrand.title }}
          {{ carReview.carReviewModel.title }}
          <small>{{ carReview.year }}</small>
        </h2>
        <search-advert />
        <div class="technical__rating-stars">
          <div class="technical__star">
            <img src="/img/star-outline.svg" />
          </div>
          <div class="technical__star">
            <img src="/img/star-outline.svg" />
          </div>
          <div class="technical__star">
            <img src="/img/star-outline.svg" />
          </div>
          <div class="technical__star">
            <img src="/img/star-outline.svg" />
          </div>
          <div class="technical__star">
            <img src="/img/star-outline.svg" />
          </div>
          <div
            class="technical__rating-stars-value"
            :style="`width: calc(var(--star-length) * ${commentRate})`"
          >
            <div class="technical__star">
              <img src="/img/star-full.svg" />
            </div>
            <div class="technical__star">
              <img src="/img/star-full.svg" />
            </div>
            <div class="technical__star">
              <img src="/img/star-full.svg" />
            </div>
            <div class="technical__star">
              <img src="/img/star-full.svg" />
            </div>
            <div class="technical__star">
              <img src="/img/star-full.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="technical__content">
        <div class="technical__slider">
          <h-slider :items="carReview.images" :arrows="false" :dots="true">
            <template #item="{ item }">
              <h-image
                reload
                :src="GetCarReviewImage(item.imageName)"
                alt="Hamcar.ir"
                placeholder="/img/placeholder.png"
                class="technical__banner"
              />
            </template>
          </h-slider>
        </div>
        <div class="technical__options-list">
          <a
            href="javascript:void(0)"
            @click="toggleShareModal"
            class="technical__option"
          >
            <span>
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5003 8.97499C15.386 9.97149 16.6818 10.6 18.1255 10.6C20.795 10.6 22.9591 8.45097 22.9591 5.8C22.9591 3.14903 20.795 1 18.1255 1C15.456 1 13.2919 3.14903 13.2919 5.8C13.2919 7.01734 13.7483 8.12883 14.5003 8.97499ZM14.5003 8.97499L8.25208 13M8.25208 13C7.75442 11.6018 6.41161 10.6 4.83318 10.6C2.83105 10.6 1.20801 12.2118 1.20801 14.2C1.20801 16.1882 2.83105 17.8 4.83318 17.8C6.41161 17.8 7.75442 16.7982 8.25208 15.4M8.25208 13C8.38567 13.3753 8.45836 13.7792 8.45836 14.2C8.45836 14.6208 8.38567 15.0247 8.25208 15.4M8.25208 15.4L16.1937 19.6M16.1937 19.6C15.8852 20.1295 15.7087 20.7443 15.7087 21.4C15.7087 23.3882 17.3318 25 19.3339 25C21.336 25 22.9591 23.3882 22.9591 21.4C22.9591 19.4118 21.336 17.8 19.3339 17.8C17.9921 17.8 16.8205 18.524 16.1937 19.6Z"
                  stroke="var(--color-black)"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
            اشتراک گذاری
          </a>
          <nuxt-link
            :to="`/car-reviews/compare/${carReview.slug}`"
            class="technical__option"
          >
            <span>
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0003 25.7734L22.667 19.6371M22.667 19.6371L1.33366 19.6371M22.667 19.6371L16.0003 13.5007"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.99967 13.5L1.33301 7.36364M1.33301 7.36364L22.6663 7.36364M1.33301 7.36364L7.99967 1.22727"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            مقایسه
          </nuxt-link>
          <nuxt-link
            v-if="carPrice"
            :to="`/price/${carPrice?.carPriceSlug}`"
            class="technical__option"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53226 9.81714C1.99621 9.81714 1.88312 9.81162 1.80519 9.7949L1.59548 10.7727L1.80518 9.7949C1.42451 9.71326 1.10117 9.3799 1.03118 8.99691C1.01667 8.91751 1.01446 8.81602 1.02975 8.31505C1.07994 6.67112 1.21244 5.68251 1.50847 4.88721C2.06444 3.39359 2.82688 2.52367 3.98895 1.87231C4.99755 1.30697 6.57368 1 9.7782 1H14.2218C17.4263 1 19.0025 1.30697 20.0111 1.87231C21.1731 2.52367 21.9356 3.39359 22.4915 4.88721C22.7876 5.68251 22.9201 6.67111 22.9702 8.31504C22.9855 8.81602 22.9833 8.91751 22.9688 8.99691L23.9525 9.17669L22.9688 8.99691C22.8988 9.3799 22.5755 9.71325 22.1948 9.7949C22.1169 9.81162 22.0038 9.81714 21.4677 9.81714C20.0787 9.81714 19.2814 11.1177 19.2814 12.2729C19.2814 13.4282 20.0787 14.7287 21.4677 14.7287C21.9927 14.7287 22.1024 14.7341 22.1802 14.7507C22.5602 14.8318 22.8946 15.182 22.9581 15.5654C22.9713 15.6454 22.9721 15.7386 22.9503 16.2127C22.8885 17.5507 22.7531 18.41 22.4915 19.1128C21.9356 20.6064 21.1731 21.4763 20.0111 22.1277C19.0025 22.693 17.4263 23 14.2218 23H9.7782C6.57368 23 4.99755 22.693 3.98895 22.1277C2.82688 21.4763 2.06444 20.6064 1.50847 19.1128C1.24688 18.41 1.11151 17.5507 1.04974 16.2127C1.02786 15.7386 1.02865 15.6454 1.0419 15.5654C1.10537 15.182 1.43977 14.8318 1.81982 14.7507C1.8976 14.7341 2.00728 14.7287 2.53226 14.7287C3.92132 14.7287 4.7186 13.4282 4.7186 12.2729C4.7186 11.1177 3.92132 9.81714 2.53226 9.81714Z"
                  stroke="var(--color-black)"
                  stroke-width="2"
                ></path>
                <path
                  d="M15 9L9 15M9 9V10M15 14V15"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            قیمت روز
          </nuxt-link>
          <nuxt-link v-else to="/price" class="technical__option">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53226 9.81714C1.99621 9.81714 1.88312 9.81162 1.80519 9.7949L1.59548 10.7727L1.80518 9.7949C1.42451 9.71326 1.10117 9.3799 1.03118 8.99691C1.01667 8.91751 1.01446 8.81602 1.02975 8.31505C1.07994 6.67112 1.21244 5.68251 1.50847 4.88721C2.06444 3.39359 2.82688 2.52367 3.98895 1.87231C4.99755 1.30697 6.57368 1 9.7782 1H14.2218C17.4263 1 19.0025 1.30697 20.0111 1.87231C21.1731 2.52367 21.9356 3.39359 22.4915 4.88721C22.7876 5.68251 22.9201 6.67111 22.9702 8.31504C22.9855 8.81602 22.9833 8.91751 22.9688 8.99691L23.9525 9.17669L22.9688 8.99691C22.8988 9.3799 22.5755 9.71325 22.1948 9.7949C22.1169 9.81162 22.0038 9.81714 21.4677 9.81714C20.0787 9.81714 19.2814 11.1177 19.2814 12.2729C19.2814 13.4282 20.0787 14.7287 21.4677 14.7287C21.9927 14.7287 22.1024 14.7341 22.1802 14.7507C22.5602 14.8318 22.8946 15.182 22.9581 15.5654C22.9713 15.6454 22.9721 15.7386 22.9503 16.2127C22.8885 17.5507 22.7531 18.41 22.4915 19.1128C21.9356 20.6064 21.1731 21.4763 20.0111 22.1277C19.0025 22.693 17.4263 23 14.2218 23H9.7782C6.57368 23 4.99755 22.693 3.98895 22.1277C2.82688 21.4763 2.06444 20.6064 1.50847 19.1128C1.24688 18.41 1.11151 17.5507 1.04974 16.2127C1.02786 15.7386 1.02865 15.6454 1.0419 15.5654C1.10537 15.182 1.43977 14.8318 1.81982 14.7507C1.8976 14.7341 2.00728 14.7287 2.53226 14.7287C3.92132 14.7287 4.7186 13.4282 4.7186 12.2729C4.7186 11.1177 3.92132 9.81714 2.53226 9.81714Z"
                  stroke="var(--color-black)"
                  stroke-width="2"
                ></path>
                <path
                  d="M15 9L9 15M9 9V10M15 14V15"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            قیمت روز
          </nuxt-link>
          <a
            href="javascript:void(0)"
            @click="toggleBugReportModal"
            class="technical__option"
          >
            <span>
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.88466 13.9334C3.71711 13.9334 1.95996 12.1906 1.95996 10.0407C1.95996 7.89088 3.71711 6.14808 5.88466 6.14808H7.17948M5.88466 13.9334C5.88466 13.9334 7.23996 18.602 7.71996 20.0289C8.19996 21.4558 10.6 21.4558 10.6 19.5533C10.6 17.6508 10.6 16.6063 10.6 14.1816M5.88466 13.9334H7.17948M10.6 14.1816C13.3337 14.8009 15.8672 16.451 18.3047 17.6598C23.1893 20.0821 23.0798 12.3998 23.0798 10.0407C23.0798 7.68163 23.1893 -0.000664162 18.3047 2.42167C15.2475 3.93782 12.0394 6.14808 8.4743 6.14808H7.17948M10.6 14.1816C9.90493 14.0242 9.19695 13.9334 8.4743 13.9334H7.17948M7.17948 13.9334V6.14808"
                  stroke="var(--color-black)"
                  stroke-width="2"
                ></path>
                <path
                  d="M24.04 7.68164V12.4544"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            گزارش اشکال
          </a>
          <div class="technical__rating">
            <div
              class="technical__comment-counter"
              v-if="commentDataLoading == false"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1C14.4525 1 16.3618 1.11137 17.855 1.39866C19.3432 1.68498 20.3438 2.13251 21.0445 2.75018C22.4367 3.97734 23 6.19513 23 10.6667C23 13.5482 22.7413 15.6685 22.0447 17.0498C21.7104 17.7127 21.2871 18.1797 20.7543 18.4903C20.2159 18.8042 19.494 19 18.5002 19C17.2191 19 16.2575 19.2877 15.5056 19.7971C14.7717 20.2944 14.329 20.9455 13.9997 21.4637C13.9499 21.542 13.9032 21.6161 13.8591 21.6862C13.583 22.1245 13.4043 22.4082 13.1562 22.6307C12.9352 22.8291 12.6262 23 12.0003 23C11.3744 23 11.0654 22.8291 10.8443 22.6307C10.5963 22.4081 10.4176 22.1245 10.1415 21.6862C10.0974 21.6161 10.0507 21.542 10.0009 21.4636C9.67154 20.9454 9.22884 20.2944 8.4949 19.7971C7.74298 19.2877 6.7814 19 5.50024 19C4.51174 19 3.79218 18.7993 3.25388 18.4789C2.71963 18.1609 2.29353 17.6832 1.95707 17.0102C1.25807 15.612 1 13.488 1 10.6667C1 6.25195 1.56175 4.02841 2.95861 2.78674C3.66142 2.16203 4.66352 1.70608 6.14984 1.41246C7.64154 1.11777 9.54955 1 12 1Z"
                  stroke="var(--color-black)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <circle cx="8" cy="11" r="1" fill="var(--color-black)"></circle>
                <circle
                  cx="12"
                  cy="11"
                  r="1"
                  fill="var(--color-black)"
                ></circle>
                <circle
                  cx="16"
                  cy="11"
                  r="1"
                  fill="var(--color-black)"
                ></circle>
              </svg>
              {{ commentCount }} دیدگاه
            </div>
            <h-skeletor
              width="100px"
              style="height: 15px"
              v-if="commentDataLoading"
            />
            <h-skeletor
              width="150px"
              style="height: 15px"
              v-if="commentDataLoading"
            />
            <div
              class="technical__rating-stars"
              v-if="commentDataLoading == false"
            >
              <div class="technical__star">
                <img src="/img/star-outline.svg" />
              </div>
              <div class="technical__star">
                <img src="/img/star-outline.svg" />
              </div>
              <div class="technical__star">
                <img src="/img/star-outline.svg" />
              </div>
              <div class="technical__star">
                <img src="/img/star-outline.svg" />
              </div>
              <div class="technical__star">
                <img src="/img/star-outline.svg" />
              </div>
              <div
                class="technical__rating-stars-value"
                :style="`width: calc(var(--star-length) * ${commentRate})`"
              >
                <div class="technical__star">
                  <img src="/img/star-full.svg" />
                </div>
                <div class="technical__star">
                  <img src="/img/star-full.svg" />
                </div>
                <div class="technical__star">
                  <img src="/img/star-full.svg" />
                </div>
                <div class="technical__star">
                  <img src="/img/star-full.svg" />
                </div>
                <div class="technical__star">
                  <img src="/img/star-full.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="technical__description technical__description--limited">
          <p class="technical__text">
            {{ carReview.description }}
          </p>
          <span class="technical__see-more">
            نمایش ادامه
            <icons-chevron-down></icons-chevron-down>
          </span>
        </div>
        <div class="technical__options">
          <div
            class="technical__progress"
            v-for="(item, index) in carReview?.percentageSpecifications"
            :key="index"
          >
            <div
              class="progress"
              :style="`--progress-value: ${item.percentage}`"
            >
              <svg>
                <circle cx="44" cy="44" r="44" class="progress-color"></circle>
                <circle cx="44" cy="44" r="44" class="progress-color"></circle>
              </svg>
              <span class="progress__counter">{{ item.percentage }}%</span>
            </div>
            <span class="technical__progress-name">{{ item.title }}</span>
          </div>
        </div>
        <div class="technical__points flex">
          <div class="points points--advantages">
            <div class="points__title">نقاط قوت</div>
            <ul class="points__list">
              <li
                v-for="(item, index) in carReview?.advantages.trim().split('-')"
                :key="index"
                class="points__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="points points--disadvantages">
            <div class="points__title">نقاط ضعف</div>
            <ul class="points__list">
              <li
                v-for="(item, index) in carReview?.disadvantages.split('-')"
                :key="index"
                class="points__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <nuxt-link
          :to="`/car/${carReview.carReviewBrand.slug}-${carReview.carReviewModel.slug}`"
          v-if="relatedAdvertCount > 0"
          class="btn btn-primary technical__link"
          >مشاهده {{ relatedAdvertCount }} آگهی مرتبط
        </nuxt-link>
        <div class="technical__link" v-else></div>
        <CarReviewSpecifications
          :leftSide="leftSpecifications"
          :rightSide="rightSpecifications"
        />

        <div class="technical__same-cars" v-if="relatedCars.length > 0">
          <span class="technical__section-title">خودرو های هم رده</span>

          <h-slider class="car__row" :items="relatedCars" :arrows="false">
            <template #item="{ item }">
              <div class="car">
                <nuxt-link
                  :to="`/car-reviews/${item.brandSlug}/${item.slug}`"
                  class="car__link"
                >
                  <h-image
                    :src="GetModelImage(item.imageName)"
                    :alt="`${item.brand}, ${item.model}`"
                    class="car__img"
                  />
                  <h3 class="car__name">{{ item.brand }}،{{ item.model }}</h3>
                  <span class="car__en-name">{{
                    item.slug.replace("-", " ")
                  }}</span>
                </nuxt-link>
              </div>
            </template>
          </h-slider>
        </div>
        <comments
          :link-id="carReview.id"
          :type="CommentType.review"
          @get-comment-data="getCommentsData"
          @loading="(load) => (commentDataLoading = load)"
          class="mt-2"
        />
        <nuxt-link
          v-if="relatedAdvertCount > 0"
          :to="`/car/${carReview.carReviewBrand.slug}-${carReview.carReviewModel.slug}`"
          class="btn btn-primary technical__link technical__link--mobile"
          >مشاهده {{ relatedAdvertCount }} آگهی مرتبط</nuxt-link
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { ref } from "#imports";
import {
  CarReviewDto,
  CarReviewFilterData,
} from "~~/models/carReviews/CarReviewModels";

import { GetBySlug, GetRelatedCars } from "~~/services/carReview.service";
import { GetAdvertCount } from "~~/services/advertisement.service";
import { GetCarReviewImage, GetModelImage } from "~/utilities/imageUtil";
import {
  Specification,
  SpecificationDetail,
} from "~~/models/carReviews/Specification";
import { BugReportFor } from "~~/services/bugReport.service";
import { GetAdvertisementType } from "~~/models/advertisements/Advertisement.Models";
import { CommentType } from "~~/models/comments/CommentType.Enum";
import { CarPriceDetail } from "~~/models/carPrices/CarPriceModels";
import { GetByBrand } from "~~/services/carPrice.service";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";

const isOpenBugReportModal: Ref<boolean> = ref(false);
const isOpenShareModal: Ref<boolean> = ref(false);
const commentDataLoading = ref(true);

//@ts-ignore
const carReview: Ref<CarReviewDto> = ref();
const relatedCars: Ref<CarReviewFilterData[]> = ref([]);
const carPrice: Ref<CarPriceDetail | null> = ref(null);

const route = useRoute();
const slug = route.params.slug.toString();
const { data, pending } = await useAsyncData(
  "car-review-single",
  () => GetBySlug(slug),
  {
    initialCache: false,
  }
);
if (!data?.value?.data) {
  showError({ statusCode: 404, statusMessage: "Error" });
}
const leftSpecifications: Ref<Specification[]> = ref([]);
const rightSpecifications: Ref<Specification[]> = ref([]);
const relatedAdvertCount = ref(0);
const commentCount = ref(0);
const commentRate = ref(0);

carReview.value = data.value?.data!;

const toggleBugReportModal = () => {
  isOpenBugReportModal.value = !isOpenBugReportModal.value;
};
const toggleShareModal = () => {
  isOpenShareModal.value = !isOpenShareModal.value;
};
const getCommentsData = (count: number, rate: number) => {
  commentCount.value = count;
  commentRate.value = rate;
};
onMounted(async () => {
  if (data.value?.isSuccess) {
    const specifications = [...data.value.data?.specifications!];
    var specCount = (specifications.length ?? 0) / 2;
    if (specCount > 1) {
      rightSpecifications.value = [...specifications.splice(0, specCount + 1)!];
      leftSpecifications.value = specifications;
    } else {
      rightSpecifications.value = data.value.data?.specifications!;
    }
  }
  var relatedResult = await GetRelatedCars(carReview.value!.carReviewBrand.id);
  relatedCars.value = relatedResult.data!;
  if (relatedCars.value.length > 0) {
    relatedCars.value = [
      ...relatedCars.value.filter((x) => x.id != carReview.value!.id),
    ];
  }
  setTimeout(() => {
    //@ts-ignore
    document
      .querySelector(".technical__see-more")
      .addEventListener("click", function () {
        //@ts-ignore
        document
          .querySelector(".technical__description--limited")
          .classList.remove("technical__description--limited");
      });
  }, 100);
  var res = await GetAdvertCount(
    GetAdvertisementType.model,
    AdvertisementType.car,
    {
      model: carReview.value!.carReviewModel.slug,
      modelType: null,
      exhibitionId: null,
      setCurrentUserId: false,
    }
  );
  relatedAdvertCount.value = res.data!;

  var carPriceResult = await GetByBrand(
    carReview.value!.carReviewBrand.slug,
    carReview.value!.carReviewModel.slug,
    carReview.value!.trim?.englishTitle
  );
  if (carPriceResult && carPriceResult.details.length >= 1) {
    carPrice.value = carPriceResult.details[0];
  }
});
</script>
<style scoped>
.technical__textarea {
  width: 100%;
  padding: 1.5rem;
  min-height: 15.25rem;
  outline: none;
  resize: vertical;
}

.technical__submit {
  margin-top: 2rem;
  margin-right: auto;
  width: 12rem;
}
</style>