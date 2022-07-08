<template>
  <div>
    <clear-input name="phoneNumber" />
    <h-button @click="register" :disabled="pending">ورود</h-button>
    <h-button @click="logoutUser" :disabled="pending">خروج</h-button>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~~/composables/auth/useAuth";

const { login, logout, reSendCode, loading } = useAuth();

const pending = ref(loading);
const register = async () => {
  var isSuccess = await login("09351171196");
  console.log(`is Success : ${isSuccess}`);
};
const logoutUser = async () => {
  await logout();
};
</script>

<style>
</style>