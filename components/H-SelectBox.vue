<template>
  <div
    :class="[
      'select',
      { 'select--disabled': disabled },
      { 'select--error': !!errorMessage },
      { 'select--valid': !errorMessage && !disabled && modelValue },
    ]"
    @click="openBox"
  >
    <div class="select__box">
      <span class="select__name" v-if="modelValue">{{
        data.filter((f) => f.value == modelValue)[0]?.label ?? placeholder
      }}</span>
      <span class="select__name" v-else>{{ placeholder }}</span>
      <span class="select__icon">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path
            d="M13 1L7 7L1 1"
            stroke="#ABADB3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <ul class="select__list" @click="(e) => e.stopPropagation()">
      <ul class="select__list__wrapper">
        <li class="select__item disable">
          {{ placeholder }}
        </li>
        <li
          class="select__item"
          v-for="(item, index) in data"
          :key="index"
          @click="(e) => selectItem(item.value, e)"
        >
          {{ item.label }}
        </li>
      </ul>
    </ul>
    <svg
      v-if="
        showCheckBox &&
        !errorMessage &&
        !!data.filter((f) => f.value == modelValue)[0]
      "
      class="select__valid-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill="#02C7BE" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9073 10.3067C17.2978 9.91619 17.2978 9.28303 16.9073 8.8925C16.5168 8.50198 15.8836 8.50198 15.4931 8.8925L10.2002 14.1854L7.9073 11.8925C7.51678 11.502 6.88361 11.502 6.49309 11.8925C6.10256 12.283 6.10256 12.9162 6.49309 13.3067L9.49267 16.3063C9.49281 16.3064 9.49295 16.3066 9.49309 16.3067C9.5419 16.3555 9.59451 16.3982 9.64996 16.4349C10.0381 16.6911 10.5656 16.6484 10.9073 16.3067L16.9073 10.3067Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { SelectData } from "~~/models/utilities/SelectData";
import { useField } from "vee-validate";

const isOpen = ref(false);
const emit = defineEmits(["update:modelValue"]);
const selectedValue = ref(null);

const props = defineProps<{
  placeholder?: string;
  showCheckBox?: boolean;
  modelValue?: any;
  name: string;
  classValue?: string;
  disabled?: boolean;
  data: SelectData[];
}>();
const { disabled, name, modelValue } = toRefs(props);

const {
  value: inputValue,
  errorMessage,
  meta,
  handleChange,
  handleBlur,
  setValue,
} = useField(name, undefined, {
  initialValue: modelValue,
  validateOnValueUpdate: false,
});
watchEffect(() => {
  emit("update:modelValue", unref(inputValue));
});
watch(
  () => modelValue,
  (value) => {
    setValue(value);
  }
);
const openBox = (event: any) => {
  if (disabled?.value) return;
  openSelectBox(event);
};

const selectItem = (val: any, event: any) => {
  selectItem_in_selectBox(event);
  //////////////////////////////////////////////////////////////
  emit("update:modelValue", val);
  isOpen.value = false;
  selectedValue.value = val;
};
</script>

<style>
</style>