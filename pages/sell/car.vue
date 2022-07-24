<template>
  <div>
    <Head>
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
        <advert-steps />
        <div class="registration__container">
          <advert-step-one />
          <Transition
            name="custom-classes2"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight"
          >
            <advert-step-two v-if="store.currentStep >= 2" />
          </Transition>

          <Transition
            name="custom-classes2"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight"
          >
            <advert-step-three v-if="store.currentStep >= 3" />
          </Transition>
           <Transition
            name="custom-classes2"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__bounceOutRight"
          >
            <advert-step-four />
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { advertStore } from "~~/stores/advert.store";

const store = advertStore();
</script>

<style>
</style>