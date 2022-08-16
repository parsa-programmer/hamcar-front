<template>
  <div>
    <h-button :loading="loading" @click="toggle">salam</h-button>
    <h-button @click="toggle">salam</h-button>
  </div>
</template>

<script setup >

const loading = ref(false);
const toggle = () => {
  loading.value = !loading.value;
};
</script>

<style>
</style>