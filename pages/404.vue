<template>
  <div class="not__found__container">
    <Head>
      <Style> main{ overflow: visible !important; } </Style>
    </Head>
    <div class="not__found__container__img"></div>
    <h1 class="mb-3">متاسفانه خطای ۴۰۴ رخ داد !</h1>
    <p class="text-center">
      کاربر گرامی متاسفانه این صفحه در وبسایت همکار وجود ندارد؛ شما می توانید از
      طریق صفحه اصلی، منوی وبسایت یا پنل کاربری، صفحه مد نظر خود را بیابید.
    </p>
    <h-button class="m-auto w-full" @click="$router.push('/')"
      >بازگشت به صفحه اصلی</h-button
    >
  </div>
</template>

<script>
definePageMeta({
  layout: "not-found",
});
</script>
<style >
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

.not__found__container {
  position: relative;
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
</style>