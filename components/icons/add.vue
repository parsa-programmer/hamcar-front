<template>
  <svg
    v-if="size == 'sm'"
    :width="width"
    :height="height"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.25 10.5C1.25 12.5416 1.36037 14.1311 1.63659 15.3739C1.91091 16.6083 2.33874 17.4543 2.94221 18.0578C3.54567 18.6613 4.39172 19.0891 5.62607 19.3634C6.86893 19.6396 8.45837 19.75 10.5 19.75C12.5416 19.75 14.1311 19.6396 15.3739 19.3634C16.6083 19.0891 17.4543 18.6613 18.0578 18.0578C18.6613 17.4543 19.0891 16.6083 19.3634 15.3739C19.6396 14.1311 19.75 12.5416 19.75 10.5C19.75 8.45837 19.6396 6.86893 19.3634 5.62607C19.0891 4.39173 18.6613 3.54567 18.0578 2.94221C17.4543 2.33874 16.6083 1.91091 15.3739 1.63659C14.1311 1.36037 12.5416 1.25 10.5 1.25C8.45837 1.25 6.86893 1.36037 5.62607 1.63659C4.39172 1.91091 3.54567 2.33874 2.94221 2.94221C2.33874 3.54567 1.91091 4.39173 1.63659 5.62607C1.36037 6.86893 1.25 8.45837 1.25 10.5Z"
      :stroke="hashColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.4974 7.16797V10.5013M10.4974 13.8346V10.5013M10.4974 10.5013H13.8307H7.16406"
      :stroke="hashColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
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
  size: {
    type: String,
    default: "",
  },
});
</script>