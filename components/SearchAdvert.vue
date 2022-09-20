<template>
  <div class="input-group advert__search-box">
    <input
      type="text"
      class="form-control bg-transparent"
      placeholder="جستجو میان همه آگهی ها..."
      :value="$route.query.search"
      @keyup.enter="(e) => $router.push(`/car?search=${e.target.value}`)"
    />
    <icons-search
      class="input-icon"
      hash-color="var(--color-gray-500)"
    ></icons-search>
  </div>
</template>
<script setup lang="ts">

</script>
