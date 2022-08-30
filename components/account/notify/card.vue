<template>
  <div class="advert mobile-card">
    <div class="notify__banner">
      <img
        src="/img/Notification.png"
        alt="Notification"
        class="profile-card__logo logo__active"
        v-if="notify.advertisementCount >= 1"
      />
      <img
        v-else
        src="/img/Notification-gray.png"
        alt="Notification"
        class="profile-card__logo"
      />
      <nuxt-link
        :to="`/account/notify/${notify.id}`"
        class="banner__link"
        v-if="notify.advertisementCount >= 1"
      >
        مشاهده آگهی ها
      </nuxt-link>
    </div>
    <div class="notify__body">
      <div class="notify__header mb-1_5">
        <div class="notify__name">
          {{ notify.title }}
        </div>
        <nuxt-link :to="`/account/notify/${notify.id}`" class="notify__link "
          >مشاهده ({{ notify.advertisementCount }} آگهی)
        </nuxt-link>
      </div>
      <span class="badge">{{ toPersianDate(notify.creationDate) }}</span>
      <slot name="text" />
      <div class="notify__footer mt-2">
        <div class="notify__wrapper">
          <p class="notify__price">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66667 0.0351562C7.10849 0.0351562 7.46667 0.393328 7.46667 0.835156V1.74173C8.23415 1.69069 9.07638 1.66849 10 1.66849C10.9236 1.66849 11.7659 1.69069 12.5333 1.74173V0.835156C12.5333 0.393328 12.8915 0.0351562 13.3333 0.0351562C13.7752 0.0351562 14.1333 0.393328 14.1333 0.835156V1.90753C17.9729 2.47775 19.446 4.19444 19.8635 8.36849C19.8892 8.62572 19.9109 8.89229 19.9289 9.16849C19.9458 9.42633 19.9594 9.69257 19.97 9.96745C19.9906 10.5012 20 11.0676 20 11.6685C20 19.9035 18.235 21.6685 10 21.6685C1.765 21.6685 0 19.9035 0 11.6685C0 11.0676 0.00939601 10.5012 0.0300155 9.96745C0.0406341 9.69257 0.0542292 9.42633 0.0710503 9.16849C0.0890696 8.89229 0.110791 8.62572 0.136521 8.36849C0.55404 4.19444 2.02712 2.47775 5.86667 1.90753V0.835156C5.86667 0.393328 6.22484 0.0351562 6.66667 0.0351562ZM5.86667 3.52747C4.71475 3.71881 3.93482 4.01625 3.38408 4.42001C2.56993 5.01687 1.99662 6.06179 1.74526 8.36849H18.2547C18.0034 6.06179 17.4301 5.01687 16.6159 4.42001C16.0652 4.01625 15.2852 3.71881 14.1333 3.52747V4.16849C14.1333 4.61032 13.7752 4.96849 13.3333 4.96849C12.8915 4.96849 12.5333 4.61032 12.5333 4.16849V3.34661C11.8004 3.29452 10.9618 3.26849 10 3.26849C9.03822 3.26849 8.19958 3.29452 7.46667 3.34661V4.16849C7.46667 4.61032 7.10849 4.96849 6.66667 4.96849C6.22484 4.96849 5.86667 4.61032 5.86667 4.16849V3.52747ZM18.4 11.6685C18.4 11.0599 18.3901 10.4944 18.3688 9.96849H1.63122C1.60992 10.4944 1.6 11.0599 1.6 11.6685C1.6 13.6907 1.71044 15.2066 1.96635 16.358C2.21821 17.4913 2.58921 18.1712 3.04325 18.6252C3.49728 19.0793 4.17719 19.4503 5.31048 19.7021C6.46193 19.958 7.97777 20.0685 10 20.0685C12.0222 20.0685 13.5381 19.958 14.6895 19.7021C15.8228 19.4503 16.5027 19.0793 16.9568 18.6252C17.4108 18.1712 17.7818 17.4913 18.0337 16.358C18.2896 15.2066 18.4 13.6907 18.4 11.6685Z"
                fill="#85858F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9825 13.9008C16.295 13.5884 16.295 13.0819 15.9825 12.7695C15.6701 12.4571 15.1636 12.4571 14.8512 12.7695L12.0835 15.5371L11.3992 14.8528C11.0868 14.5404 10.5803 14.5404 10.2678 14.8528C9.95542 15.1652 9.95542 15.6718 10.2678 15.9842L11.5178 17.2342C11.6679 17.3842 11.8714 17.4685 12.0835 17.4685C12.2957 17.4685 12.4992 17.3842 12.6492 17.2342L15.9825 13.9008ZM4.2002 13.3352C4.2002 12.8933 4.55837 12.5352 5.0002 12.5352H7.5002C7.94202 12.5352 8.3002 12.8933 8.3002 13.3352C8.3002 13.777 7.94202 14.1352 7.5002 14.1352H5.0002C4.55837 14.1352 4.2002 13.777 4.2002 13.3352ZM4.2002 16.6685C4.2002 16.2267 4.55837 15.8685 5.0002 15.8685H7.5002C7.94202 15.8685 8.3002 16.2267 8.3002 16.6685C8.3002 17.1103 7.94202 17.4685 7.5002 17.4685H5.0002C4.55837 17.4685 4.2002 17.1103 4.2002 16.6685Z"
                fill="#85858F"
              />
            </svg>
            <span
              >از سال <b v-text="notify.startYear"></b> تا
              <b v-text="notify.endYear"></b
            ></span>
          </p>
          <p class="notify__price">
            <icons-discount
              :width="20"
              :height="20"
              hash-color="var(--color-black-200)"
            />
            <span v-if="notify.startPrice"
              >از <b>{{ splitNumber(notify.startPrice) }} </b> تومان
            </span>
            <span v-if="notify.endPrice">
              تا
              <b v-text="`${splitNumber(notify.endPrice)}`"> </b>
              تومان
            </span>
          </p>
        </div>
        <div class="actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { NotifyFilterData } from "~~/models/notify/Notify.Models";
