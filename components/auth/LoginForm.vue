<template>
  <div class="login">
    <h2 class="login__title">به وبسایت همکار خوش آمدید!</h2>
    <p class="login__caption">
      کاربر گرامی، خواهشمندیم جهت ورود به حساب کاربری و استفاده از خدمات همکار،
      شماره تلفن همراه خود را در کادر زیر وارد نمایید.
    </p>
    <p class="login__label">
      برای ورود و یا ثبت نام در همکار شماره موبایل خود را وارد کنید.
    </p>
    <Form @submit="register" :validation-schema="loginSchema" v-slot="{ meta }">
      <clear-input
        number
        name="phone"
        maxlength="11"
        placeholder="مثال :09351500000"
        autofocus
        v-model="phoneNumber"
      ></clear-input>
      <h-button
        class="login__submit"
        :disabled="loading || meta.valid == false"
        type="submit"
        :loading="loading"
      >
        تایید و ادامه
      </h-button>
    </Form>
    <div class="login__term">
      <h-icon :icon="Icon.check" />
      <p>
        با ورود به همکار،
        <a href="#">شرایط و قوانین</a>
        آن را می پذیرم.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { authStore } from "~~/stores/auth.store";
import { Icon } from "~~/models/utilities/Icon";
import { useAuth } from "~~/composables/auth/useAuth";

const emit = defineEmits(["toggleLoginStep"]);
const store = authStore();
const { login, loading } = useAuth();

const phoneNumber = ref("");

const loginSchema = Yup.object().shape({
  // @ts-ignore
  phone: Yup.string().required().label("شماره موبایل").phoneNumber(),
});

const register = async () => {
  var isSuccess = await login(phoneNumber.value);
  if (isSuccess) {
    store.setPhoneNumber(phoneNumber.value);
    emit("toggleLoginStep", 2);
  }
};
</script>

