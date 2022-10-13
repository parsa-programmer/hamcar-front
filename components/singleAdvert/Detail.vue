<template>
  <div>
    <loadings-full-loading v-if="pageLoading" />
    <div class="ads__connection">
      <button :class="[
        'btn btn-primary ads__contact-btn',
        { 'w-full': preview },
      ]" :disabled="isShowPhones" @click="showPhone">
        اطلاعات تماس
      </button>
      <nuxt-link @click="chatWithSeller" v-if="preview == false" class="btn btn-primary-outline ads__chat-btn">چت
      </nuxt-link>
    </div>
    <div class="ads__height-wrapper">
      <Transition enter-active-class="animate__animated animate__fadeIn animate__faster">
        <div class="ads__phone-number" v-if="isShowPhones">
          <div class="ads__detail">
            <span class="ads__detail-name">
              <icons-phone />
              شماره تماس 1
            </span>
            <span class="ads__detail-value">
              {{ advert.userDto.phoneNumber }}
              <h-copy hash-color="var(--color-black)" :text="advert.userDto.phoneNumber" />
            </span>
          </div>
          <div class="ads__detail" v-if="advert.exhibition != null && advert.exhibition?.telePhone">
            <span class="ads__detail-name">
              <icons-phone />
              شماره تماس 2
            </span>
            <span class="ads__detail-value">
              {{ advert.exhibition.telePhone }}
              <h-copy hash-color="var(--color-black)" :text="advert.exhibition.telePhone" />
            </span>
          </div>
        </div>
      </Transition>
      <div class="ads__details-list">
        <slot />
        <div class="ads__detail align-items-start">
          <span class="ads__detail-name row-price">
            <div class="row">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.53226 9.81714C1.99621 9.81714 1.88312 9.81162 1.80519 9.7949L1.59548 10.7727L1.80518 9.7949C1.42451 9.71326 1.10117 9.3799 1.03118 8.99691C1.01667 8.91751 1.01446 8.81602 1.02975 8.31505C1.07994 6.67112 1.21244 5.68251 1.50847 4.88721C2.06444 3.39359 2.82688 2.52367 3.98895 1.87231C4.99755 1.30697 6.57368 1 9.7782 1H14.2218C17.4263 1 19.0025 1.30697 20.0111 1.87231C21.1731 2.52367 21.9356 3.39359 22.4915 4.88721C22.7876 5.68251 22.9201 6.67111 22.9702 8.31504C22.9855 8.81602 22.9833 8.91751 22.9688 8.99691L23.9525 9.17669L22.9688 8.99691C22.8988 9.3799 22.5755 9.71325 22.1948 9.7949C22.1169 9.81162 22.0038 9.81714 21.4677 9.81714C20.0787 9.81714 19.2814 11.1177 19.2814 12.2729C19.2814 13.4282 20.0787 14.7287 21.4677 14.7287C21.9927 14.7287 22.1024 14.7341 22.1802 14.7507C22.5602 14.8318 22.8946 15.182 22.9581 15.5654C22.9713 15.6454 22.9721 15.7386 22.9503 16.2127C22.8885 17.5507 22.7531 18.41 22.4915 19.1128C21.9356 20.6064 21.1731 21.4763 20.0111 22.1277C19.0025 22.693 17.4263 23 14.2218 23H9.7782C6.57368 23 4.99755 22.693 3.98895 22.1277C2.82688 21.4763 2.06444 20.6064 1.50847 19.1128C1.24688 18.41 1.11151 17.5507 1.04974 16.2127C1.02786 15.7386 1.02865 15.6454 1.0419 15.5654C1.10537 15.182 1.43977 14.8318 1.81982 14.7507C1.8976 14.7341 2.00728 14.7287 2.53226 14.7287C3.92132 14.7287 4.7186 13.4282 4.7186 12.2729C4.7186 11.1177 3.92132 9.81714 2.53226 9.81714Z"
                  stroke="currentColor" stroke-width="2"></path>
                <path d="M15 9L9 15M9 9V10M15 14V15" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              قیمت
            </div>
            <span class="delivery__date--desktop font-5" v-if="
              advert.price.advertisementPaymentType ==
              AdvertisementPaymentType.قسطی
            ">
              {{ advert.price.ghest?.tedadeGhestHa }} قسط، تحویل
              {{ advert.price.ghest?.deliveryDate }} روزه
            </span>
          </span>
          <span class="ads__detail-value" v-if="
            advert.price.advertisementPaymentType ==
            AdvertisementPaymentType.مقطوع
          ">
            {{ splitNumber(advert.price.amount) }} تومان
          </span>
          <span class="ads__detail-value" v-else-if="
            advert.price.advertisementPaymentType ==
            AdvertisementPaymentType.توافقی
          ">توافقی</span>

          <div class="prices" v-if="
            advert.price.advertisementPaymentType ==
            AdvertisementPaymentType.قسطی
          ">
            <span class="ads__detail-value">
              ت {{ splitNumber(advert.price.ghest?.pishPardakht) }}
              <small class="font-4 color_black_200" style="position: relative; top: 4px">پیش</small></span>
            <span class="ads__detail-value mt-1">
              ت {{ splitNumber(advert.price.ghest?.amountPricePerGhest) }}
              <small class="font-4 color_black_200" style="position: relative; top: 4px">
                ماهیانه
              </small>
            </span>
            <span class="ads__detail-value mt-1 delivery__date">
              {{ advert.price.ghest?.tedadeGhestHa }} قسط، تحویل
              {{ advert.price.ghest?.deliveryDate }} روزه
            </span>
          </div>
        </div>
        <div class="ads__detail">
          <span class="ads__detail-name">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M2.5 8L21.5 8" stroke="currentColor" stroke-width="4" stroke-linecap="square"
                stroke-linejoin="round"></path>
              <path d="M14 18H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
            نحوه فروش
          </span>
          <span class="ads__detail-value">نقدی</span>
        </div>
        <div class="ads__detail">
          <span class="ads__detail-name">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.15619 11.8066C1.69002 14.5151 3.3918 16.797 5.38916 18.6148C7.38064 20.4272 9.59112 21.7094 10.995 22.4252C11.6337 22.7509 12.3663 22.7509 13.005 22.4252C14.4089 21.7094 16.6194 20.4272 18.6109 18.6148C20.6082 16.797 22.31 14.5151 22.8438 11.8066C23.2851 9.56748 22.8144 6.86895 21.1467 4.74202C19.5028 2.64529 16.6113 1 12 1C7.38872 1 4.49725 2.6453 2.85325 4.74203C1.18557 6.86895 0.714877 9.56748 1.15619 11.8066Z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <circle r="3" transform="matrix(-1 0 0 1 12 10)" stroke="currentColor" stroke-width="2"></circle>
            </svg>
            مکان
          </span>
          <span class="ads__detail-value">
            {{ advert.address.province }}، {{ advert.address.city }}
            <!-- {{ advert.address.postalAddress }} -->
          </span>
        </div>
        <template v-if="advert.carDetail">
          <div class="ads__detail">
            <span class="ads__detail-name">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.86859 1.01688C5.4788 0.625622 4.84564 0.624432 4.45438 1.01422C4.06312 1.40401 4.06193 2.03717 4.45172 2.42843L11.8867 9.89141C11.8748 9.97247 11.8686 10.0554 11.8686 10.1398C11.8686 11.0695 12.6194 11.8232 13.5457 11.8232C14.4719 11.8232 15.2228 11.0695 15.2228 10.1398C15.2228 9.21007 14.4719 8.45637 13.5457 8.45637C13.4616 8.45637 13.379 8.46258 13.2983 8.47456L5.86859 1.01688Z"
                  fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.0163 3.09706C9.89845 4.01858 8.471 5.42552 6.39817 7.47354C4.85087 9.02701 3.75863 10.2651 3.03816 11.317C2.31978 12.3659 2.05783 13.1061 2.00634 13.6745C1.91032 14.7348 2.48219 16.0718 5.12736 18.727C7.77254 21.3821 9.1046 21.9561 10.1609 21.8598C10.7272 21.8081 11.4646 21.5451 12.5095 20.8241C13.5575 20.1009 14.791 19.0045 16.3386 17.4513C18.3789 15.3708 19.7823 13.9362 20.7026 12.8118C21.66 11.6421 21.7869 11.1584 21.7973 10.9863C21.8015 10.9167 21.8159 10.6311 21.1004 9.76554C20.5325 9.07852 19.7367 8.28908 18.6279 7.18903L18.6269 7.18798C18.3174 6.88095 17.9835 6.54973 17.6234 6.1898C17.2415 5.80807 16.8921 5.45577 16.5696 5.13067L16.5689 5.12998L16.5688 5.12992C15.4962 4.04862 14.7222 3.26826 14.0461 2.70678C13.1796 1.98706 12.8945 2.00039 12.8254 2.00448C12.6573 2.01441 12.1791 2.13851 11.0163 3.09706ZM3.71581 20.1439C8.97118 25.419 11.4492 25.1929 17.7557 18.8627C25.3901 11.0776 25.3868 11.0744 19.9823 5.71499C19.6821 5.41726 19.3652 5.103 19.032 4.76996C18.6803 4.41844 18.3497 4.08496 18.0374 3.77L18.0373 3.76991C12.7275 -1.58498 12.7241 -1.58835 4.99216 6.05111C-1.31428 12.3813 -1.53956 14.8687 3.71581 20.1439ZM20.9016 20.3382C21.0542 20.0763 21.2275 19.8429 21.3725 19.6708C21.5176 19.8429 21.6909 20.0763 21.8435 20.3383C22.0764 20.7379 22.1996 21.0995 22.1996 21.3591C22.1996 21.826 21.8246 22.1961 21.3725 22.1961C20.9204 22.1961 20.5454 21.826 20.5454 21.3591C20.5454 21.0995 20.6687 20.7379 20.9016 20.3382ZM22.3916 18.2679L22.3729 18.2492C22.2856 18.1621 22.1762 18.0531 22.0726 17.9705C21.966 17.8856 21.7217 17.7069 21.3726 17.7069C21.0234 17.7069 20.7791 17.8855 20.6725 17.9704C20.5688 18.0531 20.4595 18.1621 20.3722 18.2492L20.3534 18.2679C20.0926 18.5277 19.7326 18.9678 19.4327 19.4824C19.1414 19.9823 18.8454 20.6564 18.8454 21.3591C18.8454 22.7555 19.9722 23.8961 21.3725 23.8961C22.7729 23.8961 23.8996 22.7555 23.8996 21.3591C23.8996 20.6564 23.6036 19.9823 23.3124 19.4824C23.0125 18.9678 22.6525 18.5277 22.3916 18.2679Z"
                  fill="currentColor"></path>
              </svg>
              رنگ
            </span>
            <span class="ads__detail-value">{{
            advert.carDetail.exteriorColor.replaceAll("_", " ")
            }}</span>
          </div>
        </template>
        <template v-else>
          <div class="ads__detail">
            <span class="ads__detail-name">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.86859 1.01688C5.4788 0.625622 4.84564 0.624432 4.45438 1.01422C4.06312 1.40401 4.06193 2.03717 4.45172 2.42843L11.8867 9.89141C11.8748 9.97247 11.8686 10.0554 11.8686 10.1398C11.8686 11.0695 12.6194 11.8232 13.5457 11.8232C14.4719 11.8232 15.2228 11.0695 15.2228 10.1398C15.2228 9.21007 14.4719 8.45637 13.5457 8.45637C13.4616 8.45637 13.379 8.46258 13.2983 8.47456L5.86859 1.01688Z"
                  fill="currentColor"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.0163 3.09706C9.89845 4.01858 8.471 5.42552 6.39817 7.47354C4.85087 9.02701 3.75863 10.2651 3.03816 11.317C2.31978 12.3659 2.05783 13.1061 2.00634 13.6745C1.91032 14.7348 2.48219 16.0718 5.12736 18.727C7.77254 21.3821 9.1046 21.9561 10.1609 21.8598C10.7272 21.8081 11.4646 21.5451 12.5095 20.8241C13.5575 20.1009 14.791 19.0045 16.3386 17.4513C18.3789 15.3708 19.7823 13.9362 20.7026 12.8118C21.66 11.6421 21.7869 11.1584 21.7973 10.9863C21.8015 10.9167 21.8159 10.6311 21.1004 9.76554C20.5325 9.07852 19.7367 8.28908 18.6279 7.18903L18.6269 7.18798C18.3174 6.88095 17.9835 6.54973 17.6234 6.1898C17.2415 5.80807 16.8921 5.45577 16.5696 5.13067L16.5689 5.12998L16.5688 5.12992C15.4962 4.04862 14.7222 3.26826 14.0461 2.70678C13.1796 1.98706 12.8945 2.00039 12.8254 2.00448C12.6573 2.01441 12.1791 2.13851 11.0163 3.09706ZM3.71581 20.1439C8.97118 25.419 11.4492 25.1929 17.7557 18.8627C25.3901 11.0776 25.3868 11.0744 19.9823 5.71499C19.6821 5.41726 19.3652 5.103 19.032 4.76996C18.6803 4.41844 18.3497 4.08496 18.0374 3.77L18.0373 3.76991C12.7275 -1.58498 12.7241 -1.58835 4.99216 6.05111C-1.31428 12.3813 -1.53956 14.8687 3.71581 20.1439ZM20.9016 20.3382C21.0542 20.0763 21.2275 19.8429 21.3725 19.6708C21.5176 19.8429 21.6909 20.0763 21.8435 20.3383C22.0764 20.7379 22.1996 21.0995 22.1996 21.3591C22.1996 21.826 21.8246 22.1961 21.3725 22.1961C20.9204 22.1961 20.5454 21.826 20.5454 21.3591C20.5454 21.0995 20.6687 20.7379 20.9016 20.3382ZM22.3916 18.2679L22.3729 18.2492C22.2856 18.1621 22.1762 18.0531 22.0726 17.9705C21.966 17.8856 21.7217 17.7069 21.3726 17.7069C21.0234 17.7069 20.7791 17.8855 20.6725 17.9704C20.5688 18.0531 20.4595 18.1621 20.3722 18.2492L20.3534 18.2679C20.0926 18.5277 19.7326 18.9678 19.4327 19.4824C19.1414 19.9823 18.8454 20.6564 18.8454 21.3591C18.8454 22.7555 19.9722 23.8961 21.3725 23.8961C22.7729 23.8961 23.8996 22.7555 23.8996 21.3591C23.8996 20.6564 23.6036 19.9823 23.3124 19.4824C23.0125 18.9678 22.6525 18.5277 22.3916 18.2679Z"
                  fill="currentColor"></path>
              </svg>
              رنگ
            </span>
            <span class="ads__detail-value">{{
            advert.motorCycleDetail.color.replaceAll("_", " ")
            }}</span>
          </div>
        </template>
        <div class="ads__detail">
          <span class="ads__detail-name">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 24C19.5523 24 20 23.5523 20 23C20 22.4477 19.5523 22 19 22V24ZM1 22C0.447715 22 0 22.4477 0 23C0 23.5523 0.447715 24 1 24V22ZM20 6C19.4477 6 19 6.44772 19 7C19 7.55228 19.4477 8 20 8V6ZM5 2H15V0H5V2ZM4 8V3H2V8H4ZM17 22H3V24H17V22ZM17 24H19V22H17V24ZM19 22H3V24H19V22ZM1 24H3V22H1V24ZM8 6H12V4H8V6ZM12 6V8H14V6H12ZM12 8H8V10H12V8ZM8 8V6H6V8H8ZM4 23V13H2V23H4ZM4 13V8H2V13H4ZM3 14H17V12H3V14ZM16 13V16H18V13H16ZM16 16V23H18V16H16ZM17 17H18V15H17V17ZM19 18V18.5H21V18H19ZM24 18.5V9H22V18.5H24ZM16 7V13H18V7H16ZM16 3V7H18V3H16ZM21 6H20V8H21V6ZM24 9C24 7.34315 22.6569 6 21 6V8C21.5523 8 22 8.44772 22 9H24ZM21.5 21C22.8807 21 24 19.8807 24 18.5H22C22 18.7761 21.7761 19 21.5 19V21ZM19 18.5C19 19.8807 20.1193 21 21.5 21V19C21.2239 19 21 18.7761 21 18.5H19ZM18 17C18.5523 17 19 17.4477 19 18H21C21 16.3431 19.6569 15 18 15V17ZM8 8H6C6 9.10457 6.89543 10 8 10V8ZM12 8V10C13.1046 10 14 9.10457 14 8H12ZM12 6H14C14 4.89543 13.1046 4 12 4V6ZM8 4C6.89543 4 6 4.89543 6 6H8V4ZM15 2C15.5523 2 16 2.44772 16 3H18C18 1.34315 16.6569 0 15 0V2ZM5 0C3.34315 0 2 1.34315 2 3H4C4 2.44772 4.44772 2 5 2V0Z"
                fill="currentColor"></path>
            </svg>
            سوخت
          </span>
          <span class="ads__detail-value" v-if="advert.model.fuel!=CarFuel.نا_مشخص">{{
          advert.model.fuel.replaceAll("_"," ") }}</span>
          <span class="ads__detail-value" v-else>{{
          advert.motorCycleDetail.fuel.replaceAll("_"," ") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { ToastType } from "~~/composables/useToast";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { CarFuel } from "~~/models/advertisements/enums/CarFuel";
import { Fuel } from "~~/models/advertisements/enums/Fuel";
import { SendMessage } from "~~/services/chat.service";
import { authStore } from "~~/stores/auth.store";
import { splitNumber } from "~~/utilities/numberUtils";

const isShowPhones = ref(false);
const auStor = authStore();
const showPhone = () => {
  isShowPhones.value = true;
};
const toast = useToast();
const router = useRouter();
const route = useRoute();
const pageLoading = ref(false);

const props = defineProps<{
  advert: AdvertisementDto;
  preview: boolean;
}>();

const chatWithSeller = async () => {
  if (auStor.isLogin == false) {
    toast.showToast("برای شروع گفتوگو وارد حساب کاربری شوید", ToastType.error);
    await router.push("/auth/login?returnTo=" + route.path);
    return;
  }
  pageLoading.value = true;
  var res = await SendMessage({
    message: null,
    advertisementId: props.advert!.id,
    groupId: null,
  });
  pageLoading.value = false;

  if (res.isSuccess) {
    router.push("/account/messages?id=" + res.data?.groupId);
  }
};
</script>

<style scoped>
.ads__detail-value-info {
  position: absolute;
}

.delivery__date {
  display: none;
  background: var(--color-gray-200);
  border-radius: 60px;
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  text-align: center;
  width: 131px;
  height: 26px;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-600);
  margin-top: 8px !important;
}

@media screen and (max-width: 768px) {
  .delivery__date {
    display: flex;
  }

  .ads__detail-value.mt-1 {
    margin-top: 5px;
  }

  .ads__detail-value small {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }

  .delivery__date--desktop {
    display: none !important;
  }
}

.row-price {
  display: block !important;
}

.delivery__date--desktop {
  background: var(--color-gray-300);
  border-radius: 60px;
  color: var(--color-gray-600);
  padding: 0.5rem 1rem;
  margin-top: 5px !important;
  display: block;
}
</style>