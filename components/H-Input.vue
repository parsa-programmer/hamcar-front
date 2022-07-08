<template>
  <div class="input-group" v-if="hasSlot()">
    <input
      :type="type"
      :class="['form-control bg-transparent', `${classValue}`]"
      :placeholder="placeholder"
      v-model="modelValue"
      :autofocus="autofocus"
      v-bind="$attrs"
    />
    <slot name="icon" />
  </div>
  <input
    v-else
    :type="type"
    :class="['form-control bg-transparent', `${classValue}`]"
    :placeholder="placeholder"
    v-model="modelValue"
    :autofocus="autofocus"
    v-bind="$attrs"
  />
</template>


<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false,
};
</script>
<script setup>
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
  classValue: {
    type: String,
    default: "",
  },
});

const handleChange = ($event) => {
  emit("update:modelValue", $event.target.value);
};

const hasSlot = () => {
  return !!slots.default;
};
</script>

<style>
</style>