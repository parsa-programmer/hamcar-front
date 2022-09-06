<template>
  <div class="row">
    <img :src="Certificate" />
    <h6 class="font-2">
      اطلاعات و ﻣﺪارک ﺷﻤﺎ ﺑﻪ درﺳﺘﯽ ارﺳﺎل ﺷﺪ و ما درﺣﺎل اﺣﺮاز آن‌ها ﻫﺴﺘﻴﻢ!
    </h6>
    <p class="desc">
      نتیجه احراز هویت در کمتر از ۲۴ ساعت آینده توسط پیامک به شما اطلاع رسانی
      خواهد شد.
    </p>
    <h-button @click="goToPanel" class="font-4">بازگشت به پنل کاربری</h-button>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import Certificate from "~~/assets/img/certificate.png";

const goToPanel=()=>{
  location.replace('/account')
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  button {
    width: 100%;
    margin-top: 56px;
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  h6 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
    text-align: right;
    letter-spacing: -0.03em;
  }
  .desc {
  font-family: var(--t6-font-family) !important;
  font-size: var(--t6-font-size) !important;
  color: var(--color-gray-600) !important;
}
}
.row {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  width: 340px;
  height: 270px;
}
.desc {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  color: var(--color-black-300);
}
</style>