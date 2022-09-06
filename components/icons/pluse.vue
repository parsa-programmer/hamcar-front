<template>
  <svg
   :width="width"
   :height="height"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1V7M7 13V7M7 7H13H1"
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
    default: "var(--color-gray-600)",
  },
  width: {
    type: Number,
    default: 14,
  },
  height: {
    type: Number,
    default: 14,
  },
});
</script>
     