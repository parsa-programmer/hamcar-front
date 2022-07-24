<template>
  <div class="mt-7">
    <div v-if="auth.isLogin == false">
      <Transition
        enter-active-class="animate__lightSpeedInRight"
        leave-active-class="animate__lightSpeedOutLeft"
      >
        <advert-step-four-login
          v-if="loginStep == 1"
          @toggleLoginStep="changeAuthSteps"
        />
      </Transition>
      <Transition
        enter-active-class="animate__lightSpeedInRight"
        leave-active-class="animate__lightSpeedOutLeft"
      >
        <advert-step-four-validate-code
          @toggleLoginStep="changeAuthSteps"
          v-if="loginStep == 2"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { authStore } from "~~/stores/auth.store";

const auth = authStore();
const loginStep = ref(1);

const changeAuthSteps = (step: number) => {
  loginStep.value = step;
};
</script>

<style scoped>

</style>