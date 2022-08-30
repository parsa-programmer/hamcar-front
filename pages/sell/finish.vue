<template>
  <div>
    <Teleport to="body">
      <h-delete-popup
        v-model="isShowDeletePopup"
        @accepted="deleteAdvertImage"
        title="حذف تصویر آگهی"
        description="آیا از حذف این تصویر اطمینان دارید؟"
      />
    </Teleport>
    <Head>
      <Link href="/css/plan.css" rel="stylesheet" />
      <link href="/css/advertisement-registration.css" rel="stylesheet" />
      <Title>ثبت آگهی فروش خودرو شما</Title>
    </Head>
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">ثبت آگهی خودرو</a>
    </section>
    <section class="registration">
      <div class="registration__head">
        <h1 class="registration__title">ثبت آگهی فروش خودرو شما</h1>
        <search-advert />
      </div>
      <div class="registration__content">
        <register-advert-steps />
        <div v-if="loading == false">
          <h-alert type="success" class="font-2 text-right" :show-icon="true">
            آگهی توربو شما بررسی و ثبت خواهد شد __ اینجا باید درست شود
          </h-alert>
          <p class="text__description font-5 mt-1 d-none d-sm-block">
            تمامی اطلاع‌رسانی های «همکار» در خصوص آگهی شما از طریق شماره
            <b>{{ advert?.userDto.phoneNumber }}</b> اطلاع شما خواهد رسید.
          </p>
          <div class="mt-2">
            <h-collapse
              title="پنل توربو"
              :is-open="true"
              v-if="utilStore.isMobile"
            >
              <ul class="mobile__plan__body" style="display: block">
                <li class="mobile__plan__body__item">
                  <label> بالا بر اتوماتیک </label>
                  <label>هر 12 ساعت</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>پین در صفحه اصلی</label>
                  <label>26 ساعت کامل</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>پین در صفحه اول آگهی ها</label>
                  <label>50 ساعت رندوم</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>ارسال پیامک به خریداران</label>
                  <label>13</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>ارسال ایمیل به خریداران</label>
                  <label>13</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>تعداد بالابر</label>
                  <label>روزانه اتوماتیک</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>مدت آگهی (روز)</label>
                  <label>تا زمان فروش</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>تعداد عکس</label>
                  <label>18</label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>برچسب همکار</label>
                  <label>
                    <icons-check hash-color="var(--color-green)" />
                  </label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>آمار بازدید</label>
                  <label>
                    <icons-check hash-color="var(--color-green)" />
                  </label>
                </li>
                <li class="mobile__plan__body__item">
                  <label>نمایش در پیشنهادات همکار</label>
                  <label>
                    <icons-check hash-color="var(--color-green)" />
                  </label>
                </li>
              </ul>
            </h-collapse>
            <div v-else class="row w-full">
              <div style="flex-grow: 1">
                <div class="row spec__item">
                  <p class="font-4 spec__title">بالابر اتوماتیک</p>
                  <p class="text__description">
                    <icons-close-box hash-color="var(--color-error)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">پین در همه فیلتر ها</p>
                  <p class="text__description">
                    <icons-close-box hash-color="var(--color-error)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">پین در صفحه اول آگهی ها</p>
                  <p class="text__description">
                    <icons-close-box hash-color="var(--color-error)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">ارسال پیامک به خریداران</p>
                  <p class="text__description">
                    <icons-close-box hash-color="var(--color-error)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">ارسال ایمیل به خریداران</p>
                  <p class="text__description">
                    <icons-check hash-color="var(--color-green)" />
                  </p>
                </div>
              </div>
              <div style="flex-grow: 1">
                <div class="row spec__item">
                  <p class="font-4 spec__title">مدت آگهی (روز)</p>
                  <p class="text__description">30 روز</p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">تعداد بالابر</p>
                  <p class="text__description">12</p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">برچسب همکار</p>
                  <p class="text__description">
                    <icons-check hash-color="var(--color-green)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">آمار بازدید</p>
                  <p class="text__description">
                    <icons-check hash-color="var(--color-green)" />
                  </p>
                </div>
                <div class="row spec__item">
                  <p class="font-4 spec__title">نمایش در پیشنهادات همکار</p>
                  <p class="text__description">
                    <icons-close-box hash-color="var(--color-error)" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 image__count__container">
            <h4 class="font-4">افزودن عکس</h4>
            <p class="text__description font-5 image__count__text">
              تعداد عکس‌های باقی‌مانده:
              <span class="counter"> <label>۱۴</label> </span>
            </p>
          </div>
          <h-image-uploader
            v-on:upload-new-image="UploadNewImage"
            :max-file-count="4"
            size="sm"
            class="mt-1"
          >
            <div
              class="image__item"
              v-for="(item, index) in advert?.images"
              :key="index"
              :id="item.id"
            >
              <h-image
                :src="GetBitMapAdvertImage(advert?.id, item.imageName)"
              />
              <button
                class="delete__image__item"
                @click="OpenDeletePopup(item.id)"
              >
                <icons-trash :width="20" :height="40" />
              </button>
            </div>
          </h-image-uploader>
          <div
            class="row align-items-center justify-content-space-between footer"
          >
            <div class="row">
              <icons-danger />
              <p class="text__description font-5">
                تمامی اطلاع‌رسانی های «همکار» در خصوص آگهی شما از طریق شماره
                <b>{{ advert?.userDto.phoneNumber }}</b> اطلاع شما خواهد رسید.
              </p>
            </div>
            <h-button class="pull-left pay__btn" @click="showAdvert"
              >مشاهده آگهی</h-button
            >
          </div>
        </div>
        <div class="text-center" v-else>
          <icons-loading />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { advertStore } from "~~/stores/advert.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import {
  GetById,
  DeleteImage,
  AddImage,
} from "~~/services/advertisement.service";
import { Ref } from "vue";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { AdvertisementPlan } from "~~/models/plans/AdvertisementPlan";
import { GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { UseUtilStore } from "~~/stores/util.store";

const toast = useToast();
const store = advertStore();
const utilStore = UseUtilStore();
const route = useRoute();
const loading = ref(true);
const advert: Ref<AdvertisementDto | null> = ref(null);
const plan: Ref<AdvertisementPlan | null> = ref(null);
const isShowDeletePopup = ref(false);
const advertImageIdForDelete = ref("");
const id = route.query.id;
if (!id) {
  await navigateTo("/404");
}

const OpenDeletePopup = (imageId: string) => {
  isShowDeletePopup.value = true;
  advertImageIdForDelete.value = imageId;
};
const deleteAdvertImage = async () => {
  var result = await ProssesAsync<IApiResponse<undefined>>(
    () => DeleteImage(advert.value!.id, advertImageIdForDelete.value),
    loading
  );
  if (result.isSuccess) {
    document.getElementById(advertImageIdForDelete.value)?.remove();
    advertImageIdForDelete.value = "";
  }
};
const UploadNewImage = async (file: any): Promise<boolean> => {
  var formData = new FormData();
  formData.append("AdvertisementId", advert.value!.id);
  formData.append("Images", file);
  var result = await AddImage(formData);
  if (result.isSuccess) {
    await getAdvert();
  }
  return false;
};
onMounted(async () => {
  store.changeStep(7);
  await getAdvert();
});
const getAdvert = async () => {
  const result = await ProssesAsync<IApiResponse<AdvertisementDto>>(
    () => GetById(id!.toString()),
    loading
  );
  if (result.isSuccess == false || result.data == null) {
    await navigateTo("/");
  }
  advert.value = result.data!;
};
const showAdvert = () => {
  const router = useRouter();
  router.push(`/profile/adverts/${advert.value?.id}`);
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .image__count__container {
    justify-content: space-between;
    align-items: center;
  }
  .footer .row {
    display: none;
  }
  .footer .btn {
    width: 100%;
  }
  .h-image-uploader {
    margin-top: 1.5rem !important;
  }
  .image__count__text {
    border: 2px solid #f0efef;
    border-radius: 67px;
    display: flex;
    align-items: center;
    padding-right: 1rem;
  }
  .counter label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-weight: 800;
    font-size: var(--t3-font-size);
  }
  .image__count__text span {
    color: black;
    display: inline-block;
    text-align: center;
    width: 40px;
    height: 40px;
    background: #ff9500;
    border-radius: 67px;
    margin-right: 1rem;
  }
}

.spec__title {
  min-width: 185px;
}
.spec__item {
  margin-bottom: 24px;
}
.spec__item .text__description {
  height: 0;
  margin-right: 1.5rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
.footer {
  margin-top: 63px;
}
</style>