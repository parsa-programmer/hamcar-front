<template>
  <div>
    <skeleton-loading-search-advert
      :show-type="1"
      style="width: 100%; overflow: hidden"
      v-if="loading"
    />
    <div
      class="advertising__row advertising__row--wide-item"
      v-else-if="adverts.length >= 1"
    >
      <advert-custom-card
        v-for="item in adverts"
        :key="item.id"
        :advert="item"
        class="mobile-card"
        :show-price="true"
        has-link
      >
      </advert-custom-card>
    </div>
    <h-button
      v-if="pageCount > 1"
      class="mt-2 w-full"
      :loading="pageLoading"
      :disabled="pageLoading"
      >مشاهده بیشتر</h-button
    >
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { FilterResult, IApiResponse } from "~~/models/IApiResponse";
import { GetNotifyAdvertisements } from "~~/services/notify.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const pageId = ref(1);
const loading = ref(false);
const adverts: Ref<AdvertisementCard[]> = ref([]);
const pageLoading = ref(false);
const route = useRoute();
const pageCount = ref(1);

onMounted(async () => {
  loading.value = true;
  await getAdverts();
  loading.value = false;
});
const getAdverts = async () => {
  var result = await ProssesAsync<
    IApiResponse<FilterResult<AdvertisementCard>>
  >(
    () =>
      GetNotifyAdvertisements({
        visited: true,
        notifyId: route.params.id.toString(),
        pageId: pageId.value,
        take: 15,
      }),
    pageLoading
  );
  pageCount.value = result.data?.pageCount ?? 1;
  if (pageId.value == 1) {
    adverts.value = result.data?.data ?? [];
  } else {
    adverts.value.push(...(result.data?.data ?? []));
  }
};
</script>
  
  <style>
</style>