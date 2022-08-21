<template>
  <search-advert-collapsible-card title="مدل">
    <div class="filter__search">
      <form action="">
        <input
          type="text"
          class="form-control"
          placeholder="جستجوی نام مدل"
          @input="(e) => searchModels(e)"
        />
      </form>
    </div>
    <div class="filter__item" v-for="(item, index) in allModels" :key="index">
      <h-input
        name="model"
        :value="item?.slug"
        :input-id="item?.id"
        :checked="
          filters.model?.includes(item?.slug) ||
          advertFilter.model == item?.slug
        "
        type="checkbox"
        @change="changeModel"
      >
        <span class="filter__data p-0">{{ item?.title }}</span>
      </h-input>
    </div>
    <div class="filter__item" v-if="allModels.length == 0">
      <h-alert class="font-6" :type="AlertType.Warning"
        >مدلی برای نمایش وجود ندارد</h-alert
      >
    </div>
  </search-advert-collapsible-card>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AlertType } from "~~/models/utilities/AlertType";
import { Model } from "~~/models/utilities/Model";

const props = defineProps<{
  models: Model[];
}>();
const advertFilter = useAdverFilter();
const filters = ref(advertFilter.getFilterQueryParams());
const allModels: Ref<Model[]> = ref(props.models);
const route = useRoute();
const router = useRouter();

watch(
  () => props.models,
  (val) => {
    allModels.value = val;
  }
);
watch(
  () => route.query,
  () => {
    filters.value = advertFilter.getFilterQueryParams();
  }
);
const searchModels = (e: any) => {
  var mods = [...props.models];
  allModels.value = mods.filter(
    (f) => f.title.includes(e.target.value) || f.slug.includes(e.target.value)
  );
};

const changeModel = async () => {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=model]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  if (values.length == 1 && advertFilter.brand != "") {
    await advertFilter.changeModel(values[0]);
  } else {
    var brands: any[] = [];
    const checked = document.querySelectorAll("input[name=brand]:checked");
    checked.forEach((checkbox) => {
      //@ts-ignore
      brands.push(checkbox.value);
    });

    await router.push({
      path: advertFilter.isCarFilter() ? "/car" : "/motor",
      query: {
        brands,
        models: values,
      },
    });
  }
};
</script>

<style>
</style>