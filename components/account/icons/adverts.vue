<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 14C1 16.8594 1.15452 19.089 1.54242 20.8343C1.92779 22.5684 2.53009 23.7626 3.38373 24.6163C4.23737 25.4699 5.43162 26.0722 7.16565 26.4576C8.91104 26.8455 11.1406 27 14 27C16.8594 27 19.089 26.8455 20.8343 26.4576C22.5684 26.0722 23.7626 25.4699 24.6163 24.6163C25.4699 23.7626 26.0722 22.5684 26.4576 20.8343C26.8455 19.089 27 16.8594 27 14C27 11.1406 26.8455 8.91104 26.4576 7.16565C26.0722 5.43162 25.4699 4.23737 24.6163 3.38373C23.7626 2.53009 22.5684 1.92779 20.8343 1.54242C19.089 1.15452 16.8594 1 14 1C11.1406 1 8.91104 1.15452 7.16565 1.54242C5.43162 1.92779 4.23737 2.53009 3.38373 3.38373C2.53009 4.23737 1.92779 5.43162 1.54242 7.16565C1.15452 8.91104 1 11.1406 1 14Z"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.332 8.16797H19.832"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.16797 14H19.8346"
      :stroke="hashColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.16797 19.832L11.668 19.832"
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
    default: "#00D3D2",
  },
  width: {
    type: Number,
    default: 28,
  },
  height: {
    type: Number,
    default: 28,
  },
});
</script>