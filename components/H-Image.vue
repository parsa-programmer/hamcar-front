<template>
  <nuxt-img placeholder="/img/placeholder.png" :src="src" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style>
</style>