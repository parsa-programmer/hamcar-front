<template>
  <div class="ads-slider">
    <div class="ads-slider__picture">
      <div class="navigation__arrow right" @click="prevSlide" v-if="currentIndex > 0">
        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.56889 1.66699L7.74536 7.66699L1.56889 13.667" stroke="#F0EFEF" stroke-width="1.64706"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="navigation__arrow left" @click="nextSlide" v-if="currentIndex < advert.images.length - 1">
        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.56889 1.66699L7.74536 7.66699L1.56889 13.667" stroke="#F0EFEF" stroke-width="1.64706"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="navigator">
        <div :class="[
          'navigate__item',
          { navigate__active: currentIndex == index },
        ]" v-for="(item, index) in advert.images.length" :key="item"></div>
      </div>
      <h-image @click="openGallery" class="main__image"
        :src="GetAdvertImage(advert.id, advert.images[currentIndex]?.imageName)"
        :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`" />
      <div class="ads-slider__flags">
        <client-only>
          <span class="ads-slider__flag" v-if="
          isSavedAdvert == false &&
            authStore.isLogin
          " @click="saveAdvert">
            <icons-save v-if="saveAdvertLoading==false" />
            <loadings-spinner v-else />

          </span>
        </client-only>
        <span class="ads-slider__flag" @click="toggleShareModal">
          <icons-share />
        </span>
      </div>
    </div>

    <h-slider class="ads-slider__list" :items="advert.images" :dots="true" :arrows="false" :middle="currentIndex">
      <template #item="{ item, index }">
        <div @click="currentIndex = index" :class="[
          'ads-slider__item',
          { 'ads-slider__item--active': index == currentIndex },
        ]">
          <h-image :src="GetAdvertImage(advert.id, item.imageName ?? '')"
            :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`" />
        </div>
      </template>
    </h-slider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GetAdvertImage } from "~~/utilities/imageUtil";
import { authStore as Store } from "~~/stores/auth.store";
const emit = defineEmits(["openGallery", "toggleShareModal", "saveAdvert"]);
const props = defineProps<{
  advert: AdvertisementDto;
  isSavedAdvert: boolean;
  saveAdvertLoading: boolean;
}>();
const authStore = Store();
const currentIndex = ref(0);
const nextSlide = () => {
  currentIndex.value += 1;
};
const prevSlide = () => {
  currentIndex.value -= 1;
};
const toggleShareModal = () => {
  emit("toggleShareModal");
};
const openGallery = () => {
  emit("openGallery");
};
const saveAdvert = () => {
  emit("saveAdvert");
};
</script>
    
<style scoped>
.main__image {
  cursor: zoom-in;
}

.navigation__arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 15, 16, 0.6);
  backdrop-filter: blur(6px);
  position: absolute;
  z-index: 100;
  cursor: pointer;
  top: 42%;
}

.left {
  left: 1rem;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.right {
  right: 1rem;
}

.arrows {
  position: absolute;
  width: 100%;
  height: 100%;
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
  bottom: 0;
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
</style>