<template>
  <svg
   :width="width"
    :height="height"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.51418 17.2406C3.62411 17.2406 1.28125 14.9169 1.28125 12.0504C1.28125 9.18393 3.62411 6.8602 6.51418 6.8602H8.24061M6.51418 17.2406C6.51418 17.2406 8.32125 23.4654 8.96125 25.3679C9.60125 27.2705 12.8012 27.2705 12.8012 24.7338C12.8012 22.1971 12.8012 20.8046 12.8012 17.5716M6.51418 17.2406H8.24061M12.8012 17.5716C16.4463 18.3973 19.8242 20.5974 23.0743 22.2092C29.587 25.4389 29.441 15.1959 29.441 12.0504C29.441 8.90493 29.587 -1.33813 23.0743 1.89165C18.9979 3.91319 14.7204 6.8602 9.96703 6.8602H8.24061M12.8012 17.5716C11.8745 17.3617 10.9306 17.2406 9.96703 17.2406H8.24061M8.24061 17.2406V6.8602"
          :stroke="hashColor"

      stroke-width="2"
    />
    <path
      d="M30.7188 8.91016V15.2738"
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
    default: "var(--color-black)",
  },
  width: {
    type: Number,
    default: 32,
  },
  height: {
    type: Number,
    default: 28,
  },
});
</script>