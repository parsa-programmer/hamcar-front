<template>
  <div>
    <client-only>
      <div v-if="loading">
        <h-skeletor class="breadcrumb" width="100%" height="20" />
        <div class="ads">
          <div class="ads__right">
            <h-skeletor class="grow-1" width="100%" height="350" />
          </div>
          <div class="ads__left">
            <h-skeletor class="grow-1" width="100%" height="250" />
          </div>
        </div>
      </div>
      <div v-else-if="advert">
        <div class="row wrap actions">
          <h-button class="grow-1" @click="openNardebanModal" outline
            >نردبان</h-button
          >
          <h-button
            class="grow-1"
            :to="`/account/adverts/upgradePlan?id=${advert.id}`"
            outline
            v-if="advert.plan.planId != '4'"
            >ارتقاع آگهی</h-button
          >
          <h-button class="grow-1" outline>ویرایش</h-button>
          <h-button
            class="grow-1"
            @click="openDeletePopup"
            outline
            color="error"
            v-if="advert.status != 'inActive'"
            >حذف</h-button
          >
        </div>
        <single-advert-gallery
          :advert="advert"
          v-model="isOpenGallery"
          :isAdvertSaved="true"
        />
        <Head>
          <Title
            >همکار - {{ advert.brand.title }} {{ advert.model.title }}
            {{ advert.trim?.title }} {{ advert.year.yearTitle }}</Title
          >
          <Link href="/css/pdp-personal.css" rel="stylesheet" />
        </Head>
        <section class="breadcrumb">
          <nuxt-link to="/" class="breadcrumb__item">
            <icons-home />
            همکار
          </nuxt-link>

          <icons-chevron-left />
          <nuxt-link :to="`/account`" class="breadcrumb__item"
            >پنل کاربری</nuxt-link
          >

          <icons-chevron-left />
          <nuxt-link :to="`/account/adverts`" class="breadcrumb__item"
            >آگهی ها</nuxt-link
          >

          <icons-chevron-left />
          <a class="breadcrumb__item breadcrumb__item--active">مشاهده آگهی</a>
        </section>

        <section class="ads">
          <div class="ads-mobile">
            <div class="ads-mobile__slider" @click="openGallery">
              <span class="image__counter font-6">
                <icons-camera class="ml-0_5" />
                {{ advert.images.length }} عکس
              </span>
              <h-image
                :src="GetAdvertImage(advert.id, advert.images[0].imageName)"
                :alt="`${advert.brand.title} ${advert.model.title} ${advert.year.yearTitle}`"
              />
            </div>
            <div class="ads-mobile__info">
              <div class="ads-mobile__wrapper">
                <h2 class="ads__name" v-text="advertTitle"></h2>
                <span class="ads__date">
                  {{ TimeAgo(advert.creationDate) }}
                </span>
              </div>
            </div>
          </div>
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

            <single-advert-detail :advert="advert" preview>
              <div class="ads__detail" v-if="advert.status == 'published'">
                <span class="ads__detail-name">
                  <icons-calendar />
                  مهلت انقضاء آگهی
                </span>
                <span class="ads__detail-value">
                  <template v-if="advert.plan.expireDate">
                    {{ RemainingTime(new Date(advert.plan.expireDate)) }} روز
                  </template>
                  <template v-else> نا محدود </template>
                </span>
              </div>
            </single-advert-detail>
            <div class="ads-caption">
              <div class="ads-caption__header">
                <icons-message hash-color="var(--color-black)" />
                توضیحات
              </div>
              <p class="ads-caption__text" v-text="advert.description"></p>
            </div>
          </div>
          <div class="ads__left">
            <search-advert class="ads__search-box" />

            <div class="ads-slider">
              <div class="ads-slider__picture">
                <h-image
                  @click="openGallery"
                  :src="
                    GetAdvertImage(
                      advert.id,
                      advert.images.filter((f) => f.isMainImage)[0].imageName
                    )
                  "
                  :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`"
                />
              </div>

              <h-slider
                class="ads-slider__list"
                :items="advert.images"
                :dots="true"
                :arrows="false"
              >
                <template #item="{ item, index }">
                  <div
                    @click="openGallery"
                    :class="[
                      'ads-slider__item',
                      { 'ads-slider__item--active': index == 0 },
                    ]"
                  >
                    <h-image
                      :src="GetAdvertImage(advert.id, item.imageName)"
                      :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`"
                    />
                  </div>
                </template>
              </h-slider>
            </div>

            <div class="ads__mobile-connection">
              <button
                @click="togglePhoneModal"
                class="btn btn-primary ads__contact-btn"
              >
                اطلاعات تماس
              </button>
              <a href="#" class="btn btn-primary-outline ads__chat-btn">چت</a>
            </div>
          </div>
        </section>

        <h-modal v-model="isOpenPhoneModal">
          <div class="phone__list">
            <div class="row">
              <div class="phone__title">
                <icons-phone :width="20" :height="20" />
                <span class="text-muted font-6">شماره تماس 1</span>
              </div>
              <div class="copy__phone">
                {{ advert.userDto.phoneNumber }}
                <h-copy
                  hash-color="#C4C4C4"
                  :text="advert.userDto.phoneNumber"
                />
              </div>
            </div>
            <div class="row" v-if="advert.exhibition != null">
              <div class="phone__title">
                <icons-phone :width="20" :height="20" />
                <span class="text-muted font-6">شماره تماس 2</span>
              </div>
              <div class="copy__phone">
                {{ advert.exhibition.phoneNumbers.mobilePhone }}
                <h-copy
                  hash-color="#C4C4C4"
                  :text="advert.exhibition.phoneNumbers.mobilePhone"
                />
              </div>
            </div>

            <div
              class="row"
              v-if="
                advert.exhibition != null &&
                advert.exhibition.phoneNumbers.telephone
              "
            >
              <div class="phone__title">
                <icons-phone :width="20" :height="20" />
                <span class="text-muted font-6">شماره تماس 3</span>
              </div>
              <div class="copy__phone">
                {{ advert.exhibition.phoneNumbers.telephone }}
                <h-copy
                  hash-color="#C4C4C4"
                  :text="advert.exhibition.phoneNumbers.telephone"
                />
              </div>
            </div>
          </div>
        </h-modal>
      </div>
      <h-modal :show-header="false" v-model="isOpenDeleteModal">
        <account-advert-move-to-tash
          v-model="advert"
          :is-exhibition="false"
          @cancel-operation="() => (isOpenDeleteModal = false)"
          @deleted="deleteAdvert"
        />
      </h-modal>
      <h-modal v-model="isOpenNardebanModal" :show-header="false">
        <account-advert-use-nardeban-content
          showTitle
          :description="null"
          v-model="advert"
          @closed="() => (isOpenNardebanModal = false)"
          :exhibition="false"
        />
      </h-modal>
    </client-only>
  </div>
