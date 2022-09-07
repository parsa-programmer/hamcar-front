<template>
  <div>
    <the-header :show-search-bar="true"></the-header>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>


<script lang="ts" setup>

useHead({
  bodyAttrs:{
    class:'bg-white'
  }
})
definePageMeta({
  
})

</script>