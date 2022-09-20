<template>
  <div>
    <Head>
      <Title>درباره ما</Title>
    </Head>
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">درباره ما</a>
    </section>
    <div class="row justify-content-space-between align-items-center">
      <h1 class="font-2">درباره همکار</h1>
      <search-advert />
    </div>
    <section class="mt-1_5">
      <div class="about__content" v-html="data"></div>
    </section>
    <footer>
      <div class="footer__head">
        <div class="b"></div>
        <div class="footer__link">
          <div class="link">
            <icons-link class="d-mobile-none" />
            <icons-link :width="19" :height="19" class="d-mobile-block" />
          </div>
          <h3 class="color-blue font-2">مراجع مورد استفاده در وبسایت همکار</h3>
        </div>
        <div class="a"></div>
      </div>
      <div class="footer__body">
        <div class="body__item">
          <div class="icon">
            <div class="icon__wrapper">
              <icons-web />
            </div>
            <p>وبسایت ها</p>
          </div>
          <div class="row__content">
            <div>www.cars.com</div>
            <div>www.trader.ca</div>
            <div>www.mobile.de</div>
            <div>www.trader.ca</div>
          </div>
        </div>
        <div class="body__item">
          <div class="icon">
            <div class="icon__wrapper">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.99998 10L2.99998 14C2.99998 16.8003 2.99998 18.2004 3.54495 19.27C4.02432 20.2108 4.78922 20.9757 5.73003 21.455C6.79959 22 8.19972 22 11 22L13.0118 22C13.7455 22 14.1124 22 14.4577 21.9171C14.6443 21.8723 14.8259 21.8098 15 21.7305C15.1115 21.6798 15.22 21.6221 15.3248 21.5579C15.6276 21.3724 15.887 21.113 16.4059 20.5941L19.5941 17.4059L19.5941 17.4059C20.113 16.887 20.3724 16.6276 20.5579 16.3249C20.6221 16.2201 20.6798 16.1116 20.7305 16C20.8098 15.8259 20.8723 15.6443 20.9171 15.4577C21 15.1124 21 14.7455 21 14.0118L21 10C21 7.19974 21 5.79961 20.455 4.73005C19.9756 3.78924 19.2107 3.02433 18.2699 2.54497C17.2004 2 15.8002 2 13 2L11 2C8.19972 2 6.79959 2 5.73003 2.54497C4.78922 3.02433 4.02432 3.78923 3.54495 4.73005C2.99998 5.7996 2.99998 7.19974 2.99998 10ZM15.75 11C15.75 11.4142 15.4142 11.75 15 11.75L9 11.75C8.58579 11.75 8.25 11.4142 8.25 11C8.25 10.5858 8.58579 10.25 9 10.25L15 10.25C15.4142 10.25 15.75 10.5858 15.75 11ZM12 7.25L15 7.25C15.4142 7.25 15.75 7.58579 15.75 8C15.75 8.41421 15.4142 8.75 15 8.75L12 8.75C11.5858 8.75 11.25 8.41421 11.25 8C11.25 7.58579 11.5858 7.25 12 7.25ZM18.1343 15.8657L14.8657 19.1343C14.3617 19.6383 13.5 19.2814 13.5 18.5686L13.5 15.3C13.5 14.8582 13.8582 14.5 14.3 14.5L17.5686 14.5C18.2814 14.5 18.6383 15.3617 18.1343 15.8657Z"
                  fill="var(--color-black)"
                />
              </svg>
            </div>
            <p>نشریات</p>
          </div>
          <div class="row__content">
            <div>ماهنامه فلان</div>
            <div>مجله داخلی فلان</div>
            <div>مجله خارجی فلان</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
  
  <script setup lang="ts">
import { BASE_URL } from "~~/utilities/api.config";
import { FetchApi } from "~~/utilities/customFetchApi";
import { ref } from "#imports";

const d = ref();
const { data } = await useFetch(`${BASE_URL}/SiteEntities/about-us`);
</script>
  
  <style scoped>
@media screen and (max-width: 768px) {
  h1 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  .about__content {
    font-family: var(--t4-font-family) !important;
    font-size: var(--t4-font-size) !important;
    text-align: justify;
    letter-spacing: -0.02em;
    line-height: 180%;
    font-weight: 500;
  }
  .footer__head .b {
    display: none;
  }
  .footer__head .a {
    display: none;
  }
  .footer__head {
    justify-content: center;
  }
  footer h3 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  .footer__body {
    margin-top: 2rem !important;
  }
  footer .icon {
    gap: 10px !important;
  }
  footer .icon p {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t4-font-size) !important;
  }
  .row__content div {
    background: var(--color-gray-300) !important;
  }
  footer .icon .icon__wrapper {
    background: var(--color-gray-300) !important;
  }
  [data-theme="dark"] footer .icon .icon__wrapper {
    background: var(--color-dark-black-600) !important;
  }
  .row__content {
    gap: 0.5rem !important;
  }
  [data-theme="dark"] .row__content div {
    background: var(--color-dark-black-600) !important;
    padding: 10px 20px !important;
  }
  .footer__link .link {
    width: 38px !important;
    height: 38px !important;
  }
}
.about__content {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  text-align: justify;
  letter-spacing: -0.02em;
  line-height: 180%;
  font-weight: 500;
}
.footer__head {
  display: flex;
  align-items: center;
  gap: 2rem;
}
svg {
  height: fit-content;
}
.footer__link .link {
  background: #e4eef8;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
footer {
  margin-top: 72px;
}
.footer__link {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.a {
  flex-grow: 1;
  height: 2px;
  background: #acd4ff;
  opacity: 0.24;
}
.b {
  flex-grow: 1;
  height: 2px;
  background: #acd4ff;
  opacity: 0.24;
}
.footer__body {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.body__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 0.5rem;
}
.row__content {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.row__content div {
  background: var(--color-white);
  color: var(--color-black);
  border-radius: 24px;
  padding: 10px 40px;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
footer .icon {
  display: flex;
  gap: 12px;
  align-items: center;
}
footer .icon p {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  color: var(--color-black);
}
footer .icon .icon__wrapper {
  background: var(--color-white);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>