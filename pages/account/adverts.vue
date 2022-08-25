<template>
  <div class="profile__content">
    <client-only>
      <account-top-bar/>

      <div class="card row justify-content-space-between">
        <div>
          <p class="font-4">
            آگهی های من 
            <small
              class="text__description font-5"
              v-if="
                filterResult == null ||
                filterResult.filterResult.entityCount == 0
              "
              >(آگهی منتشر نشده)</small
            >
            <small class="text__description font-5" v-else
              >( {{ filterResult.filterResult.entityCount }} آگهی منتشر
              شده)</small
            >
          </p>
        </div>
        <div>
          <NuxtLink
            class="row align-items-center color-blue font-4"
            style="gap: 0.5rem"
          >
            <icons-add />
            ثبت آگهی رایگان
          </NuxtLink>
        </div>
      </div>
      <div class="content">
        <div class="not-Found">
          <p class="font-2 color_gray_600">
            شما هنوز اولین آگهی خودتان را ثبت نکرده اید!
          </p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { AdvertisementFilterResult } from "~~/models/advertisements/Advertisement.Models";
import { GetByFilter } from "~~/services/advertisement.service";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const filterResult: Ref<AdvertisementFilterResult | null> = ref(null);
const loading = ref(false);
onMounted(() => {
  //var res = ProssesAsync(() => GetByFilter({}), loading);
});
definePageMeta({
  layout: "account-layout",
});
</script>

<style scoped>
.not-Found {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
}
@media screen and (max-width:768px) {
    .not-Found{
        margin-top: 7rem !important;
        text-align: center;
    }
     .not-Found p{
        font-size: var(--t3-font-size);
        font-family: var(--t3-font-family);
        
    }
    .card{
      margin-top: 40px;
    }
}
</style>