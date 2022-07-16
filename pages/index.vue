<template>
  <div>
    <a @click="showAlert">test</a>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    });
  }
}
</script>


<style scoped></style>