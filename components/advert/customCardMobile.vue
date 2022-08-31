<template>
  <div class="advert__mobile mobile-card">
    <div class="advert__mobile-banner" v-if="hasLink == false">
      <h-image :src="GetBitMapAdvertImage(advert.id, advert.imageName)" />
    </div>
    <nuxt-link :to="link" class="advert__mobile-banner" v-else>
      <h-image :src="GetBitMapAdvertImage(advert.id, advert.imageName)" />
    </nuxt-link>
    <div class="advert__mobile-body">
      <div class="body__top">
        <p v-if="hasLink == false">{{ advert.title }}</p>
        <nuxt-link :to="link" v-else>{{ advert.title }}</nuxt-link>
        <span class="time__ago">({{ TimeAgo(advert.creationDate) }})</span>
      </div>
      <div class="body__middel">
        <div class="advert__info text-center">
          <span>مدل {{ advert.year }}</span>
          <span>{{ advert.mileage }} کیلومتر</span>
          <span>{{ advert.gearBox.toString().replace("_", " ") }}</span>
        </div>
        <div class="tags row">
          <span class="advert__tag">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.639418 5.89123C0.902745 7.22729 1.74325 8.3571 2.73665 9.26117C3.72673 10.1622 4.82664 10.8004 5.52589 11.1569C5.82742 11.3107 6.17259 11.3107 6.47412 11.1569C7.17337 10.8004 8.27328 10.1622 9.26337 9.26118C10.2568 8.3571 11.0973 7.2273 11.3606 5.89123C11.578 4.78796 11.3459 3.45753 10.5242 2.40958C9.71583 1.3786 8.28954 0.5625 6 0.5625C3.71046 0.5625 2.28417 1.3786 1.47581 2.40958C0.654127 3.45753 0.421972 4.78796 0.639418 5.89123Z"
                stroke="#85858F"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                r="1.4375"
                transform="matrix(-1 0 0 1 6 5)"
                stroke="#85858F"
                stroke-width="1.125"
              />
            </svg>
            {{ advert.province }}،{{ advert.city }}
          </span>
          <span class="advert__tag" v-if="advert.isExhibition">
            <svg width="11" height="11" viewBox="0 0 18 18" fill="none">
              <path
                d="M11.0515 0.795975L11.0852 0.04673L11.0515 0.795975ZM1.5 9.00349C1.5 10.6116 1.55208 11.8703 1.70439 12.8648C1.8567 13.8594 2.10092 14.5289 2.44161 15.0004C3.09186 15.9003 4.29205 16.3399 6.97144 16.4613L6.90356 17.9598C4.22281 17.8383 2.32925 17.406 1.22579 15.8789C0.689617 15.1369 0.391991 14.2041 0.221671 13.0919C0.0513383 11.9796 0 10.6269 0 9.0035L1.5 9.00349ZM6.97144 16.4613C7.58044 16.4889 8.25389 16.5 9 16.5V18C8.24041 18 7.54277 17.9887 6.90356 17.9598L6.97144 16.4613ZM6.1875 17.2105V14.8125H7.6875V17.2105H6.1875ZM9 16.5C9.74611 16.5 10.4196 16.4889 11.0286 16.4613L11.0964 17.9598C10.4572 17.9887 9.75959 18 9 18V16.5ZM11.0286 16.4613C13.7079 16.3399 14.9081 15.9003 15.5584 15.0004C15.8991 14.5289 16.1433 13.8594 16.2956 12.8648C16.4479 11.8703 16.5 10.6116 16.5 9.0035L18 9.00349C18 10.6269 17.9487 11.9796 17.7783 13.0919C17.608 14.2041 17.3104 15.1369 16.7742 15.8789C15.6707 17.406 13.7772 17.8383 11.0964 17.9598L11.0286 16.4613ZM11.8125 14.8125V17.2105H10.3125V14.8125H11.8125ZM9 8.25349C9.68804 8.25349 10.2688 8.04241 10.669 7.6767C11.0583 7.32099 11.3438 6.75881 11.3438 5.91105H12.8438C12.8438 7.12492 12.4197 8.10896 11.6808 8.78407C10.9529 9.44917 9.98677 9.75349 9 9.75349V8.25349ZM6.65625 5.91105C6.65625 6.75881 6.94167 7.32099 7.33098 7.6767C7.73123 8.04241 8.31196 8.25349 9 8.25349V9.75349C8.01323 9.75349 7.0471 9.44917 6.31917 8.78407C5.58031 8.10896 5.15625 7.12492 5.15625 5.91105H6.65625ZM6.98217 1.54522C4.29727 1.66583 3.09449 2.1048 2.44301 3.00467C2.10184 3.47592 1.85724 4.14527 1.7047 5.14015C1.55216 6.13498 1.5 7.39423 1.5 9.00349L0 9.0035C0 7.37897 0.0514069 6.02553 0.222024 4.91281C0.392632 3.80014 0.690791 2.86707 1.228 2.12504C2.33327 0.598356 4.22974 0.167355 6.91485 0.04673L6.98217 1.54522ZM6.94851 0.795975C7.6583 1.03825 7.65832 1.03819 7.65834 1.03814C7.65834 1.03814 7.65835 1.03811 7.65835 1.03811C7.65835 1.0381 7.65834 1.03815 7.65831 1.03823C7.65825 1.03841 7.65812 1.03877 7.65794 1.03932C7.65757 1.0404 7.65696 1.04221 7.65611 1.04473C7.6544 1.04978 7.65175 1.05766 7.64821 1.06825C7.64114 1.08945 7.63052 1.1215 7.61687 1.16343C7.58956 1.2473 7.55015 1.37053 7.50267 1.52528C7.4076 1.83515 7.28077 2.26946 7.15409 2.76585C6.89642 3.77556 6.65625 4.97873 6.65625 5.91105H5.15625C5.15625 4.78175 5.43721 3.42738 5.70067 2.39496C5.83456 1.87028 5.9683 1.41238 6.06865 1.0853C6.11888 0.921576 6.1609 0.79015 6.19059 0.69898C6.20543 0.653383 6.21721 0.617819 6.2254 0.593283C6.2295 0.581013 6.2327 0.571497 6.23494 0.564859C6.23606 0.561539 6.23694 0.558939 6.23757 0.557074C6.23789 0.556141 6.23814 0.555391 6.23834 0.554829C6.23843 0.554546 6.23851 0.55431 6.23858 0.554121C6.23861 0.554028 6.23865 0.553921 6.23866 0.553873C6.23869 0.553778 6.23872 0.553696 6.94851 0.795975ZM16.5 9.0035C16.5 7.39423 16.4478 6.13498 16.2953 5.14015C16.1428 4.14527 15.8982 3.47592 15.557 3.00467C14.9055 2.1048 13.7027 1.66584 11.0178 1.54522L11.0852 0.04673C13.7703 0.167356 15.6667 0.598358 16.772 2.12504C17.3092 2.86707 17.6074 3.80014 17.778 4.91281C17.9486 6.02553 18 7.37897 18 9.00349L16.5 9.0035ZM11.3438 5.91105C11.3438 4.97873 11.1036 3.77556 10.8459 2.76585C10.7192 2.26946 10.5924 1.83514 10.4973 1.52528C10.4499 1.37053 10.4104 1.24729 10.3831 1.16343C10.3695 1.1215 10.3589 1.08945 10.3518 1.06825C10.3483 1.05766 10.3456 1.04977 10.3439 1.04473C10.3431 1.04221 10.3424 1.0404 10.3421 1.03931C10.3419 1.03877 10.3418 1.03841 10.3417 1.03823C10.3417 1.03814 10.3417 1.0381 10.3417 1.0381C10.3417 1.03811 10.3417 1.03814 10.3417 1.03814C10.3417 1.03819 10.3417 1.03825 11.0515 0.795975C11.7613 0.553698 11.7613 0.553782 11.7613 0.553875C11.7614 0.553923 11.7614 0.554029 11.7614 0.554125C11.7615 0.554314 11.7616 0.554548 11.7617 0.554831C11.7619 0.555393 11.7621 0.556143 11.7624 0.557076C11.7631 0.558941 11.764 0.561543 11.7651 0.564861C11.7673 0.571499 11.7705 0.581015 11.7746 0.593285C11.7828 0.617823 11.7946 0.653385 11.8094 0.698982C11.8391 0.790152 11.8811 0.921577 11.9314 1.0853C12.0317 1.41238 12.1654 1.87029 12.2993 2.39496C12.5628 3.42738 12.8438 4.78175 12.8438 5.91105H11.3438ZM11.0178 1.54522C9.67575 1.48493 8.32426 1.48493 6.98217 1.54522L6.91485 0.04673C8.3018 -0.0155773 9.69821 -0.0155773 11.0852 0.04673L11.0178 1.54522ZM2.32561 9.75349H0.75V8.25349H2.32561V9.75349ZM15.6744 8.25349H17.25V9.75349H15.6744V8.25349ZM12.8438 5.91105C12.8438 6.58535 13.1655 7.15474 13.6944 7.57552C14.2329 8.00393 14.9619 8.25349 15.6744 8.25349V9.75349C14.636 9.75349 13.5747 9.39705 12.7605 8.74934C11.9368 8.09401 11.3438 7.11718 11.3438 5.91105H12.8438ZM6.65625 5.91105C6.65625 7.11718 6.06316 8.09401 5.23946 8.74934C4.42533 9.39705 3.36404 9.75349 2.32561 9.75349V8.25349C3.03807 8.25349 3.7671 8.00393 4.30557 7.57552C4.83446 7.15474 5.15625 6.58535 5.15625 5.91105H6.65625ZM9 12C10.5533 12 11.8125 13.2592 11.8125 14.8125H10.3125C10.3125 14.0876 9.72487 13.5 9 13.5V12ZM6.1875 14.8125C6.1875 13.2592 7.4467 12 9 12V13.5C8.27513 13.5 7.6875 14.0876 7.6875 14.8125H6.1875Z"
                fill="var(--color-black-200)"
              ></path>
            </svg>
            نمایشگاه
          </span>
        </div>
        <slot name="text" />
      </div>
      <div
        :class="[
          'body__footer align-items-center',
          { 'justify-content-flex-end': !$slots.actions },
          { 'justify-content-space-between': $slots.actions },
        ]"
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
            >{{ advert.price.amount }}
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
import { timeAgo } from "@persian-tools/persian-tools";
import { on } from "events";
import { split } from "lodash";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { TimeAgo } from "~~/utilities/dateUtil";
import { GetAdvertImage, GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { splitNumber } from "~~/utilities/numberUtils";

const link = ref("");
const props = defineProps<{
  advert: AdvertisementCard;
  showPrice: boolean;
  hasLink: boolean | null;
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
</script>


<style scoped>
  a:-webkit-any-link {
  color: inherit;
}
.advert__mobile-banner {
  width: 148px;
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
.footer__actions {
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