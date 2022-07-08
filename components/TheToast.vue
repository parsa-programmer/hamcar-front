<template>
  <div
    ref="target"
    class="toast__container"
    :class="`bg-${toastRef.type} text-white`"
    @mouseenter="toggleStatus"
    @mouseleave="toggleStatus"
  >
    {{ toastRef.message }}
    <p id="prog" class="progress" :style="`width: ${progress}%`"></p>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "~/composables/useToast";
import { gsap } from "gsap";

const { toastRef } = useToast();
const target = ref<HTMLElement | null>(null);

let animation: any;
let progressAnimation: any;
const isHovered = ref(false);
const progress = ref(100);
const interval: any = ref(null);

const setAnimation = (): void => {
  animation = gsap.to(unref(target), {
    autoAlpha: 1,
    right: 30,
    ease: "power4",
    paused: true,
    duration: 0.5,
  });
};
onMounted(() => {
  setAnimation();
});
watch(toastRef, (value) => {
  if (value.show) {
    animation.play();
    myMove();
  }
});
watch(isHovered, (value) => {
  if (value) {
    clearInterval(interval.value);
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

const toggleStatus = () => {
  isHovered.value = !isHovered.value;
};

function myMove() {
  const elem: any = document.getElementById("prog");
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    if (progress.value == 0) {
      clearInterval(interval.value);
    } else {
      progress.value--;
      elem.style.width = progress.value + "%";
    }
  }, toastRef.value.duration / 100);
}
</script>

<style  scoped>
.invisible {
  opacity: 0;
}
.toast__container {
  opacity: 0;
  position: fixed;
  top: 10px;
  border-radius: 5px;
  padding: 1rem 2rem;
  color: white;
  right: 10px;
}
.bg-info {
  background: rgb(76, 76, 255);
}
.bg-error {
  background: red;
}
.bg-success {
  background: green;
}
.progress {
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 0;
  background: white;
  box-shadow: 0 0 5px 0 white;
  left: 0;
  margin: 0;
}
</style>
