<template>
  <Transition
    enter-active-class="animate__animated animate__slideInUp animate__faster"
    leave-active-class="animate__animated animate__slideOutDown animate__faster"
  >
    <div
      v-if="modelValue"
      :class="[
        'modal-wrapper',
        { ' modal-wrapper--normal': isNormal },
        'modal-wrapper--open',
      ]"
      @click.self="closeModal"
    >
      <!--  modal-wrapper--normal    -->

      <div class="modal" v-if="modelValue">
        <div class="modal__header">
          <div class="modal__close-btn" @click="closeModal">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                stroke="#ABADB3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h5 class="modal__name">{{ title }}</h5>
          <p class="modal__caption" v-if="subTitle">
            {{ subTitle }}
          </p>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { UseUtilStore } from "~~/stores/util.store";

//@ts-ignore
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
});

const store = UseUtilStore();

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    store.ChangeShowBlackBackGround(val);
  }
);
const emit = defineEmits(["update:modelValue"]);
const closeModal = () => {
  emit("update:modelValue", false);
};
</script>

<style>
</style>