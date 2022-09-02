<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.58624 5.41502C1.2593 5.75171 1.2593 6.24829 1.58624 6.58498C3.24497 8.29315 6.71713 11.2 11 11.2C15.2829 11.2 18.755 8.29315 20.4138 6.58498C20.7407 6.24829 20.7407 5.75171 20.4138 5.41502C18.755 3.70685 15.2829 0.8 11 0.8C6.71713 0.8 3.24497 3.70685 1.58624 5.41502Z"
      :stroke="hashColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.05 6.00112C9.05 6.9297 9.8716 7.77254 11 7.77254C12.1284 7.77254 12.95 6.9297 12.95 6.00112C12.95 5.07253 12.1284 4.22969 11 4.22969C9.8716 4.22969 9.05 5.07253 9.05 6.00112Z"
      :stroke="hashColor"
      stroke-width="1.6"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "#007AFF",
  },
  width: {
    type: Number,
    default: 22,
  },
  height: {
    type: Number,
    default: 12,
  },
});
</script>