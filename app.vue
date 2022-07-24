<template>
  <div>
    <Head>
      <Link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
       rel="stylesheet"/>
    </Head>
    <ThePageLoading />
    <NuxtLayout>
      <TheLoadingBar :height="5" :duration="10000" />
      <NuxtPage />
    </NuxtLayout>
  </div>
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
