<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
  >
    <path
      d="M9 1L5 5M5 5L1 9M5 5L9 9M5 5L1 1"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "var(--color-black)",
  },
  width: {
    type: Number,
    default: 10,
  },
  height: {
    type: Number,
    default: 10,
  },
});
</script>