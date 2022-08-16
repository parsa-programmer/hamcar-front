<template>
  <div class="bg-white">
    <h-button :loading="loading" @click="toggle">salam</h-button>
    <h-button @click="toggle">salam</h-button>
    <div style="width: 50%; margin: auto">
    </div>
    {{ value }}
  </div>
</template>

<script setup >
const value = ref([0, 10]);
const loading = ref(false);
const toggle = () => {
  loading.value = !loading.value;
};
</script>

<style scoped>

</style>