<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none">
    <path
      d="M0.9 12C0.9 14.45 1.03245 16.3573 1.36391 17.8487C1.6931 19.3299 2.20649 20.3452 2.93065 21.0694C3.6548 21.7935 4.67007 22.3069 6.15129 22.6361C7.64272 22.9676 9.55004 23.1 12 23.1C14.45 23.1 16.3573 22.9676 17.8487 22.6361C19.3299 22.3069 20.3452 21.7935 21.0694 21.0694C21.7935 20.3452 22.3069 19.3299 22.6361 17.8487C22.9676 16.3573 23.1 14.45 23.1 12C23.1 9.55004 22.9676 7.64272 22.6361 6.15129C22.3069 4.67007 21.7935 3.6548 21.0694 2.93065C20.3452 2.20649 19.3299 1.6931 17.8487 1.36391C16.3573 1.03245 14.45 0.9 12 0.9C9.55004 0.9 7.64272 1.03245 6.15129 1.36391C4.67007 1.6931 3.6548 2.20649 2.93065 2.93065C2.20649 3.6548 1.6931 4.67007 1.36391 6.15129C1.03245 7.64272 0.9 9.55004 0.9 12Z"
      :stroke="hashColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M15 9L12 12M12 12L9 15M12 12L15 15M12 12L9 9"
      :stroke="hashColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
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
    default: 24,
  },
});
</script>