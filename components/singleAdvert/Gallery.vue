<template>
  <section class="ads-gallery" @click.self="closeModal" v-if="modelValue">
    <div class="container">
      <div class="ads-gallery__header">
        <svg
          class="ads-gallery__close-btn"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          @click.self="closeModal"
        >
          <path
            d="M34 2L18 18M18 18L2 34M18 18L34 34M18 18L2 2"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <h2 class="ads-gallery__ads-name">
          {{ advert.brand.title }} {{ advert.model.title }}
          {{ advert.trim.title }} {{ advert.year.yearTitle }}
        </h2>
        <div class="ads-gallery__flags">
          <span class="ads-gallery__flag" v-if="isAdvertSaved==false">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.23207 22.6515L4.23203 22.6514L4.22222 22.6583C3.04571 23.4839 1.4214 22.7367 1.30876 21.2843C1.17636 19.577 0.999972 16.4489 1 11.9001V11.818V11.818C0.999969 10.0123 1.00095 8.43904 1.12977 7.12626C1.26038 5.79534 1.53147 4.60354 2.16092 3.63277C3.47718 1.60276 6.0125 1.01675 9.99586 1.00034C13.9839 0.983921 16.5228 1.56716 17.8404 3.61005C18.4689 4.58457 18.7397 5.7819 18.8703 7.11733C18.9991 8.43513 19 10.0125 19 11.8189V11.9001C19 16.4489 18.8236 19.577 18.6912 21.2843C18.5785 22.7367 16.9543 23.4839 15.7778 22.6583L15.7778 22.6583L15.7679 22.6515C14.7359 21.9456 13.7808 21.1856 13.0366 20.5931L13.0231 20.5824C12.6849 20.3132 12.378 20.0688 12.1372 19.8903C11.6855 19.5554 11.3082 19.3268 10.9587 19.186C10.5782 19.0328 10.271 19 10 19C9.729 19 9.42177 19.0328 9.04133 19.186C8.69178 19.3268 8.31454 19.5554 7.86274 19.8903L8.45823 20.6937L7.86274 19.8903C7.62195 20.0688 7.31488 20.3133 6.97665 20.5826L6.96343 20.5931C6.21919 21.1856 5.26412 21.9456 4.23207 22.6515Z"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 5.00391C13 5.00391 13.5 5.00011 14.25 5.74817C15 6.49623 15 9.00001 15 10"
                stroke="#0F0F10"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div class="gallery-slider">
        <div class="gallery-slider__picture-box">
          <h-image
            :src="
              GetAdvertImage(advert.id, advert.images[currentSlide].imageName)
            "
            alt=""
            class="gallery-slider__img"
          />
          <svg
            class="gallery-slider__nav gallery-slider__nav--right"
            fill="none"
            width="31"
            height="51"
            viewBox="0 0 31 51"
            @click="prev"
            v-if="currentSlide != 0"
          >
            <path
              d="M3.49988 3.38086L25.9999 24.8094L3.49988 46.238"
              stroke="#F0EFEF"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            class="gallery-slider__nav gallery-slider__nav--left"
            fill="none"
            width="31"
            height="51"
            viewBox="0 0 31 51"
            @click="next"
            v-if="currentSlide < props.advert.images.length - 1"
          >
            <path
              d="M27.5002 3.38086L5.00025 24.8094L27.5002 46.238"
              stroke="#F0EFEF"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <span class="gallery-slider__pagination"
          >{{ currentSlide + 1 }}/{{ advert.images.length }}</span
        >
      </div>
    </div>
    <div class="ads-gallery__footer">
      <div class="container">
        <h-slider
          ref="carousel"
          class="ads-gallery__list"
          :items="advert.images"
          :arrows="false"
          :middle="middel"
        >
          <template v-slot:custom_arrows="{ nextSlide, prevSlide }">
            <span
              class="ads-gallery__nav ads-gallery__nav--right"
              @click="goPrevSlide(prevSlide)"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.714286 0.713867L5 4.99958L0.714286 9.2853"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <span
              class="ads-gallery__nav ads-gallery__nav--left"
              @click="goNextSlide(nextSlide)"
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00056 0.713867L0.714844 4.99958L5.00056 9.2853"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </template>
          <template #item="{ item, index }">
            <div
              @click="changeImage(index)"
              :class="[
                'ads-gallery__item',
                { 'ads-gallery__item--active': index == currentSlide },
              ]"
            >
              <h-image
                :src="GetAdvertImage(advert.id, item.imageName)"
                alt=""
                class=""
              />
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
}>();
const emit = defineEmits(["update:modelValue"]);
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