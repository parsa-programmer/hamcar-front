<template>
  <div>
    <template v-if="utilStore.isMobile">
      <div>
        <div>
          <h2 class="page__sub__title">{{ pageTitle }}</h2>
        </div>
        <div class="mobile__plan__list">
          <div
            :class="['mobile__plan', { active: selectedPlan == item.id }]"
            @click="selectPlan(item.id)"
            v-for="(item, index) in packages"
            :key="index"
          >
            <div class="mobile__plan__header">
              <h2 class="font-3 row align-items-center">
                <span class="ml-0_5">{{ item.title }}</span>
              </h2>
              <label class="bg-success font-6"
                >{{ splitNumber(item.totalPrice) }} تومان</label
              >
            </div>
            <Transition
              enter-active-class="animate__animated animate__fadeIn "
              mode="in-out"
            >
              <ul class="mobile__plan__body" v-if="selectedPlan == item.id">
                <li
                  :class="[
                    'mobile__plan__body__item',
                    { disable: detail == false || detail == '' },
                  ]"
                  v-for="(detail, index2) in item.details"
                  :key="`det-${index2}`"
                >
                  <label>{{ titles[index2] ?? "" }}</label>
                  <label v-if="typeof detail == 'string'">{{ detail }}</label>
                  <label v-if="typeof detail == 'boolean' && detail == true">
                    <icons-check hash-color="var(--color-green)" />
                  </label>
                </li>

                <h-button class="m-auto" @click="finallyPlan(item.id)"
                  >ثبت</h-button
                >
              </ul>
            </Transition>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="row plan__page__header">
        <div>
          <h2 class="page__sub__title">{{ pageTitle }}</h2>
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
            <p v-for="(item, index) in titles" :key="index">{{ item }}</p>
          </div>
        </div>
        <div
          v-for="(item, index) in packages"
          :key="index"
          @click="selectPlan(item.id)"
          :class="['plan__item', { active: selectedPlan == item.id }]"
        >
          <div class="plan__header">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="plan__facilities">
            <p v-for="(detail, index) in item.details" :key="`detail-${index}`">
              <icons-close-box
                hash-color="var(--color-error)"
                v-if="detail == false"
              />
              <icons-check
                hash-color="var(--color-green)"
                v-if="detail == true"
              />
              <template v-if="typeof detail =='string' || typeof detail == 'number'">
                {{ detail }}
              </template>
            </p>
          </div>
          <div :class="['plan__footer', { active: selectedPlan == item.id }]">
            <div class="old__price">
              {{ splitNumber(item.price) }}
              <span class="discount">10%</span>
            </div>
            <div class="new__price">
              {{ splitNumber(item.price) }} <span>تومان</span>
            </div>
          </div>
        </div>
      </div>
      <h-button
        class="pull-left pay__btn"
        @click="finallyPlan"
        :disabled="selectedPlan == 0"
        >پرداخت</h-button
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Package } from "~~/models/utilities/Package";
import { UseUtilStore } from "~~/stores/util.store";
import { splitNumber } from "~~/utilities/numberUtils";

const props = defineProps<{
  titles: string[];
  packages: Package[];
  pageTitle: string;
}>();

const emit = defineEmits(["finally"]);

const selectedPlan = ref(0);
const utilStore = UseUtilStore();

const selectPlan = (id: number) => {
  selectedPlan.value = id;
};
const finallyPlan = (id: number = 0) => {
  if (id > 0) {
    emit("finally", id);
    return;
  }
  emit("finally", selectedPlan.value);
};
</script>

<style scoped>
.plan__page__header {
  justify-content: space-between;
  align-items: flex-start;
}

.pay__btn {
  margin-top: 44px;
}

@media screen and (max-width: 1399px) {
  .plan__item {
    width: auto !important;
    flex-grow: 2;
  }
}

.plan__text {
  margin-top: 0.5rem;
  cursor: auto !important;
  flex-grow: 1;
}

.plan__text .plan__header {
  background: transparent !important;
}

.plan__text .plan__facilities {
  background: transparent !important;
}

.plan__text .plan__facilities p {
  font-size: var(--t4-font-size);
  font-family: var(--t4-font-family);
  font-weight: 800;
  text-align: right;
  color: var(--color-black);
  letter-spacing: -0.02em;
  line-height: 25px;
  padding-top: 14px;
  padding-bottom: 12px;
}

