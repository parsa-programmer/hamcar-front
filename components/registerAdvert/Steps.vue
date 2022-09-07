<template>
  <div ref="sticky" class="z-index-100">
    <div class="registration__steps-wrapper bg-white" ref="wrapper">
      <div class="step step--complete">
        <span class="step__name">مشخصات کلی</span>
        <span class="step__number">1</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 2 }]">
        <span class="step__name">مشخصات فنی</span>
        <span class="step__number">2</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 3 }]">
        <span class="step__name">قیمت گذاری</span>
        <span class="step__number">3</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 4 }]">
        <span class="step__name">اطلاعات تکمیلی</span>
        <span class="step__number">4</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 5 }]">
        <span class="step__name">افزودن تصاویر</span>
        <span class="step__number">5</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 6 }]">
        <span class="step__name">انتخاب پلن</span>
        <span class="step__number">6</span>
      </div>
      <div :class="['step', { 'step--complete': store.currentStep >= 7 }]">
        <span class="step__name">مشاهده آگهی</span>
        <span class="step__number">7</span>
      </div>
    </div>
    <div class="progress bg-white">
      <div class="progress__bar">
        <span
          class="progress__value"
          :style="{ width: `${progressPercentage}%` }"
        ></span>
      </div>
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 1 },
        ]"
        >1. مشخصات کلی</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 2 },
        ]"
        >2. مشخصات فنی</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 3 },
        ]"
        >3. قیمت گذاری</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 4 },
        ]"
        >4. مشخصات مالک</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 5 },
        ]"
        >5. آپلود تصاویر</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 6 },
        ]"
        >6. انتخاب پلن</span
      >
      <span
        :class="[
          'progress__name',
          { 'progress__name--show': store.currentStep == 7 },
        ]"
        >7. ثبت نهایی</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { advertStore } from "~~/stores/advert.store";
import { ref } from "#imports";
import { Ref } from "vue";

const wrapper: Ref<HTMLDivElement | null> = ref(null);
const sticky: Ref<HTMLElement | null> = ref(null);
const store = advertStore();
const progressPercentage = ref(14);

onMounted(() => {
  progressPercentage.value = store.currentStep * 14 + 2;
  window.onscroll = function () {
    myFunction();
  };
});
function myFunction() {
  var st = sticky.value?.offsetTop;

  if (window.pageYOffset > st! + 200) {
    sticky.value?.classList.add("sticky-container");
    wrapper.value?.classList.add("p-2")
  } else {
    sticky.value?.classList.remove("sticky-container");
    wrapper.value?.classList.remove("p-2");
  }
}
watch(
  () => store.currentStep,
  (newVal) => { 
    progressPercentage.value = newVal * 14 + 2;
  }
);
</script>

<style scoped>
.z-index-100 {
  z-index: 1000;
}
</style>