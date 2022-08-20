<template>
  <input class="toggle-checkbox" :type="type" ref="ele"/>
</template>

<script setup lang="ts">
import { Ref } from "vue";

defineProps({
  type: {
    type: String,
    default: "checkbox",
  },
});
const ele: Ref<HTMLInputElement | null> = ref(null);

const toggle = () => {
  ele.value?.classList.toggle("toggle-checkbox--active");
};
</script>

<style>
</style>