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
    <div v-if="loading">
      <h-skeletor width="100%" />
    </div>
    <div v-else-if="pending == false">
      <register-advert-mobile-packages
        v-if="isMobilePage"
        class="mt-1"
        :plans="data?.data ?? []"
        @planSeleced="selectPlan"
        :selected-plan="selectedPlan"
        :ignorePlans="[1, Number(advert?.plan?.planId ?? '0')]"
      />
      <div v-else>
        <register-advert-desktop-plan
          :plans="data?.data ?? []"
          @planSeleced="selectPlan"
          :selected-plan="selectedPlan"
          :ignorePlans="[1, Number(advert?.plan?.planId ?? '0')]"
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
  GetById,
  GetDraftAdvert,
} from "~~/services/advertisement.service";
import { advertStore } from "~~/stores/advert.store";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { ToastType } from "~~/composables/useToast";
import { TransactionOrderType } from "~~/models/transactions/CreateTransactionCommand";
import { CurrentDomainUrl } from "~~/utilities/api.config";
import { useAccountStore } from "~~/stores/account.store";

definePageMeta({
  layout: "full-screen",
  layoutTransition: { name: "slide", mode: "out-in" },
});

const isMobilePage = ref(false);
const isLoadingToPay = ref(false);
const loading = ref(false);

const selectedPlan = ref(0);
const accountStore = useAccountStore();
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
    return;
  }

  isLoadingToPay.value = true;
  const result = await CreateTransaction({
    orderId: advert.value!.id,
    orderType: TransactionOrderType.changeAdvertisementPlan,
    planId: id,
    successCallBack: `${CurrentDomainUrl}/account?transaction=success`,
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
};

onMounted(async () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 700) {
    isMobilePage.value = true;
  }
  loading.value = true;
  const id = router.currentRoute.value.query.id;
  var res = await GetById(id?.toString() ?? "");
  if (!res.data || res.data.userId != accountStore.user.id) {
    router.push("/account");
    return;
  }
  if (res.data!.plan!.planId == "4") {
    toast.showToast("این آگهی دارای پکیج توربو است.",ToastType.info);
    await router.push("/account/adverts");
    return;
  }
  advert.value = res.data!;
  loading.value = false;
});
</script>
  
  
  