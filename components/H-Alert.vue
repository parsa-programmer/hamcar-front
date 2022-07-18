<template>
  <div :class="['alert', `alert-${type}`]">
    <icons-warning
      class="alert-icon"
      v-if="type == AlertType.Warning"
      :width="24"
      :height="24"
      hash-color="var(--color-white)"
    />
    <icons-close-box
      class="alert-icon"
      v-else-if="type == AlertType.Error"
      hash-color="var(--color-white)"
      :width="24"
      :height="24"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { AlertType } from "~/models/utilities/AlertType";
defineProps<{
  type: AlertType;
}>();
</script>
<style scoped>
.alert {
  width: 100%;
  display: block;
  padding: 15px;
  text-align: center;
  border-radius: 9px;
  font-size: var(--t3-font-size);
  font-family: var(--t3-font-size);
}
.alert-warning {
  background: var(--color-orange);
  color: var(--color-white);
}
.alert-error {
  background: red;
  color: var(--color-white);
}
.alert-icon {
  top: 8px;
  position: relative;
  margin-left: 7px;
}
</style>