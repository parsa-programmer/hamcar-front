<template>
  <div
    :class="[
      'advertising__row',
      { 'advertising__row--wide-item': showType == 1 },
    ]"
  >
    <div
      class="advert p-0 w-full"
      v-for="index in 8"
      :key="index"
      style="background: transparent !important; padding: 0"
    >
      <h-skeletor
        class="skeletor"
        type="box"
        parent-class="w-full"
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
.advertising__row--wide-item .skeletor {
  height: 300px !important;
  max-width: 100% !important;
}
</style>