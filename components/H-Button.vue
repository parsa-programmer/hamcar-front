<template>
  <button :class="['btn', `btn-${color}`]">
    <slot />
  </button>
</template>

<script setup >
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<style>
</style>