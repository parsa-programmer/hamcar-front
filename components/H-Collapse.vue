<template>
  <div :class="['card__collapse cursor-pointer', { active: isOpenCard }]" >
    <div class="card__collapse__header" @click="toggle">
      <h2 class="font-3 row align-items-center">
        <span class="ml-0_5">{{ title }}</span>
      </h2>
      <label>
        <icons-chevron-up v-if="isOpenCard" hash-color="var(--color-gray-500)" />
        <icons-chevron-down :width="16" :height="9" v-else  hash-color="var(--color-gray-500)"/>
      </label>
    </div>
    <Transition
      enter-active-class="animate__animated animate__fadeIn "
      mode="in-out"
    >
      <slot v-if="isOpenCard" />
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "پلن 4",
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const isOpenCard = ref(props.isOpen);

const toggle=()=>{
    isOpenCard.value = !isOpenCard.value;
}
</script>

<style>
.card__collapse__body {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card__collapse.active .card__collapse__body {
  display: block;
}
.card__collapse.active .card__collapse__header {
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-gray-200);
  border-radius: 3px;
}
.card__collapse.active {
  background: transparent !important;
}
.card__collapse__body {
  margin-top: 1.5rem;
  display: none;
}
.card__collapse {
  border: 2px solid var(--color-gray-200);
  padding: 1rem 24px;
  background: var(--color-gray-200);
  border-radius: 1rem;
  margin-top: 1rem;
}
.card__collapse .card__collapse__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__collapse__header h2 {
  font-weight: 800;
}
.card__collapse__header label {
  margin-left: .5rem;
  position: relative;
  top: 2px;
}
</style>