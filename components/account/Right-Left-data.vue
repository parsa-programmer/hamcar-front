<template>
  <div class="line__row">
    <p :class="rightClass" v-text="right"></p>
    <span class="line"></span>
    <label :class="['color-blue', `${leftClass}`]" @click="onClickLeft()">
      {{ left }}
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  right: {
    type: String || Number,
    default: "",
  },
  left: {
    type: String || Number,
    default: "",
  },
  onClickLeft: {
    type: Function,
    default: () => {},
  },
  rightClass: {
    type: String,
    default: "",
  },
  leftClass: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .line__row {
    position: relative;
    z-index: 1;
    gap: 1rem;
    align-items: center;
  }
  .line__row p {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
  }
  .line__row label {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
}
.line__row {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  position: relative;
  z-index: 1;
  gap: 1rem;
  align-items: center;
}
.line__row p {
  color: var(--color-black-200);
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  width: fit-content;
}
.line__row label {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
/* .line__row::after {
  content: " ";
  background: var(--color-gray-300);
  width: 82%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 47.5%;
  z-index: -1;
  transform: translate(-50%, 0);
} */
.line__row .line {
  background: var(--color-gray-300);
  height: 1px;
  flex-grow: 1;
}
</style>