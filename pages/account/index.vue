<template>
  <h1>{{ store.user.phoneNumber }}</h1>
</template>
<script setup>
import { authStore } from "~~/stores/auth.store";

const store = authStore();
definePageMeta({
  middleware:['should-login']
})
</script>
