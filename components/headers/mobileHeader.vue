<template>
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
          <a href="#" class="nav__link">خودرو</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">موتور سیکلت</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">قیمت ها</a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">همکار من</a>
        </li>
      </ul>
    </div>
    <div class="nav__register disable-element">
      <nuxt-link
        to="/auth/login"
        class="btn btn-transparent nav__register-link nav__register-link--login"
        v-if="isLogin == false"
      >
        ورود / ثبت نام
      </nuxt-link>
      <nuxt-link
        to="/auth/login"
        class="btn btn-transparent nav__register-link nav__register-link--login"
        v-else
      >
        حساب کاربری
      </nuxt-link>
      <a
        href="#"
        class="btn btn-primary nav__register-link nav__register-link--new"
        >ثبت آگهی رایگان</a
      >
    </div>
    <div class="nav__icons-wrapper">
      <div class="nav__icon nav__icon--bars-icon">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
          <path
            d="M1.42969 1.42847H18.574M1.42969 7.14323H18.574M1.42969 12.858H18.574"
            stroke="#0F0F10"
            stroke-width="1.50012"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div class="nav__icon nav__icon--search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M0.75 9.56516C0.75 12.7583 1.48072 14.9159 2.85325 16.2857C4.22608 17.6557 6.3841 18.3804 9.56522 18.3804C12.7462 18.3804 14.9043 17.6554 16.2772 16.2852C17.6497 14.9152 18.3804 12.7576 18.3804 9.56516C18.3804 6.37275 17.6497 4.2151 16.2772 2.84516C14.9043 1.47494 12.7462 0.749939 9.56522 0.749939C6.3841 0.749939 4.22608 1.47463 2.85325 2.84466C1.48072 4.21439 0.75 6.372 0.75 9.56516Z"
            stroke="#0F0F10"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19.1326 19.1301L16.8203 16.8179"
            stroke="#0F0F10"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>