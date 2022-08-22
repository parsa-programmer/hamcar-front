<template>
  <Form  @submit="validate" :validation-schema="schema" v-slot="{ meta }" class="login__container">
    <p class="login__label">
      کد تایید یکبار مصرف به شماره {{ phoneNumber }} پیامک شد; لطفا کد ارسال شده
      را در کادر زیر وارد نمایید.
    </p>

    <h-input
      name="code"
      number
      class="text-center"
      maxlength="5"
      v-model="code"
      placeholder="کد تایید"
    />
    <h-button class="btn-sm" :disabled="time>0" @click="sendAgain">
      ارسال مجدد کد
      {{ convertMsToMinutesSeconds(time) }}
    </h-button>
    <div
      class="row"
      style="justify-content: space-between; align-items: center"
    >
      <div class="registration__accept-rules row">
        <p>
          شماره ام را اشتباه وارد کرده ام.
          <a @click="editPhoneNumber" class="cursor-pointer">ویرایش شماره</a>
        </p>
      </div>
      <h-button
        :disabled="loading || meta.valid == false"
        class="btn-default-size"
        :loading="loading"
        type="submit"
      >
        تایید کد
      </h-button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {ref} from "#imports"
import { useAuth } from "~~/composables/auth/useAuth";
import { authStore } from "~~/stores/auth.store";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { convertMsToMinutesSeconds } from "~/utilities/numberUtils";

const emit = defineEmits(["toggleLoginStep", "successed"]);
const { validateCode, login, loading } = useAuth();
const store = authStore();
const code = ref("");
const time = ref(120000);
const phoneNumber = store.phoneNumber;
const schema = Yup.object().shape({
  code: Yup.string()
    .min(5, "کد تایید نامعتبر است")
    .required()
    .label("کد تایید"),
});
let counterInterval: any = null;

const sendAgain = async () => {
  var isSuccess = await login(phoneNumber);
  if (isSuccess) {
    time.value = 120000;
    clearInterval(counterInterval);
    setTimer();
  } else {
  }
};
const validate = async (d: any, actions: any) => {
  var isSuccess = await validateCode(phoneNumber, code.value);
  if (isSuccess) {
    emit("successed");
  } else {
    actions.setFieldError("code", "کد تایید نامعتبر است");
  }
};
onMounted(() => {
  setTimer();
});
const setTimer = () => {
  counterInterval = setInterval(() => {
    if (time.value > 0) {
      time.value -= 1000;
    } else {
      clearInterval(counterInterval);
    }
  }, 1000);
};
const editPhoneNumber = () => {
  emit("toggleLoginStep", 1);
};
</script>

<style scoped>
.btn-default-size {
  margin-top: 1.5rem;
}
</style>