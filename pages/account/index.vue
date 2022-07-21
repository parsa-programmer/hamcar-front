<template>
  <h1>{{phoneNumber.phoneNumber}}</h1>
</template>
<script setup>
import { authStore } from "~~/stores/auth.store";

const store = authStore();
const phoneNumber = store.user;
</script>
