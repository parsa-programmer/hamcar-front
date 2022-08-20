<template>
  <div
    :class="[
      'advertising__row',
      { 'advertising__row--wide-item': showType == 1 },
    ]"
  >
    <div class="advert p-0" v-for="(index) in 12" :key="index" style="background: transparent !important;padding: 0;">
      <h-skeletor
      class="skeletor"
        type="box"
        style="
          width: 100%;
          height: 450px;
          border-radius: var(--app-border-radius);
        "
      />
    </div>
  
  </div>
</template>

<script setup>
defineProps({
  showType: {
    default: 1,
    type: Number,
  },
});
</script>

<style >
.h-auto {
  height: fit-content !important;
}
.advertising__row--wide-item .skeletor{
  width: 800px !important;
  height: 300px !important;
  margin: auto !important;
  max-width: 100% !important;
}
</style>