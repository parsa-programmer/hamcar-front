<template>
  <div class="">
    <Head>
      <Title>مشاهده آگهی ها</Title>
    </Head>
    <div class="row gap-0_5">
      <div
        :class="['btn tab-button card grow-1', { active: activeTab == 1 }]"
        @click="changeTab(1)"
      >
        آگهی های مشاهده شده
      </div>
      <div
        :class="['btn tab-button card grow-1', { active: activeTab == 2 }]"
        @click="changeTab(2)"
      >
        آگهی های جدید
        <span class="badge-notif" v-if="newAdvertsCount > 0">{{
          newAdvertsCount
        }}</span>
      </div>
    </div>
    <div class="content mt-1_5">
      <div class="tab-1" v-show="activeTab == 1">
        <account-notify-tabs-visited-adverts />
      </div>
      <div class="tab-2" v-show="activeTab == 2">
        <account-notify-tabs-new-adverts
          @new-adverts-count="(count) => (newAdvertsCount = count)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { NotifyFilterData } from "~~/models/notify/Notify.Models";
import { GetNotifyAdvertisements } from "~~/services/notify.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
definePageMeta({
  layout: "full-screen",
});
const route = useRoute();

const loading = ref(false);
const pagingLoading = ref(false);
const visited: Ref<AdvertisementCard[]> = ref([]);
const newAdverts: Ref<AdvertisementCard[]> = ref([]);
const activeTab = ref(2);
const newAdvertsCount = ref(0);

const id = route.params.id;
const changeTab = (type: number) => {
  activeTab.value = type;
};
onMounted(async () => {});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .tab-button {
    border: 2px solid var(--color-gray-300) !important;
    color: var(--color-black-200);
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
  }
}
.tab-button {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  font-weight: 500;
  color: var(--color-black-200);
}
.active {
  background: var(--color-gray-300);
  color: var(--color-black) !important;
}
.badge-notif {
  border-radius: 50%;
  background: var(--color-error);
  color: white;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  margin-right: 12px;
}
</style>