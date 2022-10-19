<template>
  <img v-if="src == '' || src == 'null' || src == null || src.includes('null')||src.includes('undefined')" :src="placeholderImg" />
  <nuxt-img  loading="lazy"  v-else placeholder :src="src" />

</template>

<script setup>
import placeholderImg from "~~/assets/img/placeholder.png";
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>