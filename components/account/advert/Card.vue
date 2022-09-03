<template>
  <div>
    <div class="advert" v-if="isMobile == false">
      <div class="advert__badge" v-if="false">
        <svg
          class="advert__safe-badge"
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
        >
          <path
            d="M17.3912 3.58107L10.7912 1.27631C10.2789 1.0974 9.72108 1.0974 9.20876 1.27631L2.60876 3.58107C1.64533 3.91751 1 4.82418 1 5.84467V13.5714C1 18.9277 6.22812 21.3362 8.88803 22.4986C9.59168 22.8061 10.4083 22.8061 11.112 22.4986C13.7719 21.3362 19 18.9277 19 13.5714V5.84467C19 4.82418 18.3547 3.9175 17.3912 3.58107Z"
            fill="#69CE91"
          ></path>
          <path
            d="M7 12L9 14L13 10"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <svg
          class="advert__hamcar-badge"
          width="24"
          height="72"
          viewBox="0 0 24 72"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4924 21.0664C18.3056 24.2486 23.9998 29.3724 23.9998 35.9996C23.9997 42.6268 18.3056 47.7506 12.4924 50.9328C5.04812 55.0079 -3.97123e-07 62.9139 0 71.999L-3.14719e-06 -0.000236511C-3.14718e-06 -9.91821e-05 -1.04907e-06 4.57764e-05 -1.04907e-06 0.000183105C-6.51945e-07 9.0853 5.04812 16.9914 12.4924 21.0664Z"
            fill="#FF9E0B"
          ></path>
          <path
            d="M7.3461 34.1437C7.36902 33.3981 7.81612 32.7901 8.5269 32.5722C8.8135 32.4804 9.12302 32.4345 9.42109 32.423C11.8515 32.4116 14.2818 32.423 16.7122 32.4116C17.3313 32.4116 17.9503 32.3886 18.5694 32.3657C18.6267 32.3657 18.6955 32.3657 18.7528 32.3657C18.7757 32.3657 18.8101 32.3542 18.8445 32.3427C18.8445 32.033 18.8216 31.7348 18.8445 31.448C18.9019 30.863 18.7643 30.3583 18.2713 30.0027C18.2599 29.9912 18.2484 29.9683 18.2369 29.9453C15.1646 29.9453 12.0922 29.9453 9.01985 29.9453C8.67593 30.0027 8.32054 30.06 7.97662 30.1403C6.69265 30.4386 5.68381 31.1153 5.11061 32.3427C4.77815 33.0539 4.65205 33.811 4.62912 34.5796C4.61765 34.809 4.62912 35.0384 4.62912 35.2564C5.54624 35.2564 6.42897 35.2564 7.3461 35.2564C7.3461 34.8663 7.33463 34.4993 7.3461 34.1437Z"
            fill="white"
          ></path>
          <path
            d="M12.253 42.7597C13.0326 42.5418 13.7433 42.1862 14.3509 41.6356C15.0732 40.9702 15.4744 40.1329 15.7151 39.2037C15.8069 38.8596 15.8298 38.504 15.8871 38.1369C15.0044 38.1369 14.1904 38.1369 13.3536 38.1369C13.3306 38.2402 13.3192 38.3319 13.2848 38.4237C13.1013 39.0431 12.8262 39.6052 12.2874 40.0067C11.5881 40.5229 10.8085 40.5917 9.98312 40.4655C8.81379 40.2935 8.10302 39.5823 7.67885 38.5269C7.41518 37.8846 7.30054 37.2078 7.28907 36.4736C6.5783 36.4736 5.86753 36.4736 5.12237 36.4736C4.96187 36.4736 4.81284 36.4736 4.65234 36.4736C4.68674 36.8063 4.73259 37.1619 4.76698 37.506C4.8243 38.2057 4.99627 38.894 5.23701 39.5478C5.56947 40.4541 6.09681 41.2226 6.83051 41.8306C7.03686 42.0026 7.25468 42.1518 7.4725 42.2779C8.14888 42.6679 8.9055 42.8744 9.68506 42.9318C10.5449 43.0006 11.4161 43.0006 12.253 42.7597Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <nuxt-link :to="link" class="advert__banner">
        <h-image
          :src="GetBitMapAdvertImage(advert.id, advert.imageName)"
          :alt="advert.imageName"
          class="advert__img"
        />
        <span
          class="advert__flag advert__flag--place"
          v-if="advert.status == 'published'"
        >
          {{ advert.visit }} بازدید
        </span>
        <slot name="card_header_badge" />
      </nuxt-link>
      <div class="advert__body">
        <div class="advert__header mb-1_5">
          <nuxt-link :to="link" class="advert__name">
            {{ advert.title }}
          </nuxt-link>
          <span class="advert__date-type color_black_200 font-6"
            >{{ getPlan() }}
            <nuxt-link
              class="text-decoration"
              :to="`/account/adverts/upgrade/${advert.id}`"
              >(ارتقاء نوع آگهی)</nuxt-link
            ></span
          >
        </div>
        <span
          class="advert__date-wide"
          v-if="expireDate && advert.status == 'published'"
          >{{ RemainingTime(new Date(expireDate)) }} روز تا انقضای آگهی</span
        >
        <span class="advert__date-wide mr-1">
          {{ getAdvertStatus() }}
        </span>
        <span
          @click="useNardeban"
          class="advert__date-wide nardeban mr-1"
          v-if="advert.status == 'published'"
          >نردبان</span
        >
        <div class="advert__info mt-1_5">
          <span>مدل {{ advert.year }}</span>
          <span>{{ advert.mileage }} کیلومتر</span>
          <span>{{ advert.gearBox.toString().replace("_", " ") }}</span>
        </div>

        <slot name="text" />
        <div class="advert__footer mt-2">
          <template v-if="showPrice">
            <div
              class="advert__wrapper"
              v-if="
                advert.price.advertisementPaymentType ==
                AdvertisementPaymentType.قسطی
              "
            >
              <p class="advert__price">
                {{ splitNumber(advert.price.ghest?.pishPardakht) }}
                <span>پیش</span>
              </p>
              <p class="advert__price">
                {{ splitNumber(advert.price.ghest?.amountPricePerGhest) }}

                <span>ماهیانه</span>
              </p>
            </div>
            <div class="advert__wrapper" v-else>
              <p class="advert__price" v-if="advert.price.amount > 0">
                {{ splitNumber(advert.price.amount) }}
                <span>تومان</span>
              </p>
              <p class="advert__price" v-else>
                <span class="d-mobile-none"
                  >برای اطلاع از قیمت تماس بگیرید</span
                >
                <span class="d-mobile-block">توافقی</span>
              </p>
            </div>
          </template>
          <div v-else class="advert__wrapper"></div>
          <div class="actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
    <account-advert-card-mobile :advert="advert" v-else :show-price="showPrice">
      <template #text v-if="$slots.text">
        <slot name="text" />
      </template>
      <template #actions v-if="$slots.actions">
        <slot name="actions" />
      </template>
    </account-advert-card-mobile>
  </div>
