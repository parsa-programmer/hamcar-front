<template>
  <NuxtLayout>
    <TheLoadingBar :height="5" :duration="10000" />
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  script: [
    {
      src: "/js/themeController.js",
    },
  ],
});
</script>
