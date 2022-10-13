<template>
  <div class="ads-mobile">
    <div class="ads-mobile__slider">
      <span class="image__counter font-6" v-if="advert.images?.length == 1">
        <icons-camera class="ml-0_5" />
        {{ advert.images?.length ?? 0 }} عکس
      </span>
      <div v-if="advert.images.length > 1" class="slider__wraper" ref="slider">
        <h-slider :items="advert.images" :item-container-class="'w-full grow-1'" :arrows="false" row-class="gap-4px"
          draggable-off :middle="middel" @getCurrentIndex="(val) => (currentIndex = val)">
          <template #custom_arrows="{ nextSlide, prevSlide }">
            <div class="navigation__arrow rotate" @click="prevSlide" v-if="currentIndex > 0">
              <icons-chevron-left :width="6" :height="10" hash-color="#fff" />
            </div>
            <div class="navigation__arrow left" @click="nextSlide" v-if="currentIndex < advert.images.length - 1">
              <icons-chevron-left :width="6" :height="10" hash-color="#fff" />
            </div>
          </template>
          <template #dots="{ count }">
            <div class="navigator">
              <div :class="[
                'navigate__item',
                { navigate__active: currentIndex == index },
              ]" v-for="(item, index) in count" :key="item"></div>
            </div>
          </template>
          <template #first-item>
            <div class="first__slide">
              <span class="image__counter font-6" v-if="advert.images?.length > 0">
                <icons-camera class="ml-0_5" />
                {{ advert.images?.length ?? 0 }} عکس
              </span>
              <h-image @click="openGallery" class="slider-image"
                :src="GetAdvertImage(advert.id, advert.images[0].imageName)"
                :alt="`${advert.brand.title} ${advert.model.title} ${advert.year.yearTitle}`" ref="image" />
            </div>
          </template>
          <template #item="{ item, index }">
            <h-image v-if="index > 0" @click="openGallery" class="slider-image"
              :src="GetAdvertImage(advert.id, item.imageName)"
              :alt="`${advert.brand.title} ${advert.model.title} ${advert.year.yearTitle}`" />
          </template>
        </h-slider>
      </div>
      <h-image v-else :src="GetAdvertImage(advert.id, advert.images[0]?.imageName)"
        :alt="`${advert.brand.title} ${advert.model.title} ${advert.year.yearTitle}`" />
    </div>
    <div class="ads-mobile__info">
      <div class="ads-mobile__wrapper">
        <h2 class="ads__name" v-text="advertTitle"></h2>
        <span class="ads__date">
          {{ TimeAgo(advert.creationDate) }}
        </span>
      </div>
      <div class="ads-mobile__flags">
        <client-only>
          <span class="ads-mobile__flag has__border" v-if="
          isSavedAdvert == false &&
          authStore.isLogin " @click="saveAdvert">
            <icons-save hash-color="var(--color-black-300)" :width="17" :height="20"
              v-if=" saveAdvertLoading == false" />
            <loadings-spinner v-else />
          </span>
        </client-only>
        <span class="ads-mobile__flag" @click="toggleShareModal">
          <icons-share :width="19" :height="20" hash-color="var(--color-black-300)" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { authStore as Store } from "~~/stores/auth.store";
import { TimeAgo } from "~~/utilities/dateUtil";
import { GetAdvertImage } from "~~/utilities/imageUtil";

const authStore = Store();
const emit = defineEmits(["openGallery", "saveAdvert", "toggleShareModal"]);
const currentIndex = ref(0);
defineProps<{
  advert: AdvertisementDto;
  isSavedAdvert: boolean;
  saveAdvertLoading: boolean;
  advertTitle: string;
}>();
const slider: Ref<HTMLElement | null> = ref(null);
const image: Ref<HTMLElement | null> = ref(null);
const middel = ref(0);

const toggleShareModal = () => {
  emit("toggleShareModal");
};
const openGallery = () => {
  emit("openGallery");
};
const saveAdvert = () => {
  emit("saveAdvert");
};
onMounted(() => {
  var width = screen.width;
  slider.value?.setAttribute("style", `width:${width}px`);
  middel.value = 1;
});
</script>
    
<style scoped>
.slider__wraper {
  width: 115%;
  right: -7.1%;
  position: relative;
}

.navigation__arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 16, 0.6);
  backdrop-filter: blur(6px);
  position: absolute;
  z-index: 100;
  top: 42%;
}

.left {
  left: 1rem;
}

.slider-image {
  height: 216px;
  width: 410px;
  max-width: 410px;
}

.ads-mobile__slider {
  width: 100%;
  position: relative;
  height: fit-content !important;
}

.rotate {
  transform: matrix(-1, 0, 0, 1, 0, 0);
  right: 1rem;
}

.arrows {
  position: relative;
  width: 100%;
  height: 100%;
}

.first__slide {
  position: relative;
}

.navigator {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 30px;
  bottom: .5rem;
  background: linear-gradient(rgba(114, 113, 113, 0.151), rgba(0, 0, 0, 0.596));
  z-index: 3;
  align-items: center;
  justify-content: center;
}

.navigate__item {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8a8b8d;
}

.navigate__active {
  background: white;
  width: 10px;
  height: 10px;
}

@media screen and (max-width:412px) {
  .slider-image {
    max-width: 380px;
  }
}

@media screen and (max-width:391px) {
  .slider-image {
    max-width: 370px !important;
  }
}
</style>

