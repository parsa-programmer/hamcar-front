<template>
  <div
    ref="target"
    class="toast__container"
    style="right: 10px; opacity: 0; visibility: hidden;"
    :class="`bg-${toastRef.type} text-white`"
    @mouseenter="toggleStatus"
    @mouseleave="toggleStatus"
  >
    <div :class="`icon bg-${toastRef.type} cursor-pointer`" @click="close">
      <h-icon
        :icon="Icon.solid_check"
        v-if="toastRef.type == ToastType.success"
      ></h-icon>
      <h-icon
        :icon="Icon.solid_close"
        v-else-if="toastRef.type == ToastType.error"
      ></h-icon>
    </div>
    {{ toastRef.message }}
    <p id="prog" class="progress" :style="`width: ${progress}%`"></p>
  </div>
</template>

<script setup lang="ts">
import { ToastType, useToast } from "~/composables/useToast";
import { gsap } from "gsap";
import { Icon } from "~~/models/utilities/Icon";
const target = ref<HTMLElement | null>(null);
let animation: any;
const isHovered = ref(false);
const progress = ref(100);
let interval: any = null;

const { toastRef } = useToast();

const toggleStatus = () => {
  isHovered.value = !isHovered.value;
};
const close = () => {
  clearInterval(interval);
  animation.reverse();
  setTimeout(() => {
    progress.value = 100;
  }, 500);
};
const setAnimation = (): void => {
  animation = gsap.to(unref(target), {
    autoAlpha: 1,
    right: 30,
    ease: "power4",
    paused: true,
    duration: 0.5,
  });
};
function myMove() {
  const elem: any = document.getElementById("prog");
  clearInterval(interval);
  interval = setInterval(() => {
    if (progress.value == 0) {
      clearInterval(interval);
    } else {
      progress.value--;
      elem.style.width = progress.value + "%";
    }
  }, toastRef.value.duration / 100);
}
onMounted(() => {
  setAnimation();
});

watch(toastRef, (value) => {
  if (value.show) {
    progress.value = 100;
    animation.play();
    myMove();
  } else {
    if (isHovered.value == false) {
      close();
    }
  }
});
watch(isHovered, (value) => {
  if (value) {
    clearInterval(interval);
  } else if (progress.value > 0) {
    myMove();
  }
});
watch(progress, (value) => {
  if (value == 0 && toastRef.value.show == false) {
    animation.reverse();
    setTimeout(() => {
      progress.value = 100;
    }, 500);
  }
});
</script>

<style  scoped>
.invisible {
  opacity: 0;
}
.toast__container {
  opacity: 0;
  position: fixed;
  top: 10px;
  border-radius: 58px;
  padding: 10px 0;
  padding-left: 1rem;
  color: var(--color-white);
  right: 10px;
  display: flex;
  min-width: 250px;
  height: 50px;
  align-items: center;
}
.icon {
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-left: 10px;
  margin-right: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon.bg-error {
  background: #a50000;
}
.icon.bg-success {
  background: var(--color-green-500);
}
.bg-info {
  background: rgb(76, 76, 255);
}
.bg-error {
  background: red;
}

.bg-success {
  background: var(--color-green);
}
.progress {
  width: 90%;
  height: 4px;
  position: absolute;
  bottom: 0;
  background: white;
  box-shadow: 0 0 5px 0 white;
  left: 14px;
  margin: 0 auto;
}
</style>
