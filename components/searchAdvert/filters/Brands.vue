<template>
  <search-advert-collapsible-card
    title="برند"
    :is-open="(filters.brand?.length ?? 0) > 0"
  >
    <div class="filter__search">
      <form action="">
        <input
          type="text"
          class="form-control"
          placeholder="جستجوی نام برند"
          @input="(e) => searchBrands(e)"
        />
      </form>
    </div>
    <div class="filter__item" v-for="(item, index) in allBrands" :key="index">
      <h-input
        name="brand"
        :value="item?.slug"
        :input-id="item?.id"
        type="checkbox"
        :checked="
          filters.brand?.includes(item?.slug) ||
          advertFilter.brand == item?.slug
        "
        @change="changeBrand"
      >
        <span class="filter__data p-0">{{ item?.title }}</span>
      </h-input>
    </div>
    <div class="filter__item" v-if="brands.length == 0">
      <h-alert class="font-6" :type="AlertType.Warning"
        >برندی برای نمایش وجود ندارد</h-alert
      >
    </div>
  </search-advert-collapsible-card>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { AlertType } from "~~/models/utilities/AlertType";
import { Brand } from "~~/models/utilities/Brand";

const props = defineProps<{
  brands: Brand[];
}>();
const advertFilter = useAdverFilter();
const filters = ref(advertFilter.getFilterQueryParams());
const allBrands = ref(props.brands);
const route = useRoute();
watch(
  () => route.query,
  () => {
    filters.value = advertFilter.getFilterQueryParams();
  }
);
const searchBrands = (e: any) => {
  const data = [...props.brands];
  allBrands.value = data.filter(
    (f) => f.title.includes(e.target.value) || f.slug.includes(e.target.value)
  );
};
const changeBrand = async () => {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=brand]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  if (values.length == 1) {
    await advertFilter.changeBrand(values[0]);
  } else {
    await advertFilter.changeQueryParams(values, "brands", true);
  }
};
</script>

<style>
</style>