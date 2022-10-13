<template>
  <div class="mt-7">
    <h-alert type="warning">
      <b>توجه</b>: افزودنِ تصویر، بازدید آگهی شما را تا 5 برابر افزایش می‌دهد.
    </h-alert>
    <div class="content mt-3">
      <h4 style="margin-bottom: 4px; font-size: 1.25rem">عکس آگهی</h4>
      <span class="text__description">حداکثر ۴عکس میتوانید انتخاب کنید و هر عکس حداکثر 10 مگابایت.
      </span>
    </div>
    <h-image-uploader style="margin-top: 1.5rem" :maxFileSizePerMeg="10" :maxFileCount="4" v-model="images"
      :multiple="true" />

    <h-button class="w-full" @click="createAdvert">ثبت آگهی</h-button>
    <small class="text__description">
      کلیک روی این دکمه به منزله تایید صحت موارد انتخاب شده، پذیرش مسئولیت آگهی
      و همچنین مطالعه <nuxt-link to="/rules">شرایط و قوانین</nuxt-link> «همکار»
      خواهد بود.
    </small>
    <Teleport to="body">
      <loadings-full-loading v-if="loading" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { SetAddress } from "~~/services/account.service";
import { advertStore } from "~~/stores/advert.store";
import { authStore } from "~~/stores/auth.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const route = useRoute();
const isCar: boolean = route.path == "/sell/car";
const store = advertStore();
const auth = authStore();

const images = ref([]);
const loading = ref(false);

const createAdvert = async () => {
  store.steps.five.images = images.value;
  if (!auth.user?.address) {
    loading.value = true;
    await SetAddress({
      city: store.steps.four.City,
      province: store.steps.four.Province,
      postalAddress: store.steps.four.PostalAddress
    });
  }
  await ProssesAsync(() => store.createAdvert(isCar), loading);
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .w-full {
    margin-top: 40px !important;
    margin-bottom: 1rem !important;
  }
}

.w-full {
  margin-top: 6.5rem;
  margin-bottom: 2rem;
}

small.text__description {
  font-size: var(--t5-font-size);
  line-height: 170%;
  font-weight: 500;
  font-family: var(--t5-font-family);
}
</style>