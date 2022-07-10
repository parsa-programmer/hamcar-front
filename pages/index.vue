<template>
  <div>
    <nuxt-link to="/test">test</nuxt-link>
      
  </div>
</template>

<script setup lang="ts">
import {
  GetSpecifications,
} from "~~/services/carReview.service";

onMounted(async () => {
  var result = await GetSpecifications();
  console.log(result);
});
</script>

<style scoped></style>