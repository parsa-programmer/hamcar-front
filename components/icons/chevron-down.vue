<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 1L7 7L1 1"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
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
    default: 8,
  },
});
</script>