<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_3290_17073" fill="white">
      <path
        d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      />
    </mask>
    <path
      d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      :stroke="hashColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
      mask="url(#path-1-inside-1_3290_17073)"
    />
    <path
      d="M12 8V12M12 16V12M12 12H16H8"
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
    default: "var(--color-blue)",
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