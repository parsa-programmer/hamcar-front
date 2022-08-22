<template>
  <h1>{{ store.user.phoneNumber }}</h1>
  <h-button class="btn-error" @click="logout">Logout</h-button>
</template>
<script setup lang="ts">
import { useAuth } from "~~/composables/auth/useAuth";
import { authStore } from "~~/stores/auth.store";
const store = authStore();
const logout = async () => {
  await store.logout(true);
};
definePageMeta({
  middleware: ["should-login"],
});
</script>
