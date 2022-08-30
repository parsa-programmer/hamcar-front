<template>
  <div>
    <div class="card row justify-content-space-between">
      <div>
        <p class="font-4">
          {{ title }}

          <small
            v-if="loading"
            class="text__description font-5"
            style="display: inline-block"
          >
            <h-skeletor class="" width="80" height="10" />
          </small>
          <small v-else class="text__description font-5">{{ subTitle }}</small>
        </p>
      </div>
      <div>
        <a
          class="row align-items-center color-blue font-4 cursor-pointer"
          style="gap: 0.5rem"
          v-if="buttonText"
          @click="toggle"
        >
          <template v-if="$slots.icon">
            <slot name="icon" />
          </template>
          <icons-add v-else />
          {{ buttonText }}
        </a>
      </div>
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeInDown animate__faster"
      leave-active-class="animate__animated  animate__fadeOutUp animate__faster"
    >
      <div class="pageTitle__row row mt-1" v-if="isOpen">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

defineProps({
  title: {
    type: String,
    defailt: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: "",
  },
});
const isOpen: Ref<boolean> = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
</style>