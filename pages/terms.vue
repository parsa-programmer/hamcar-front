<template>
  <div>
    <Head>
      <Title>شرایط و قوانین</Title>
    </Head>
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">شرایط و قوانین</a>
    </section>
    <div class="row justify-content-space-between align-items-center">
      <h1 class="font-2">شرایط و قوانین</h1>
      <search-advert />
    </div>
    <section class="">
      <div class="alert">
        <div class="icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FF9500" />
            <path
              d="M20 28L20 19"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 13L20 12"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p>
          کاربر گرامی؛ برای عضویت در این وب‌‌سایت، مطالعه و اطلاع از قوانین آن
          ضروری است. عضويت، شروع به استفاده و گشت‌وگذار در این وب‌‌سایت، به
          منزله مطالعه قوانین و اطلاع از مفاد آن و پذیرش کلیه آنها بدون
          استثناست. قوانین و ضوابط مشروحه مندرج در این صفحه بنا به تغییر شرایط،
          درصورت لزوم، اصلاح، گسترش یا تعدیل خواهد شد. کلیه کاربران شخصاً موظف
          هستند به‌صورت دوره‌ای از این صفحه بازدید و از آخرین وضعیت قوانین،
          اطلاع حاصل کنند.
        </p>
      </div>
      <div class="terms__content" v-html="data"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BASE_URL } from "~~/utilities/api.config";
import { FetchApi } from "~~/utilities/customFetchApi";
import { ref } from "#imports";

const d = ref();
const { data } = await useFetch(`${BASE_URL}/SiteEntities/rules`);
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .alert p {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
    line-height: 22px !important;
  }
  h1 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  .alert {
    margin-bottom: 1.5rem !important;
  }
}
.content {
  margin-bottom: 128px;
}
.alert {
  background: #f7edde;
  border-radius: 4px;
  position: relative;
  padding: 1.5rem;
  padding-top: 2rem;
  margin: 44px 0;
}
.alert p {
  font-weight: 800;
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
  letter-spacing: -0.03em;
  color: black;
}
.alert .icon {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  border: 3px solid var(--body-bg-color);
  border-radius: 50%;
  background: var(--color-orange);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
}
ul li {
  list-style: circle !important;
}
</style>