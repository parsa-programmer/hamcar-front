<template>
  <div class="">

    <h-input type="hidden" name="advertisementPaymentType" v-model="stepData.advertisementPaymentType" />
    <div class="advert__type__selection">
      <span @click="changeType(AdvertisementPaymentType.مقطوع)" :class="[
        {
          selection__active:
            stepData.advertisementPaymentType ==
            AdvertisementPaymentType.مقطوع,
        },
      ]">مقطوع</span>
      <span :class="[
        {
          selection__active:
            stepData.advertisementPaymentType ==
            AdvertisementPaymentType.توافقی,
        },
      ]" @click="changeType(AdvertisementPaymentType.توافقی)">توافقی</span>
      <span :class="[
        {
          selection__active:
            stepData.advertisementPaymentType ==
            AdvertisementPaymentType.قسطی,
        },
      ]" @click="changeType(AdvertisementPaymentType.قسطی)">قسطی</span>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster">
      <div v-if="
        stepData.advertisementPaymentType == AdvertisementPaymentType.مقطوع
      ">
        <h-input :message="Num2persian(amount) + ' تومان'" name="amount" :number="true" suffix="تومان" placeholder="قیمت"
          class="mt-1" v-model="amount" />
      </div>
    </Transition>
    <Transition enter-active-class="animate__animated animate__fadeInUp animate__faster"
      leave-active-class="animate__animated animate__fadeOutRight animate__faster">
      <div v-if="
        stepData.advertisementPaymentType == AdvertisementPaymentType.قسطی
      ">
        <div class="row wrap-sm mt-1">
          <div class="w-full">
            <small>پیش پرداخت :</small>
            <h-input name="pishPardakht" :number="true" suffix="تومان" placeholder="پیش پرداخت"
              v-model="stepData.ghest!.pishPardakht" />
          </div>
          <div class="w-full">
            <small>تعداد اقساط :</small>
            <h-select-box name="tedadeGhestHa" placeholder="تعداد اقساط" :data="GenerateTedadeGhest()"
              v-model="stepData.ghest!.tedadeGhestHa" />
          </div>
        </div>
        <div class="row wrap-sm mt-1">
          <div class="w-full">
            <small>مبلغ هر قسط :</small>

            <h-input name="amountPricePerGhest" :number="true" suffix="تومان" placeholder="مبلغ هر قسط"
              v-model="stepData.ghest!.amountPricePerGhest" />
          </div>
          <div class="w-full">
            <small>موعد پرداخت اقساط :</small>
            <h-select-box name="ghestiPaymentType"
              v-model="stepData.ghest!.ghestiPaymentType" :data="[
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
              ]" />
          </div>
        </div>
        <div class="mt-1">
          <small>موعد تحویل خودرو :</small>
        <h-select-box name="deliveryDate"  v-model="stepData.ghest!.deliveryDate"
          placeholder="موعد تحویل خودرو" :data="[
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
          ]" />
        </div>
      </div>
    </Transition>
  </div>
</template>
  
<script setup lang="ts">
//@ts-ignore
import Num2persian from "num2persian";
import { AdvertisementPaymentType } from "~~/models/advertisements/enums/AdvertisementPaymentType";
import { GhestiPaymentType } from "~~/models/advertisements/enums/GhestiPaymentType";
import { GenerateTedadeGhest } from "~~/utilities/selectDataGenerator";
import { AdvertisementPrice } from "~~/models/advertisements/valueObjects/AdvertisementPrice";

const props = defineProps<{
  modelValue: AdvertisementPrice
}>();

const stepData = reactive(props.modelValue);
const amount = ref(props.modelValue.amount.toString());

if (stepData.ghest == null) {
  stepData.ghest = {
    amountPricePerGhest: "",
    deliveryDate: 0,
    ghestiPaymentType: GhestiPaymentType.ماهانه,
    pishPardakht: "",
    tedadeGhestHa: ""
  }
}

const changeType = (type: AdvertisementPaymentType) => {
  stepData.advertisementPaymentType = type;
};
</script>

<style scoped>
small{
  color: var(--color-gray-600) !important;
  margin-bottom: .5rem;
  display: block;
}
</style>