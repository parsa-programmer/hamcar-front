<template>
  <div>
    <client-only>
      <div id="header"></div>
      <main class="main">
        <div class="container">
          <template v-if="utilStore.isMobile">
            <Teleport to="#header">
              <the-header :show-search-bar="false" :show-mobile-icons="false">
                <nuxt-link
                  class="bg-white close-btn__mobile"
                  @click="closePage('/account')"
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
              </the-header>
            </Teleport>
            <slot></slot>
          </template>
          <div v-else>
            <div class="row justify-content-space-between des__header">
              <img
                src="/img/Persian-HamCar-Logo.png"
                alt="همکار"
                class="logo cursor-pointer"
                @click="closePage('/')"
              />

              <nuxt-link
                class="bg-white close-btn cursor-pointer"
                @click="closePage('/account')"
              >
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
      <h-modal v-model="openAlert" :show-header="false">
        <h5 class="font-2 row align-items-center">
          <icons-danger class="d-mobile-none" hash-color="var(--color-black)" />
          <span> آیا میخواهید از فرایند احراز هویت خارج شوید؟</span>
        </h5>
        <template #actions>
          <h-button
            outline
            class="action__button btn-default-size"
            @click="openAlert = false"
            >ادامه میدهم</h-button
          >
          <h-button
            outline
            @click="back"
            v-if="utilStore.isMobile"
            class="action__button btn-default-size"
            style="
              background: transparent;
              border-color: var(--color-gray-300);
              color: var(--color-gray-600);
            "
            >خروج</h-button
          >
          <h-button
            outline
            color="error"
            @click="back"
            v-else
            class="action__button btn-default-size"
            >خروج</h-button
          >
        </template>
      </h-modal>
    </client-only>
  </div>
</template>
  <script setup lang="ts">
import { UseUtilStore } from "~~/stores/util.store";

const router = useRouter();
const utilStore = UseUtilStore();
const openAlert = ref(false);
const returnTo = ref("/account");

const closePage = (returnUrl:string = "/account") => {
  openAlert.value = true;
  returnTo.value = returnUrl;
};
const back = () => {
  openAlert.value = false;
  router.push(`${returnTo.value}`);
};
</script>
  
  <style scoped>
@media screen and (max-width: 768px) {
  .action__button {
    font-family: var(--t3-font-family);
    font-size: var(--t3-font-size);
    flex-grow: 1;
    width: 50%;
  }
  h5 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
    margin-top: 1rem;
    margin-bottom: 40px !important;
  }
}
h5 {
  margin-bottom: 60px;
}
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
  right: 0;
  border-radius: 10px;
  background: var(--color-gray-200);
  padding: 15px !important;
  display: flex;
}
.logo {
  position: relative;
  top: 10px;
}
.des__header {
  margin-top: 40px;
}
</style>