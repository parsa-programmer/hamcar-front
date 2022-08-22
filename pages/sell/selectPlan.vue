<template>
  <div>
    <Head>
      <link href="/css/advertisement-registration.css" rel="stylesheet" />
      <link href="/css/plan.css" rel="stylesheet" />
      <Title>ثبت آگهی فروش خودرو شما</Title>
    </Head>
    <Teleport to="body">
      <div class="fixed__loading" v-if="isLoadingToPay">
        <p
          class="text-center"
          style="
            background: var(--color-white);
            color: var(--color-black);
            padding: 2rem;
            height: fit-content;
          "
        >
          درحال انتقال به درگاه بانک ...
        </p>
      </div>
    </Teleport>
    <icons-loading v-if="pending" />
    <div v-if="pending == false">
      <register-advert-mobile-packages
        v-if="isMobilePage"
        class="mt-1"
        :plans="data.data ?? []"
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
        <register-advert-desktop-plan
          :plans="data.data ?? []"
          @planSeleced="selectPlan"
          :selected-plan="selectedPlan"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { GetAdvertisementPlans } from "~~/services/plans.service";
import { CreateTransaction } from "~~/services/transaction.service";
import {
  FinallyAdvert,
  GetDraftAdvert,
} from "~~/services/advertisement.service";
import { advertStore } from "~~/stores/advert.store";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { ToastType } from "~~/composables/useToast";
import { TransactionOrderType } from "~~/models/transactions/CreateTransactionCommand";

definePageMeta({
  middleware: "should-login",
  layout: "full-screen",
});

const isMobilePage = ref(false);
const isLoadingToPay = ref(false);
const selectedPlan = ref(0);
const store = advertStore();
const advert: Ref<AdvertisementDto | null> = ref(null);
const router = useRouter();
const toast = useToast();

const { data, pending } = await useAsyncData(
  "plans",
  () => GetAdvertisementPlans(),
  {
    server: false,
  }
);

const selectPlan = async (id: number) => {
  if (id == 1) {
    const result = await FinallyAdvert(advert.value!.id);
    if (result.isSuccess) {
      router.push(`/sell/finish?id=${advert.value?.id}`);
    } else {
      toast.showToast(result.metaData.message, ToastType.error);
    }
  } else {
    isLoadingToPay.value = true;
    const result = await CreateTransaction({
      orderId: advert.value!.id,
      orderType: TransactionOrderType.advertisementPlan,
      planId: id,
      successCallBack: `http://localhost:3000/sell/finish?id=${advert.value?.id}`,
      errorCallBack: "http://localhost:3000/transactions/error",
    }).finally(() => {
      isLoadingToPay.value = false;
    });
    if (result.isSuccess) {
      location.replace(result.data!);
    } else {
      toast.showToast(result.metaData.message, ToastType.error);
    }
  }
};

//plans.value = data?.value?.data ?? [];

onMounted(async () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 700) {
    isMobilePage.value = true;
  }
  var res = await GetDraftAdvert();
  if (!res.data) {
    router.push("/");
    return;
  }
  advert.value = res.data!;
  store.changeStep(6);
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