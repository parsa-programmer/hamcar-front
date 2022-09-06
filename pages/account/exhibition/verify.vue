<template>
  <div>
    <loadings-full-loading v-if="exhibitionStore.loading" />
    <p class="title d-mobile-none font-2 color_gray_600">احراز هویت</p>
    <account-exhibition-verify-desktop class="d-mobile-none" />
    <account-exhibition-verify-mobile class="d-mobile-block" />
  </div>
</template>

<script setup lang="ts">
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { useAccountStore } from "~~/stores/account.store";
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const exhibitionStore = useExhibitionRegister();
const account = useAccountStore();
const router = useRouter();

useHead({
  title: "احراز هویت",
});
definePageMeta({
  layout: "verify-layout",
});

onMounted(async () => {
  if (
    !account.exhibition ||
    (account.exhibition.status == ExhibitionStatus.shouldCompleteAccount ||
      account.exhibition.status == ExhibitionStatus.rejected) == false
  ) {
    await router.push("/account");
    return;
  }
});
</script>

<style scoped>
.title {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
