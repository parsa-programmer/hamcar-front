<template>
  <div >
    <textarea
      :class="[
        'form-control',
        { 'bg-transparent': transParent },
        classValue,
        { 'invalid-data': !!errorMessage },
      ]"
      :placeholder="placeholder"
      v-model="modelValue"
      :autofocus="autofocus"
      @input="modelValueChanged"
      :name="name"
      autocomplete="off"
      v-bind="$attrs"
    ></textarea>
    <p class="input-invalid-text">{{ errorMessage || successMessage }}</p>
  </div>
</template>


<script setup lang="ts">
import { Ref } from "vue";
import { useField } from "vee-validate";

const slots = useSlots();
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  autofocus: {
    default: null,
    type: Boolean,
  },
  placeholder: {
    default: "",
    type: String,
  },
  modelValue: {
    default: "",
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: "",
  },
  classValue: {
    type: String,
    default: "",
  },
  transParent: {
    type: Boolean,
    default: true,
  },
});

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

watchEffect(() => {
  emit("update:modelValue", unref(inputValue));
});
watch(
  () => props.modelValue,
  (value) => {
    setValue(value);
  }
);
const modelValueChanged = ($event: any) => {
  handleChange($event);
  emit("update:modelValue", $event.target.value);
};
const hasSlot = () => {
  return !!slots.default;
};
</script>
