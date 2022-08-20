<template>
  <h-modal
    title="اشتراک گذاری"
    sub-title="با استفاده از روش های زیر میتوانید این صفحه را با دوستان خود به اشتراک بگذارید."
    v-model="modelValue"
  >
    <div class="row wrap share__items">
      <a target="_blank" :href="`https://wa.me/?text=${url}`" class="whatsApp">
        <icons-brands-whats-app />
        واتساپ
      </a>
      <a
        target="_blank"
        :href="`https://t.me/share/Url?url=${url}`"
        class="telegram"
      >
        <icons-brands-telegram />
        تلگرام
      </a>

      <a
        target="_blank"
        :href="`https://twitter.com/intent/tweet?url=${url}`"
        class="twitter"
      >
        <icons-brands-twitter hash-color="white" />
        توییتر
      </a>
      <a
        class="message"
        :href="`mailto:?subject=لینک صفحه در سایت همکار&body=${url}`"
      >
        <icons-message hash-color="white" />
        ایمیل
      </a>
    </div>
    <h-input
      name="search"
      :value="`hamcar.ir${link}`"
      disabled
      class-value="mt-3 copy__input"
    >
      <h-copy
        :text="url"
        hash-color="white"
        class="btn btn-primary font-5 row copy__link"
      >
        کپی لینک
      </h-copy>
    </h-input>
  </h-modal>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const prop = defineProps<{
  modelValue: boolean;
  link: string;
}>();
const url = `https://hamcar.ir${prop.link}`;
watch(
  () => prop.modelValue,
  (val) => {
    emit("update:modelValue", val);
  }
);
</script>

<style >
@media screen and (max-width: 426px) {
  .share__items a {
    width: 165px !important;
  }
}
@media screen and (max-width: 760px) {
  .share__items {
    margin-top: 2rem;
  }
  .copy__link {
    height: 3rem !important;
  }
  .copy__input {
    padding-right: 1rem !important;
    padding-left: 9rem !important;
  }
}
.copy__link {
  width: fit-content;
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  height: 3.5rem;
}
.share__items a {
  width: 184px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: var(--t4-font-size);
  font-family: var(--t4-font-family);
  line-height: 170%;
  font-weight: 400;
  letter-spacing: -0.03em;
  cursor: pointer;
}
.share__items a svg {
  margin-left: 1rem;
}
.whatsApp {
  background: linear-gradient(273.44deg, #28d246 -8.46%, #5ffb7b 104.1%);
}
.telegram {
  background: linear-gradient(272.82deg, #1e96c8 -3.94%, #3db9ef 104.14%);
}
.message {
  background: linear-gradient(273.44deg, #ff5b5b -8.46%, #ff6565 104.1%);
}
.twitter {
  background: linear-gradient(272.82deg, #1da1f2 -3.94%, #33a3e9 104.14%);
}
</style>