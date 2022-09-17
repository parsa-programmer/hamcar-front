<template>
  <div>
    <Head>
      <Title>همکار</Title>
    </Head>
    <section class="info">
      <div class="container">
        <div class="info__wrapper">
          <div class="input-group info__search-box">
            <input
              type="text"
              class="form-control light-border"
              placeholder="جستجو میان همه آگهی ها..."
            />
            <svg
              class="input-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M0.75 9.56522C0.75 12.7584 1.48072 14.916 2.85325 16.2857C4.22608 17.6557 6.3841 18.3804 9.56522 18.3804C12.7462 18.3804 14.9043 17.6554 16.2772 16.2852C17.6497 14.9153 18.3804 12.7576 18.3804 9.56522C18.3804 6.37281 17.6497 4.21516 16.2772 2.84522C14.9043 1.475 12.7462 0.75 9.56522 0.75C6.3841 0.75 4.22608 1.47469 2.85325 2.84472C1.48072 4.21445 0.75 6.37206 0.75 9.56522Z"
                stroke="#C6C7CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.1326 19.1304L16.8203 16.8182"
                stroke="#C6C7CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="info__lists">
            <div
              :class="[
                'info__item cursor-pointer',
                { 'info__item--active': selectedTab == 0 },
              ]"
              @click="selectedTab = 0"
            >
              شاسی
            </div>
            <div
              :class="[
                'info__item cursor-pointer',
                { 'info__item--active': selectedTab == 1 },
              ]"
              @click="selectedTab = 1"
            >
              برند
            </div>
            <div
              :class="[
                'info__item cursor-pointer',
                { 'info__item--active': selectedTab == 2 },
              ]"
              @click="selectedTab = 2"
            >
              سال ساخت
            </div>
            <div
              :class="[
                'info__item cursor-pointer',
                { 'info__item--active': selectedTab == 3 },
              ]"
              @click="selectedTab = 3"
            >
              میانبر
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-content">
      <landing-chassis v-if="selectedTab == 0" :data="data?.data ?? []" />
      <landing-brand v-if="selectedTab == 1" />
      <landing-years v-if="selectedTab == 2" />
      <landing-shortcut v-if="selectedTab == 3" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { GetChassis } from "~~/services/landing.service";

const selectedTab = ref(0);
definePageMeta({
  layout: "landing",
});

const { data } = await useAsyncData("landing", () => GetChassis());
</script>


