<template>
<svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" fill="none">
    <path
      d="M16 9.5L11 14.5L8.5 12"
      :stroke="hashColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <mask id="path-2-inside-1_636_1236" fill="white">
      <path
        d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      />
    </mask>
    <path
      d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
      :stroke="hashColor"
      stroke-width="3.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      mask="url(#path-2-inside-1_636_1236)"
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
    default: 24,
  },
});
</script>