<template>
  <section class="ads-gallery" @click.self="closeModal" v-if="modelValue">
    <div class="container">
      <div class="ads-gallery__header">
        <svg class="ads-gallery__close-btn" width="36" height="36" viewBox="0 0 36 36" @click.self="closeModal">
          <path d="M34 2L18 18M18 18L2 34M18 18L34 34M18 18L2 2" stroke="white" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round"></path>
        </svg>
        <h2 class="ads-gallery__ads-name">
          {{ advert.brand?.title }} {{ advert.model?.title }}
          {{ advert.trim?.title }} {{ advert.year?.yearTitle }}
        </h2>
        <div class="ads-gallery__flags">
          <span class="ads-gallery__flag" v-if="isAdvertSaved==false" @click="saveAdvert">
            <icons-save v-if="saveAdvertLoading==false" />
            <loadings-spinner v-else />
          </span>
        </div>
      </div>
      <div class="gallery-slider">
        <div class="gallery-slider__picture-box">
          <h-image :src="
            GetAdvertImage(advert.id, advert.images[currentSlide].imageName)
          " alt="" class="gallery-slider__img" />
          <svg class="gallery-slider__nav gallery-slider__nav--right" fill="none" width="31" height="51"
            viewBox="0 0 31 51" @click="prev" v-if="currentSlide != 0">
            <path d="M3.49988 3.38086L25.9999 24.8094L3.49988 46.238" stroke="#F0EFEF" stroke-width="6"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <svg class="gallery-slider__nav gallery-slider__nav--left" fill="none" width="31" height="51"
            viewBox="0 0 31 51" @click="next" v-if="currentSlide < props.advert.images.length - 1">
            <path d="M27.5002 3.38086L5.00025 24.8094L27.5002 46.238" stroke="#F0EFEF" stroke-width="6"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
        <span class="gallery-slider__pagination">{{ currentSlide + 1 }}/{{ advert.images.length }}</span>
      </div>
    </div>
    <div class="ads-gallery__footer">
      <div class="container">
        <h-slider ref="carousel" class="ads-gallery__list" :items="advert.images" :arrows="false" :middle="middel">
          <template v-slot:custom_arrows="{ nextSlide, prevSlide }">
            <span class="ads-gallery__nav ads-gallery__nav--right" @click="goPrevSlide(prevSlide)">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.714286 0.713867L5 4.99958L0.714286 9.2853" stroke="white" stroke-width="1.42857"
                  stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
            <span class="ads-gallery__nav ads-gallery__nav--left" @click="goNextSlide(nextSlide)">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00056 0.713867L0.714844 4.99958L5.00056 9.2853" stroke="white" stroke-width="1.42857"
                  stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
          </template>
          <template #item="{ item, index }">
            <div @click="changeImage(index)" :class="[
              'ads-gallery__item',
              { 'ads-gallery__item--active': index == currentSlide },
            ]">
              <h-image :src="GetAdvertImage(advert.id, item.imageName)" alt="" class="" />
            </div>
          </template>
        </h-slider>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { ref } from "#imports";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GetAdvertImage } from "~~/utilities/imageUtil";
import modelCardVue from "../skeletonLoading/carReview/modelCard.vue";
const props = defineProps<{
  advert: AdvertisementDto;
  modelValue: boolean;
  isAdvertSaved: boolean;
  saveAdvertLoading: boolean
}>();
const emit = defineEmits(["update:modelValue", "saveAdvert"]);
const currentSlide = ref(0);

const changeImage = (index: number) => {
  currentSlide.value = index;
};
const next = () => {
  if (currentSlide.value == props.advert.images.length - 1) {
    return;
  }
  currentSlide.value++;
};
const prev = () => {
  if (currentSlide.value == 0) {
    return;
  }
  currentSlide.value--;
};
const middel = ref(0);
const goPrevSlide = (prevFunction: any) => {
  prev();
  prevFunction();
  middel.value = currentSlide.value;
};
const goNextSlide = (nextFunction: any) => {
  next();
  nextFunction();
  middel.value = currentSlide.value;
};
const closeModal = () => {
  emit("update:modelValue", false);
};
const saveAdvert = () => {
  emit("saveAdvert");
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>