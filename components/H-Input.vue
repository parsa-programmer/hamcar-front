<template>
  <div v-if="type == 'checkbox'" class="checkbox__wrap">
    <label class="checkbox">
      <input
        type="checkbox"
        :value="modelValue"
        :name="name"
        @input="modelValueChanged"
        :id="inputId"
        v-bind="$attrs"
      />
      <span class="checkmark"></span>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </label>
    <label v-if="hasSlot()" :for="inputId">
      <slot />
    </label>
  </div>
  <div v-else-if="type == 'radio'" class="checkbox__wrap">
    <label class="checkbox">
      <input
        type="radio"
        :value="modelValue"
        :name="name"
        v-bind="$attrs"
        @input="modelValueChanged"
        :id="inputId"
      />
      <slot name="custom_marker" v-if="$.slots.custom_marker" />
      
      <template v-else>
        <span class="checkmark"></span>
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </template>
    </label>
    <label v-if="hasSlot()" :for="inputId">
      <slot />
    </label>
  </div>
  <template v-else>
    <div class="input-group" v-if="hasSlot()">
      <input
        :type="type"
        :class="[
          'form-control bg-transparent',
          classValue,
          { 'invalid-data': !!errorMessage },
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        :autofocus="autofocus"
        v-bind="$attrs"
        @input="modelValueChanged"
        :name="name"
        autocomplete="off"
      />
      <slot />
      <p class="input-invalid-text">{{ errorMessage }}</p>
    </div>
    <div v-else-if="suffix">
      <div
        :class="['input-group', { input__valid: !errorMessage && modelValue }]"
      >
        <input
          :type="type"
          :class="[
            'form-control bg-transparent',
            'has-suffix',
            classValue,
            { 'invalid-data': !!errorMessage },
            ,
          ]"
          :placeholder="placeholder"
          :value="modelValue"
          :autofocus="autofocus"
          v-bind="$attrs"
          @input="modelValueChanged"
          autocomplete="off"
          :name="name"
        />
        <span class="input-group-suffix">{{ suffix }}</span>
        <svg
          v-if="showCheckBox && !errorMessage"
          class="input__valid-icon"
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
      <p class="input-valid-text" v-if="!errorMessage">{{ message }}</p>
      <p class="input-invalid-text" v-else-if="modelValue">
        {{ errorMessage }}
      </p>
    </div>
    <template v-else>
      <input
        :type="type"
        :class="[
          'form-control bg-transparent',
          classValue,
          { 'invalid-data': !!errorMessage },
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        :autofocus="autofocus"
        v-bind="$attrs"
        @input="modelValueChanged"
        autocomplete="off"
        :name="name"
      />
      <p v-if="ignoreErrorMessage == false" class="input-invalid-text">
        {{ errorMessage }}
      </p>
    </template>
  </template>
</template>


<script setup lang="ts">
import { Ref } from "vue";
import { useField } from "vee-validate";

const id = Math.floor(Math.random() * Date.now());

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
  message: {
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
  suffix: {
    type: String,
    default: "",
  },
  showCheckBox: {
    type: Boolean,
    default: false,
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false,
  },
  inputId: {
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
  if (props.number) {
    if (!isNaN($event.target.value)) {
      emit("update:modelValue", $event.target.value);
    } else {
      $event.target.value = props.modelValue;
    }
  } else {
    emit("update:modelValue", $event.target.value);
  }
  handleChange($event);
};
const hasSlot = () => {
  return !!slots.default;
};
</script>
<style scoped>
.checkbox__wrap {
  display: flex;
  gap: 0.5rem;
}
.checkbox__wrap label {
  cursor: pointer;
}
</style>