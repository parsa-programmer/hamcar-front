<template>
  <div class="not__found__layout">
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <main class="main">
      <div class="container text-center white">
        <slot></slot>
      </div>
    </main>
    <the-toast></the-toast>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
});
</script>

<style scoped>
h1{
  color: white !important;
}
.not__found__layout .nav__icon {
  color: white;
}
.not__found__layout main {
  position: relative;
  top: 22%;
}
.not__found__layout {
  background: #0F0F10;
  opacity: 0.9;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
.not__found__layout header {
  background: transparent;
}
.not__found__layout .nav__wrapper a {
  color: white;
}
</style>