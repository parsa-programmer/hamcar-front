<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInUp animate__faster"
    leave-active-class="animate__animated animate__bounceOutRight animate__faster"
  >
    <div class="review__modal" style="display: block" v-if="modelValue">
      <div class="review__modal-content">
        <div class="row review__modal__header">
          <h-input
            name="search"
            placeholder="خودرو مورد نظر خود را جستوجو کنید"
            v-model="searchValue"
            @keydown.enter="search"
          >
            <icons-search
              class="input-icon"
              hash-color="#C6C7CC"
            ></icons-search>
          </h-input>
          <h-button :loading="isLoading" :disabled="isLoading" @click="search">
            جستوجو
          </h-button>
          <h-button color="error" @click="close">بستن</h-button>
        </div>
        <div class="row mobile__bottons" style="flex-grow: 1; display: none">
          <h-button
            :loading="isLoading"
            :disabled="isLoading"
            @click="search"
            style="flex-grow: 3; height: 3rem"
          >
            جستوجو
          </h-button>
          <h-button
            color="error"
            @click="close"
            style="flex-grow: 1; height: 3rem"
            >بستن</h-button
          >
        </div>
        <div v-if="isLoading" class="row wrap mt-2">
          <skeleton-loading-car-review-model-card />
          <skeleton-loading-car-review-model-card />
          <skeleton-loading-car-review-model-card />
          <skeleton-loading-car-review-model-card />
        </div>
        <template v-else>
          <div class="row wrap py-1" id="cars">
            <div
              v-for="item in cars"
              :key="item.id"
              @click="selectCar(item.slug)"
              class="model__card"
              style="cursor: pointer"
            >
              <h-image
                class="model__card-img"
                :src="GetModelImage(item.imageName)"
              />
              <div class="model__card-footer">
                <h3 class="model__card-title">
                  {{ item.brand }} {{ item.model }}
                </h3>
                <h3 class="model__card-sub-title">
                  {{ item.slug.replace("-", " ") }}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div class="pagination">
              <a
                @click="changePage(item)"
                :class="['pagination__link', { active: item == pageId }]"
                v-for="item in totalPage"
                :key="item"
                >{{ item }}</a
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { GetByFilter } from "~/services/carReview.service";
import {
  CarReviewFilterData,
  CarReviewFilterOrderBy,
} from "~~/models/carReviews/CarReviewModels";
import { GetModelImage } from "~/utilities/imageUtil";
import { ref } from "#imports";

const isLoading = ref(true);
const searchValue = ref("");
const pageId: Ref<number> = ref(1);
const cars: Ref<CarReviewFilterData[]> = ref([]);
const totalPage = ref(0);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue", "selectedCar"]);
const search = async () => {
  isLoading.value = true;
  const data = await GetByFilter({
    brandSlug: "",
    orderBy: CarReviewFilterOrderBy.visit,
    pageId: pageId.value,
    take: 12,
    search: searchValue.value,
  });
  isLoading.value = false;
  cars.value = data.data!.data!;
  totalPage.value = data.data?.pageCount ?? 0;
};
watch(pageId, async (val) => {
  if (val <= totalPage.value) {
    await search();
  }
});
onMounted(async () => {
  await search();
});
const changePage = (i: number) => {
  pageId.value = i;
};
const close = () => {
  //@ts-ignore
  props.modelValue = false;
  emit("update:modelValue", false);
};
const selectCar = (slug: string) => {
  emit("selectedCar", slug);
};
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .review__modal__header button {
    display: none !important;
  }
  .mobile__bottons {
    display: flex !important;
  }
}
.model__card {
  border: 1px solid var(--border-color);
}
.review__modal {
  position: fixed;
  z-index: 99998;
  background: rgba(0, 0, 0, 0.301);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0px;
}
.row {
  justify-content: center;
}
.review__modal-content {
  position: relative;
  width: 100%;
  margin: auto;
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1rem;
  height: 100%;
  z-index: 99999;
  overflow-y: auto;
}
</style>