<template>
  <svg
    width="428"
    height="56"
    viewBox="0 0 428 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="modelValue"
  >
    <path
      d="M0 48V56H428V48C428 34.7452 417.255 24 404 24H312.844C304.82 24 297.326 19.9896 292.875 13.3128L291.125 10.6872C286.674 4.01042 279.18 0 271.156 0H156.844C148.82 0 141.326 4.01043 136.875 10.6872L135.125 13.3128C130.674 19.9896 123.18 24 115.156 24H24C10.7452 24 0 34.7452 0 48Z"
      fill="var(--color-white)"
    />
    <rect x="182" y="26" width="64" height="4" rx="2" fill="#F0EFEF" />
  </svg>
  <svg
    width="428"
    height="96"
    viewBox="0 0 428 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-else
  >
    <g filter="url(#filter0_d_6516_41819)">
      <path
        d="M0 88V96H428V88C428 74.7452 417.255 64 404 64H312.844C304.82 64 297.326 59.9896 292.875 53.3128L291.125 50.6872C286.674 44.0104 279.18 40 271.156 40H156.844C148.82 40 141.326 44.0104 136.875 50.6872L135.125 53.3128C130.674 59.9896 123.18 64 115.156 64H24C10.7452 64 0 74.7452 0 88Z"
        fill="var(--color-white)"
      />
    </g>
    <rect x="182" y="66" width="64" height="4" rx="2" fill="#F0EFEF" />
    <defs>
      <filter
        id="filter0_d_6516_41819"
        x="-32"
        y="0"
        width="492"
        height="120"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-8" />
        <feGaussianBlur stdDeviation="16" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6516_41819"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6516_41819"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
</style>