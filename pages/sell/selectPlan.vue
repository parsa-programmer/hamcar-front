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
import { CurrentDomainUrl } from "~~/utilities/api.config";

definePageMeta({
  layout: "full-screen",
  layoutTransition: { name: "slide", mode: "out-in" },
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
      successCallBack: `${CurrentDomainUrl}/sell/finish?id=${advert.value?.id}`,
      errorCallBack: `${CurrentDomainUrl}/transactions/error`,
      nardebanCount: 0,
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
    //router.push("/");
    return;
  }
  advert.value = res.data!;
  store.changeStep(6);
});
</script>


