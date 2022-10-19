<template>
  <div :class="['h-image-uploader', size]">
    <Teleport to="body">
      <div class="image__uploading__container" v-if="loading">
        <!-- <div class="image__uploading__progress">
          <div class="image__uploading__progress__bar"></div>
        </div> -->
        <icons-loading />
      </div>
    </Teleport>
    <div class="image__container row" ref="imagContainer">
      <div
        class="image__item img__selector"
        @click="OpenSelectBox"
        v-if="selectedData.length < maxFileCount"
      >
        <input
          ref="fileUpload"
          :multiple="multiple"
          accept="image/*"
          style="position: fixed;left: -100%;"
          type="file"
          @change="(e) => SelectedFile(e)"
        />
        <icons-add-image :mobile-mode="size == 'sm' || isMobile" />
      </div>
      <slot />
      <div class="image__item" v-for="(item, index) in imageNames" :key="index">
        <img :src="item" />
        <button class="delete__image__item" @click="DeleteImage(index)">
          <icons-trash :width="20" :height="40" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createImage } from "@nuxt/image-edge/dist/runtime";
import { Ref } from "vue";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const isMobile = ref(false);

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  maxFileSizePerMeg: {
    type: Number,
    default: 0,
  },
  maxFileCount: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  justSelectOneTime: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
  },
  onUploadNewImage: {
    type: Function,
    default: () => true,
  },
  onDeleteImage: {
    type: Function,
    default: () => true,
  },
});
const loading = ref(false);
const selectedData = ref([]);
const emit = defineEmits(["onSelected", "update:modelValue"]);
const fileUpload: Ref<HTMLInputElement | null> = ref(null);
const imageNames: Ref<string[]> = ref([]);

const OpenSelectBox = () => {
  fileUpload.value!.click();
};

const DeleteImage = async (index: number) => {
  imageNames.value.splice(index, 1);
  selectedData.value.splice(index, 1);
  emit("update:modelValue", selectedData.value);
};
const SelectedFile = async (e: any) => {
  if (props.justSelectOneTime) {
    selectedData.value = [];
    imageNames.value = [];
  }
  let files = e.target.files;
  for (var i = 0; i < files.length; i++) {
    let file = files[i];

    if (props.maxFileSizePerMeg > 0) {
      let fileSize = file.size;
      let fileSizeInMeg = fileSize / 1024 / 1024;
      if (fileSizeInMeg > props.maxFileSizePerMeg) {
        alert("حجم فایل بیش از حد مجاز است");
        break;
      }
    }
    if (props.maxFileCount > 0) {
      if (selectedData.value.length >= props.maxFileCount) {
        alert(`حداکثر تعداد مجاز آپلود فایل عدد ${props.maxFileCount} است`);
        break;
      }
    }

    var result = await ProssesAsync<boolean | undefined>(
      () => props.onUploadNewImage(file),
      loading
    );
    //@ts-ignore
    if (!result || result == false) {
      return;
    }
    //@ts-ignore
    selectedData.value.push(file);
    imageNames.value.push(URL.createObjectURL(file));
  }
  emit("update:modelValue", selectedData.value);
};

onMounted(() => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    isMobile.value = true;
  }
});
</script>
<style scoped>
.image__uploading__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
</style>