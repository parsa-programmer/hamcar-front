<template>
  <h1>news</h1>
</template>

<script setup >
navigateTo(
  { replace: true, path: "/404" },
  { replace: true, redirectCode: 404 }
);
</script>