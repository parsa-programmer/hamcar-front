<template>
  <div>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <main class="main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
    <the-toast></the-toast>
  </div>
</template>
<script setup>
</script>
