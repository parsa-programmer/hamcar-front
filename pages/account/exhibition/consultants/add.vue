<template>
  <div>
    <Form
      @submit="createConsult"
      :validation-schema="formSchema"
      v-slot="{ meta }"
    >
      <p class="title d-mobile-none font-2 color_gray_600">افزودن مشاور</p>
      <div class="card info__card">
        <h5 class="card__title border__after">
          <span> مشخصات مشاور </span>
          <label></label>
        </h5>
        <p class="card__sub-title">
          لطفا نام و نام خانوادگی و شماره موبایل خود را وارد کنید.
        </p>
        <div class="row inputs">
          <div class="row w-full gap-0_5 user">
            <div>
              <h-input
                name="name"
                v-model="consultData.name"
                placeholder="نام"
              />
            </div>
            <div>
              <h-input
                name="family"
                v-model="consultData.family"
                placeholder="نام خانوادگی"
              />
            </div>
          </div>
          <div class="w-full">
            <h-input
              name="phoneNumber"
              number
              v-model="consultData.phoneNumber"
              placeholder="شماره تماس"
            />
          </div>
        </div>
        <div class="line__row">
          <p>نوع دسترسی</p>
          <span class="line"></span>
          <label @click="isOpenRoleModal = true" class="color-blue">{{
            consultData.role
          }}</label>
        </div>
      </div>
      <div class="card mt-1">
        <h5 class="card__title border__after">
          <span> تخصیص آگهی و نردبان </span>
          <label></label>
        </h5>
        <p class="card__sub-title mb-2">
          سقف آگهی و نردبان را تعیین می‌کنید، به صورت خـــــودکار برای روز یا
          ماه بعد تکرار می‌شود.
        </p>

        <div class="line__row">
          <p>نحوه تخصیص آگهی و نردبان</p>
          <span class="line"></span>
          <label class="color-blue" @click="isOpenPeriodTimeModal = true">
            {{ consultData.period }}
          </label>
        </div>
        <div class="line__row">
          <p>
            سقف آگهی مجاز در هر
            <span v-if="consultData.period == 'روزانه'">روز</span>
            <span v-else>ماه</span>
          </p>
          <span class="line"></span>
          <label class="color-blue" @click="isOpenAdvertCountModal = true">
            <template v-if="consultData.advertCount == '0'">نامحدود</template>
            <template v-else>{{ consultData.advertCount }}</template>
          </label>
        </div>
        <div class="line__row">
          <p>
            سقف نردبان مجاز در هر
            <span v-if="consultData.period == 'روزانه'">روز</span>
            <span v-else>ماه</span>
          </p>

          <span class="line"></span>
          <label class="color-blue" @click="isOpenNardebanCountModal = true">
            <template v-if="consultData.nardebanCount == '0'">نامحدود</template>
            <template v-else>{{ consultData.nardebanCount }}</template>
          </label>
        </div>
      </div>
      <div class="row justify-content-flex-end mt-1">
        <h-button
          :disabled="loading || meta.valid == false"
          type="submit"
          :loading="loading"
          size="lg"
          >ثبت اطلاعات</h-button
        >
      </div>
    </Form>
    <h-modal v-model="isOpenRoleModal" title="نوع دسترسی" :mobile-header="true">
      <div class="buttons">
        <div
          :class="['button', { active: consultData.role == 'مشاور' }]"
          @click="consultData.role = 'مشاور'"
        >
          مشاور
        </div>
        <div
          :class="['button', { active: consultData.role == 'مدیر' }]"
          @click="consultData.role = 'مدیر'"
        >
          مدیر
        </div>
      </div>
    </h-modal>
    <h-modal
      v-model="isOpenPeriodTimeModal"
      title="نحوه تخصیص آگهی و نردبان"
      :mobile-header="true"
    >
      <div class="buttons">
        <div
          :class="['button', { active: consultData.period == 'روزانه' }]"
          @click="consultData.period = 'روزانه'"
        >
          روزانه
        </div>
        <div
          :class="['button', { active: consultData.period == 'ماهانه' }]"
          @click="consultData.period = 'ماهانه'"
        >
          ماهانه
        </div>
      </div>
    </h-modal>
    <h-modal
      v-model="isOpenAdvertCountModal"
      :title="
        consultData.period == 'روزانه'
          ? 'سقف آگهی مجاز در هر روز'
          : 'سقف آگهی مجاز در هر ماه'
      "
      sub-title="وارد کردن عدد 0 به معنای نامحدود بودن این  قابلیت است"
      :mobile-header="true"
    >
      <h-input name="advertCount" class="mt-1" v-model="advertCount" number />
      <template #actions>
        <h-button class="btn-default-size" @click="setAdvertCount"
          >تایید</h-button
        >
      </template>
    </h-modal>
    <h-modal
      v-model="isOpenNardebanCountModal"
      :title="
        consultData.period == 'روزانه'
          ? 'سقف نردبان مجاز در هر روز'
          : 'سقف نردبان مجاز در هر ماه'
      "
      sub-title="وارد کردن عدد 0 به معنای نامحدود بودن این  قابلیت است"
      :mobile-header="true"
    >
      <h-input
        name="nardebanCount"
        class="mt-1"
        v-model="nardebanCount"
        number
      />
      <template #actions>
        <h-button class="btn-default-size" @click="setNardebanCount"
          >تایید</h-button
        >
      </template>
    </h-modal>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "#imports";
