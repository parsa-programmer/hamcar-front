<template>
  <h3>آگهی را حذف میکنم به دلیل...</h3>
  <div class="row wrap mt-1_5 button__wraper">
    <h-button
      @click="reasoneType = 1"
      color="default"
      :class="['grow-1', { active: reasoneType == 1 }]"
      >فروخته شده</h-button
    >
    <h-button
      @click="reasoneType = 2"
      color="default"
      :class="[' grow-1', { active: reasoneType == 2 }]"
      >معاوضه کردم</h-button
    >
    <h-button
      @click="reasoneType = 3"
      color="default"
      :class="[' grow-1', { active: reasoneType == 3 }]"
      >منصرف شدم</h-button
    >
  </div>
  <div class="actions">
    <h-button
      :loading="loading"
      :disabled="loading"
      @click="deleteAdvert"
      class="btn-default-size btn-error"
    >
      <div class="row">
        <svg
          class="d-mobile-block"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.832031 3.91536C0.417818 3.91536 0.0820312 4.25115 0.0820312 4.66536C0.0820312 5.07958 0.417818 5.41536 0.832031 5.41536V3.91536ZM19.1654 5.41536C19.5796 5.41536 19.9154 5.07958 19.9154 4.66536C19.9154 4.25115 19.5796 3.91536 19.1654 3.91536V5.41536ZM3.24498 4.59074C3.20376 4.17858 2.83623 3.87787 2.42407 3.91909C2.01191 3.9603 1.7112 4.32783 1.75242 4.73999L3.24498 4.59074ZM18.245 4.73999C18.2862 4.32783 17.9855 3.9603 17.5733 3.91909C17.1612 3.87787 16.7936 4.17858 16.7524 4.59074L18.245 4.73999ZM10.7487 9.66537C10.7487 9.25115 10.4129 8.91537 9.9987 8.91537C9.58449 8.91537 9.2487 9.25115 9.2487 9.66537H10.7487ZM9.2487 14.6654C9.2487 15.0796 9.58449 15.4154 9.9987 15.4154C10.4129 15.4154 10.7487 15.0796 10.7487 14.6654H9.2487ZM14.4961 9.72765C14.5305 9.31487 14.2238 8.95235 13.811 8.91796C13.3982 8.88356 13.0357 9.1903 13.0013 9.60308L14.4961 9.72765ZM12.5846 14.6031C12.5502 15.0159 12.857 15.3784 13.2697 15.4128C13.6825 15.4472 14.045 15.1404 14.0794 14.7276L12.5846 14.6031ZM6.99611 9.60308C6.96171 9.1903 6.5992 8.88356 6.18641 8.91796C5.77363 8.95235 5.46689 9.31487 5.50129 9.72765L6.99611 9.60308ZM5.91796 14.7276C5.95235 15.1404 6.31487 15.4472 6.72765 15.4128C7.14043 15.3784 7.44717 15.0159 7.41277 14.6031L5.91796 14.7276ZM12.9821 18.9154H7.01532V20.4154H12.9821V18.9154ZM4.44481 16.5891L3.24498 4.59074L1.75242 4.73999L2.95225 16.7383L4.44481 16.5891ZM16.7524 4.59074L15.5526 16.5891L17.0451 16.7383L18.245 4.73999L16.7524 4.59074ZM9.2487 9.66537V14.6654H10.7487V9.66537H9.2487ZM13.0013 9.60308L12.5846 14.6031L14.0794 14.7276L14.4961 9.72765L13.0013 9.60308ZM5.50129 9.72765L5.91796 14.7276L7.41277 14.6031L6.99611 9.60308L5.50129 9.72765ZM9.9987 5.41536H13.332V3.91536H9.9987V5.41536ZM13.332 5.41536H19.1654V3.91536H13.332V5.41536ZM0.832031 5.41536H6.66536V3.91536H0.832031V5.41536ZM6.66536 5.41536H9.9987V3.91536H6.66536V5.41536ZM13.332 3.91536H6.66536V5.41536H13.332V3.91536ZM7.41536 4.66536V2.9987H5.91536V4.66536H7.41536ZM8.33203 2.08203H11.6654V0.582031H8.33203V2.08203ZM12.582 2.9987V4.66536H14.082V2.9987H12.582ZM11.6654 2.08203C12.1716 2.08203 12.582 2.49244 12.582 2.9987H14.082C14.082 1.66401 13.0001 0.582031 11.6654 0.582031V2.08203ZM7.01532 18.9154C5.68813 18.9154 4.57687 17.9097 4.44481 16.5891L2.95225 16.7383C3.161 18.8257 4.9175 20.4154 7.01532 20.4154V18.9154ZM7.41536 2.9987C7.41536 2.49244 7.82577 2.08203 8.33203 2.08203V0.582031C6.99734 0.582031 5.91536 1.66401 5.91536 2.9987H7.41536ZM12.9821 20.4154C15.0799 20.4154 16.8364 18.8258 17.0451 16.7383L15.5526 16.5891C15.4205 17.9097 14.3093 18.9154 12.9821 18.9154V20.4154Z"
            fill="white"
          />
        </svg>

        حذف آگهی
      </div>
    </h-button>
    <h-button color="default" class="border-none ml-1" @click="cancelOperation"
      >انصراف</h-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import {
  AdvertisementDto,
  AdvertisementFilterData,
} from "~~/models/advertisements/Advertisement.Models";
import { AdvertisementCard } from "~~/models/advertisements/AdvertisementCard";
import { IApiResponse } from "~~/models/IApiResponse";
import { MoveToTrash } from "~~/services/advertisement.service";
import { DeleteAdvert } from "~~/services/consultant.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const reasoneType = ref(1);
const loading = ref(false);
const toast = useToast();
const emit = defineEmits(["cancelOperation","deleted"]);
const props = defineProps<{
  modelValue:
    | AdvertisementCard
    | AdvertisementFilterData
    | null
    | AdvertisementDto;
  isExhibition: boolean;
}>();

const cancelOperation = () => {
  emit("cancelOperation");
};
const deleteAdvert = async () => {
  if (props.isExhibition) {
    var result = await ProssesAsync<IApiResponse<undefined>>(
      () => DeleteAdvert(props.modelValue?.id ?? ""),
      loading
    );
    if (result.isSuccess) {
      toast.showToast("آگهی به پارکینگ منتقل شد");
      emit("deleted");
    }
  } else {
    var result = await ProssesAsync<IApiResponse<undefined>>(
      () => MoveToTrash(props.modelValue?.id ?? ""),
      loading
    );
    if (result.isSuccess) {
      toast.showToast("آگهی به پارکینگ منتقل شد");
      emit("deleted");
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .border-none {
    border: 2px solid var(--color-gray-300) !important;
    margin: 0;
  }
  .actions button {
    flex-grow: 1;
    width: 50% !important;
  }
}
.button__wraper button {
  height: 64px;
  border-radius: 16px;
}

.button__wraper button.active {
  background: var(--color-green);
  color: white;
  border: none !important;
}
.actions {
  display: flex;
  flex-direction: row-reverse;
  margin-top: 40px;
  gap: 1rem;
}
</style>