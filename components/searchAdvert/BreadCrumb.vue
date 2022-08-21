<template>
  <section class="breadcrumb">
    <nuxt-link to="/" class="breadcrumb__item">
      <icons-home />
      همکار
    </nuxt-link>
    <icons-chevron-left />
    <nuxt-link
      :to="
        isSelectedFilter
          ? {
              path: baseUrl,
            }
          : ''
      "
      :class="[
        'breadcrumb__item',
        { 'breadcrumb__item--active': isSelectedFilter == false },
      ]"
    >
      آگهی های 
      <template v-if="advertFilter.isCarFilter()">خودرو</template>
      <template v-else>موتورسیکلت</template>
    </nuxt-link>
    <template v-for="(item, index) in breadcrumb" :key="index">
      <template v-if="item.url != '/'">
        <icons-chevron-left />
        <nuxt-link
          :to="
            breadcrumb.length == index + 1
              ? ''
              : {
                  path: `${baseUrl}${item.url}`,
                }
          "
          :class="[
            'breadcrumb__item',
            { 'breadcrumb__item--active': breadcrumb.length == index + 1 },
          ]"
        >
          {{ item.title }}
        </nuxt-link>
      </template>
    </template>
  </section>
</template>
    


<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { string } from "yup/lib/locale";
import { BreadCrumb } from "~~/models/advertisements/Advertisement.Models";
import { Brand } from "~~/models/utilities/Brand";
import { Model } from "~~/models/utilities/Model";
import { UseUtilStore } from "~~/stores/util.store";

const props = defineProps<{
  breadcrumb: BreadCrumb[];
}>();

const utilStore = UseUtilStore();
const advertFilter = useAdverFilter();
const filters = useAdverFilter().getFilterQueryParams();

const baseUrl = advertFilter.isCarFilter() ? "/car" : "/motorcycle";

const isSelectedFilter: Ref<boolean> = ref(
  filters.model != null || filters.brand != ""
);
</script>

<style>
</style>