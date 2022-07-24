<template>
  <div>
    <div class="registration__main">
      <div class="selectbox__wrapper">
        <h-select-box
          placeholder="انتخاب برند"
          name="brand"
          :show-check-box="true"
          v-model="brandId"
          :data="brands"
        />
        <h-select-box
          placeholder="انتخاب مدل"
          name="brand"
          :disabled="!brandId || models.length == 0"
          v-model="modelId"
          :show-check-box="true"
          :data="models"
        />
        <h-select-box
          placeholder="انتخاب سال"
          name="brand"
          :disabled="!modelId || years.length == 0"
          v-model="yearId"
          :show-check-box="true"
          :data="years"
        />
        <h-select-box
          placeholder="انتخاب تریم"
          name="brand"
          v-if="yearId && trims.length > 0"
          v-model="trimId"
          :show-check-box="true"
          :data="trims"
        />
      </div>
    </div>
    <div class="registration__footer" v-if="store.currentStep == 1">
      <span class="registration__accept-rules">
        فشردن این دکمه، به منزله پذیرش
        <a href="#">شرایط و قوانین</a>
        همکار است.
      </span>
      <h-button
        :disabled="
          !brandId ||
          !modelId ||
          !yearId ||
          (trims.length > 0 && !trimId) ||
          isLoading
        "
        @click="nextStep"
        class="btn btn-primary registration__submit"
        >تایید و ادمه
      </h-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { advertStore } from "~~/stores/advert.store";
import { GetModels, GetTrims, GetYears } from "~~/services/brand.service";
import { Ref } from "vue";
import { SelectData } from "~~/models/utilities/SelectData";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
const store = advertStore();

const isLoading = ref(true);
const brandId = ref("");
const modelId = ref("");
const yearId = ref("");
const trimId = ref("");

const brands: Ref<SelectData[]> = ref([]);
const models: Ref<SelectData[]> = ref([]);
const years: Ref<SelectData[]> = ref([]);
const trims: Ref<SelectData[]> = ref([]);

const nextStep = () => {
  store.setStepData({
    brandId: brandId.value,
    modelId: modelId.value,
    yearId: yearId.value,
    trimId: trimId.value,
  });
  store.changeStep(2);
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 100);
};
onMounted(async () => {
  await store.setBrands();
  brands.value = store.getCarBrands.map((brand) => {
    return {
      value: brand.id,
      label: brand.title,
    };
  });
});
watch(brandId, (brandId) => {
  if (brandId) {
    ProssesAsync(
      () =>
        GetModels(brandId).then((res) => {
          models.value =
            res.data?.map((model) => {
              return {
                value: model.id,
                label: model.title,
              };
            }) ?? [];
        }),
      isLoading
    );
  }
});
watch(modelId, (modelId) => {
  if (modelId) {
    ProssesAsync(
      () =>
        GetYears(modelId).then((res) => {
          years.value =
            res.data?.map((model) => {
              return {
                value: model.id,
                label: model.yearTitle,
              };
            }) ?? [];
        }),
      isLoading
    );
  }
});
watch(yearId, (yearId) => {
  if (yearId) {
    ProssesAsync(() => {
      return GetTrims(yearId).then((res) => {
        trims.value =
          res.data?.map((model) => {
            return {
              value: model.id,
              label: model.title,
            };
          }) ?? [];
      });
    }, isLoading);
  }
});
</script>

<style>
</style>