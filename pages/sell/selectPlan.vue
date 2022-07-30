<template>
  <div>
    <Head>
      <link href="/css/advertisement-registration.css" rel="stylesheet" />
      <link href="/css/plan.css" rel="stylesheet" />
      <Title>ثبت آگهی فروش خودرو شما</Title>
    </Head>
    <icons-loading v-if="plans.length == 0" />
    <div v-else>
      <advert-mobile-packages
        v-if="isMobilePage"
        class="mt-1"
        :plans="plans"
        @planSeleced="selectPlan"
        :selected-plan="selectedPlan"
      />
      <div v-else>
        <div class="row justify-content-space-between">
          <nuxt-link to="/">
            <img src="/img/Persian-HamCar-Logo.png" alt="همکار" class="logo" />
          </nuxt-link>
          <nuxt-link to="/" class="bg-white close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M23.6654 2.33398L12.9987 13.0007M12.9987 13.0007L2.33203 23.6673M12.9987 13.0007L23.6654 23.6673M12.9987 13.0007L2.33203 2.33398"
                stroke="var(--color-gray-500)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
        </div>
        <hr class="d-sm-none" />
        <advert-desktop-plan
          :plans="plans"
          @planSeleced="selectPlan"
          :selected-plan="selectedPlan"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { AdvertisementPlan } from "~~/models/plans/AdvertisementPlan";
import { GetAdvertisementPlans } from "~~/services/plans.service";
import { advertStore } from "~~/stores/advert.store";

const isMobilePage = ref(false);
const selectedPlan = ref(0);
const store = advertStore();
const plans: Ref<AdvertisementPlan[]> = ref([]);
const selectPlan = (id: number) => {
  alert("selected " + id);
};

onMounted(() => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 700) {
    isMobilePage.value = true;
  }
  store.changeStep(6);
  GetAdvertisementPlans().then((res) => {
    if (res.isSuccess) {
      plans.value = res.data!;
    }
  });
});

definePageMeta({
  layout: "full-screen",
});
</script>


<style scoped>
.close-btn {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
.logo {
  position: relative;
  top: 10px;
}
</style>