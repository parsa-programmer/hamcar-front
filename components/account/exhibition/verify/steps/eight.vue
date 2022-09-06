<template>
  <div>
    <div class="row  mt-">
      <span class="icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_7096_58162" fill="white">
            <path
              d="M0 10C0 18.235 1.765 20 10 20C18.235 20 20 18.235 20 10C20 1.765 18.235 0 10 0C1.765 0 0 1.765 0 10Z"
            />
          </mask>
          <path
            d="M0 10C0 18.235 1.765 20 10 20C18.235 20 20 18.235 20 10C20 1.765 18.235 0 10 0C1.765 0 0 1.765 0 10Z"
            stroke="var(--color-black)"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            mask="url(#path-1-inside-1_7096_58162)"
          />
          <path
            d="M9.16797 14.1654C9.16797 13.7051 9.54106 13.332 10.0013 13.332C10.4615 13.332 10.8346 13.7051 10.8346 14.1654C10.8346 14.6256 10.4615 14.9987 10.0013 14.9987C9.54106 14.9987 9.16797 14.6256 9.16797 14.1654Z"
            fill="var(--color-black)"
          />
          <path
            d="M10 5.83203L10 10.832"
            stroke="var(--color-black)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <icons-danger class="d-mobile-none" />

      <p class="desc">
        معرفی نامه نماینده جهت ثبت در پروفایل و رسیدگی به تمامی امور مرتبط با
        درج آگهی، واریز و تمدید و غیره الزامی می باشد. لازم به ذکر است مشخصات
        دسترسی و ورود به پروفایل تنها به شماره موبایل ذکر شده در معرفی نامه
        نماینده که به مهر و امضای مالک نمایشگاه رسیده باشد ارسال خواهد شد.
      </p>
    </div>
    <h-drop-zone
      :formats="['jpg', 'png']"
      :multiple="false"
      :max-file="1"
      :init-data="
        registerData.MoarefiName == null ? [] : [registerData.MoarefiName]
      "
      @get-files="setFile"
    />
  </div>
</template>
    
    <script setup lang="ts">
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const registerData = useExhibitionRegister();

const setFile = (file: any) => {
  if (!file[0]) {
    registerData.MoarefiName = null;
    return;
  }
  registerData.MoarefiName = file[0][0] ?? null;
};
</script>
    
    <style scoped>
@media screen and (max-width: 768px) {
  .icon {
    background: var(--color-gray-200);
    width: 40px;
    height: 40px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  .desc {
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
    flex-grow: 1;
    width: 87%;
    text-align: justify;
  }
}
.desc {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  color: var(--color-black-200);
  width: 100%;
  align-self: flex-start !important;
}
.icon {
  display: none;
}
</style>