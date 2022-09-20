<template>
  <div class="container">
    <div class="year-data">
      <nuxt-link
        to="/car?startYear=1365&endYear=1370"
        class="year__item animate__animated animate__fadeInUp animate__fast"
      >
        <img src="/img/p1.png" alt="p1" />
        <p>سال 1365 - سال 1370</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1370&endYear=1375"
        class="
          year__item
          animate__animated animate__fadeInUp animate__delay-_5s
        "
      >
        <img src="/img/p2.png" alt="p2" />
        <p>سال 1370 - سال 1375</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1375&endYear=1380"
        class="year__item animate__animated animate__fadeInUp animate__delay-1s"
      >
        <img src="/img/p3.png" alt="p3" />
        <p>سال 1375 - سال 1380</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1380&endYear=1385"
        class="
          year__item
          animate__animated animate__fadeInUp animate__delay-1_5s
        "
      >
        <img src="/img/p4.png" alt="p4" />
        <p>سال 1380 - سال 1385</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1385&endYear=1390"
        class="year__item animate__animated animate__fadeInUp animate__delay-2s"
      >
        <img src="/img/p5.png" alt="p5" />
        <p>سال 1385 - سال 1390</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1390&endYear=1395"
        class="
          year__item
          animate__animated animate__fadeInUp animate__delay-2_5s
        "
      >
        <img src="/img/p6.png" alt="p6" />
        <p>سال 1390 - سال 1395</p>
      </nuxt-link>
      <nuxt-link
        to="/car?startYear=1395&endYear=1400"
        class="year__item animate__animated animate__fadeInUp animate__delay-3s"
      >
        <img src="/img/p7.png" alt="p7" />
        <p>سال 1395 - سال 1400</p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
@media screen and (max-width: 428px) {
  .year__item {
    background: var(--color-gray-200) !important;
    padding: 0rem 1rem 2rem 1rem !important;
    width: 154px !important;
    text-align: center;
    padding: 0 !important;
    padding-bottom: 1rem !important;
  }
}
@media screen and (max-width: 768px) {
  .year-data {
    background: transparent !important;
    padding: 0 !important;
    gap: 0.5rem !important;
  }
  .year__item p {
    font-family: var(--t4-font-family) !important;
    font-size: var(--t4-font-size) !important;
  }
  .year__item {
    background: var(--color-gray-200) !important;
    padding: 0rem 1rem 2rem 1rem;
    width: 184px;
    text-align: center;
  }
  [data-theme="dark"] .year__item {
    background: var(--color-dark-black-600) !important;
  }
}
[data-theme="dark"] .year-data {
  background: var(--color-dark-black-600);
}
.year-data {
  background: var(--color-gray-200);
  padding: 70px 89px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  border-radius: var(--app-border-radius);
}
.year__item {
  background: var(--color-white);
  color: var(--color-black);
  display: flex;
  padding: 42px 2rem;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: var(--app-border-radius);
  cursor: pointer;
  animation-duration: calc(var(--animate-duration) / 3);
  transition: all ease 0.3s;
}
.year__item:hover {
  box-shadow: 0px 40px 100px rgba(0, 0, 0, 0.16);
}
.year__item img {
  width: 100%;
  height: 150px;
}
</style>