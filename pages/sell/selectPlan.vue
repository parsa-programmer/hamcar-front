<template>
  <div>
    <icons-loading v-if="operationLoading" />

    <Head>
      <link href="/css/advertisement-registration.css" rel="stylesheet" />
      <link href="/css/plan.css" rel="stylesheet" />
      <Title>ثبت آگهی فروش خودرو شما</Title>
    </Head>
    <Teleport to="body">
      <div class="fixed__loading" v-if="isLoadingToPay">
        <p class="text-center" style="
            background: var(--color-white);
            color: var(--color-black);
            padding: 2rem;
            height: fit-content;
          ">
          درحال انتقال به درگاه بانک ...
        </p>
      </div>
    </Teleport>
    <icons-loading v-if="pending" />
    <div v-else>
      <template v-if="accountStore.user.plan?.planId">
        <h-alert :type="AlertType.Success">
          <div class=" flex align-items-center justify-content-center gap-0_5">
            <div class="text-justify">درصورتی که تمایل دارید این آگهی با پکیج شخصی شما ثبت شود روی دکمه روبرو کلیک کنید
                </div>
            <h-button size="sm" @click="selectPlan(1)">
              ثبت آگهی
              <span class="d-mobile-none">با پکیج شخصی</span>
            </h-button>
          </div>
        </h-alert>
        <hr />
      </template>

      <register-advert-mobile-packages :advert-title="advertTitle" v-if="isMobilePage" class="mt-1"
        :plans="data?.data?.item1 ?? []" @planSeleced="selectPlan" :best-plan="data?.data?.item2??0"
        :ignore-plans="[]" />
      <div v-else>
        <register-advert-desktop-plan :advert-title="advertTitle" :plans="data?.data?.item1 ?? []"
          @planSeleced="selectPlan" :best-plan="data?.data?.item2??0" :ignore-plans="[]" />
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
import { AlertType } from "~~/models/utilities/AlertType";
import { useAccountStore } from "~~/stores/account.store";

definePageMeta({
  layout: "full-screen",
  layoutTransition: { name: "slide", mode: "out-in" },
});

const isMobilePage = ref(false);
const isLoadingToPay = ref(false);
const store = advertStore();
const advert: Ref<AdvertisementDto | null> = ref(null);
const router = useRouter();
const toast = useToast();
const advertTitle = ref("");
const accountStore = useAccountStore();
const operationLoading = ref(false);

const { data, pending } = await useAsyncData(
  "plans",
  () => GetAdvertisementPlans(),
  {
    server: false,
  }
);

const selectPlan = async (id: number) => {
  if (id == 1) {
    operationLoading.value = true;
    const result = await FinallyAdvert(advert.value!.id);
    operationLoading.value = false;

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
    router.push("/");
    return;
  }
  advert.value = res.data!;
  advertTitle.value = `${advert.value.brand.title} ${advert.value.model.title}`
  store.changeStep(6);
});
</script>