import { toPersianDate } from "~~/utilities/dateUtil";
import { splitNumber } from "~~/utilities/numberUtils";

const props = defineProps<{
  notify: NotifyFilterData;
}>();
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .advert {
    padding: 0.5rem !important;
  }
  .advert svg {
    display: none;
  }
  .advert .notify__body span {
    color: var(--color-gray-600);
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
  }
  .notify__body b {
    color: var(--color-black) !important;
  }
  .notify__body {
    position: relative;
  }
  .badge {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
    background: transparent !important;
    color: var(--color-gray-600);
    padding: 0 !important;
  }
  .notify__price {
    flex-direction: column;
  }
  .notify__name {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .notify__footer {
    flex-direction: column;
    align-items: flex-start !important;
  }
  .actions {
    align-self: flex-end;
  }
  .notify__banner {
    position: relative;
  }
  .banner__link {
    display: flex !important;
    position: absolute;
    bottom: 1rem;
    width: 80%;
    margin: auto;
    background: var(--color-blue);
    color: #fff !important;
    border-radius: 8px;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding: 6px 1rem;
    font-family: var(--t6-font-family);
    font-size: var(--t6-font-size);
  }
  .logo__active {
    margin-bottom: 20px !important;
  }
  .notify__banner img {
    width: 88px !important;
    height: 88px !important;
  }
  .notify__link{
    display: none !important;
  }
}

@media screen and (max-width: 440px) {
  .banner__link {
    width: 95% !important;
  }
}
.notify__header{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.notify__link {
  display: flex ;
  background: var(--color-blue);
  color: #fff !important;
  border-radius: 12px;
  padding: 12px 18px;
}
.notify__he
a:-webkit-any-link {
  color: inherit;
}
.notify__body {
  padding: 1rem 0;
}
.notify__price {
  font-family: var(--t4-font-family) !important;
  font-size: var(--t4-font-size) !important;
  gap: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
}
.advert {
  background: var(--color-white) !important;
}
.banner__link {
  display: none;
}
.badge {
  display: inline-block;
  width: fit-content;
  padding: 0.5rem 1rem;
  background: var(--color-gray-200);
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  border-radius: 10px;
}
.notify__price span {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
.notify__wrapper {
  margin-right: unset !important;
}
.notify__name {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
.notify__banner {
  width: fit-content !important;
  background: var(--color-gray-200);
  display: flex;
  align-content: center;
  align-items: center;
  width: 320px !important;
  flex-grow: 1;
  border-radius: 12px;
  justify-content: center;
}
.notify__banner img {
  width: 128px;
  height: 128px;
}
.notify__row--wide-item .notify__flag--place {
  right: 1rem;
  left: auto;
}
.notify__footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
}
.notify__footer,
.notify__wrapper {
  height: fit-content !important;
}
.notify__body .notify__date-wide:first-of-type {
  margin-right: 0 !important;
}
.notify__body {
  width: 100%;
}
.nardeban {
  background: #ff9500;
  color: black;
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
  cursor: pointer;
}
</style>