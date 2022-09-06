<template>
  <div class="step-one" v-if="step == 9">
    <account-exhibition-verify-steps-finish />
  </div>
  <div v-else>
    <h1 class="font-2">
      اطلاعات و مدارک نمایشگاه را جهت تکمیل احراز هویت بارگذاری کنید.
    </h1>
    <div class="steps">
      <button :class="[{ active: step == 1 }, { pass: step > 1 }]">
        نمای خارجی نمایشگاه
      </button>
      <button :class="[{ active: step == 2 }, { pass: step > 2 }]">
        تابلو نمایشگاه
      </button>
      <button :class="[{ active: step == 3 }, { pass: step > 3 }]">
        عکس از نمایشگاه و خودرو های موجود
      </button>
      <button :class="[{ active: step == 4 }, { pass: step > 4 }]">
        لوگو نمایشگاه
      </button>
      <button :class="[{ active: step == 5 }, { pass: step > 5 }]">
        آدرس و تلفن(های) ثابت
      </button>
      <button :class="[{ active: step == 6 }, { pass: step > 6 }]">
        پروانه کسب نمایشگاه
      </button>
      <button :class="[{ active: step == 7 }, { pass: step > 7 }]">
        کارت ملی مدیر نمایشگاه
      </button>
      <button :class="[{ active: step == 8 }, { pass: step > 8 }]">
        معرفی نامه نماینده نمایشگاه
      </button>
    </div>
    <div class="step__content">
      <div class="step-one" v-if="step == 1">
        <account-exhibition-verify-steps-one />
      </div>
      <div class="step-one" v-if="step == 2">
        <account-exhibition-verify-steps-two />
      </div>
      <div class="step-one" v-if="step == 3">
        <account-exhibition-verify-steps-three />
      </div>
      <div class="step-one" v-if="step == 4">
        <account-exhibition-verify-steps-four />
      </div>
      <div class="step-one" v-if="step == 5">
        <account-exhibition-verify-steps-five />
      </div>
      <div class="step-one" v-if="step == 6">
        <account-exhibition-verify-steps-six />
      </div>
      <div class="step-one" v-if="step == 7">
        <account-exhibition-verify-steps-seven />
      </div>
      <div class="step-one" v-if="step == 8">
        <account-exhibition-verify-steps-eight />
      </div>
    </div>
    <div class="step__footer">
      <h-button
        outline
        class="btn-default-size"
        @click="step -= 1"
        v-if="step > 1"
        >قبلی</h-button
      >
      <h-button
        :disabled="exhibitionStore.isCompleteCurrentStep(step) == false"
        class="btn-default-size"
        @click="nextStep"
        v-if="step < 8"
        >بعدی</h-button
      >
      <h-button
        :disabled="exhibitionStore.isValidSteps() == false"
        class="btn-default-size"
        @click="nextStep"
        v-if="step == 8"
        :loading="exhibitionStore.loading"
        >ثبت نهایی</h-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { phoneNumberValidator } from "@persian-tools/persian-tools";
import { ref } from "vue";
import { useExhibitionRegister } from "~~/stores/registerExhibition";
const step = ref(1);
const exhibitionStore = useExhibitionRegister();
const toast = useToast();

const nextStep = async () => {
  if (step.value == 8) {
    var res = await exhibitionStore.VerifyAccount();
    if (res) {
      step.value = 10;
      toast.showToast("اطلاعات با موفقیت ثبت شد");
      return;
    }
  }
  step.value += 1;
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .step__footer button {
    width: 100% !important;
  }
  .step__footer {
    flex-direction: column-reverse;
  }
}
.steps {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
  justify-content: space-between;
  margin-bottom: 40px;
}
.steps button.pass {
  border: 2px solid var(--color-green);
  cursor: auto;
}
.steps button.active {
  background: var(--color-gray-300);
  cursor: auto;
}
.steps button {
  background: var(--color-white);
  border-radius: 18px;
  width: 296px;
  height: 72px;
  cursor: pointer;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black);
}
.step__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  gap: 1rem;
}
</style>