.plan__item.active .plan__facilities {
  border: 2px solid var(--color-blue);
}

.plan__item.active .plan__header {
  background: var(--color-blue) !important;
  color: #fff !important;
}

.plan__item .plan__header svg {
  position: absolute;
  left: 1rem;
  top: 20px;
}

.plan__item.active .plan__header h4 {
  color: #fff !important;
}

.plan__item {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease 0.2s;
  position: relative;
  flex-grow: 1;
}

.plan__item:hover {
  filter: drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.08));
}

.plan__item .plan__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-gray-300);
  border-radius: 20px 20px 0px 0px;
  height: 111px;
}

.plan__item .plan__header h4 {
  font-size: var(--t2-font-size);
  font-family: var(--t2-font-family);
  line-height: 32px;
  font-weight: 800;
  color: var(--color-black);
}

.plan__item .plan__header p {
  font-size: var(--t3-font-size);
  font-family: var(--t3-font-family);
  line-height: 180%;
  font-weight: 500;
  color: var(--color-black-200);
  background: var(--color-gray-200);
  width: 87%;
  margin: 0.5rem;
  text-align: center !important;
  border-radius: 8px;
}

.plan__facilities {
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0;
}

.plan__facilities p {
  border-bottom: 1px solid var(--color-gray-300);
  width: 100%;
  padding: 13px;
  padding-bottom: 4px;
  height: 51px;
}

.plan__facilities p:last-child {
  border: none !important;
}

.plan__footer.active {
  background: var(--color-blue) !important;
  color: #fff !important;
}
.plan__footer {
  background: var(--color-blue);
  color: var(--color-white);
  background: var(--color-gray-300);
  padding: 1.5rem 53px;
  color: black;
  text-align: center;
  border-radius: 0px 0px 20px 20px;
}
.plan__footer.active .old__price {
  color: var(--color-gray-400) !important;
}
.plan__footer .old__price {
  color: var(--color-gray-600);
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  text-decoration: line-through;
}
.plan__footer .discount {
  border-radius: 4px;
  color: white;
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
  padding: 0 5px 0 5px;
  position: relative;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='46' height='20' viewBox='0 0 46 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34.5518 0L4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20L34.5518 20C35.4875 20 36.3937 19.6719 37.1125 19.0729L44.3125 13.0729C46.2316 11.4737 46.2316 8.5263 44.3125 6.92712L37.1125 0.927115C36.3937 0.328065 35.4875 0 34.5518 0Z' fill='%23EF3838'/%3E%3C/svg%3E%0A");
  background-size: contain;
  background-repeat: no-repeat;
  width: 48px;
  text-align: left;
  display: inline-block;
  margin-right: 6px;
}

.mobile__plan button {
  width: 184px;
  height: 48px;
}
.mobile__plan__body li {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.mobile__plan__body li label:last-child {
  color: var(--color-black-200);
}
.mobile__plan__body li label {
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  font-weight: 500;
  color: var(--color-black);
  text-align: right;
}
.mobile__plan__body li.disable label {
  color: var(--color-gray-500) !important;
}
.mobile__plan__body li.disable::before {
  background-color: var(--color-error) !important;
}
.mobile__plan__body li::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 3px;
  transform: rotate(45deg);
  background-color: var(--color-green);
}
.mobile__plan.active .mobile__plan__body {
  display: block;
}
.mobile__plan.active .mobile__plan__header {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-gray-200);
  border-radius: 3px;
}
.mobile__plan.active {
  background: transparent !important;
}
.mobile__plan__body {
  margin-top: 1.5rem;
  display: none;
}
.mobile__plan__body li label:first-child {
  margin-right: 1rem;
}
.mobile__plan {
  border: 2px solid var(--color-gray-200);
  padding: 20px 24px;
  background: var(--color-gray-200);
  border-radius: 1rem;
  margin-top: 1rem;
}
.mobile__plan .mobile__plan__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mobile__plan__header h2 {
  font-weight: 800;
}
.mobile__plan__header label {
  padding: 6px 24px;
  border-radius: 1rem;
}
</style>