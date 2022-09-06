<template>
  <div>
    <account-exhibition-verify-steps-finish v-if="step == 10" />
    <template v-if="step == 0 || step == 9">
      <p class="header">احراز هویت</p>
      <div class="steps">
        <account-exhibition-verify-mobile-step-title
          :step="1"
          title="نمای خارجی نمایشگاه"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="2"
          title="تابلو نمایشگاه"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="3"
          title="عکس از نمایشگاه و خودرو های موجود"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="4"
          title="لگو نمایشگاه"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="5"
          title="آدرس و تلفن(های) ثابت"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="6"
          title="پروانه کسب نمایشگاه"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="7"
          title="کارت ملی مدیر نمایشگاه"
          @go-to-step="changeStep"
        />
        <account-exhibition-verify-mobile-step-title
          :step="8"
          title="معرفی نامه نماینده نمایشگاه"
          @go-to-step="changeStep"
        />
      </div>
      <h-button
        class="w-full mt-1_5"
        :disabled="isOk == false"
        :loading="exhibitionStore.loading"
        @click="nextStep"
        >ثبت نهایی</h-button
      >
    </template>
    <template v-else-if="step!=10">
      <div class="step__content">
        <div class="step__header">
          <p class="font-5">{{ exhibitionStore.getStepTitle(step) }}</p>
          <span class="font-6 color_black_200">{{ step }}/8</span>
        </div>
        <div class="step-one" v-if="step == 1">
          <account-exhibition-verify-steps-one />
        </div>
        <div class="step-one" v-if="step == 2">
          <account-exhibition-verify-steps-two />
        </div>
        <div class="step-one" v-if="step == 3">
          <account-exhibition-verify-steps-three />
        </div>
        <div class="" v-if="step == 4">
          <account-exhibition-verify-steps-four />
        </div>
        <div class="mt-2_5" v-if="step == 5">
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
        <div class="step__footer">
          <h-button
            class="w-full mt-2_5"
            :disabled="exhibitionStore.isCompleteCurrentStep(step) == false"
            v-if="step == 8"
            @click="nextStep"
          >
            اتمام
          </h-button>
          <h-button
            v-else
            class="w-full mt-2_5"
            :disabled="exhibitionStore.isCompleteCurrentStep(step) == false"
            @click="nextStep"
            >بعدی</h-button
          >
          <p
            class="w-full text-center mt-2_5"
            style="color: #acd4ff"
            v-if="step > 1"
            @click="step -= 1"
          >
            قبلی
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { ExhibitionStatus } from "~~/models/exhibitions/Exhibition.Models";
import { VerifyExhibitionAccount } from "~~/services/exhibition.service";
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const toast = useToast();

const step = ref(0);
const isOk = ref(false);
const exhibitionStore = useExhibitionRegister();
const changeStep = (stepNumber: number) => {
  step.value = stepNumber;
};
watch(step, () => {
  isOk.value = exhibitionStore.isValidSteps();
});
const nextStep = async () => {
  console.log(step.value);

  if (step.value == 9) {
    var res = await exhibitionStore.VerifyAccount();
    if (res) {
      step.value = 10;
      toast.showToast("اطلاعات با موفقیت ثبت شد");
      return;
    }
  }
  if (exhibitionStore.isCompleteCurrentStep(step.value)) {
    step.value += 1;
  }
};
onMounted(()=>{
  isOk.value = exhibitionStore.isValidSteps();
  if(isOk.value){
    step.value=9;
  }
})
</script>

<style scoped>
.header {
  margin-bottom: 0.5rem;
}
.step__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>