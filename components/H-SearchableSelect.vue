<template>
  <div class="dropdown-wrapper" v-click-outside="closeDropDown">
    <div
      :class="[`dropdown-box`, { 'dropdown-box--open': isOpen }]"
      @click="toggleDropDown"
    >
      <svg
        class="dropdown-box__icon"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
      >
        <path
          d="M13 1L7 7L1 1"
          stroke="#C6C7CC"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <input
        type="text"
        class="dropdown-box__input"
        readonly
        :placeholder="placeholder"
        :value="modelValue"
        :name="name"
        @input="modelValueChanged"
        ref="selectInput"
      />
    </div>
    <div class="dropdown">
      <div class="dropdown__search-box">
        <input
          type="text"
          @input="(e) => search(e)"
          class="dropdown__input"
          placeholder="جستجو"
        />
        <svg
          class="dropdown__icon"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M0.75 7.65203C0.75 10.1868 1.33034 11.8662 2.38856 12.9222C3.44707 13.9786 5.12683 14.5542 7.65217 14.5542C10.1774 14.5542 11.8572 13.9784 12.9158 12.9219C13.974 11.8656 14.5543 10.1862 14.5543 7.65203C14.5543 5.11781 13.974 3.43842 12.9158 2.3822C11.8572 1.32569 10.1774 0.749852 7.65217 0.749852C5.12683 0.749852 3.44707 1.32545 2.38856 2.3818C1.33034 3.43786 0.75 5.1172 0.75 7.65203Z"
            stroke="#ABADB3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.3039 15.3044L13.4541 13.4546"
            stroke="#ABADB3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <ul class="dropdown__list">
        <li
          class="dropdown__item"
          v-for="(item, index) in data"
          :key="index"
          @click="selectItem(item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { useField } from "vee-validate";
import { SelectData } from "~~/models/utilities/SelectData";

const isOpen = ref(false);
const selectInput: Ref<HTMLElement | null> = ref(null);
const slots = useSlots();
const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  placeholder: string;
  selectData: SelectData[];
  modelValue: string | number;
  name: string;
}>();

const {
  value: inputValue,
  errorMessage,
  meta,
  handleChange,
  handleBlur,
  setValue,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
});

const data: Ref<SelectData[]> = ref(props.selectData);

watchEffect(() => {
  emit("update:modelValue", unref(inputValue));
});
watch(
  () => props.selectData,
  (val) => {
    if (!data.value.find((f) => f.value == props.modelValue)) {
      emit("update:modelValue", "");
    }
    data.value = val;
  }
);
watch(
  () => props.modelValue,
  (value) => {
    setValue(value);
  }
);
const search = (e: any) => {
  var list = [...props.selectData];
  data.value = list.filter((item) => item.label.includes(e.target.value));
};
const modelValueChanged = ($event: any) => {
  emit("update:modelValue", $event.target.value);
  handleChange($event);
};
const hasSlot = () => {
  return !!slots.default;
};
const selectItem = (selectedValue: any) => {
  emit("update:modelValue", selectedValue);
  isOpen.value = false;
};
const toggleDropDown = () => {
  isOpen.value = !isOpen.value;
};
const closeDropDown = () => {
  isOpen.value = false;
};
</script>

<style>
</style>