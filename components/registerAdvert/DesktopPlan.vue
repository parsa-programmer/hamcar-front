<template>
  <div class="row plan__page__header">
    <div>
      <h2 class="page__sub__title">پلن موردنظر خود را انتخاب کنید:</h2>
      <p
        class="text__description mb-1_5"
        style="margin-top: 0.5rem"
        v-if="selectedPlan > 0"
      >
        <icons-flash class="ml-1" />
        آگهی‌های اپل آسترا سدان 1994 معمولا با انتخاب پلن «پرسرعت» بازخورد بهتری
        داشته‌اند.
      </p>
    </div>
    <div class="d-sm-none">
      <p class="text__description mb-1_5" style="margin-top: 0.5rem">
        <icons-discount class="ml-1" />
        تمام پکیج ها شامل
        <span style="color: var(--color-error)">تخفیف 10 درصد</span> هستند
      </p>
    </div>
  </div>
  <div class="plan__list row wrap">
    <div class="plan__item plan__text">
      <div class="plan__header"></div>
      <div class="plan__facilities">
        <p>بالا بر اتوماتیک</p>
        <p>پین در همه فیلتر ها</p>
        <p>پین در صفحه اول آگهی ها</p>
        <p>ارسال پیامک به خریداران</p>
        <p>ارسال ایمیل به خریداران</p>
        <p>تعداد بالابر</p>
        <p>مدت آگهی (روز)</p>
        <p>تعداد عکس</p>
        <p>برچسب همکار</p>
        <p>آمار بازدید</p>
        <p>نمایش در پیشنهادات همکار</p>
      </div>
    </div>
    <div :class="['plan__item', { active: plan == 1 }]" @click="selectPlan(1)">
      <div class="plan__header">
        <h4>رایگان</h4>
      </div>
      <div class="plan__facilities">
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>30</p>
        <p>5</p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
      </div>
    </div>
    <div :class="['plan__item', { active: plan == 2 }]" @click="selectPlan(2)">
      <div class="plan__header">
        <icons-flash v-if="selectedPlan == 2" />

        <h4>استاندارد</h4>
        <p>
          {{ splitNumber(plans.filter((f) => f.id == 2)[0].totalPrice) }} تومان
        </p>
      </div>
      <div class="plan__facilities">
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>13</p>
        <p>3</p>
        <p>60</p>
        <p>10</p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
      </div>
    </div>
    <div :class="['plan__item', { active: plan == 3 }]" @click="selectPlan(3)">
      <div class="plan__header">
        <icons-flash v-if="selectedPlan == 3" />
        <h4>پر سرعت</h4>
        <p>
          {{ splitNumber(plans.filter((f) => f.id == 3)[0].totalPrice) }} تومان
        </p>
      </div>
      <div class="plan__facilities">
        <p>
          <icons-close-box hash-color="var(--color-error)" />
        </p>
        <p>5 ساعت رندوم</p>
        <p>6 ساعت رندوم</p>
        <p>13</p>
        <p>13</p>
        <p>7</p>
        <p>120</p>
        <p>13</p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
      </div>
    </div>
    <div :class="['plan__item', { active: plan == 4 }]" @click="selectPlan(4)">
      <div class="plan__header">
        <icons-flash v-if="selectedPlan == 4" />

        <h4>توربو</h4>
        <p>
          {{ splitNumber(plans.filter((f) => f.id == 4)[0].totalPrice) }} تومان
        </p>
      </div>
      <div class="plan__facilities">
        <p>هر 12 ساعت</p>
        <p>26 ساعت کامل</p>
        <p>50 ساعت رندم</p>
        <p>13</p>
        <p>13</p>
        <p>روزانه اتوماتیک</p>
        <p>تا زمان فروش</p>
        <p>18</p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
        <p>
          <icons-check hash-color="var(--color-green)" />
        </p>
      </div>
    </div>
  </div>
  <h-button class="pull-left pay__btn" @click="finallyPlan" :disabled="plan == 0">پرداخت</h-button>
</template>

<script setup lang="ts">
import { ToastType } from "~~/composables/useToast";
import { AdvertisementPlan } from "~~/models/plans/AdvertisementPlan";
import { splitNumber } from "~~/utilities/numberUtils";
const { plans, selectedPlan = 1 } = defineProps<{
  plans: AdvertisementPlan[];
  selectedPlan: number;
}>();
const plan = ref(selectedPlan);
const emit = defineEmits(["planSeleced"]);
const toast = useToast();

const selectPlan = (planId: number) => {
  plan.value = planId;
};
const finallyPlan = () => {
  if (plan.value <= 0) {
    toast.showToast("لطفا پلن را انتخاب کنید", ToastType.error);
    return;
  }
  emit("planSeleced", plan.value);
};
</script>

<style>
</style>