<template>
  <div
    class="mt-1"
    :class="['zone', { single__file: maxFile == 1 }]"
    ref="dropZone"
  >
    <div v-bind="getRootProps()" class="file__zone">
      <input v-bind="getInputProps()" />
    </div>
    <div :class="[`content`, { 'z-index-6': files.length >= 1 }]">
      <template v-if="files.length == 0">
        <svg
          width="83"
          height="72"
          viewBox="0 0 83 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-sm-2 d-mobile-block"
        >
          <path
            d="M30.0508 50.4003L41.4991 40.3203M41.4991 40.3203L52.9473 50.4003M41.4991 40.3203L41.4991 69.1203"
            stroke="#FFB142"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.9935 23.036C24.9935 23.036 23.8536 26.5049 23.8557 28.8001C23.8579 31.0947 24.1266 32.4431 25.0038 34.5617"
            stroke="#85858F"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.5185 0.878906C39.2262 0.878906 29.0287 8.27591 24.2974 18.768C24.0032 19.4202 23.8562 19.7463 23.6073 19.9065C23.3585 20.0666 22.993 20.0653 22.2622 20.0626C22.2355 20.0625 22.2089 20.0624 22.1822 20.0624C10.3577 20.0624 0.863281 30.0773 0.863281 41.7255C0.863281 52.6956 9.784 61.1249 20.3038 62.3306C21.2205 62.4357 21.6788 62.4882 22.0132 62.19C22.3476 61.8917 22.3476 61.4007 22.3476 60.4186C22.3476 59.5207 22.3476 59.0717 22.0994 58.7887C21.8513 58.5058 21.3711 58.4425 20.4107 58.3161C11.7903 57.1813 4.86328 50.247 4.86328 41.7255C4.86328 32.1842 12.6677 24.0624 22.1822 24.0624C23.0612 24.0624 23.9249 24.1275 24.7688 24.2529C25.7252 24.3951 26.6463 23.8328 26.9569 22.9172C30.5209 12.4119 39.9959 4.87891 51.5185 4.87891C66.1178 4.87891 78.1391 16.9371 78.1391 31.6542C78.1391 42.5699 71.4034 52.2388 61.9425 56.3633C61.3023 56.6424 60.9822 56.7819 60.8187 57.0315C60.6553 57.2811 60.6553 57.6114 60.6553 58.272V58.3865C60.6553 59.6515 60.6553 60.284 61.1024 60.5807C61.5496 60.8774 62.1056 60.6428 63.2178 60.1736C74.2973 55.4994 82.1391 44.2773 82.1391 31.6542C82.1391 14.7471 68.346 0.878906 51.5185 0.878906Z"
            fill="#85858F"
          />
        </svg>

        <svg
          width="104"
          height="89"
          viewBox="0 0 104 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-sm-2 d-mobile-none"
        >
          <path
            d="M37.6553 62.2998L52.0002 49.8398M52.0002 49.8398L66.3449 62.2998M52.0002 49.8398L52.0002 85.4398"
            stroke="#FFB142"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.3148 28.4717C31.3148 28.4717 29.8865 32.7597 29.8892 35.5968C29.8919 38.4332 30.2286 40.1001 31.3277 42.7189"
            stroke="#85858F"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.5517 1.05859C49.0444 1.05859 36.1783 10.342 30.3083 23.4989C30.0188 24.1477 29.8741 24.4722 29.6203 24.6337C29.3664 24.7952 29.0056 24.7887 28.2841 24.7759C28.1207 24.773 27.957 24.7716 27.7931 24.7716C13.0119 24.7716 1.08618 37.1319 1.08618 51.5773C1.08618 65.3568 12.5796 75.8545 25.9548 77.1285C26.8821 77.2168 27.3457 77.261 27.673 76.9634C28.0002 76.6659 28.0002 76.1779 28.0002 75.2018V74.193C28.0002 73.292 28.0002 72.8416 27.7446 72.5566C27.4891 72.2717 27.0127 72.2198 26.0601 72.116C15.0056 70.912 6.08618 62.2264 6.08618 51.5773C6.08618 39.8302 15.836 29.7716 27.7931 29.7716C28.8964 29.7716 29.9806 29.8521 31.0398 30.0075C32.2299 30.182 33.3756 29.4844 33.7667 28.3469C38.2245 15.3843 50.0894 6.05859 64.5517 6.05859C82.8802 6.05859 97.9138 20.9833 97.9138 39.128C97.9138 52.7098 89.334 64.7602 77.2996 69.7808C76.6571 70.0488 76.3359 70.1828 76.1681 70.4346C76.0002 70.6865 76.0002 71.0197 76.0002 71.686V72.852C76.0002 74.11 76.0002 74.739 76.4379 75.0367C76.8755 75.3343 77.439 75.1116 78.5661 74.6664C92.7726 69.0538 102.914 55.0029 102.914 39.128C102.914 18.1818 85.6014 1.05859 64.5517 1.05859Z"
            fill="#85858F"
          />
        </svg>
        <h6 class="zone__title">
          از <span class="color-blue">اینـــــجا</span> فایل خود را انتخاب کنید
        </h6>
        <p v-if="isDragActive" class="zone__description">
          {{ description }}
        </p>
        <ul>
          <li v-if="formats.length >= 1">
            <p>
              فرمت های مجاز:
              <span v-for="(item, index) in formats" :key="index"
                >{{ item }}
                <span v-if="formats.length > index + 1">,</span></span
              >
            </p>
          </li>
          <li v-if="fileSize != '0'" class="mb-sm-1_5">
            <p>حداگثر سایز: {{ fileSize }} مگابایت</p>
          </li>
        </ul>
      </template>
      <template v-else>
        <div :class="['images', { single: maxFile == 1 }]">
          <div
            :class="['file', { single: maxFile == 1 }]"
            v-for="(item, index) in files"
            :key="index"
          >
            <div class="icon">
              <icons-close
                hash-color="var(--color-error)"
                @click="removeImage(index)"
              />
            </div>
            <template v-if="item.type">
              <img
                :src="getImage(item)"
                v-if="item.type.toString().startsWith('image/')"
              />
              <img :src="PdfFile" v-else-if="item.type == 'application/pdf'" />
              <img :src="File" v-else />
            </template>
            <template v-else>
              <img
                :src="getImage(item[0])"
                v-if="item[0].type.toString().startsWith('image/')"
              />
              <img
                :src="PdfFile"
                v-else-if="item[0].type == 'application/pdf'"
              />
              <img :src="File" v-else />
            </template>
          </div>
        </div>
      </template>
      <div class="edit" v-if="maxFile == 1 && files.length == 1">
        <button @click="editImage">
          <icons-edit hash-color="#fff" :width="24" :height="24" />
          ویرایش
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { file } from "@babel/types";
import { Ref, ref } from "vue";
import { useDropzone } from "vue3-dropzone";
import { ToastType } from "~~/composables/useToast";
import { getFileType, IsImageFile } from "~~/utilities/stringUtil";
//@ts-ignore
import PdfFile from "~~/assets/img/pdf.png";
//@ts-ignore
import File from "~~/assets/img/file.png";
import { number } from "yup/lib/locale";

