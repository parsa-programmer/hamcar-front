<template>
  <div>
    <Head>
      <Title>{{ $route.meta.title ?? "پنل کاربری" }}</Title>
    </Head>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
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

onMounted(async () => {
  var { transaction } = route.query;
  if (transaction && transaction.toString() == "success") {
    toast.showToast("تراکنش با موفقیت انجام شد", ToastType.success);
    router.push({
      path: route.path,
    });
  }
  if (accountStore.exhibition == null) {
    await router.push("/account");
  }
  await chatStore.initConnection();
});
</script>
  
  <style scoped>
.page__wraper {
  width: 100%;
  overflow: hidden;
}
.dashboard {
  display: flex;
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
}
</style>