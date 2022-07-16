<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
  >
    <path
      d="M9.16699 1.76172L1.66699 8.61886L9.16699 15.476"
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
    default: "#85858F",
  },
  width: {
    type: Number,
    default: 11,
  },
  height: {
    type: Number,
    default: 17,
  },
});
</script>