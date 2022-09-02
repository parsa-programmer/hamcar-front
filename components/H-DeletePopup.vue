<template>
  <div>
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="in-out"
      v-if="isMobile == false"
    >
      <div class="popup__back" v-if="modelValue" @click.self="close">
        <div class="popup__content">
          <div class="row">
            <div class="image">
              <img :src="trashImage" />
            </div>
            <div class="body">
              <div class="row flex-column gap-0">
                <h4 class="font-2">{{ title }}</h4>
                <p class="text__description font-3">{{ description }}</p>
                <div class="row justify-content-flex-end mt-2">
                  <h-button @click="close" color="default" class="btn-default-size"
                    >انصراف</h-button
                  >
                  <h-button @click="Accept" class="btn-error btn-default-size"
                    >حذف</h-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <h-modal v-model="modelValue" v-else>
      <div class="row flex-column align-items-center">
        <div class="image mb-1_5">
          <img :src="trashImage" />
        </div>
        <div class="body w-full">
          <div class="row flex-column gap-0 align-items-center w-full">
            <h4 class="font-2">{{ title }}</h4>
            <p class="text__description font-3">{{ description }}</p>
            <div class="row justify-content-space-between mt-2 w-full">
              <h-button
                style="flex-grow: 1"
                @click="close"
                class="btn-default btn-default-size"
                >انصراف</h-button
              >
              <h-button
                style="flex-grow: 1"
                @click="Accept"
                class="btn-error btn-default-size"
                >حذف</h-button
              >
            </div>
          </div>
        </div>
      </div>
    </h-modal>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import trashImage from "~~/assets/img/Trash.png";
const props = defineProps({
  title: {
    type: String,
    default: "حذف",
  },
  description: {
    type: String,
    default: "آیا از حذف  اطمینان دارید؟",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["accepted", "canceled", "update:modelValue"]);
const isMobile = ref(false);
const close = () => {
  emit("canceled");
  emit("update:modelValue", false);
};
const Accept = () => {
  emit("accepted");
  emit("update:modelValue", false);
};

onMounted(() => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    isMobile.value = true;
  }
});
watch(
  () => window.innerWidth,
  (val) => {
    console.log(val);
    if (val < 768) {
      isMobile.value = true;
    } else {
      isMobile.value = false;
    }
  }
);
watch(
  () => props.modelValue,
  (val) => {
    emit("update:modelValue", val);
  }
);
</script>

<style scoped>
.font-2 {
  margin-bottom: 0.5rem;
}
.body {
  height: fit-content !important;
}
.popup__back {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 1000000;
  justify-content: center;
}
.popup__content {
  background: var(--color-white);
  width: 684px;
  height: 260px;
  padding: 40px;
  border-radius: 18px;
}
@media screen and (max-width: 768px) {
  .popup__content {
    width: 90% !important;
    padding-bottom: 5px !important;
  }
  .image {
    width: 56px !important;
    height: 56px !important;
  }
}
</style>