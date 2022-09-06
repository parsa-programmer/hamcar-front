<template>
  <div class="row wrapper">
    <Head>
      <Title>ثبت نام نمایشگاه</Title>
    </Head>
    <template v-if="accountStore.loading">
      <div class="w-full">
        <h-skeletor height="300px" />
      </div>
      <div class="w-full">
        <h-skeletor height="500px" />
      </div>
    </template>
    <template v-else>
      <div class="banner">
        <img class="d-mobile-none" src="/img/exhibition.png" />
        <img class="d-mobile-block" :src="MobileImage" />
      </div>
      <Form
        class="row card grow-1"
        @submit="register"
        :validation-schema="schema"
        v-slot="{ meta }"
      >
        <div class="w-full">
          <p class="p">نام نمایشگاه</p>
          <h-input name="title" v-model="title" />
        </div>

        <div class="w-full">
          <p class="p">نام و نام خانوادگی مدیر نمایشگاه</p>
          <h-input name="fullName" v-model="fullName" />
        </div>

        <div class="w-full">
          <p class="p">شماره تلفن همراه</p>
          <h-input name="phoneNumber" number v-model="phoneNumber" />
        </div>

        <div class="w-full">
          <p class="p">آپلود تصویر جواز کسب</p>
          <div class="image__uploader">
            <input
              name="javaz"
              type="file"
              ref="uploader"
              style="opacity: 0"
              @change="uploadImage"
              accept=".png,.jpg"
            />
            <div class="selector">
              <img :src="image" />
              <h-button outline type="button" @click="openUploader">
                <div class="row align-items-center gap-0_5">
                  <icons-add />
                  <p>انتخاب فایل</p>
                </div>
              </h-button>
            </div>
            <div class="row footer justify-content-space-around">
              <ul>
                <li><p>Formats:png,jpg</p></li>
                <li><p>Max Size:5 MB</p></li>
              </ul>
              <ul>
                <li><p>Dimension: 1280px × 720px</p></li>
                <li><p>No Effects or Filters</p></li>
              </ul>
            </div>
          </div>
        </div>

        <h-button
          :loading="loading"
          :disabled="loading || meta.valid == false || javaz == null"
          class="w-full"
          type="submit"
          >ارسال مدارک و مشخصات</h-button
        >
      </Form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { url } from "inspector";
import { ToastType } from "~~/composables/useToast";
import { ImageDimensions } from "~~/utilities/objectUtils";
import { Register } from "~~/services/exhibition.service";
//@ts-ignore
import MobileImage from "~~/assets/img/exhibition-mobile.png";
import { useAccountStore } from "~~/stores/account.store";
definePageMeta({
  layout: "login-layout",
});
const uploader: Ref<HTMLElement | null> = ref(null);
const toast = useToast();
const accountStore = useAccountStore();

const title = ref("");
const fullName = ref("");
const phoneNumber = ref("");
const javaz = ref(null);
const router = useRouter();

const loading = ref(false);

const schema = Yup.object().shape({
  title: Yup.string().required().label("نام نمایشگاه"),
  fullName: Yup.string().required().label("نام و نام خانوادگی"),
  //@ts-ignore
  phoneNumber: Yup.string().required().label("شماره تلفن همراه").phoneNumber(),
});
const image = ref("/img/placeholder.png");
watch(javaz, (val) => {
  if (val == null) {
    image.value = "/img/placeholder.png";
    return;
  }
  image.value = URL.createObjectURL(val);
});
const register = async () => {
  if (!fullName.value || !title.value || !phoneNumber.value || !javaz.value) {
    toast.showToast("اطلاعات را به صورت کامل وارد کنید", ToastType.error);
    return;
  }
  const formData = new FormData();
  formData.append("FullName", fullName.value);
  formData.append("Title", title.value);
  formData.append("PhoneNumber", phoneNumber.value);
  formData.append("Javaz", javaz.value);

  loading.value = true;
  var res = await Register(formData);
  loading.value = false;
  if (res.isSuccess) {
    toast.showToast("ثبت نام با موفقیت انجام شد");
    await router.push("/account/exhibition/register/finally");
  }
};

const openUploader = () => {
  uploader.value?.click();
};
const uploadImage = async (e: any) => {
  if (e.target.files[0]) {
    var file = e.target.files[0];
    let fileSize = file.size;
    let fileSizeInMeg = fileSize / 1024 / 1024;
    if (fileSizeInMeg > 5) {
      toast.showToast("حجم فایل بیشتر از 5 مگابایت است", ToastType.error);
      return;
    }
    javaz.value = file;
  } else {
    javaz.value = null;
  }
};

onMounted(async () => {
  if (accountStore.exhibition) {
    await router.push("/account");
    toast.showToast("شما قبلا ثبت نام کرده اید", ToastType.error);
    return;
  }
  phoneNumber.value = accountStore.user.phoneNumber;
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }
  .banner {
    display: flex;
    justify-content: center;
  }
  .banner img {
    margin-bottom: 48px;
  }
  .selector {
    height: 352px !important;
  }
  .image__uploader {
    padding: 1rem !important;
    gap: 1.5rem !important;
  }
}
.p {
  margin-bottom: 4px;
  display: block;
}
.row.card {
  flex-direction: column;
  gap: 2rem;
}
.image__uploader {
  border: 2px solid var(--color-gray-300);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
}
.image__uploader .selector {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 51px;
  justify-content: flex-end;
  align-items: center;
  height: 258px;
  background: var(--color-gray-200);
  border: 2px dashed var(--color-gray-400);
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  padding: 2rem;
}
.selector button {
  z-index: 2;
}
.selector img {
  position: absolute;
  width: 98%;
  height: 98%;
  top: 1%;
  border-radius: 10px;
  z-index: 1;
}
.image__uploader input {
  position: fixed;
  left: -100%;
  top: -100%;
}
.image__uploader ul li {
  list-style: disc;
  direction: ltr;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-green);
  text-align: left !important;
  margin-bottom: 1px;
}
ul li p {
  color: var(--color-black-200);
}
.footer {
  flex-direction: row-reverse;
}
</style>