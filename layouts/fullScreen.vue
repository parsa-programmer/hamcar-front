<template>
  <div>
    <div id="header"></div>
    <main class="main">
      <div class="container-fluid">
        <template v-if="isMobilePage">
          <Teleport to="#header">
            <the-header :show-search-bar="false" showSearchIcon></the-header>
          </Teleport>
          <nuxt-link
            to="/"
            class="bg-white close-btn__mobile"
            @click="closePage"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M23.6654 2.33398L12.9987 13.0007M12.9987 13.0007L2.33203 23.6673M12.9987 13.0007L23.6654 23.6673M12.9987 13.0007L2.33203 2.33398"
                stroke="var(--color-gray-600)"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nuxt-link>
          <slot></slot>
        </template>
        <div v-else>
          <div class="row justify-content-space-between">
            <nuxt-link to="/">
              <img
                src="/img/Persian-HamCar-Logo.png"
                alt="همکار"
                class="logo"
              />
            </nuxt-link>
            <nuxt-link to="/" class="bg-white close-btn" @click="closePage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M23.6654 2.33398L12.9987 13.0007M12.9987 13.0007L2.33203 23.6673M12.9987 13.0007L23.6654 23.6673M12.9987 13.0007L2.33203 2.33398"
                  stroke="var(--color-gray-500)"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </nuxt-link>
          </div>
          <hr class="d-sm-none" />
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const isMobilePage = ref(false);
const router = useRouter();
const closePage = () => {
  router.back();
};
onMounted(async () => {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 700) {
    isMobilePage.value = true;
  }
});
</script>

<style scoped>
.main {
  min-height: 100vh;
}
.close-btn {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}
.close-btn__mobile {
  position: absolute;
  left: 1.5rem;
  border-radius: 10px;
  background: var(--color-gray-200);
  padding: 15px !important;
  display: flex;
}
.logo {
  position: relative;
  top: 10px;
}
</style>