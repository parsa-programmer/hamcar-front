<template>
  <button class="btn btn-primary btn-sm" @click="changeColorTheme" v-if="theme == 'light'">Set Dark</button>
  <button class="btn btn-primary btn-sm" @click="changeColorTheme" v-else>Set Light</button>
</template>

<script setup>
const theme = ref("light");

onMounted(() => {
  theme.value = localStorage.getItem("theme") ?? "light";
});

const changeColorTheme = () => {
  const htmlTheme = document
    .getElementsByTagName("html")[0]
    .getAttribute("data-theme");

  if (htmlTheme == "light") {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
    theme.value = "dark";
  } else {
    localStorage.setItem("theme", "light");
    setTheme("light");
    theme.value = "light";
  }
};
</script>

<style>
</style>