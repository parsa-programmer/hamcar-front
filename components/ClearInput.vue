<template>
  <div class="input-group has-empty-btn">
    <input
      :class="['form-control', { 'invalid-data': !!errorMessage }]"
      :type="type"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :value="modelValue"
      :name="name"
      @input="modelValueChanged"
      @focus="showEmptyBtn"
      @blur="blureInput"
      v-bind="$attrs"
    />
    <p class="input-invalid-text">{{ errorMessage || successMessage }}</p>
    <svg
      class="input-empty-btn"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      @click="clear"
      ref="emptyBtn"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12ZM8.46452 8.46443C8.85505 8.07391 9.48821 8.07391 9.87874 8.46443L12.0001 10.5858L14.1214 8.46452C14.5119 8.074 15.145 8.074 15.5356 8.46452C15.9261 8.85505 15.9261 9.48821 15.5356 9.87874L13.4143 12L15.5356 14.1213C15.9261 14.5118 15.9261 15.145 15.5356 15.5355C15.1451 15.926 14.5119 15.926 14.1214 15.5355L12.0001 13.4142L9.87871 15.5356C9.48819 15.9261 8.85503 15.9261 8.4645 15.5356C8.07398 15.1451 8.07398 14.5119 8.4645 14.1214L10.5859 12L8.46452 9.87864C8.074 9.48812 8.074 8.85496 8.46452 8.46443Z"
        fill="#02C7BE"
      ></path>
    </svg>
  </div>
</template>


<script setup lang="ts">
import { Ref } from "vue";
import { useField } from "vee-validate";

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
  successMessage: {
    type: String,
    default: "",
  },
  modelValue: {
    default: "",
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
  number: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
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
const emptyBtn: Ref<HTMLInputElement | null> = ref(null);

watchEffect(() => {
  emit("update:modelValue", unref(inputValue));
});
onMounted(() => {
  if (props.autofocus) {
    showEmptyBtn();
  }
});
watch(
  () => props.modelValue,
  (value) => {
    setValue(value);
    setTimeout(() => {
      if (meta.valid) {
        showEmptyBtn();
      } else {
        emptyBtn.value?.removeAttribute("style");
      }
    }, 10);
  }
);
const showEmptyBtn = () => {
  if (meta.valid && inputValue.value) {
    emptyBtn.value?.setAttribute("style", "display:block");
  }
};
const blureInput = ($event: any) => {
  handleBlur($event);
  setTimeout(() => {
    emptyBtn.value?.removeAttribute("style");
  }, 100);
};
const clear = () => {
  emit("update:modelValue", "");
  emptyBtn.value?.removeAttribute("style");
};
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
</script>
