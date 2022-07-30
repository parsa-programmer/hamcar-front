<template>
  <div>
    <Teleport to="#header">
      <the-header :show-search-bar="false" showSearchIcon></the-header>
    </Teleport>
    <advert-steps class="mt-1" />
    <div>
      <h2 class="page__sub__title">پلن موردنظر خود را انتخاب کنید:</h2>
      <div class="row" style="margin-top: 0.5rem" v-if="selectedPlan > 0">
        <icons-flash class="ml-0_5" />

        <p class="text__description">
          آگهی‌های اپل آسترا سدان 1994 معمولا با انتخاب پلن «پرسرعت» بازخورد
          بهتری داشته‌اند.
        </p>
      </div>
    </div>
    <div class="mobile__plan__list">
      <div
        :class="['mobile__plan', { active: plan == 1 }]"
        @click="selectPlan(1)"
      >
        <div class="mobile__plan__header">
          <h2 class="font-3 row align-items-center">
            <span class="ml-0_5">پلن رایگان</span>
            <icons-flash v-if="selectedPlan == 1" />
          </h2>
          <label class="bg-error font-6">رایگان</label>
        </div>
        <Transition
          enter-active-class="animate__animated animate__fadeIn "
          mode="in-out"
        >
          <ul class="mobile__plan__body" v-if="plan == 1">
            <li class="mobile__plan__body__item disable">
              <label> بالا بر اتوماتیک </label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>پین در صفحه اصلی</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>پین در صفحه اول آگهی ها</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>ارسال پیامک به خریداران</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>ارسال ایمیل به خریداران</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>تعداد بالابر</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item">
              <label>مدت آگهی (روز)</label>
              <label>30</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد عکس</label>
              <label>5</label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>برچسب همکار</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>آمار بازدید</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>نمایش در پیشنهادات همکار</label>
              <label></label>
            </li>
            <h-button class="m-auto" @click="finallyPlan(1)">ثبت</h-button>
          </ul>
        </Transition>
      </div>
      <div
        :class="['mobile__plan', { active: plan == 2 }]"
        @click="selectPlan(2)"
      >
        <div class="mobile__plan__header">
          <h2 class="font-3 row align-items-center">
            <span class="ml-0_5">استاندارد</span>
            <icons-flash v-if="selectedPlan == 2" />
          </h2>
          <label class="bg-success font-6">
            {{
              splitNumber(plans.filter((f) => f.id == 2)[0].totalPrice)
            }}
            تومان
          </label>
        </div>
        <Transition
          enter-active-class="animate__animated animate__fadeIn "
          leave-active-class="animate__animated animate__slideOutUp "
          mode="in-out"
        >
          <ul class="mobile__plan__body" v-if="plan == 2">
            <li class="mobile__plan__body__item disable">
              <label> بالا بر اتوماتیک </label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>پین در صفحه اصلی</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>پین در صفحه اول آگهی ها</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item disable">
              <label>ارسال پیامک به خریداران</label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item">
              <label>ارسال ایمیل به خریداران</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد بالابر</label>
              <label>3</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>مدت آگهی (روز)</label>
              <label>60</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد عکس</label>
              <label>10</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>برچسب همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>آمار بازدید</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>نمایش در پیشنهادات همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <h-button class="m-auto" @click="finallyPlan(2)">ثبت</h-button>
          </ul>
        </Transition>
      </div>
      <div
        :class="['mobile__plan', { active: plan == 3 }]"
        @click="selectPlan(3)"
      >
        <div class="mobile__plan__header">
          <h2 class="font-3 row align-items-center">
            <span class="ml-0_5"> پر سرعت </span>
            <icons-flash v-if="selectedPlan == 3" />
          </h2>
          <label class="bg-success font-6">
            {{
              splitNumber(plans.filter((f) => f.id == 3)[0].totalPrice)
            }}
            تومان
          </label>
        </div>
        <Transition
          enter-active-class="animate__animated animate__fadeIn "
          leave-active-class="animate__animated animate__slideOutUp "
          mode="in-out"
        >
          <ul class="mobile__plan__body" v-if="plan == 3">
            <li class="mobile__plan__body__item disable">
              <label> بالا بر اتوماتیک </label>
              <label></label>
            </li>
            <li class="mobile__plan__body__item">
              <label>پین در صفحه اصلی</label>
              <label>5 ساعت کامل</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>پین در صفحه اول آگهی ها</label>
              <label>6 ساعت رندوم</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>ارسال پیامک به خریداران</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>ارسال ایمیل به خریداران</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد بالابر</label>
              <label>7</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>مدت آگهی (روز)</label>
              <label>120</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد عکس</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>برچسب همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>آمار بازدید</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>نمایش در پیشنهادات همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <h-button class="m-auto" @click="finallyPlan(3)">ثبت</h-button>
          </ul>
        </Transition>
      </div>
      <div
        :class="['mobile__plan', { active: plan == 4 }]"
        @click="selectPlan(4)"
      >
        <div class="mobile__plan__header">
          <h2 class="font-3 row align-items-center">
            <span class="ml-0_5">توربو</span>
            <icons-flash v-if="selectedPlan == 4" />
          </h2>
          <label class="bg-success font-6">
            {{
              splitNumber(plans.filter((f) => f.id == 4)[0].totalPrice)
            }}
            تومان
          </label>
        </div>
        <Transition
          enter-active-class="animate__animated animate__fadeIn "
          leave-active-class="animate__animated animate__slideOutUp "
          mode="in-out"
        >
          <ul class="mobile__plan__body" v-if="plan == 4">
            <li class="mobile__plan__body__item">
              <label> بالا بر اتوماتیک </label>
              <label>هر 12 ساعت</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>پین در صفحه اصلی</label>
              <label>26 ساعت کامل</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>پین در صفحه اول آگهی ها</label>
              <label>50 ساعت رندوم</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>ارسال پیامک به خریداران</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>ارسال ایمیل به خریداران</label>
              <label>13</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد بالابر</label>
              <label>روزانه اتوماتیک</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>مدت آگهی (روز)</label>
              <label>تا زمان فروش</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>تعداد عکس</label>
              <label>18</label>
            </li>
            <li class="mobile__plan__body__item">
              <label>برچسب همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>آمار بازدید</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <li class="mobile__plan__body__item">
              <label>نمایش در پیشنهادات همکار</label>
              <label>
                <icons-check hash-color="var(--color-green)" />
              </label>
            </li>
            <h-button class="m-auto" @click="finallyPlan(4)">ثبت</h-button>
          </ul>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AdvertisementPlan } from "~~/models/plans/AdvertisementPlan";
import { splitNumber } from "~~/utilities/numberUtils";

const { plans, selectedPlan = 0 } = defineProps<{
  plans: AdvertisementPlan[];
  selectedPlan: number;
}>();
const plan = ref(selectedPlan);
const emit = defineEmits(["planSeleced", ""]);

const selectPlan = (planId: number) => {
  plan.value = planId;
};
const finallyPlan = (planId: number) => {
  emit("planSeleced", planId);
};
</script>