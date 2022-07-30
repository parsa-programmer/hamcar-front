<template>
  <Form :validation-schema="schema" class="mt-7">
    <div class="advert__type__selection">
      <span
        @click="changeCarType(CarType.صفر)"
        :class="[{ selection__active: stepData.carType == CarType.صفر }]"
        >صفر</span
      >
      <span
        :class="[{ selection__active: stepData.carType == CarType.کارکرده }]"
        @click="changeCarType(CarType.کارکرده)"
        >کارکرده</span
      >
      <span
        :class="[{ selection__active: stepData.carType == CarType.حواله }]"
        @click="changeCarType(CarType.حواله)"
        >حواله</span
      >
      <span
        :class="[{ selection__active: stepData.carType == CarType.پیش_فروش }]"
        @click="changeCarType(CarType.پیش_فروش)"
        >پیش فروش</span
      >
    </div>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <h-input
        name="milage"
        number
        suffix="کیلومتر"
        placeholder="کیلومتر"
        class="mt-1"
        v-model="stepData.milage"
        v-if="stepData.carType == CarType.کارکرده"
      />
    </Transition>
    <h-select-box
      class="mt-1"
      name="bodyCondition"
      v-model="stepData.bodyCondition"
      :data="GenerateBodyConditionSelectData()"
      :show-check-box="true"
      placeholder="وضعیت بدنه"
    />
    <h-textarea
      v-model="stepData.description"
      class="mt-1"
      name="discription"
      placeholder="توضیحات"
    />
    <h-select-box
      class="mt-1"
      placeholder="گیربکس"
      show-check-box
      :data="[
        {
          label: 'اوتوماتیک',
          value: GearBox.اوتوماتیک,
        },
        {
          label: 'دنده ای',
          value: GearBox.دنده_ای,
        },
      ]"
      name="gearBox"
      v-model="stepData.gearBox"
    />
    <h-select-box
      class="mt-1"
      placeholder="رنگ بدنه"
      :data="GenerateColorSelectData()"
      name="exteriorColor"
      v-model="stepData.exteriorColor"
      show-check-box
    />
    <h-select-box
      class="mt-1"
      placeholder="رنگ داخل"
      :data="GenerateColorSelectData()"
      name="interiorColor"
      show-check-box
      v-model="stepData.interiorColor"
    />
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { ToastType } from "~~/composables/useToast";
import { GenerateBodyConditionSelectData } from "~~/models/advertisements/enums/BodyCondition";
import { CarType } from "~~/models/advertisements/enums/CarType";
import * as Yup from "yup";
import {
  Color,
  GenerateColorSelectData,
} from "~~/models/advertisements/enums/Color";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { advertStore } from "~~/stores/advert.store";

const toast = useToast();
const store = advertStore();
const stepData = reactive(store.steps.two);
const schema = Yup.object().shape({
  milage: Yup.number().min(1, "کیلومتر را وارد کنید").label("کیلومتر"),
});
onMounted(() => {});
const changeCarType = (type: CarType) => {
  stepData.carType = type;
};

watch(stepData, (val) => {
  if (
    val.carType != null &&
    val.bodyCondition != null &&
    val.exteriorColor != null &&
    val.interiorColor != null &&
    val.gearBox != null &&
    val.description != ""
  ) {
    if (
      val.carType == CarType.کارکرده &&
      (val.milage == "0" || val.milage == "")
    ) {
      toast.showToast("کارکرد خودرو را وارد کنید", ToastType.error);
      store.changeStep(2);
    } else if (store.currentStep == 2) {
      store.changeStep(3);
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
  }
});
</script>

<style scoped>
</style>