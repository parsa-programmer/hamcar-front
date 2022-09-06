<template>
  <div class="login__wrapper">
    <Head>
      <Title>ورود / ثبت نام</Title>
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
  middleware: ["auth"],
  layout:"login-layout"
});
const nextStep = (step: number) => {
  loginStep.value = step;
};
</script>
<style >
.login__wrapper {
  display: flex;
  gap: 1rem;
}

.login {
  border-radius: var(--app-border-radius);
  background-color: var(--color-white);
  padding: 4rem 3rem;
  width: 31.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}

.login__title {
  font-size: var(--t1-font-size);
  font-family: var(--t1-font-family);
  color: var(--color-blue);
  margin-bottom: 3rem;
  text-align: center;
}

.login__caption {
  text-align: justify;
  margin-bottom: 3rem;
}

.login__label {
  display: none;
}

.login__submit {
  margin-top: 2rem;
  width: 12rem;
  margin-right: auto;
}

.login__term {
  display: flex;
  align-items: end;
  height: 100%;
}

.login__term p {
  color: var(--color-black-200);
}

.login__term svg {
  margin-left: 1rem;
  margin-bottom: 2px;
}

.login__term a {
  color: var(--color-blue);
  text-decoration: underline;
  font-size: var(--t4-font-size);
  font-family: var(--t4-font-family);
}

.login-picture {
  width: 100%;
  max-height: 688px;
  border-radius: var(--app-border-radius);
  overflow: hidden;
  overflow: visible !important;
}

.login-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-picture__img--mobile {
  display: none;
}

@media screen and (max-width: 1200px) {
  .login__wrapper {
    justify-content: center;
    padding-bottom: 1rem;
  }

  .login {
    padding: 3rem;
    height: 620px;
  }

  .login-picture {
    display: none;
  }

  .login__submit {
    margin-top: 1rem;
    width: 100%;
  }
}

@media screen and (max-width: 992px) {
  .login__term {
  }
}

@media screen and (max-width: 768px) {
  body {
    background-color: var(--color-white);
  }

  .login {
    width: 100%;
    padding: 0;
    height: auto;
  }

  .login-picture {
    display: block;
    max-width: 20rem;
    margin: auto;
  }

  .login-picture__img {
    display: none;
  }

  .login-picture__img--mobile {
    display: block;
  }

  .login__wrapper {
    flex-direction: column-reverse;
    gap: 4rem;
  }

  .login__title {
    margin-bottom: 1.5rem;
  }

  .login__term {
    margin-top: 2rem;
    align-items: center;
  }

  .login__term p {
    font-family: var(--t6-font-family);
    font-size: var(--t6-font-size);
  }

  .login__term a {
    font-size: var(--t5-font-size);
    font-family: var(--t5-font-family);
  }

  .login__term svg {
    margin-left: 0.5rem;
  }

  .login__label {
    display: block;
    margin-bottom: 13px;
    font-family: var(--t4-font-family);
    font-size: var(--t4-font-size);
  }

  .login__caption {
    display: none;
  }
}

@media screen and (max-height: 930px) {
  .login__wrapper {
    height: 40rem;
  }
}
</style>