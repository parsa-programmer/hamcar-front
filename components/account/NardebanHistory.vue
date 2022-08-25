<template>
  <table>
    <thead>
      <tr>
        <th>تراکنش</th>
        <th>توضیحات</th>
        <th>نوع تراکنش</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="loading">
        <td>
          <h-skeletor width="50px" height="30px" />
        </td>
        <td>
          <h-skeletor width="50px" height="30px" />
        </td>
        <td>
          <h-skeletor width="50px" height="30px" />
        </td>
      </tr>
      <template v-else>
        <tr v-for="(item, index) in history" :key="index">
          <td>
            <p>{{ item.count }} نردبان</p>
            <span class="d-block font-5 date">{{
              toPersianDate(item.creationDate, true, true)
            }}</span>
          </td>
          <td>
            <p class="desciption" v-text="item.description"></p>
          </td>
          <td>
            <label class="color-green" v-if="item.type == NardebanType.buy"
              >خرید</label
            >
            <label class="color-error" v-if="item.type == NardebanType.use">
              استفاده
            </label>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { NardebanDto, NardebanType } from "~~/models/account/account.Models";
import { IApiResponse } from "~~/models/IApiResponse";
import { GetNardebanHistory } from "~~/services/account.service";
import { toPersianDate } from "~~/utilities/dateUtil";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const history: Ref<NardebanDto[]> = ref([]);
const loading = ref(false);
onMounted(async () => {
  var res = await ProssesAsync<IApiResponse<NardebanDto[]>>(
    () => GetNardebanHistory(),
    loading
  );
  if (res.isSuccess) {
    history.value = res.data ?? [];
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  table {
    margin-top: 1.5rem;
  }
  thead {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  tbody p {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .date {
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
  }
  .desciption {
    max-width: 100px !important;
  }
  thead th:last-child {
    text-align: left !important;
  }
  tbody td:last-child {
    text-align: left !important;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
}
.date {
  color: var(--color-gray-600);
  font-weight: 500;
}
.desciption {
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
thead {
  position: relative;
  text-align: right;
  color: var(--color-black-200);
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
thead::after {
  content: " ";
  background: var(--color-gray-300);
  height: 2px;
  width: 100%;
  margin: auto;
  position: absolute;
  bottom: -12px;
  left: 0;
}
tbody tr:first-child td {
  padding-top: 2rem;
}
tbody p {
  color: var(--color-black-200);
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
}
</style>