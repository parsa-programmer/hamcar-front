<template>
  <h-button :loading="loading" @click="toggle">salam</h-button>
  <h-button  @click="toggle">salam</h-button>
</template>

<script setup >
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const loading=ref(false);
const toggle=()=>{
  loading.value=!loading.value;
}
</script>

<style>
</style>