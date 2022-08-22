<template>
  <Form :validation-schema="schema" class="mt-7">
    <div class="advert__type__selection">
      <span
        @click="changeType(AdvertisementPaymentType.مقطوع)"
        :class="[
          {
            selection__active:
              stepData.advertisementPaymentType ==
              AdvertisementPaymentType.مقطوع,
          },
        ]"
        >مقطوع</span
      >
      <span
        :class="[
          {
            selection__active:
              stepData.advertisementPaymentType ==
              AdvertisementPaymentType.توافقی,
          },
        ]"
        @click="changeType(AdvertisementPaymentType.توافقی)"
        >توافقی</span
      >
      <span
        :class="[
          {
            selection__active:
              stepData.advertisementPaymentType ==
              AdvertisementPaymentType.قسطی,
          },
        ]"
        @click="changeType(AdvertisementPaymentType.قسطی)"
        >قسطی</span
      >
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div
        v-if="
          stepData.advertisementPaymentType == AdvertisementPaymentType.مقطوع
        "
      >
        <h-input
          :message="Num2persian(stepData.amount) + ' تومان'"
          name="price"
          :number="true"
          suffix="تومان"
          placeholder="قیمت"
          class="mt-1"
          v-model="stepData.amount"
          show-check-box
        />
      </div>
    </Transition>
    <Transition
      enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster"
    >
      <div
        v-if="
          stepData.advertisementPaymentType == AdvertisementPaymentType.قسطی
        "
      >
        <div class="row wrap-sm mt-1">
          <div class="w-full">
            <h-input
              name="pish_price"
              :number="true"
              suffix="تومان"
              placeholder="پیش پرداخت"
              v-model="stepData.ghest.pishPardakht"
            />
          </div>
          <div class="w-full">
            <h-select-box
              name="ghestType"
              placeholder="تعداد اقساط"
              :data="GenerateTedadeGhest()"
              v-model="stepData.ghest.tedadeGhestHa"
            />
          </div>
        </div>
        <div class="row wrap-sm mt-1">
          <div class="w-full">
            <h-input
              name="per_price"
              :number="true"
              suffix="تومان"
              placeholder="مبلغ هر قسط"
              v-model="stepData.ghest.amountPricePerGhest"
            />
          </div>
          <div class="w-full">
            <h-select-box
              name="ghestiPaymentType"
              placeholder="موعد پرداخت اقساط"
              v-model="stepData.ghest.ghestiPaymentType"
              :data="[
                {
                  label: 'ماهانه',
                  value: GhestiPaymentType.ماهانه,
                },
                {
                  label: 'دو ماهه',
                  value: GhestiPaymentType.دو_ماهه,
                },
                {
                  label: 'سه ماهه',
                  value: GhestiPaymentType.سه_ماهه,
                },
              ]"
            />
          </div>
        </div>
        <h-select-box
          name="deliveryDate"
          class="mt-1"
          v-model="stepData.ghest.deliveryDate"
          placeholder="موعد تحویل خودرو"
          :data="[
            {
              label: 'چند روز',
              value: 0,
            },
            {
              label: '1 روز',
              value: 1,
            },
            {
              label: '7 روز',
              value: 7,
            },
            {
              label: '12 روز',
              value: 12,
            },
            {
              label: '15 روز',
              value: 15,
            },
            {
              label: '20 روز',
              value: 20,
            },
            {
              label: '30 روز',
              value: 30,
            },
            {
              label: '45 روز',
              value: 45,
            },
            {
              label: '60 روز',
              value: 60,
            },
            {
              label: '90 روز',
              value: 90,
            },
            {
              label: '120 روز',
              value: 120,
            },
          ]"
        />
      </div>
    </Transition>
  </Form>
</template>

<script setup lang="ts">
//@ts-ignore
import Num2persian from "num2persian";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { advertStore } from "~~/stores/advert.store";
import * as Yup from "yup";
import { Form } from "vee-validate";
import { GhestiPaymentType } from "~~/models/advertisements/enums/GhestiPaymentType";
import { GenerateTedadeGhest } from "~~/utilities/selectDataGenerator";
const store = advertStore();
const stepData = reactive(store.steps.three);
const schema = Yup.object().shape({
  price: Yup.number().min(10000).label("قیمت").required(),
});

const changeType = (type: AdvertisementPaymentType) => {
  stepData.advertisementPaymentType = type;
};

watch(stepData, (val) => {
  if (
    val.advertisementPaymentType == AdvertisementPaymentType.توافقی &&
    store.currentStep == 3
  ) {
    store.changeStep(4);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  } else if (
    val.advertisementPaymentType == AdvertisementPaymentType.قسطی &&
    val.ghest.tedadeGhestHa > "0" &&
    val.ghest.amountPricePerGhest > "0" &&
    val.ghest.pishPardakht != "" &&
    val.ghest.ghestiPaymentType != null &&
    val.ghest.deliveryDate >= 0 &&
    store.currentStep == 3
  ) {
    store.changeStep(4);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  } else if (
    val.advertisementPaymentType == AdvertisementPaymentType.مقطوع &&
    val.amount > "100000" &&
    store.currentStep == 3
  ) {
    store.changeStep(4);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
});
</script>

<style>
</style>