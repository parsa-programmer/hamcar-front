<template>
  <svg
   :width="width"
    :height="height"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 12L13.9282 0H0.0717969L7 12Z" :fill="hashColor" />
  </svg>
</template>

<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "#0F0F10",
  },
  width: {
    type: Number,
    default: 14,
  },
  height: {
    type: Number,
    default: 12,
  },
});
</script><script>
export default {};
</script>

<style>
</style>