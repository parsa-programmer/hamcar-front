<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M0.75 9.56564C0.75 12.7588 1.48072 14.9164 2.85325 16.2861C4.22608 17.6562 6.3841 18.3809 9.56522 18.3809C12.7462 18.3809 14.9043 17.6559 16.2772 16.2856C17.6497 14.9157 18.3804 12.7581 18.3804 9.56564C18.3804 6.37323 17.6497 4.21558 16.2772 2.84565C14.9043 1.47543 12.7462 0.750427 9.56522 0.750427C6.3841 0.750427 4.22608 1.47511 2.85325 2.84515C1.48072 4.21488 0.75 6.37248 0.75 9.56564Z"
      :stroke="hashColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.1326 19.1306L16.8203 16.8184"
      :stroke="hashColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  hashColor: {
    type: String,
    default: "#0F0F10",
  },
});
</script>

<style>
</style>