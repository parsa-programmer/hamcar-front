<template>
  <div class="model__card skeleton">
    <img class="model__card-img" />
    <div class="model__card-footer">
      <h3 class="model__card-title" />
      <h3 class="model__card-sub-title" />
    </div>
  </div>
</template>

<style scoped>
.model__card.skeleton h3 {
  content: " ";
  width: 100% !important;
  height: 24px !important;
  background-color: #ddd;
  margin: 10px 0;
  animation: pulse-bg 1s infinite;
}

.model__card.skeleton .model__card-img {
  width: 100%;
  animation: pulse-bg 1s infinite;
}
.model__card.skeleton .model__card-footer {
 width: 100%;
}
</style>