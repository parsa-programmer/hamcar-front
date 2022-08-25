<template>
  <div>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
<script setup>
</script>
<style scoped>
.sticky-top {
  z-index: 1000;
}
</style>