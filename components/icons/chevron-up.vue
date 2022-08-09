<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 9"
    fill="none"
  >
    <path
      d="M14.8555 7.875L7.99833 1.125L1.14118 7.875"
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
    default: 16,
  },
  height: {
    type: Number,
    default: 9,
  },
});
</script>