</template>

<script setup lang="ts">
import { remainingTime } from "@persian-tools/persian-tools";
import { AdvertisementFilterData } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { RemainingTime, TimeAgo } from "~~/utilities/dateUtil";
import { GetAdvertImage, GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { splitNumber } from "~~/utilities/numberUtils";

const emit = defineEmits(["useNardebanClicked"]);


const link = ref("");
const isMobile = ref(false);
const { advert, showPrice = true } = defineProps<{
  advert: AdvertisementFilterData;
  showPrice: boolean;
}>();
var planDetail = advert.plan.split("|");
const expireDate = planDetail[2].trim();

if (advert.isCar) {
  link.value = `/car/detail-${advert.shortLink}-${advert.brand_Model}`;
  if (advert.trim) {
    link.value += `-${advert.trim}`;
  }
} else {
  link.value = `/motorcycle/detail-${advert.shortLink}-${advert.brand_Model}`;
  if (advert.trim) {
    link.value += `-${advert.trim}`;
  }
}
const getPlan = () => {
  var planType = planDetail[0];
  var planId = planDetail[1];
  if (planType == "Advertisement") {
    return "آگهی نوع " + planId;
  }
};
const useNardeban = () => {
  emit("useNardebanClicked", advert);
};
const getAdvertStatus = () => {
  switch (advert.status) {
    case "draft":
      return "در انتظار انتخاب پلن";
    case "pending":
      return "درحال برسی";
    case "rejected":
      return "رد شده";
    case "published":
      return "درحال نمایش";
    case "inActive":
      return "پارکینگ شده";
  }
};
onMounted(() => {
  if (window.innerWidth <= 992) {
    isMobile.value = true;
  }
});
</script>

<style scoped>
a:-webkit-any-link {
  color: inherit;
}
.advert__price {
  font-family: var(--t2-font-family) !important;
  font-size: var(--t2-font-size) !important;
}
.advert__date-wide {
  display: inline-block !important;
  width: fit-content !important;
  padding: 0.5rem 1rem;
}
.advert__price span {
  font-family: var(--t5-font-family) !important;
  font-size: var(--t5-font-size) !important;
}
.advert__wrapper {
  margin-right: unset !important;
}
.advert__banner {
  width: fit-content !important;
}
.advertising__row--wide-item .advert__flag--place {
  right: 1rem;
  left: auto;
}
.advert__footer,
.advert__wrapper {
  height: fit-content !important;
}
.advert__body .advert__date-wide:first-of-type {
  margin-right: 0 !important;
}
.nardeban {
  background: #ff9500;
  color: black;
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
  cursor: pointer;
}
</style>