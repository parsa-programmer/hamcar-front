<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="17"
    viewBox="0 0 11 17"
    fill="none"
  >
    <path
      d="M1.83301 1.76172L9.33301 8.61886L1.83301 15.476"
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
});
</script>
