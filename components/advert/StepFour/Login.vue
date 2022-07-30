<template>
  <Form
    @submit="loginUser"
    :validation-schema="loginSchema"
    v-slot="{ meta }"
    class="login__container"
  >
    <p class="title">شماره تماس</p>
    <h-input
      number
      name="phone"
      v-model="phoneNumber"
      placeholder="مثال 09125000000"
      maxlength="11"
    />
    <div
      class="row"
      style="justify-content: space-between; align-items: center"
    >
      <div class="registration__accept-rules row">
        <h-icon :icon="Icon.check" />
        <p>
          با ورود به همکار،
          <a href="#">شرایط و قوانین</a>
          آن را می پذیرم.
        </p>
      </div>
      <h-button
        :disabled="loading || meta.valid == false"
        class="btn-default-size"
        :loading="loading"
        type="submit"
      >
        ورود
      </h-button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";
import { useAuth } from "~~/composables/auth/useAuth";
import { Icon } from "~~/models/utilities/Icon";
import { authStore } from "~~/stores/auth.store";

const { login, loading } = useAuth();
const auth = authStore();
const emit = defineEmits(["toggleLoginStep"]);
const phoneNumber = ref("");
const loginSchema = Yup.object().shape({
  // @ts-ignore
  phone: Yup.string().required().label("شماره موبایل").phoneNumber(),
});

const loginUser = async () => {
  var res = await login(phoneNumber.value);
  if (res) {
    emit("toggleLoginStep", 2);
    auth.setPhoneNumber(phoneNumber.value);
  }
};
</script>
<style scoped>
.title {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  margin-bottom: 4px;
  line-height: 36px;
  font-weight: 500;
}
.btn-default-size {
  margin-top: 1.5rem;
}
.registration__accept-rules a {
  border: none !important;
  font-family: var(--t5-font-family) !important;
  font-size: var(--t5-font-size) !important;
}
</style>