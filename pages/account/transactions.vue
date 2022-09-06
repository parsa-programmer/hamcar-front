<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar :is-show-cards="false" />
      <div class="card row justify-content-space-between">
        <div>
          <p class="font-4">
            لیست تراکنش ها

            <small
              v-if="loading"
              class="text__description font-5"
              style="display: inline-block"
            >
              <h-skeletor class="" width="80" height="10" />
            </small>
            <small v-else class="text__description font-5"
              >( {{ transactions.length }} تراکنش)</small
            >
          </p>
        </div>
        <div></div>
      </div>
      <div class="content card">
        <div v-if="loading">
          <h-skeletor width="100%" height="15" />
          <h-skeletor class="mt-1" width="100%" height="15" />
          <h-skeletor class="mt-1" width="100%" height="15" />
          <h-skeletor class="mt-1" width="100%" height="15" />
          <h-skeletor class="mt-1" width="100%" height="15" />
        </div>
        <template v-else>
          <div
            class="row justify-content-space-between mb-1"
            v-for="(item, index) in transactions"
            :key="index"
          >
            <div class="row gap-3">
              <p class="counter" v-text="index + 1"></p>
              <p class="type">
                {{ item.orderType }}
                <label class="d-none d-mobile-block mobile__date">{{
                  toPersianDate(item.paymentDate, true, true)
                }}</label>
              </p>
            </div>
            <p class="date row d-mobile-none">
              <span>
                {{ getPersianDate(new Date(item.paymentDate), "y/M/dd") }}
              </span>
              <span>
                ساعت
                {{ GetTime(new Date(item.paymentDate)) }}
              </span>
            </p>

            <p class="price">
              {{ splitNumber(item.amount) }} <span>تومان</span>
            </p>
          </div>
        </template>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { TransactionFilterData } from "~~/models/transactions/TransactionsFilterData";
import { GetTransactions } from "~~/services/transaction.service";
import { getPersianDate, GetTime, toPersianDate } from "~~/utilities/dateUtil";
import { splitNumber } from "~~/utilities/numberUtils";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const loading = ref(false);
const transactions: Ref<TransactionFilterData[]> = ref([]);
onMounted(async () => {
  var result = await ProssesAsync<
    IApiResponse<FilterResult<TransactionFilterData>>
  >(
    () =>
      GetTransactions({
        pageId: 1,
        take: 100,
      }),
    loading
  );
  transactions.value = result.data?.data ?? [];
});
definePageMeta({
  layout: "account-layout",
  title:"لیست تراکنش ها"

});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .type,
  .counter {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .price {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
    color: var(--color-black);
  }
  .gap-3{
    gap: 1.5rem !important;
  }
  .mobile__date {
    color: var(--color-gray-600) !important;
    font-family: var(--t7-font-family);
    font-size: var(--t7-font-size);
  }
  .price span {
    color: var(--color-gray-600) !important;
    font-family: var(--t7-font-family);
    font-size: var(--t7-font-size);
  }
}
.counter {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  color: var(--color-black-200);
}
.gap-3 {
  gap: 3rem;
}

.date {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black-200);
  gap: 2rem;
  width: 250px;
  text-align: right;
  justify-content: space-between;
}
.date span {
  flex-grow: 1;
}
.price {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
}
.type {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  font-weight: 500;
  line-height: 180%;
  text-align: right;
  letter-spacing: -0.02em;
}
</style>