<template>
  <div class="not__found__layout">
    <Head>
      <Style>
        .nav__item ul{ background: #0F0F10 !important; } .nav__register a{
        color: white !important; } .not__found__layout .nav__wrapper a { color:
        white; } main{ overflow: visible !important; }
      </Style>
    </Head>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <main class="main">
      <div class="container text-center white">
        <slot></slot>
      </div>
    </main>
    <div class="not__found__container" v-if="error?.statusCode == 404">
      <div class="not__found__container__img"></div>
      <h1 class="mb-3">متاسفانه خطای ۴۰۴ رخ داد !</h1>
      <p class="text-center">
        کاربر گرامی متاسفانه این صفحه در وبسایت همکار وجود ندارد؛ شما می توانید
        از طریق صفحه اصلی، منوی وبسایت یا پنل کاربری، صفحه مد نظر خود را بیابید.
      </p>
      <h-button class="m-auto w-full" @click="$router.push('/')"
        >بازگشت به صفحه اصلی</h-button
      >
    </div>
    <div class="relative font-sans" n="green6" v-else>
      <div class="container max-w-200 mx-auto py-10 px-4">
        <h1>{{ error?.message }}</h1>
        There was an error 😱

        <br />
        <NuxtLink to="/404"> Trigger another error </NuxtLink>
        <br />
        <NuxtLink to="/"> Navigate home </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  error: Object,
});
useHead({
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
});
</script>

<style scoped>
@media screen and (max-width: 770px) {
  .w-full {
    width: 100% !important;
  }
  p {
    text-align: justify !important;
  }
  .not__found__container__img {
    height: 300px;
    top: -34% !important;
  }
}
h1 {
  color: #fff !important;
  text-align: center;
}
.not__found__container {
  position: relative;
  color: #fff !important;
}
.not__found__container p {
  line-height: 180%;
}
.not__found__container button {
  margin-top: 48px;
  width: 480px;
  gap: 10px;
}
.not__found__container__img {
  background-image: url("/img/Settings-black.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  position: absolute;
  opacity: 0.4;
  height: 100px;
  width: 100%;
  z-index: -1;
  height: 500px;
  top: -50%;
}
.not__found__layout .nav__icon {
  color: white;
}
.not__found__layout main {
  position: relative;
  top: 22%;
}
.not__found__layout {
  background: #0f0f10;
  opacity: 0.9;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.not__found__layout header {
  background: transparent;
}
</style>