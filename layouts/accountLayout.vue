<template>
  <div>
    <the-header :show-search-bar="false" showSearchIcon></the-header>
    <div id="free_wrapper" class="sticky-top"></div>
    <main class="main">
      <div class="container">
        <slot name="breadcrumb"></slot>
        <section class="dashboard">
          <account-the-side-bar />
          <account-the-mobile-side-bar />
          <div>
            <slot></slot>
          </div>
        </section>
      </div>
    </main>
    <the-toast></the-toast>
  </div>
</template>

<script>
</script>

<style scoped>
.dashboard{
    display: flex;
    /*align-items: start;*/
    gap: 1rem;
}

</style>