<template>
  <nuxt-img placeholder  :src="src == null ? '' : src" />
</template>

<script setup>
import placeholder from "~~/assets/img/placeholder.png"
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>