<template>
  <svg
    class="breadcrumb__arrow"
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
  >
    <path
      d="M5.25 10.5L0.75 6L5.25 1.5"
      :stroke="hashColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>

<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "#ABADB3",
  },
});
</script>