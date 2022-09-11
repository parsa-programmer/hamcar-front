<template>
  <button
    :class="[
      'btn',
      outline ? `btn-${color}-outline` : `btn-${props.color}`,
      size ? `btn-${size}` : null,
    ]"
    :disabled="loading"
  >
    <div :style="loading == true ? `opacity:0` : null">
      <template v-if="$slots.icon">
        <div class="row align-items-center gap-0_5 justify-content-center">
          <slot name="icon" />
          <slot />
        </div>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>

    <div class="sp sp-3balls" v-if="loading"></div>
  </button>
</template>

<script setup >
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.sp-3balls,
.sp-3balls:before,
.sp-3balls:after {
  border-radius: 50%;
  background-color: white;
  width: 10px;
  height: 10px;
  transform-origin: center center;
  display: inline-block;
}
.sp-3balls {
  position: absolute;
  width: 10px !important;
  height: 10px !important;
  background-color: white;
  opacity: 1;
  -webkit-animation: spScaleAlpha 1s infinite linear;
  animation: spScaleAlpha 1s infinite linear;
}
.sp-3balls:before,
.sp-3balls:after {
  content: "";
  position: relative;
  opacity: 0.25;
}
.sp-3balls:before {
  left: 18px;
  top: -6px;
  -webkit-animation: spScaleAlphaBefore 1s infinite linear;
  animation: spScaleAlphaBefore 1s infinite linear;
}
.sp-3balls:after {
  left: -18px;
  top: -29px;
  -webkit-animation: spScaleAlphaAfter 1s infinite linear;
  animation: spScaleAlphaAfter 1s infinite linear;
}
@-webkit-keyframes spScaleAlpha {
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
@keyframes spScaleAlpha {
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes spScaleAlphaBefore {
  0% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.25;
  }
}
@keyframes spScaleAlphaBefore {
  0% {
    opacity: 0.25;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0.25;
  }
}
@-webkit-keyframes spScaleAlphaAfter {
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}
@keyframes spScaleAlphaAfter {
  33% {
    opacity: 0.25;
  }
  66% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}
</style>