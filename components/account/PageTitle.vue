<template>
  <div>
    <div class="card row justify-content-space-between">
      <div class="flex wrap gap-0_5 grow-1 w-full">
        <p class="font-4">
          {{ title }}
        </p>
        <small
          v-if="loading"
          class="text__description font-5"
          style="display: inline-block"
        >
          <h-skeletor class="" width="80" height="10" />
        </small>
        <small v-else class="text__description font-5">{{ subTitle }}</small>
      </div>
      <a
        class="
          row
          color-blue
          font-4
          cursor-pointer
          actions
          grow-1
          w-full
          justify-content-flex-end
          align-items-start
        "
        style="gap: 0.5rem"
        v-if="buttonText"
        @click="toggle"
      >
        <template v-if="$slots.icon">
          <slot name="icon" />
        </template>
        <template v-else>
          <icons-add class="d-mobile-none" />

          <svg
            class="d-mobile-block"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.8 10C0.8 12.0405 0.910378 13.6256 1.1854 14.8631C1.4584 16.0915 1.88289 16.9278 2.47756 17.5224C3.07224 18.1171 3.90852 18.5416 5.13692 18.8146C6.3744 19.0896 7.95951 19.2 10 19.2C12.0405 19.2 13.6256 19.0896 14.8631 18.8146C16.0915 18.5416 16.9278 18.1171 17.5224 17.5224C18.1171 16.9278 18.5416 16.0915 18.8146 14.8631C19.0896 13.6256 19.2 12.0405 19.2 10C19.2 7.95951 19.0896 6.3744 18.8146 5.13692C18.5416 3.90852 18.1171 3.07224 17.5224 2.47756C16.9278 1.88288 16.0915 1.4584 14.8631 1.1854C13.6256 0.910378 12.0405 0.799999 10 0.799999C7.95951 0.799999 6.3744 0.910378 5.13692 1.1854C3.90852 1.4584 3.07224 1.88288 2.47756 2.47756C1.88289 3.07224 1.4584 3.90852 1.1854 5.13692C0.910378 6.3744 0.8 7.95951 0.8 10Z"
              stroke="#007AFF"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.9974 6.66797V10.0013M9.9974 13.3346V10.0013M9.9974 10.0013H13.3307H6.66406"
              stroke="#007AFF"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
        {{ buttonText }}
      </a>
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

<style scoped>
@media screen and (max-width: 768px) {
  .font-4 {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
}
</style>