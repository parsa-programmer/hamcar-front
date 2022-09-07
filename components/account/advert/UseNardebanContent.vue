<template>
  <div class="mt-0_5">
    <div class="row mb-2 nar__header">
      <img src="/img/ladder.png" style="width: 73px; height: 101px" />
      <div class="w-full">
        <template v-if="showTitle">
          <h3
            class="font-2 row align-items-center"
            v-if="accountStore.nardebans >= 1"
          >
            خرید نردبان
          </h3>
          <h3 class="font-2 row align-items-center" v-else>
            خرید و اعمال نردبان
          </h3>
        </template>
        <p
          class="text__description color_black_200 mt-0_5 mb-1"
          v-if="!description"
        >
          آیا از اعمال نردبان روی آگهی {{ title }} اطمینان دارید؟
        </p>
        <p v-else class="custom__desc" v-text="description"></p>
      </div>
    </div>

    <div
      class="nardebans__footer justify-content-space-between align-items-center"
    >
      <div class="price">
        <p class="text__description font-6">کل نردبان ها : </p>
        <p class="font-4 mt-0_5 color_black_200">
          {{ accountStore.nardebans }}
        </p>
      </div>
      <div class="actions">
        <h-button
          @click="coseModal"
          color="default"
          class="btn-default-size d-mobile-none"
          >انصراف</h-button
        >
        <h-button
          class="btn-default-size pay__btn w-full"
          :loading="transactionLoading"
          :disabled="transactionLoading"
          @click="useOrByNardeban"
        >
          <template v-if="accountStore.nardebans >= 1"> اعمال نردبان </template>
          <template v-else>پرداخت</template>
        </h-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AdvertisementDto,
  AdvertisementFilterData,
} from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { IApiResponse } from "~~/models/IApiResponse";
import { TransactionOrderType } from "~~/models/transactions/CreateTransactionCommand";
import { UseNardeban } from "~~/services/advertisement.service";
import { CreateTransaction } from "~~/services/transaction.service";
import { useAccountStore } from "~~/stores/account.store";
import { CurrentDomainUrl } from "~~/utilities/api.config";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const props = defineProps<{
  modelValue:
    | AdvertisementCard
    | AdvertisementFilterData
    | null
    | AdvertisementDto;
  showTitle: boolean | null;
  description: string | null;
}>();
const accountStore = useAccountStore();
const transactionLoading = ref(false);
const toast = useToast();
const emit = defineEmits(["nardebanUsed", "closed"]);
//@ts-ignore
const title = props.modelValue?.title;

const coseModal = () => {
  emit("closed");
};
const useOrByNardeban = async () => {
  if (accountStore.nardebans >= 1) {
    var res = await ProssesAsync<IApiResponse<undefined>>(
      () => UseNardeban(props.modelValue?.id ?? ""),
      transactionLoading
    );
    if (res.isSuccess) {
      toast.showToast("نردبان با موفقیت اعمال شد");
      emit("closed");
      accountStore.nardebans -= 1;
    }
  } else {
    var result = await ProssesAsync<IApiResponse<string>>(
      () =>
        CreateTransaction({
          orderType: TransactionOrderType.nardeban,
          nardebanCount: 1,
          orderId: undefined,
          planId: undefined,
          successCallBack: `${CurrentDomainUrl}/account/adverts/useNardeban?id=${props.modelValue?.id}`,
          errorCallBack: `${CurrentDomainUrl}/transactions/error`,
        }),
      transactionLoading
    );
    if (result.isSuccess) {
      location.replace(result.data!);
    }
  }
};
</script>

<style scoped>
.color_black_200 {
  color: var(--color-black-200) !important;
}
@media screen and (max-width: 768px) {
  .pay__btn {
    width: 100% !important;
  }
  .nar__header {
    margin-bottom: 1rem !important ;
  }
  .nar__header img {
    display: none;
  }
  p {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    line-height: 21px;
    text-align: justify;
  }
  .custom__desc {
    position: initial !important;
  }
  .price p{
    margin-top: 17px !important;
  }
}
.custom__desc {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  color: var(--color-black);
}
.nardeban {
  width: 64px !important;
  height: 32px !important;
  border-radius: 8px !important;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  display: none;
}
.nardebans__footer {
  display: flex;
  gap: 1rem;
}
.actions {
  display: flex;
  gap: 1rem;
}
@media screen and (max-width: 768px) {
  .pay__btn {
    width: 100% !important;
  }
  img {
    width: 14.23px !important;
    height: 20px !important;
  }
  .nar__header {
    position: relative;
  }
  .nar__header p {
    position: absolute;
    right: 0;
  }
  h3 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
  }
  .nardebans__footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .actions {
    display: block !important;
    width: 100%;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.7rem;
  }
  .price .font-4 {
    font-weight: 800;
    margin: 0;
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
    color: var(--color-black) !important;
  }
  .price p:first-child {
    color: var(--color-black) !important;
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .nardeban {
    display: flex !important;
  }
}
</style>