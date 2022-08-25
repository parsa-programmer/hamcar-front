<template>
  <div>
    <Teleport to="body">
      <div class="fixed__loading" v-if="isLoadingToPay">
        <p
          class="text-center"
          style="
            background: var(--color-white);
            color: var(--color-black);
            padding: 2rem;
            height: fit-content;
          "
        >
          درحال انتقال به درگاه بانک ...
        </p>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>