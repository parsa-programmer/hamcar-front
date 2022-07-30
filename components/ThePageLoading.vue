<template>
  <client-only>
    <!-- <div v-if="store.loading" class="global__loading">...</div> -->
    <div v-if="false" class="global__loading">...</div>
  </client-only>
</template>

<script setup lang="ts">
import { authStore } from "~/stores/auth.store";
const store = authStore();
</script>

<style scoped>
.global__loading {
  width: 100%;
  display: flex;
  position: fixed;
  align-content: center;
  justify-content: center;
  left: 0;
  height: 100%;
  z-index: 1000000;
  background: var(--color-white);
  align-items: center;
}
</style>