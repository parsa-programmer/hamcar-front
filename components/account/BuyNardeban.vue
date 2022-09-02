<template>
  <div class="mt-0_5">
    <loadings-gateway v-if="loadingForGateway" />
    <h3 class="font-2 row align-items-center">
      <img src="/img/nardeban.png" />
      خرید نردبان
    </h3>
    <p class="text__description mt-0_5 mb-1_5">
      پس از خرید میتوانید با استفاده از دکمه «نردبان» بر روی آگهی، آن را اعمال
      کنید.
    </p>
    <h-select-box
      :data="selectData"
      v-model="selectedNardebans"
      name="nardebans"
      class="mb-1_5"
    >
    </h-select-box>
    <div
      class="nardebans__footer justify-content-space-between align-items-center"
    >
      <div class="price">
        <p class="text__description font-5">مبلغ : </p>
        <p class="font-4 mt-0_5">
          {{ splitNumber(selectedNardebans * 20000) }} تومان
        </p>
      </div>
      <div class="actions">
        <h-button
          @click="closeModal"
          class="btn-default btn-default-size d-mobile-none"
          >انصراف</h-button
        >
        <h-button
          :loading="loadingForGateway"
          :disabled="loadingForGateway"
          class="btn-default-size pay__btn"
          @click="createTransaction"
          >پرداخت</h-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { IApiResponse } from "~~/models/IApiResponse";
import { TransactionOrderType } from "~~/models/transactions/CreateTransactionCommand";
import { SelectData } from "~~/models/utilities/SelectData";
import { CreateTransaction } from "~~/services/transaction.service";
import { CurrentDomainUrl } from "~~/utilities/api.config";
import { splitNumber } from "~~/utilities/numberUtils";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const selectData: SelectData[] = [
  {
    label: "خرید 1 نردبان",
    value: 1,
  },
  {
    label: "خرید 2 نردبان",
    value: 2,
  },
  {
    label: "خرید 3 نردبان",
    value: 3,
  },
  {
    label: "خرید 5 نردبان",
    value: 5,
  },
  {
    label: "خرید 10 نردبان (+2 رایگان)",
    value: 10,
  },
  {
    label: "خرید 20 نردبان (+5 رایگان)",
    value: 20,
  },
];
const selectedNardebans = ref(1);
const loadingForGateway = ref(false);
const emit = defineEmits(["cancel"]);
const route = useRoute();
const createTransaction = async () => {
  var res = await ProssesAsync<IApiResponse<string>>(
    () =>
      CreateTransaction({
        orderType: TransactionOrderType.nardeban,
        successCallBack: `${CurrentDomainUrl}${route.path}?transaction=success`,
        errorCallBack: `${CurrentDomainUrl}/transactions/error`,
        orderId: undefined,
        planId: undefined,
        nardebanCount: selectedNardebans.value,
      }),
    loadingForGateway
  );
  if (res.isSuccess) {
    location.replace(res.data!);
  }
};
const closeModal = () => {
  emit("cancel");
};
</script>

<style scoped>
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
  }
  .price .font-4 {
    font-weight: 800;
    margin: 0;
  }
}
</style>