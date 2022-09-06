<template>
  <div class="step">
    <p v-if="completeCurrentStep" class="row align-items-center">
      <icons-check hash-color="var(--color-green)" :width="24" :height="24" />
      <span>{{ title }}</span>
    </p>
    <p v-text="title" v-else></p>

    <a href="#" @click="complete" class="text-error" v-if="completeCurrentStep"
      >ویرایش
    </a>
    <a href="#" v-else @click="complete" class="color-blue">تکمیل درخواست</a>
  </div>
</template>

<script setup lang="ts">
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const props = defineProps({
  title: {
    type: String,
  },
  step: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["goToStep"]);
const exhibitionStore = useExhibitionRegister();
const completeCurrentStep = exhibitionStore.isCompleteCurrentStep(props.step);
const complete = () => {
  emit("goToStep", props.step);
};
</script>

<style scoped>
.step {
  padding: 1.5rem;
  border-radius: 16px;
  background: var(--color-gray-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
a.text-error{
    color: var(--color-error) !important;
}
a {
  color: var(--color-blue) ;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}
</style>