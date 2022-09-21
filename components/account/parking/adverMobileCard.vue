<template>
  <div class="advert__mobile mobile-card">
    <div class="advert__mobile-banner">
      <h-image :src="GetBitMapAdvertImage(advert.id, advert.imageName)" />
      <span class="advert__flag advert__flag--picture-number">
        <icons-eye hash-color="#ffff" :width="11" :height="6" />
        {{ splitNumber(advert.visit) }}
      </span>
    </div>
    <div class="advert__mobile-body">
      <div class="body__top font-5">
        <p>{{ advert.title }}</p>
      </div>
      <div class="body__middel">
        <div class="advert__info text-center">
          <span>مدل {{ advert.year }}</span>
          <span>{{ advert.mileage }} کیلومتر</span>
          <span>{{ advert.gearBox.toString().replace("_", " ") }}</span>
        </div>
        <div class="tags row">
          <span class="advert__tag">
            {{ RemainingTime(new Date(expireDate)) }} روز تا حذف کامل آگهی
          </span>
        </div>
      </div>
      <div
        class="body__footer justify-content-space-between align-items-center"
      >
        <div class="footer__price" v-if="showPrice">
          <template
            v-if="
              advert.price.advertisementPaymentType ==
              AdvertisementPaymentType.توافقی
            "
          >
            توافقی
          </template>
          <template
            v-if="
              advert.price.advertisementPaymentType ==
              AdvertisementPaymentType.قسطی
            "
          >
            {{ splitNumber(advert.price.ghest.pishPardakht) }}
            <span>پیش</span>
            <p>
              {{ splitNumber(advert.price.ghest.amountPricePerGhest) }}
              <span>ماهیانه</span>
            </p>
          </template>
          <template v-if="advert.price.amount > 0"
            >{{ splitNumber(advert.price.amount) }}
            <span>تومان</span>
          </template>
        </div>
        <div v-else></div>
        <div class="footer--actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <script setup lang="ts">
import { ref } from "#imports";
import { AdvertisementFilterData } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { useAccountStore } from "~~/stores/account.store";
import { RemainingTime, TimeAgo } from "~~/utilities/dateUtil";
import { GetAdvertImage, GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { splitNumber } from "~~/utilities/numberUtils";

const isOpenNardebanModal = ref(false);
const link = ref("");
const accountStore = useAccountStore();
const props = defineProps<{
  advert: AdvertisementFilterData;
  showPrice: boolean;
}>();

if (props.advert.isCar) {
  link.value = `/car/detail-${props.advert.shortLink}-${props.advert.brand_Model}`;
  if (props.advert.trim) {
    link.value += `-${props.advert.trim}`;
  }
} else {
  link.value = `/motorcycle/detail-${props.advert.shortLink}-${props.advert.brand_Model}`;
  if (props.advert.trim) {
    link.value += `-${props.advert.trim}`;
  }
}
const expireDate = new Date(props.advert.inActiveDate);
expireDate.setDate(expireDate.getDate() + 30);

const emit = defineEmits(["openNardeban"]);
const openNardebanModal = () => {
  emit("openNardeban", props.advert.id);
};
</script>
  
  
  <style scoped>
.advert__mobile-banner {
  width: 148px;
  position: relative;
}
.advert__flag--picture-number {
  font-family: var(--t7-font-family) !important;
  font-size: var(--t7-font-size) !important;
  width: fit-content;
}
.advert__tag {
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  color: var(--color-black-200);
  background: var(--color-gray-200);
  border-radius: 5px;
  padding: 3px 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  margin-top: 12px;
}
.advert__info span {
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  color: var(--color-black);
}
.advert__info {
  margin: 0 !important;
}
.nardeban {
  width: 64px !important;
  height: 32px !important;
  border-radius: 8px !important;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
}
.advert__mobile {
  display: flex;
  border-radius: 1rem;
  padding: 4px;
  gap: 0.5rem;
  background: var(--color-white);
}
.time__ago {
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  color: var(--color-gray-600);
}
.body__top {
  display: flex;
  justify-content: space-between;
}
.body__footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.footer__price {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black);
}
.footer__price span {
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  color: var(--color-gray-600);
  margin-right: 4px;
}
.advert__mobile-banner {
  display: flex;
}
.advert__mobile-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  padding-left: 1rem;
}
img {
  max-width: 148px;
  height: 176px;
  border-radius: 12px;
}
</style>