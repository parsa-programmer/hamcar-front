<template>
  <div class="input-group" v-if="hasSlot()">
    <input
      :type="type"
      :class="[
        'form-control bg-transparent',
        classValue,
        { 'invalid-data': !!errorMessage },
      ]"
      :placeholder="placeholder"
      v-model="modelValue"
      :autofocus="autofocus"
      v-bind="$attrs"
      @input="modelValueChanged"
      :name="name"
      autocomplete="off"
    />
    <slot />
    <p class="input-invalid-text">{{ errorMessage || successMessage }}</p>
  </div>
  <div v-else>
    <input
      :type="type"
      :class="[
        'form-control bg-transparent',
        classValue,
        { 'invalid-data': !!errorMessage },
      ]"
      :placeholder="placeholder"
      v-model="modelValue"
      :autofocus="autofocus"
      v-bind="$attrs"
      @input="modelValueChanged"
      autocomplete="off"
      :name="name"
    />
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
  type: {
    default: "text",
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
  number: {
    type: Boolean,
    default: false,
  },
  classValue: {
    type: String,
    default: "",
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
  if (props.number) {
    if (!isNaN($event.target.value)) {
      emit("update:modelValue", $event.target.value);
    } else {
      $event.target.value = props.modelValue;
    }
  } else {
    emit("update:modelValue", $event.target.value);
  }
};
const hasSlot = () => {
  return !!slots.default;
};
</script>
