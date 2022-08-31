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
        class="mobile-card cursor-pointer"
        :show-price="true"
        :has-link="false"
        @click="showAdvert(item)"
      >
      </advert-custom-card>
    </div>
    <div v-if="loading==false && adverts.length==0">
      <h-alert :type="AlertType.Warning" :show-icon="true">آگهی ای برای نمایش وجود ندارد</h-alert>
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
import { AlertType } from "~~/models/utilities/AlertType";
import {
  GetNotifyAdvertisements,
  VisitNotifyAdvertisement,
} from "~~/services/notify.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const pageId = ref(1);
const loading = ref(false);
const adverts: Ref<AdvertisementCard[]> = ref([]);
const pageLoading = ref(false);
const pageCount = ref(1);

const emit = defineEmits(["newAdvertsCount", "stabled"]);
const route = useRoute();
const router = useRouter();

const showAdvert = async (advert: AdvertisementCard) => {
  VisitNotifyAdvertisement(advert.id, route.params.id.toString());
  
  var link = "";
  if (advert.isCar) {
    link = `/car/detail-${advert.shortLink}-${advert.brand_Model}`;
    if (advert.trim) {
      link += `-${advert.trim}`;
    }
  } else {
    link = `/motorcycle/detail-${advert.shortLink}-${advert.brand_Model}`;
    if (advert.trim) {
      link += `-${advert.trim}`;
    }
  }
  await router.push(link);
};

onMounted(async () => {
  loading.value = true;
  var res = await getAdverts();
  loading.value = false;
  emit("newAdvertsCount", res.data?.entityCount);
  emit("stabled", true);
});

const getAdverts = async () => {
  var result = await ProssesAsync<
    IApiResponse<FilterResult<AdvertisementCard>>
  >(
    () =>
      GetNotifyAdvertisements({
       visited: false,
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
  return result;
};
</script>

<style>
</style>