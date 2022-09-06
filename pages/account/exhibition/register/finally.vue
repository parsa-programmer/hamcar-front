<template>
  <div class="row wrapper justify-content-center align-items-center">
    <Head>
      <Title>ثبت نام با موفیت انجام شد</Title>
      <Meta name="robots" content="noindex, nofollow" />
    </Head>
    <img src="/img/Emoji.png" alt="emoji" />
    <div class="text-center">
      <h4>
        ﻣﺪارک و ﻣﺸﺨﺼﺎت ﺷﻤﺎ ﺑﻪ درﺳﺘﯽ ارﺳﺎل ﺷﺪ و درﺣﺎل اﺣﺮاز ﻣﺪارک ﺷﻤﺎ ﻫﺴﺘﻴﻢ!
      </h4>
      <p class="font-3">
        کارشناسان همکار در کمتر از ۲۴ساعت آینده برای ارتقا پنل نمایشگاهی با شما
        تماس خواهند گرفت.
      </p>
    </div>
    <h-button @click="$router.push('/')" class="">بازگشت به صفحه اصلی</h-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login-layout",
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  button {
    width: 100% !important;
  }
  p {
    font-family: var(--t4-font-family);
    font-size: var(--t4-font-size);
    margin-top: 48px;
  }
  h4 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  img {
    width: 200px;
    height: 200px;
  }
  .wrapper {
    margin-top: 5rem;
  }
}
.row {
  flex-direction: column;
  gap: 48px;
}
p {
  color: var(--color-black-300) !important;
}
h4 {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
button {
  width: 400px;
}
</style>