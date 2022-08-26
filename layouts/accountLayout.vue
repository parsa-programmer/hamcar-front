<template>
  <div>
    <Head>
      <Title>پنل کاربری</Title>
    </Head>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <div class="container">
        <slot name="breadcrumb"></slot>
        <section class="dashboard">
          <account-the-side-bar />
          <account-the-mobile-side-bar />
          <div class="page__wraper">
            <slot></slot>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ToastType } from "~~/composables/useToast";
import { useAccountStore } from "~~/stores/account.store";

const route = useRoute();
const toast = useToast();
const router = useRouter();


const accountStore = useAccountStore();

onMounted( async() => {
  await accountStore.initData();

  var { transaction } = route.query;
  if (transaction && transaction.toString() == "success") {
    toast.showToast("تراکنش با موفقیت انجام شد", ToastType.success);
    router.push({
      path: route.path,
    });
  }
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
@media screen and (max-width: 768px) {
  .page__wraper {
    overflow: unset !important;
    padding-bottom: 4rem;
  }
}
</style>