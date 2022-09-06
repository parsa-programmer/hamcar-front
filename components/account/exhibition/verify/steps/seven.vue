<template>
  <h-drop-zone
    :formats="['jpg', 'png']"
    :multiple="false"
    :max-file="1"
    :init-data="registerData.CartMeli == null ? [] : [registerData.CartMeli]"
    @get-files="setFile"
  />
</template>

<script setup lang="ts">
import { useExhibitionRegister } from "~~/stores/registerExhibition";

const registerData = useExhibitionRegister();

const setFile = (file: any) => {
  if(!file[0]){
    registerData.CartMeli=null;
    return;
  }
  registerData.CartMeli = file[0][0] ?? null;
};
</script>

<style>
</style>