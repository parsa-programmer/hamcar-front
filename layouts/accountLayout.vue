<template>
  <div>
    <Head>
      <Title>{{ $route.meta.title ?? "پنل کاربری" }}</Title>
    </Head>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <Transition
        enter-active-class="animate__animated  animate__fadeIn"
        leave-active-class="animate__animated  animate__fadeOut"
      >
        <div class="alert__notify" v-if="isShow" @click="isShow = false">
          <p>برای دسترسی به پنل نمایشگاهی باید احراز هویت خود را تکمیل کنید!</p>
          <nuxt-link to="/account/exhibition/verify"
            >تکمیل احراز هویت</nuxt-link
          >
        </div>
      </Transition>
      <div class="container">
        <section class="breadcrumb">
          <nuxt-link to="/" class="breadcrumb__item">
            <icons-home></icons-home>
            همکار
          </nuxt-link>
          <template v-if="!$route.meta.title">
            <icons-left-arrow></icons-left-arrow>
            <a class="breadcrumb__item breadcrumb__item--active">پنل کاربری</a>
          </template>
          <template v-else>
            <icons-left-arrow></icons-left-arrow>
            <nuxt-link to="/account" class="breadcrumb__item"
              >پنل کاربری</nuxt-link
            >

            <icons-left-arrow></icons-left-arrow>
            <a class="breadcrumb__item breadcrumb__item--active">{{
              $route.meta.title
            }}</a>
          </template>
        </section>
        <section class="dashboard">
          <account-the-side-bar />
          <account-the-mobile-side-bar />
          <div class="page__wraper">
            <slot />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { ToastType } from "~~/composables/useToast";
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { useAccountStore } from "~~/stores/account.store";
import { authStore } from "~~/stores/auth.store";
import { UseChatStore } from "~~/stores/chat.store";

const route = useRoute();
const toast = useToast();
const router = useRouter();

const chatStore = UseChatStore();
const accountStore = useAccountStore();
const authData = authStore();
const isShow = ref(false);

watch(
  () => authData.user,
  (val) => {
    console.log(val);
    if (authData.isAccessExhibitonPanel) {
      router.replace("/account/exhibition");
    }
  }
);
onMounted(async () => {
  var { transaction } = route.query;
  if (transaction && transaction.toString() == "success") {
    toast.showToast("تراکنش با موفقیت انجام شد", ToastType.success);
    router.push({
      path: route.path,
    });
  }
  if (authData.isAccessExhibitonPanel) {
    await router.replace("/account/exhibition");
    return;
  }
  await chatStore.initConnection();
  isShow.value =
    accountStore.exhibition &&
    (accountStore.exhibition.status == ExhibitionStatus.shouldCompleteAccount ||
      accountStore.exhibition.status == ExhibitionStatus.rejected);

  setTimeout(() => {
    isShow.value = false;
  }, 5000);
});
</script>

<style scoped>
.page__wraper {
  width: 100%;
  overflow: hidden;
}
.dashboard {
  display: flex;
  /*align-items: start;*/
  gap: 1rem;
}
@media screen and (max-width: 400px) {
  .alert__notify a {
    width: 70% !important;
  }
}
@media screen and (max-width: 768px) {
  .page__wraper {
    overflow: unset !important;
    padding-bottom: 4rem;
  }
  .main {
    padding-top: 0.5rem !important;
  }
  .alert__notify {
    padding: 1rem 1.5rem !important;
    font-family: var(--t6-font-family);
    font-size: var(--t6-font-size);
    top: 85px !important;
    width: 90% !important;
  }
  .alert__notify p {
    flex-grow: 2;
    width: 100%;
    text-align: right;
  }
  .alert__notify a {
    flex-grow: 1;
    width: 50%;
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
    align-items: flex-end;
    text-align: left;
  }
}
.alert__notify {
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 30px 2rem;
  border-radius: 14px;
  background: var(--color-white);
  border-top: 4px solid #ff9500;
  z-index: 30;
  width: 816px;
  max-width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  top: 129px;
  box-shadow: 0px 17px 32px rgba(0, 0, 0, 0.12);
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
}
.alert__notify a {
  color: var(--color-blue);
}
</style>