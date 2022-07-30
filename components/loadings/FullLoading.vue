<template>
    <div class="fixed__loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
          margin: auto;
          background: none;
          display: block;
          shape-rendering: auto;
        "
        width="264px"
        height="264px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="26"
          stroke-width="2"
          stroke="#31eedc"
          stroke-dasharray="40.840704496667314 40.840704496667314"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1.8518518518518516s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="23"
          stroke-width="2"
          stroke="#2f71c9"
          stroke-dasharray="36.12831551628262 36.12831551628262"
          stroke-dashoffset="36.12831551628262"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1.8518518518518516s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;-360 50 50"
          />
        </circle>
      </svg>
    </div>
</template>

<script setup>
onMounted(() => {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});
onUnmounted(() => {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
});
</script>

<style scoped>
.fixed__loading {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.425);
  justify-content: center;
  align-content: center;
  z-index: 100000000;
}
</style>