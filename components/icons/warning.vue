<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
  >
    <path
      d="M2.56481 16.5116L9.39527 4.55828C10.547 2.54283 13.453 2.54283 14.6047 4.55828L21.4352 16.5116C22.578 18.5116 21.1339 21 18.8305 21H5.16954C2.86607 21 1.42197 18.5116 2.56481 16.5116Z"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18ZM11 14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V10C13 9.44771 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V14Z"
      fill="#0F0F10"
    />
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
    default: 24,
  },
  height: {
    type: Number,
    default: 22,
  },
});
</script>