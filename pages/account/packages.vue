<template>
  <div>
    <Head>
      <link href="/css/advertisement-registration.css" rel="stylesheet" />
      <Title>خرید پکیج</Title>
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
    <h-packages
      :titles="titles"
      :packages="packages"
      page-title="پکیج مورد نظر خود را انتخاب کنید :"
      @finally="buyPackage"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { TransactionOrderType } from "~~/models/transactions/CreateTransactionCommand";
import { Package } from "~~/models/utilities/Package";
import { CreateTransaction } from "~~/services/transaction.service";
import { CurrentDomainUrl } from "~~/utilities/api.config";

definePageMeta({
  layout: "full-screen",
});
const isLoadingToPay = ref(false);

const buyPackage = async (id: number) => {
  isLoadingToPay.value = true;
  var res = await CreateTransaction({
    orderType: TransactionOrderType.personalPlan,
    nardebanCount: 0,
    orderId: null,
    planId: id,
    successCallBack: `${CurrentDomainUrl}/account?transaction=success`,
    errorCallBack: `${CurrentDomainUrl}/transactions/error`,
  });
  isLoadingToPay.value = false;
  if (res.isSuccess) {
    location.replace(res.data!);
  }
};

const titles = ["تعداد آگهی", "تعداد نردبان", "تعداد عکس", "برچسب همکار"];
const packages: Ref<Package[]> = ref([
  {
    title: "پکیج 1",
    id: 1,
    details: ["10", "30", "5", true],
    price: 1255000,
    discount: 10,
    totalPrice: 1129500,
  },
  {
    title: "پکیج 2",
    id: 2,
    details: ["20", "60", "8", false],
    price: 2200000,
    discount: 10,
    totalPrice: 1980000,
  },
  {
    title: "پکیج 3",
    id: 3,
    details: ["30", "90", "12", true],
    price: 3090000,
    discount: 10,
    totalPrice: 2781000,
  },
  {
    title: "پکیج 4",
    id: 4,
    details: ["40", "120", "15", true],
    price: 4725000,
    discount: 10,
    totalPrice: 4252500,
  },
]);
</script>

<style>
</style>