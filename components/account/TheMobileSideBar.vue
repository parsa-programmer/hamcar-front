<template>
  <div :class="['bottom__sheet', { 'bottom__sheet-close': isOpen == false }]">
    <Transition
      enter-active-class="animate__animated  animate__fadeIn animate__faster"
    >
      <div
        class="bottom__sheet-background"
        v-if="isOpen"
        @click.self="() => (isOpen = false)"
      ></div>
    </Transition>
    <div class="sheet__wrapper">
      <div class="bottom__sheet-botton" @click="isOpen = true">
        <account-icons-bottom-sheet-header v-model="isOpen" />
      </div>
      <div class="botton__sheet-content">
        <div class="item active">
          <nuxt-link class="item-icon">
            <icons-menu />
          </nuxt-link>
          صفحه اصلی
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <account-icons-adverts />
          </nuxt-link>
          آگهی های من
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-save hash-color="#CD6AFF" :width="23" :height="28" />
          </nuxt-link>
          ذخیره شده ها
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-notification hash-color="#0FE784" :width="23" :height="28" />
          </nuxt-link>
          گوش به زنگ
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-parking hash-color="#F724D5" :width="28" :height="28" />
          </nuxt-link>
          پارکینگ
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <account-icons-comment />
          </nuxt-link>
          پیام های من
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-wallet :width="28" :height="28" hash-color="#FFD600" />
          </nuxt-link>
          لیست تراکنش ها
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-edit :width="28" :height="28" hash-color="#5B6CFF" />
          </nuxt-link>
          یادداشت ها
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-megaphone hash-color="#07DCD5" />
          </nuxt-link>
          پکیج ها
        </div>
        <div class="item">
          <nuxt-link class="item-icon">
            <icons-exit :width="26" :height="28" />
          </nuxt-link>
          خروج
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const isOpen: Ref<boolean> = ref(true);
</script>

<style scoped>
.item.active .item-icon {
  background: var(--color-gray-200);
}
.item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-black-200);
  font-family: var(--t7-font-family);
  font-size: var(--t7-font-size);
  line-height: 18px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  flex-grow: 1;
  width: 70px;
  text-align: center;
}
.item-icon {
  border: 2px solid var(--color-gray-200);
  background: transparent;
  border-radius: 20px;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botton__sheet-content {
  padding: 26px;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.bottom__sheet-botton svg {
  top: -50px;
  width: 100%;
  position: absolute;
}
.bottom__sheet-close {
  z-index: 0 !important;
  height: fit-content !important;
}
.bottom__sheet {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.bottom__sheet-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0f0f1075;
  top: 0;
  right: 0;
  z-index: 200;
}
.sheet__wrapper {
  background: var(--color-white);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: fit-content;
  z-index: 300;
  transition: all ease 0.2s;
}

.bottom__sheet-close .sheet__wrapper {
  bottom: -7rem;
  background: transparent !important;
}
</style>