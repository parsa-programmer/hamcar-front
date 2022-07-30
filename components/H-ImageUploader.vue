<template>
  <div class="h-image-uploader">
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
          style="position: fixed"
          type="file"
          @change="(e) => SelectedFile(e)"
        />
        <icons-add-image :width="iconWidth" :height="iconHeight"/>
      </div>
      <div class="image__item" v-for="(item, index) in imageNames" :key="index">
        <img :src="item" />
        <button class="delete__image__item" @click="DeleteImage(index)">
          حذف
          <icons-close  />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createImage } from "@nuxt/image-edge/dist/runtime";
import { Ref } from "vue";

const iconWidth = ref(192);
const iconHeight = ref(192);
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
});
const selectedData = ref([]);
const emit = defineEmits(["onSelected", "update:modelValue"]);
const fileUpload: Ref<HTMLInputElement | null> = ref(null);
const imageNames: Ref<string[]> = ref([]);
const OpenSelectBox = () => {
  fileUpload.value!.click();
};

const DeleteImage = (index: number) => {
  imageNames.value.splice(index, 1);
  selectedData.value.splice(index, 1);
  emit("update:modelValue", selectedData.value);
};
const SelectedFile = (e: any) => {
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

    //@ts-ignore
    selectedData.value.push(file);
    imageNames.value.push(URL.createObjectURL(file));
  }
  emit("update:modelValue", selectedData.value);
};

onMounted(() => {
  let windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    iconWidth.value = 88;
    iconHeight.value = 88;
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .img__selector {
    width: 88px !important;
    height: 88px !important;
  }
  .image__container img {
    width: 88px !important;
    height: 88px !important;
  }
  .delete__image__item {
    left: 0.3rem !important;
    top: 0.3rem !important;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    width: 45px !important;
  }
  .delete__image__item svg {
    display: none;
  }
}
.image__container {
  flex-wrap: wrap;
}
.image__container input {
  opacity: 0;
}
.img__selector {
  border: 2px dashed var(--color-gray-400);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 192px;
  cursor: pointer;
  transition: all ease 0.2s;
}
.image__container img {
  width: 192px;
  height: 192px;
  border-radius: 16px;
}
.image__item {
  position: relative;
}
.delete__image__item {
  width: 77px;
  height: 2rem;
  color: var(--color-black);
  position: absolute;
  left: 1rem;
  top: 1rem;
  background: var(--color-white);
  border-radius: 6px;
  cursor: pointer !important;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  font-weight: 500;
  transition: all ease 0.2s;
}
.delete__image__item:hover {
  background: var(--color-gray-300) !important;
}
.delete__image__item svg {
  margin-right: 14px;
}
.img__selector:hover {
  background: var(--body-bg-color);
}
</style>