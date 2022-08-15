<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 25 21"
    fill="none"
  >
    <path
      d="M9.79389 13.5372L19.0588 20.2334C20.116 20.8041 20.8791 20.5086 21.1424 19.2732L24.9137 1.88772C25.2998 0.373346 24.3236 -0.313504 23.3122 0.135699L1.16727 8.48911C-0.344323 9.08223 -0.335511 9.90722 0.891742 10.2748L6.57463 12.01L19.7311 3.89011C20.3522 3.52167 20.9222 3.71975 20.4544 4.12596"
      fill="url(#paint0_linear_2681_12377)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2681_12377"
        x1="16.4925"
        y1="8.96205"
        x2="19.9597"
        y2="17.0271"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EFF7FC" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
    </defs>
  </svg>
</template>


<script setup>
const props = defineProps({
  width: {
    type: Number,
    default: 25,
  },
  height: {
    type: Number,
    default: 21,
  },
});
</script>