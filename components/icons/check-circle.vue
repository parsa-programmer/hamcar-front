<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle cx="12" cy="12" r="12" :fill="hashColor" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.9102 10.3067C17.3008 9.91619 17.3008 9.28303 16.9102 8.8925C16.5197 8.50198 15.8865 8.50198 15.496 8.8925L10.2031 14.1854L7.91023 11.8925C7.51971 11.502 6.88654 11.502 6.49602 11.8925C6.10549 12.283 6.10549 12.9162 6.49602 13.3067L9.49602 16.3067C9.54483 16.3555 9.59744 16.3982 9.65289 16.4349C10.041 16.6911 10.5685 16.6484 10.9102 16.3067C10.9104 16.3065 10.9106 16.3063 10.9108 16.3061L16.9102 10.3067Z"
      fill="white"
    />
  </svg>
</template>
<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "var(--color-green)",
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
});
</script>