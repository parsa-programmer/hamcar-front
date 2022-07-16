<template>
  <div class="login__wrapper">
    <Head>
      <Title>ورود / ثبت نام</Title>
      <Link href="/css/login.css" rel="stylesheet" />
    </Head>
    <Transition name="bounce" mode="out-in">
      <auth-login-form
        v-if="loginStep == 1"
        @toggleLoginStep="nextStep"
      ></auth-login-form>
      <auth-validate-form
        v-else
        @toggleLoginStep="nextStep"
      ></auth-validate-form>
    </Transition>

    <div class="login-picture">
      <img
        class="login-picture__img"
        src="/img/login-picture.png"
        alt="Hamcar.ir"
      />
      <img
        class="login-picture__img login-picture__img--mobile"
        src="/img/login-mobile-picture.png"
        alt="Hamcar.ir"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { authStore } from "~~/stores/auth.store";
const store = authStore();
const phoneNumber = store.phoneNumber;
const loginStep = ref(1);
definePageMeta({
  middleware: ["auth-middleware"],
  // or middleware: 'auth'
});
const nextStep = (step: number) => {
  loginStep.value = step;
};
</script>
<style scoped>
</style>