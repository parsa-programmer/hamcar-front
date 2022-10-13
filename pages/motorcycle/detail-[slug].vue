<template>
  <div v-if="advert">
    <loadings-full-loading v-if="pageLoading" />
    <client-only>
      <single-advert-gallery :saveAdvertLoading="saveAdvertLoading" :advert="advert" v-model="isOpenGallery"
        :isAdvertSaved="isSavedAdvert" @saveAdvert="saveAdvert" />
    </client-only>

    <Head>
      <Title>همکار - {{ advert.brand.title }} {{ advert.model.title }}
        {{ advert.trim?.title }} {{ advert.year.yearTitle }}</Title>
      <Link href="/css/pdp-personal.css" rel="stylesheet" />
    </Head>
    <single-advert-Breadcrumb :advert="advert" />
    <singleAdvert-exhibition-card :advert="advert" />
    <single-advert-mobile-data :advert="advert" :advert-title="advertTitle" :isSavedAdvert="isSavedAdvert"
      :saveAdvertLoading="saveAdvertLoading" @toggleShareModal="toggleShareModal" @openGallery="openGallery"
      @saveAdvert="saveAdvert" />
    <section class="ads">
      <div class="ads__right">
        <div class="ads__header">
          <h2 class="ads__name" v-text="advertTitle"></h2>
          <span class="ads__date">{{ TimeAgo(advert.creationDate) }}</span>
        </div>
        <div class="ads-info">
          <div class="ads-info__item">
            <span class="ads-info__name">مدل</span>
            <span class="ads-info__value">{{ advert.year.yearTitle }}</span>
          </div>
          <div class="ads-info__item">
            <span class="ads-info__name">کارکرد</span>
            <span class="ads-info__value" v-if="advert.mileage > 0">
              {{ advert.mileage }}
              <span class="ads-info__unit">کیلومتر</span>
              <span class="ads-info__mobile-unit">KM</span>
            </span>
            <span class="ads-info__value" v-else> صفر </span>
          </div>
          <div class="ads-info__item">
            <span class="ads-info__name">گیربکس</span>
            <span class="ads-info__value">{{
            advert.gearBox.replace("_", " ")
            }}</span>
          </div>
        </div>

        <single-advert-detail :advert="advert" :preview="false" />
        <div class="ads-caption">
          <div class="ads-caption__header">
            <icons-message hash-color="var(--color-black)" />
            توضیحات
          </div>
          <p class="ads-caption__text" v-text="advert.description"></p>
        </div>
        <nuxt-link :to="`/car-reviews/${advert.brand.slug}/${carReview.slug}`"
          class="btn btn-primary-outline ads__show-report-btn" v-if="carReview">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_864_1910" fill="white">
              <path
                d="M0 12C0 15.5755 0.27728 18.1346 1.09928 19.9448C1.72711 21.3273 2.67271 22.2729 4.05524 22.9007C5.86536 23.7227 8.42446 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z">
              </path>
            </mask>
            <path
              d="M6.54404 14.5L7.45289 14.0829C7.62733 14.4629 7.54685 14.9114 7.25115 15.2071L6.54404 14.5ZM1.80639 20.6519C1.41587 21.0424 0.782701 21.0424 0.392177 20.6519C0.0016525 20.2613 0.00165251 19.6282 0.392177 19.2377L1.80639 20.6519ZM9.5 17.456L8.79289 16.7489C9.08859 16.4532 9.53707 16.3727 9.91713 16.5471L9.5 17.456ZM4.76235 23.6078C4.37182 23.9983 3.73866 23.9983 3.34813 23.6078C2.95761 23.2173 2.95761 22.5841 3.34813 22.1936L4.76235 23.6078ZM14.5 6.54404L14.9171 5.63519C15.2146 5.77174 15.4265 6.04523 15.4843 6.36742C15.5421 6.6896 15.4386 7.01969 15.2071 7.25115L14.5 6.54404ZM17.456 9.5L16.7488 8.79289C16.9803 8.56143 17.3104 8.45791 17.6326 8.51572C17.9548 8.57354 18.2283 8.78537 18.3648 9.08287L17.456 9.5ZM10.522 10.522L9.81491 11.2291C9.42439 10.8386 9.42439 10.2054 9.81491 9.81491L10.522 10.522ZM13.478 13.478L14.1851 14.1851C13.7946 14.5756 13.1614 14.5756 12.7709 14.1851L13.478 13.478ZM19 12C19 15.866 15.866 19 12 19V17C14.7614 17 17 14.7614 17 12H19ZM5 12C5 8.13401 8.13401 5 12 5V7C9.23858 7 7 9.23858 7 12H5ZM5.6352 14.9171C5.22705 14.0279 5 13.0391 5 12H7C7 12.7453 7.16244 13.45 7.45289 14.0829L5.6352 14.9171ZM7.25115 15.2071L1.80639 20.6519L0.392177 19.2377L5.83694 13.7929L7.25115 15.2071ZM12 19C10.9609 19 9.97214 18.773 9.08287 18.3648L9.91713 16.5471C10.55 16.8376 11.2547 17 12 17V19ZM10.2071 18.1631L4.76235 23.6078L3.34813 22.1936L8.79289 16.7489L10.2071 18.1631ZM12 5C13.0391 5 14.0279 5.22705 14.9171 5.63519L14.0829 7.45289C13.45 7.16244 12.7453 7 12 7V5ZM18.3648 9.08287C18.7729 9.97214 19 10.9609 19 12H17C17 11.2547 16.8376 10.55 16.5471 9.91713L18.3648 9.08287ZM9.81491 9.81491L13.7929 5.83694L15.2071 7.25115L11.2291 11.2291L9.81491 9.81491ZM12.7709 12.7709L16.7488 8.79289L18.1631 10.2071L14.1851 14.1851L12.7709 12.7709ZM12.7709 14.1851L9.81491 11.2291L11.2291 9.81491L14.1851 12.7709L12.7709 14.1851ZM1.09928 19.9448L-0.721743 20.7717L-0.721744 20.7717L1.09928 19.9448ZM4.05524 22.9007L3.22828 24.7217L3.22828 24.7217L4.05524 22.9007ZM12 22C14.4249 22 16.2369 21.8675 17.6101 21.5623C18.9605 21.2622 19.7608 20.8223 20.2915 20.2915C20.8223 19.7608 21.2622 18.9605 21.5623 17.6101C21.8675 16.2369 22 14.4249 22 12H26C26 14.5161 25.8678 16.6746 25.467 18.4779C25.0612 20.3039 24.3539 21.886 23.12 23.12C21.886 24.3539 20.3039 25.0612 18.4779 25.467C16.6746 25.8678 14.5161 26 12 26V22ZM22 12C22 9.57515 21.8675 7.76307 21.5623 6.38993C21.2622 5.03949 20.8223 4.23924 20.2915 3.70846C19.7608 3.17768 18.9605 2.73783 17.6101 2.43771C16.2369 2.13254 14.4249 2 12 2V-2C14.5161 -2 16.6746 -1.86779 18.4779 -1.46702C20.3039 -1.06121 21.886 -0.353931 23.12 0.880037C24.3539 2.114 25.0612 3.69613 25.467 5.52213C25.8678 7.32543 26 9.48385 26 12H22ZM12 2C9.57515 2 7.76307 2.13254 6.38993 2.43771C5.03949 2.73783 4.23924 3.17768 3.70846 3.70846C3.17768 4.23924 2.73783 5.03949 2.43771 6.38993C2.13254 7.76307 2 9.57515 2 12H-2C-2 9.48385 -1.86779 7.32543 -1.46702 5.52213C-1.06121 3.69613 -0.353932 2.114 0.880036 0.880037C2.114 -0.353931 3.69613 -1.06121 5.52213 -1.46702C7.32543 -1.86779 9.48385 -2 12 -2V2ZM2 12C2 15.5592 2.29172 17.7336 2.92031 19.1178L-0.721744 20.7717C-1.73716 18.5357 -2 15.5919 -2 12H2ZM2.92031 19.1178C3.348 20.0596 3.9404 20.652 4.8822 21.0797L3.22828 24.7217C1.40502 23.8938 0.10623 22.595 -0.721743 20.7717L2.92031 19.1178ZM4.8822 21.0797C6.26641 21.7083 8.44078 22 12 22V26C8.40814 26 5.46431 25.7372 3.22828 24.7217L4.8822 21.0797Z"
              fill="#007AFF" mask="url(#path-1-inside-1_864_1910)"></path>
          </svg>
          مشاهده کامل مشخصات فنی
        </nuxt-link>
      </div>
      <div class="ads__left">
        <search-advert class="ads__search-box" />
        <single-advert-desktop-image-slider :advert="advert" :isSavedAdvert="isSavedAdvert"
          :saveAdvertLoading="saveAdvertLoading" @toggleShareModal="toggleShareModal" @openGallery="openGallery"
          @saveAdvert="saveAdvert" />
        <div class="ads__form mb-2" v-if="noteLoading">
          <h-skeletor width="100%" style="height: 160px" />
          <div class="row" style="flex-direction: row-reverse">
            <h-skeletor class="btn-sm mt-0_5" width="140px" style="height: 60px !important" />
          </div>
        </div>
        <Form class="ads__form" :validation-schema="validationSchema" v-slot="{ meta }" v-else>
          <client-only>
            <h-textarea name="note" class-value="ads__note-input" placeholder="یادداشت من..." v-model="advertNote"
              :trans-parent="false" v-if="authStore.isLogin"></h-textarea>
            <h-textarea name="note" class-value="ads__note-input"
              placeholder="برای ثبت یادداشت روی آگهی ها باید وارد حساب کاربری خود شوید" disabled v-model="advertNote"
              :trans-parent="false" v-else></h-textarea>

            <div class="row" style="flex-direction: row-reverse">
              <h-button type="button" :disabled="loadingButton || meta.valid == false" :loading="loadingButton"
                @click="setAdvertNote">ثبت یادداشت</h-button>
            </div>
            <span class="ads__form-info">یادداشت در پنل کاربری شما ذخیره می‌شود، و فقط برای شما قابل
              مشاهده است.</span>
          </client-only>
        </Form>
        <div class="ads__warning">
          <p class="ads__warning-text">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_864_1908" fill="white">
                  <path
                    d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z">
                  </path>
                </mask>
                <path
                  d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
                  stroke="#0F0F10" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"
                  mask="url(#path-1-inside-1_864_1908)"></path>
                <path
                  d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z"
                  fill="#0F0F10"></path>
                <path d="M12 7L12 13" stroke="#0F0F10" stroke-width="1.8" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </span>
            پیش از انجام معاملات و پرداخت هرگونه وجه، از صحت خودرو اطمینان حاصل
            فرمایید.
          </p>
          <a href="javascript:void(0)" @click="toggleBugModal" class="ads__warning-link">
            (گزارش اشکال)
          </a>
        </div>
        <div class="ads__mobile-connection">
          <button @click="togglePhoneModal" class="btn btn-primary ads__contact-btn">
            اطلاعات تماس
          </button>
          <a href="#" @click="chatWithSeller" class="btn btn-primary-outline ads__chat-btn">چت</a>
        </div>
      </div>
    </section>

    <h-modal title="گزارش اشکال" v-model="isOpenModal">
      <report-bug :link-id="advert.id" :report-for="BugReportFor.advertisement" />
    </h-modal>
    <h-modal title="اشتراک گذاری"
      sub-title="با استفاده از روش های زیر میتوانید این صفحه را با دوستان خود به اشتراک بگذارید."
      v-model="isOpenShareModal" :mobile-header="true">
      <share-page v-model="isOpenShareModal" :link="`/${advert.brand.isCar ? 'car' : 'motor'}/detail-${
        advert.shortLink
      }-${advert.brand.slug}-${advert.model.slug}`" />
    </h-modal>
    <h-modal v-model="isOpenPhoneModal">
      <div class="phone__list">
        <div class="row">
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 1</span>
          </div>
          <div class="copy__phone">
            {{ advert.userDto.phoneNumber }}
            <h-copy hash-color="#C4C4C4" :text="advert.userDto.phoneNumber" />
          </div>
        </div>
        <div class="row" v-if="advert.exhibition != null">
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 2</span>
          </div>
          <div class="copy__phone">
            {{ advert.exhibition.mobilePhone }}
            <h-copy hash-color="#C4C4C4" :text="advert.exhibition.mobilePhone" />
          </div>
        </div>

        <div class="row" v-if="advert.exhibition != null && advert.exhibition.telePhone">
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 3</span>
          </div>
          <div class="copy__phone">
            {{ advert.exhibition.telePhone }}
            <h-copy hash-color="#C4C4C4" :text="advert.exhibition.telePhone" />
          </div>
        </div>
      </div>
    </h-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GetByShortLink } from "~~/services/advertisement.service";
import { BugReportFor } from "~~/services/bugReport.service";
import { GetAdvertImage } from "~~/utilities/imageUtil";
import { TimeAgo } from "~~/utilities/dateUtil";
import {
  SaveAdvertisement,
  GetNoteByAdvertId,
  SetNote,
  GetSavedAdvertisements,
} from "~~/services/account.service";
import { authStore as useAuthStore } from "~~/stores/auth.store";
import { AlertType } from "~~/models/utilities/AlertType";
import { ToastType } from "~~/composables/useToast";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { IApiResponse } from "~~/models/IApiResponse";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { GetByModel } from "~~/services/carReview.service";
import { CarReviewDto } from "~~/models/carReviews/CarReviewModels";
import {
  UserAdvertisementSavedDto,
  UserNoteFilterData,
} from "~~/models/account/account.Models";
import { SendMessage } from "~~/services/chat.service";
import { SendChatMessageResponseDto } from "~~/models/chats/Chat.Models";

const noteLoading = ref(true);
const advert: Ref<AdvertisementDto | undefined> = ref(undefined);
const isOpenModal = ref(false);
const isOpenPhoneModal = ref(false);
const isOpenShareModal = ref(false);
const isOpenGallery = ref(false);
const advertNote = ref("");
const loadingButton = ref(false);
const carReview: Ref<CarReviewDto | null> = ref(null);
const saveAdvertLoading = ref(true);
const isSavedAdvert = ref(false);

const toast = useToast();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const pageLoading = ref(false);

var slug = route.params.slug;
const shortLink = slug.toString().split("-")[0];
const advertTitle = ref("");

const validationSchema = Yup.object().shape({
  note: Yup.string()
    .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
    .required("لطفا یادداشت خود را بنویسید"),
});
const { data, pending } = await useAsyncData(
  "single-advert",
  () => GetByShortLink(shortLink),
  {
    initialCache: false,
  }
);
if (data.value?.data) {
  advert.value = data.value.data;
  advertTitle.value = `${advert.value.brand.title} ${advert.value.model.title}  ${advert.value.year.yearTitle}`;
}
const saveAdvert = async () => {
  saveAdvertLoading.value = true;
  var res = await SaveAdvertisement(advert.value!.id);
  saveAdvertLoading.value = false;

  if (res.isSuccess) {
    isSavedAdvert.value = true;
    toast.showToast("آگهی شما با موفقیت ذخیره شد", ToastType.success);
  }
};
const toggleBugModal = () => {
  isOpenModal.value = !isOpenModal.value;
};
const togglePhoneModal = () => {
  isOpenPhoneModal.value = !isOpenPhoneModal.value;
};
const toggleShareModal = () => {
  isOpenShareModal.value = !isOpenShareModal.value;
};
const openGallery = () => {
  isOpenGallery.value = true;
};
const setAdvertNote = async () => {
  if (advertNote.value.length < 5) {
    toast.showToast("توضیحات باید حداقل 5 کاراکتر باشد", ToastType.error);
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      SetNote({
        advertisementId: advert.value!.id,
        description: advertNote.value,
      }),
    loadingButton
  );
  if (res.isSuccess) {
    toast.showToast("یادداشت با موفقیت ذخیره شد", ToastType.success);
  }
};
const chatWithSeller = async () => {
  if (authStore.isLogin == false) {
    toast.showToast("برای شروع گفتوگو وارد حساب کاربری شوید", ToastType.error);
    await router.push("/auth/login?returnTo=" + route.path);
    return;
  }
  var res = await ProssesAsync<IApiResponse<SendChatMessageResponseDto>>(
    () =>
      SendMessage({
        message: null,
        advertisementId: advert.value!.id,
        groupId: null,
      }),
    pageLoading
  );
  if (res.isSuccess) {
    router.push("/account/messages?id=" + res.data?.groupId);
  }
};
onMounted(async () => {
  if (authStore.isLogin) {
    var res = await ProssesAsync<IApiResponse<UserNoteFilterData>>(
      () => GetNoteByAdvertId(advert.value!.id),
      noteLoading
    );
    if (res.isSuccess) {
      advertNote.value = res.data?.text ?? "";
    }
  } else {
    noteLoading.value = false;
  }

  var res2 = await GetByModel(advert.value!.model.id, advert.value!.trim?.id);
  if (res2.data) {
    carReview.value = res2.data;
  }

  var result = await ProssesAsync<IApiResponse<UserAdvertisementSavedDto[]>>(
    () => GetSavedAdvertisements(),
    saveAdvertLoading
  );
  if (result.isSuccess) {
    var saved = result.data!.find((f) => f.advertisementId == advert.value!.id);
    if (saved) {
      isSavedAdvert.value = true;
    }
  }
});
</script>
<style scoped>
.phone__list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.phone__title {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}

.text-muted {
  color: var(--color-gray-600) !important;
}

.phone__list .row {
  flex-direction: row;
  border-bottom: 1px solid var(--color-gray-200);
  justify-content: space-between;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
}

.phone__list .row:last-child {
  border-bottom: none;
  padding-bottom: 0rem;
}

.copy__phone {
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  color: var(--color-blue);
}

.copy__phone div {
  top: 6px;
  position: relative;
}
</style>
