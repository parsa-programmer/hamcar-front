<template>
  <div :class="['filter']">
    <div class="filter__header" @click="toggle">
      <span class="filter__name">{{ title }}</span>

      <icons-chevron-up v-if="Open" hash-color="#ABADB3" />
      <icons-chevron-down v-else hash-color="#ABADB3" />
    </div>
    <Transition mode="in-out" enter-active-class="animate__animated animate__fadeIn animate__faster"
    >
      <div :class="['filter__body',bodyClass]" style="display: block !important;" v-if="Open">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "عنوان",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    bodyClass:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      Open: this.isOpen,
    };
  },
  methods: {
    toggle() {
      this.Open = !this.Open;
    },
  },
};
</script>

<style>
.d-block {
  display: block;
}
</style>