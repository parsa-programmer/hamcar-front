<template>
  <div>
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="in-out"
    >
      <div class="back__" v-if="store.showBlackBackGround"></div>
    </Transition>
    <Head>
      <Link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        rel="stylesheet"
      />
    </Head>
    <NuxtLayout>
      <!-- <TheLoadingBar :height="5" :duration="10000" /> -->
      <NuxtLoadingIndicator
        :height="5"
        :duration="10000"
        color="repeating-linear-gradient(to right,#00dc82 0%, #34cdfe 50%, #0047e1 100%)"
      />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { UseUtilStore } from "~~/stores/util.store";

const store = UseUtilStore();
useHead({
  script: [
    {
      src: "/js/themeController.js",
    },
  ],
});
</script>
<style>
.back__ {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 899;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 16, 0.5) !important;
}
</style>