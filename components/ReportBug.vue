<template>
  <Form
    @submit="sendReport"
    :validation-schema="reportSchema"
    v-slot="{ meta }"
  >
    <div class="radio-group mt-1">
      <div class="radio-group__col">
        <h-input
          type="radio"
          class="radio__input radio"
          value="برند یا مدل صحیح نیست"
          name="title"
          :ignore-error-message="true"
          v-model="title"
          input-id="radio1"
        >
          برند یا مدل صحیح نیست
          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
        </h-input>
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio2"
          value="عکس‌های خودرو مناسب نیست"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
          عکس‌های خودرو مناسب نیست
        </h-input>
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio3"
          value="مشخصات فنی صحیح نیست"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          مشخصات فنی صحیح نیست

          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
        </h-input>
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio4"
          value="توضیحات خودرو صحیح نیست"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          توضیحات خودرو صحیح نیست

          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
        </h-input>
      </div>
      <div class="radio-group__col">
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio5"
          value="کارکرد صحیح نیست"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
          کارکرد صحیح نیست
        </h-input>
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio6"
          value="قیمت صحیح نیست"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
          قیمت صحیح نیست
        </h-input>
        <h-input
          type="radio"
          class="radio__input radio"
          input-id="radio7"
          value="سایر موارد"
          name="title"
          v-model="title"
          :ignore-error-message="true"
        >
          <template #custom_marker>
            <span class="radio__circle"></span>
          </template>
          سایر موارد
        </h-input>
      </div>
    </div>
    <span class="modal__line"></span>
    <div v-if="aStore.isLogin == false" class="mt-1">
      <div class="form__header">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5366 14.88C13.2455 15.3793 13.9887 15.7992 14.7547 16.117C15.2304 16.2895 15.9768 15.801 16.5256 15.4418C16.6628 15.3521 16.7877 15.2704 16.8928 15.2091L16.9274 15.1897C17.4443 14.8994 18.0184 14.577 18.7565 14.7324C19.4197 14.8686 21.695 16.6617 22.3238 17.2972C22.7355 17.7058 22.9641 18.137 22.9984 18.5796C23.067 20.2252 20.8603 22.0751 20.3344 22.3928C19.2139 23.2099 17.7161 23.1986 15.9096 22.3815C13.9773 21.5984 11.6677 19.9528 9.43809 17.9555C8.63997 17.2405 7.10729 15.7351 6.67111 15.2323C4.41867 12.7923 2.52068 10.1708 1.62885 8.04858C1.20581 7.15203 1 6.32358 1 5.58591C1 4.8596 1.20581 4.21272 1.60599 3.65663C1.84609 3.23673 3.77839 0.944291 5.482 1.00104C5.90505 1.04643 6.33953 1.26205 6.76258 1.67061C7.40286 2.29479 9.24369 4.55318 9.38089 5.22275C9.53743 5.94415 9.21284 6.51359 8.92041 7.02661L8.90068 7.06125C8.83477 7.17512 8.74541 7.3102 8.64772 7.45788C8.28784 8.00192 7.81488 8.71689 7.98484 9.1721C8.40903 10.2162 9.01501 11.2376 9.74563 12.1795C10.5565 13.149 11.8277 14.3806 12.5366 14.88Z"
            stroke="#85858F"
            stroke-width="2"
          ></path>
        </svg>
        تلفن همراه
      </div>
      <h-input
        name="phoneNumber"
        class="form__input-mobile"
        :number="true"
        v-model="phoneNumber"
        placeholder="09141230000"
      />
    </div>
    <h-textarea
      name="description"
      placeholder="توضیحات ..."
      v-model="description"
      class="mt-1"
    />
    <h-button
      class="modal__submit-btn"
      :disabled="loading || meta.valid == false"
      :loading="loading"
    >
      ارسال گزارش
    </h-button>
  </Form>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { ref } from "#imports";
import { Ref } from "vue";
import { BugReportFor } from "~~/services/bugReport.service";
import { authStore } from "~~/stores/auth.store";
import * as Yup from "yup";
import { SendBugReport } from "~~/services/bugReport.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { IApiResponse } from "~~/models/IApiResponse";

const loading = ref(false);
const title: Ref<string> = ref("");
const phoneNumber: Ref<string> = ref("");
const description: Ref<string> = ref("");
const reportFor: Ref<BugReportFor | null> = ref(null);
const aStore = authStore();
const toast = useToast();

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<{
  reportFor: BugReportFor;
  linkId: string;
}>();

reportFor.value = props.reportFor;
const reportSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "توضیحات باید بیشتر از 10 کاراکتر باشد")
    .required("لطفا توضیحات خود را وارد کنید"),
  title: Yup.string().required("لطفا عنوان خود را وارد کنید"),
});
const sendReport = async () => {
  var result = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      SendBugReport({
        description: description.value,
        reportFor: props.reportFor,
        title: title.value,
        linkId: props.linkId,
      }),
    loading
  );
  if (result.isSuccess) {
    toast.showToast("گزارش شما با موفقیت ثبت شد");
    emit("update:modelValue", false);
  }
};
onMounted(() => {
  if (aStore.isLogin) {
    phoneNumber.value = aStore.user!.phoneNumber??"";
  }
});
</script>

<style>
</style>