const emit = defineEmits(["getFiles"]);
const props = defineProps({
  description: {
    type: String,
    default: "و یا فایل خود را بکشید و رها کنید",
  },
  formats: {
    type: Array,
    default: [],
  },
  fileSize: {
    type: String,
    default: "5",
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  maxFile: {
    type: Number,
    default: 0,
  },
  isDragActive: {
    type: Boolean,
    default: true,
  },
  initData: {
    type: Array,
    default: [],
  },
});
const toast = useToast();

const files: Ref<any[]> = ref(props.initData);
const dropZone: Ref<HTMLElement | null> = ref(null);

const editImage = () => {
  console.log("123");
  open!();
};
const removeImage = (index: number) => {
  files.value.splice(index, 1);
  emit("getFiles", files.value);
};
const onDrop = (acceptFiles: any, rejectReasons: any) => {
  if (props.maxFile == 1) {
    files.value = [];
  }
  if (props.maxFile == files.value.length && props.maxFile > 0) {
    toast.showToast(
      `شما فقط قادر به انتخاب ${props.maxFile} فایل می باشید`,
      ToastType.error
    );
    return;
  }
  if (rejectReasons[0]) {
    if (rejectReasons[0]?.errors[0]?.code == "file-too-large") {
      toast.showToast(
        `حجم فایل بیشتر از ${props.fileSize} مگابایت است.`,
        ToastType.error
      );
    }
    if (rejectReasons[0]?.errors[0]?.code == "file-invalid-type") {
      toast.showToast(`فرمت فایل نامعتبر است`, ToastType.error);
    }
    return;
  }
  files.value.push(acceptFiles);
  emit("getFiles", files.value);
  dropZone.value?.removeAttribute("style");
};
const onDragOver = () => {
  dropZone.value?.setAttribute("style", "border-color: var(--color-blue)");
};
const onDragLeave = () => {
  dropZone.value?.removeAttribute("style");
};

const getImage = (file: any): string => {
  var res = URL.createObjectURL(file);
  return res;
};
var accept = "";
var index = 0;
props.formats.map((f) => {
  if (index == 0) {
    accept += "." + f;
  } else {
    accept += `,.${f}`;
  }
  index += 1;
});
const { getRootProps, getInputProps, open } = useDropzone({
  onDrop,
  onDragOver,
  onDragLeave,
  accept: accept,
  multiple: props.multiple,
  maxSize: props.fileSize == "0" ? undefined : Number(props.fileSize) * 1048576,
  preventDropOnDocument: false,
  noDrag: !props.isDragActive,
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .zone {
    padding: 2.5rem 0;
  }
  .single__file {
    padding: 0.5rem !important;
  }
  .zone__title {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
    margin-top: 1.5rem;
  }
  .zone__description {
    display: none;
  }
  ul li p {
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
  }
  .file img {
    width: 100px !important;
    height: 100px !important;
  }
  .edit {
    opacity: 1 !important;
    backdrop-filter: none !important;
    background: transparent !important;
  }
  .edit svg {
    display: none;
  }
  .edit button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: var(--color-error) !important;
    background: var(--color-white) !important;
    width: fit-content !important;
    padding: 7px 22px !important;
  }
  .mt-sm-2 {
    margin-top: 1.5rem !important;
  }
  .mb-sm-1_5 {
    margin-bottom: 1.5rem !important;
  }
}
.zone {
  width: 100%;
  padding: 4rem 0;
  border: 2px dashed var(--color-gray-600);
  border-radius: 18px;
  position: relative;
  z-index: 1;
  background: var(--color-gray-200);
}
.file__zone {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 4;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
}
.zone__title {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
.single__file {
  padding-top: 24px;
  padding: 24px;
}
.zone__description {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black-200);
  margin-top: 4px;
}
.zone ul {
  margin-top: 1rem;
}
.zone ul li {
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-green);
  margin-bottom: 4px;
  list-style: disc;
}
ul li p {
  color: var(--color-gray-600);
}
.images {
  display: flex;
  justify-content: start;
  align-self: flex-start;
  padding: 0 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  z-index: 2;
}
.file {
  flex-grow: 1;
  position: relative;
  z-index: 4;
  width: 200px;
}
.z-index-6 {
  z-index: 6;
}
.single {
  width: 100% !important;
  padding: 0;
  height: 300px;
}
.file.single img {
  width: 100% !important;
  height: 100% !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 14px !important;
}
.single .icon {
  display: none !important;
}
.file img {
  width: 200px;
  height: 200px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-gray-600);
  border-radius: 12px;
  position: relative;
}
.file .icon {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 24px;
  height: 24px;
  background: white;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  z-index: 3;
}
.edit {
  position: absolute;
  z-index: 6;
  background: rgba(15, 15, 16, 0.5);
  backdrop-filter: blur(16px);
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: all ease 0.3s;
  opacity: 0;
}
.content:hover .edit {
  opacity: 1;
}
.edit button {
  border: 2px solid var(--color-white);
  background: transparent;
  padding: 1rem 54px;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
}
</style>