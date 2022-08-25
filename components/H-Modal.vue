<template>
  <Transition
    enter-active-class="animate__animated animate__slideInUp animate__faster"
    leave-active-class="animate__animated animate__slideOutDown animate__faster"
  >
    <div
      v-if="modelValue"
      :class="[
        'modal-wrapper',
        { ' modal-wrapper--normal': isNormal },
        { 'modal-fix-header': mobileHeader },
        'modal-wrapper--open',
      ]"
      @click.self="closeModal"
    >
      <!--  modal-wrapper--normal    -->

      <div class="modal" v-if="modelValue">
        <div
          :class="[
            'modal__header',
            { 'modal__header-hide': showHeader == false },
          ]"
        >
          <div class="modal__close-btn" @click="closeModal">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M1 1L6 6M11 11L6 6M6 6L11 1M6 6L1 11"
                stroke="#ABADB3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h5 class="modal__name">{{ title }}</h5>
          <p class="modal__caption" v-if="subTitle">
            {{ subTitle }}
          </p>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { UseUtilStore } from "~~/stores/util.store";

//@ts-ignore
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  isNormal: {
    type: Boolean,
    default: false,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  mobileHeader: {
    type: Boolean,
    default: false,
  },
});

const store = UseUtilStore();

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    store.ChangeShowBlackBackGround(val);
  }
);
const emit = defineEmits(["update:modelValue"]);
const closeModal = () => {
  emit("update:modelValue", false);
};
</script>

<style>
body.modal-open {
  overflow: hidden;
}

.modal-wrapper {
  display: none;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow-y: auto;
}

.modal-wrapper--open {
  display: block;
}

.modal {
  border-radius: 18px;
  overflow: initial;
  background-color: var(--color-white);
  max-width: 51rem;
  width: 100%;
  margin: 4rem auto 2rem auto;
  flex-shrink: 0;
  max-height: 90%;
}
.modal-fix-header .modal__close-btn {
  background-color: var(--color-gray-200);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  left: 40px;
  right: auto;
  top: 30px;
}
.modal-fix-header .modal__name {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
}
.modal-fix-header .modal__close-btn svg {
  width: 12px;
  height: 12px;
  stroke-width: 1.5;
}

.modal-fix-header .modal__header {
  background-color: var(--color-white);
  display: block;
  height: auto;
  padding: 40px 40px 0 1.625rem;
  min-height: 4rem;
  border-radius: 20px;

}
.modal__header {
  position: relative;
  background-color: var(--color-gray-200);
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__header-hide {
  display: none;
}
.modal__close-btn {
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--color-white);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4rem;
  top: 1.5rem;
  cursor: pointer;
}

.modal__close-btn svg {
  width: 18px;
  height: 18px;
  stroke-width: 2;
}

.modal__name {
  font-family: var(--t1-font-family);
  font-size: var(--t1-font-size);
}

.modal__caption {
  display: none;
  color: var(--color-gray-600);
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  margin-top: 0.5rem;
}

.modal__body {
  padding: 2.25rem 4rem 3rem 4rem;
}

.modal__submit-btn {
  min-width: 12rem;
  margin-right: auto;
  margin-top: 2rem;
}

.modal__line {
  display: none;
  background-color: var(--color-gray-200);
  height: 2px;
  margin-top: 1.5rem;
  margin-left: -2rem;
}

@media screen and (max-width: 992px) {
  .modal {
    max-width: 44rem;
  }

  .modal__body {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 2rem;
  }

  .modal__close-btn {
    right: 3rem;
  }
}

@media screen and (max-width: 768px) {
  .modal-wrapper--open {
    display: flex;
  }

  .modal-wrapper {
    max-height: 100vh;
    align-items: flex-end;
  }

  .modal-wrapper--normal {
    align-items: flex-start;
    padding: 0 26px;
  }

  .modal-wrapper--normal .modal {
    border-radius: 20px;
    margin-top: 4rem;
  }

  .modal-wrapper--normal .modal__header {
    background-color: var(--color-gray-200);
    display: flex;
    padding: 0;
  }
  .modal__header-hide {
    display: block !important;
  }
  .modal-wrapper--normal .modal__header::before {
    content: none;
  }

  .modal-wrapper--normal .modal__close-btn,
  .modal-wrapper--normal .modal__caption {
    display: none;
  }

  .modal-wrapper--normal .modal__name {
    margin-top: 0;
    text-align: center;
  }

  .modal-wrapper--normal .modal__body {
    padding-top: 1.5rem;
  }

  .modal {
    max-width: 100%;
    width: 100%;
    flex-grow: 1;
    border-radius: 20px 20px 0 0;
    transform: none;
    margin-bottom: 0;
    overflow-y: auto !important;
  }

  .modal__header {
    background-color: var(--color-white);
    display: block;
    height: auto;
    padding: 1.5rem 1.625rem 0 1.625rem !important;
    min-height: 4rem;
  }

  .modal__header::before {
    content: "";
    width: 4rem;
    height: 0.25rem;
    border-radius: 2px;
    background-color: var(--color-gray-300);
    display: block;
    left: 0;
    right: 0;
    margin: auto;
  }

  .modal__close-btn {
    background-color: var(--color-gray-200);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    left: 1.625rem !important;
    right: auto;
  }

  .modal__close-btn svg {
    width: 12px;
    height: 12px;
    stroke-width: 1.5;
  }

  .modal__body {
    padding: 2rem 1.625rem 1.5rem 1.625rem;
  }

  .modal__name {
    font-family: var(--t3-font-family);
    font-size: var(--t3-font-size);
    text-align: right;
    margin-top: 1.75rem;
  }

  .modal__caption {
    display: block;
  }

  .modal__submit-btn {
    width: 100%;
    margin-top: 1.5rem;
  }

  .modal__line {
    display: block;
  }
}

@media screen and (max-width: 576px) {
  .modal__body {
    padding-top: 0 !important;
  }
}
</style>