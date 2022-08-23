<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__wrapper">
          <div class="nav__logo">
            <nuxt-link to="/">
              <img
                src="/img/Persian-HamCar-Logo.png"
                alt="همکار"
                class="nav__img nav__img--fa"
              />
            </nuxt-link>
            <nuxt-link to="/">
              <img
                src="/img/English-HamCar-Logo.png"
                alt="همکار"
                class="nav__img nav__img--en"
              />
            </nuxt-link>
          </div>
          <ul class="nav__menu">
            <li class="nav__item">
              <a href="#" class="nav__link title">خودرو</a>
              <ul>
                <li>
                  <nuxt-link to="/sell/car">ثبت آگهی خودرو</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/car">خرید خودرو</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/car-reviews">مشخصات فنی خودرو</nuxt-link>
                </li>
              
                <li>
                  <nuxt-link to="/">گوش به زنگ خودرو</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">نمایشگاه های خودرو</nuxt-link>
                </li>
                <li>
                  <ChangeTheme></ChangeTheme>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" class="nav__link">موتور سیکلت</a>
            </li>
            <li class="nav__item">
              <nuxt-link to="/price" class="nav__link">قیمت ها</nuxt-link>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">همکار من</a>
            </li>
          </ul>
        </div>
        <div :class="['nav__register', { 'disable-element': showSearchIcon }]">
          <client-only>
            <div class="row align-items-center" v-if="store.loading">
              <h-skeletor style="height: 15px" type="box" width="120px" />
              <h-skeletor style="height: 72px" type="box" width="180px" />
            </div>
            <template v-else>
              <nuxt-link
                to="/auth/login"
                class="
                  btn btn-transparent
                  nav__register-link nav__register-link--login
                "
                v-if="isLogin == false"
              >
                ورود / ثبت نام
              </nuxt-link>
              <nuxt-link
                to="/auth/login"
                class="
                  btn btn-transparent
                  nav__register-link nav__register-link--login
                "
                v-else
              >
                حساب کاربری
              </nuxt-link>
              <nuxt-link
                href="/sell/car"
                class="
                  btn btn-primary
                  nav__register-link nav__register-link--new
                "
              >
                ثبت آگهی رایگان
              </nuxt-link>
            </template>
          </client-only>
        </div>
        <div class="nav__icons-wrapper" v-if="showSearchIcon">
          <div class="nav__icon nav__icon--bars-icon">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
              <path
                d="M1.42969 1.42847H18.574M1.42969 7.14323H18.574M1.42969 12.858H18.574"
                stroke="var(--color-black)"
                stroke-width="1.50012"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="nav__icon nav__icon--search-icon">
            <h-icon hash-color="var(--color-black)" :icon="Icon.search"></h-icon>
          </div>
        </div>
        <div class="nav__icon nav__icon--bars-icon" v-else>
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
            <path
              d="M1.42969 1.42847H18.574M1.42969 7.14323H18.574M1.42969 12.858H18.574"
              stroke="#0F0F10"
              stroke-width="1.50012"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>

      <div class="header__bottom" v-if="showSearchBar">
        <div class="input-group">
          <input
            type="text"
            class="form-control light-border header__input"
            placeholder="جستجو میان همه آگهی ها..."
          />
          <svg
            class="input-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M0.75 9.56522C0.75 12.7584 1.48072 14.916 2.85325 16.2857C4.22608 17.6557 6.3841 18.3804 9.56522 18.3804C12.7462 18.3804 14.9043 17.6554 16.2772 16.2852C17.6497 14.9153 18.3804 12.7576 18.3804 9.56522C18.3804 6.37281 17.6497 4.21516 16.2772 2.84522C14.9043 1.475 12.7462 0.75 9.56522 0.75C6.3841 0.75 4.22608 1.47469 2.85325 2.84472C1.48072 4.21445 0.75 6.37206 0.75 9.56522Z"
              stroke="#C6C7CC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.1326 19.1304L16.8203 16.8182"
              stroke="#C6C7CC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="header__link">
          <a href="#">ثبت آگهی رایگان</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Icon } from "~~/models/utilities/Icon";
import { authStore } from "~~/stores/auth.store";
const store = authStore();

const isLogin = ref(false);
const loading = ref(true);
onMounted(() => {
  isLogin.value = store.isLogin;
});
watch(
  () => store.isLogin,
  (val) => {
    isLogin.value = val;
  }
);
watch(
  () => store.loading,
  (val) => {
    loading.value = val;
  }
);

const props = defineProps({
  showSearchBar: {
    type: Boolean,
    default: true,
  },
  showSearchIcon: {
    type: Boolean,
    default: false,
  },
});
</script>
