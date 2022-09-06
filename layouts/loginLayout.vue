<template>
  <div>
    <div class="d-mobile-none">
      <the-header :show-search-bar="false" :showSearchIcon="false"></the-header>
    </div>
    <div class="mobile-wrapper justify-content-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="$router.back()"
      >
        <path
          d="M1 1L9 9M17 17L9 9M9 9L17 1M9 9L1 17"
          stroke="var(--color-gray-600)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <img src="/img/English_HamCar_Logo.png" />
    </div>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .mobile-wrapper {
    display: flex !important;
  }
}
.mobile-wrapper svg {
  position: absolute;
  right: 1.5rem;
}
.container{
  padding-top: 1rem;
}
.mobile-wrapper img {
  width: 184px;
  height: 48px;
}
.mobile-wrapper {
  display: none;
  position: relative;
  padding: 3rem 26px;
  padding-bottom: 2.5rem;
}
</style>