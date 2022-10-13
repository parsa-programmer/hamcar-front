<template>
  <div>

    <Head>
      <link href="" rel="stylesheet" />
      <Title>ثبت آگهی فروش خودرو شما</Title>
      <Link href="/css/advertisement-registration.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">ثبت آگهی خودرو</a>
    </section>
    <section class="registration" v-if="pending == false">
      <div class="registration__head">
        <h1 class="registration__title">ثبت آگهی فروش خودرو شما</h1>
        <search-advert />
      </div>
      <div class="registration__content">
        <register-advert-steps />
        <div class="registration__container">
          <register-advert-step-one />
          <Transition name="custom-classes2" enter-active-class="animate__animated animate__fadeInUp "
            leave-active-class="animate__animated animate__bounceOutRight">
            <register-advert-step-two v-if="store.currentStep >= 2" />
          </Transition>

          <Transition name="custom-classes2" enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight">
            <register-advert-step-three v-if="store.currentStep >= 3" />
          </Transition>
          <Transition name="custom-classes2" enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight">
            <register-advert-step-four v-if="store.currentStep >= 4" />
          </Transition>
          <Transition name="custom-classes2" enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight">
            <register-advert-step-five v-if="store.currentStep >= 5" />
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { advertStore } from "~~/stores/advert.store";
import {
  GetDraftAdvert,
  CreateAdvertisement,
} from "~~/services/advertisement.service";
import { useAccountStore } from "~~/stores/account.store";

const { data, pending } = await useAsyncData(
  "ad_draft",
  () => GetDraftAdvert(),
  {
    server: true,
    initialCache: false,
  }
);
if (data?.value?.data) {
  await navigateTo("/sell/selectPlan", { redirectCode: 301 });
}
const store = advertStore();
const accountStore = useAccountStore();

const router = useRouter();

onMounted(async () => {
  store.changeStep(1);
  if (accountStore.exhibition?.id || accountStore.consultant?.id) {
    await router.push({
      path: router.currentRoute.value.path,
      query: {
        ...router.currentRoute.value.query,
        exhibition: "true"
      }
    })
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .mt-7 {
    margin-top: 5rem !important;
  }
}
</style>