import { Form } from "vee-validate";
import * as Yup from "yup";
import {
  ConsultantRole,
  PeriodTime,
} from "~~/models/exhibitions/Exhibition.Commands";
import { AddConsultant } from "~~/services/exhibition.service";

definePageMeta({
  layout: "full-screen",
});
useHead({
  title: "افزودن مشاور",
});
const isOpenRoleModal = ref(false);
const isOpenPeriodTimeModal = ref(false);
const isOpenNardebanCountModal = ref(false);
const isOpenAdvertCountModal = ref(false);
const loading = ref(false);

const advertCount = ref("0");
const nardebanCount = ref("0");

const router = useRouter();
const toast = useToast();

const consultData = reactive({
  phoneNumber: "",
  name: "",
  family: "",
  role: "مشاور",
  period: "روزانه",
  advertCount: "0",
  nardebanCount: "0",
});
const formSchema = Yup.object().shape({
  name: Yup.string().required().label("نام"),
  family: Yup.string().required().label("نام خانوادگی"),
  //@ts-ignore
  phoneNumber: Yup.string().required().label("شماره تلفن").phoneNumber(),
});
const setAdvertCount = () => {
  consultData.advertCount = advertCount.value;
  isOpenAdvertCountModal.value = false;
};
const setNardebanCount = () => {
  consultData.nardebanCount = nardebanCount.value;
  isOpenNardebanCountModal.value = false;
};

const createConsult = async () => {
  loading.value = true;

  var res = await AddConsultant({
    role:
      consultData.role == "مشاور"
        ? ConsultantRole.employee
        : ConsultantRole.manager,
    periodTime:
      consultData.period == "روزانه" ? PeriodTime.daily : PeriodTime.monthly,
    advertisementCount: Number(consultData.advertCount),
    nardebanCount: Number(consultData.nardebanCount),
    name: consultData.name,
    family: consultData.family,
    phoneNumber: consultData.phoneNumber,
  });
  loading.value = false;
  if (res.isSuccess) {
    toast.showToast("مشاور با موفقیت ثبت شد");
    router.push("/account/exhibition/consultants");
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .card {
    padding: 0 !important;
  }
  .inputs {
    flex-direction: column;
  }
  .user input {
    width: 100%;
    flex-grow: 1;
  }
  .user {
    justify-content: space-between;
  }
  form button {
    margin-top: 2rem;
  }
  .line__row {
    margin-top: 2rem !important;
    position: relative;
    z-index: 1;
    gap: 1rem;
    align-items: center;
  }
  .line__row p {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
  }
  .line__row label {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .info__card .line__row {
    margin-top: 1.5rem !important;
    margin-bottom: 48px;
  }
  .title {
    display: block !important;
    position: relative !important;
    top: 0 !important;
    color: var(--color-black);
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
    margin-bottom: 3rem;
  }
  .border__after {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .border__after label {
    height: 1px;
    background: var(--color-gray-300);
    flex-grow: 1;
  }
  .btn-default-size {
    width: 100% !important;
  }
}
.info__card .line__row {
  margin-top: 40px;
}
.card {
  padding: 50px 104px;
}
.title {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 0);
}
.line__row {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  position: relative;
  z-index: 1;
  gap: 1rem;
  align-items: center;
}
.line__row p {
  color: var(--color-black-200);
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  width: fit-content;
}
.line__row label {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  cursor: pointer;
}
/* .line__row::after {
  content: " ";
  background: var(--color-gray-300);
  width: 82%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 47.5%;
  z-index: -1;
  transform: translate(-50%, 0);
} */
.line__row .line {
  background: var(--color-gray-300);
  height: 1px;
  flex-grow: 1;
}

.buttons {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid var(--color-gray-300);
  border-radius: var(--app-border-radius);
  display: flex;
  margin-top: 1rem;
  height: 72px;
}
.button {
  border-radius: 12px;
  background: transparent;
  width: 50%;
  color: var(--color-black);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.button.active {
  background: var(--color-blue);
  color: white !important;
}
</style>