</template>
  
<script setup lang="ts">
import { Ref } from "vue";
import { ref } from "#imports";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import {
  GetById,
  GetByShortLink,
  MoveToTrash,
} from "~~/services/advertisement.service";
import { GetAdvertImage } from "~~/utilities/imageUtil";
import { RemainingTime, TimeAgo } from "~~/utilities/dateUtil";
import { authStore as useAuthStore } from "~~/stores/auth.store";
import { AlertType } from "~~/models/utilities/AlertType";
import { IApiResponse } from "~~/models/IApiResponse";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const advert: Ref<AdvertisementDto | null> = ref(null);

const isOpenPhoneModal = ref(false);
const isOpenGallery = ref(false);
const isOpenNardebanModal = ref(false);
const isOpenDeleteModal = ref(false);
const loading = ref(true);

const advertTitle = ref("");

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const toast = useToast();

const advertId = route.params.id;

const openNardebanModal = (advert: any) => {
  isOpenNardebanModal.value = true;
};
const openDeletePopup = (advert: any) => {
  isOpenDeleteModal.value = true;
};

const togglePhoneModal = () => {
  isOpenPhoneModal.value = !isOpenPhoneModal.value;
};

const openGallery = () => {
  isOpenGallery.value = true;
};
const deleteAdvert = () => {
  isOpenDeleteModal.value=false;
  router.push("/account/adverts");
};
onMounted(async () => {
  var res = await ProssesAsync<IApiResponse<AdvertisementDto>>(
    () => GetById(advertId.toString()),
    loading
  );
  if (!res.data) {
    await router.push("/account/adverts");
  }
  advert.value = res.data ?? null;
  advertTitle.value = `${advert.value?.brand.title} ${advert.value?.model.title}  ${advert.value?.year.yearTitle}`;
});
</script>
  <style scoped>
@media screen and (max-width: 768px) {
  .actions {
    display: flex !important;
  }
}
.actions button {
  width: 88px !important;
  height: 48px !important;
  padding: 0 !important;
}
.actions {
  display: none;
  margin-bottom: 1.5rem;
}
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
  