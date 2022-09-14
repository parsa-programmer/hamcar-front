<template>
  <div class="profile__content">
    <client-only fallbackTag="div">
      <template #fallback>
        <h-skeletor height="80px" />
        <h-skeletor  height="80px" />
        <h-skeletor  height="200px" />
      </template>

      <account-top-bar :is-show-cards="false" />
      <account-page-title
        title="مشاوران نمایشگاه"
        :loading="loading"
        :sub-title="
          consultants.length >= 1
            ? `(${consultants.length} مشاور/مدیر)`
            : undefined
        "
        :button-text="'اضافه کردن مشاور'"
        :button-click="pushToAdd"
      >
      </account-page-title>

      <div
        :class="[
          'content mt-1',
          { 'no--content': consultants.length == 0 && loading == false },
        ]"
      >
        <div v-if="loading" class="w-full mt-1">
          <h-skeletor width="100%" height="250px" />
          <h-skeletor width="100%" class="mt-1" height="250px" />
          <h-skeletor width="100%" class="mt-1" height="250px" />
        </div>
        <div class="no__content" v-else-if="consultants.length == 0">
          <img :src="AddUserImg" />
          <div class="text-center text">
            <h5>شما هنوز مشاور / مدیری به نمایشگاه خود اضافه نکردید!</h5>
            <p>
              با اضافه کردن مشاور یا مدیر میتوانید روند فعالیت نمایشگاه خود را
              مدیریت کنید
            </p>
          </div>
          <div class="row w-full">
            <div class="w-50 ow-1 d-flex justify-content-flex-end">
              <h-button size="lg" @click="pushToAdd">
                <template #icon>
                  <icons-add hash-color="white" class="d-mobile-none" />
                  <icons-add
                    hash-color="white"
                    class="d-mobile-block"
                    size="sm"
                    :width="21"
                    :height="21"
                  />
                </template>
                <span class="d-mobile-none"> اضافه کردن مشاور </span>
                <span class="d-mobile-block"> افزودن مشاور </span>
              </h-button>
            </div>
            <div class="w-50">
              <h-button size="lg" outline>مشاهده اطلاعات بیشتر</h-button>
            </div>
          </div>
        </div>
        <div class="cards" v-else>
          <div class="card mobile-card" v-for="(item, index) in consultants" :key="index">
            <div class="card__header row justify-content-space-between">
              <h5>{{ item.fullName }}</h5>
              <nuxt-link
                :to="`/account/exhibition/consultants/edit?id=${item.id}`"
                class="color-error"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1577 8.18182L12.9195 6.33429C13.3244 5.90978 14.0046 5.88646 14.4388 6.2822L17.658 9.21592C18.0923 9.61167 18.1161 10.2766 17.7113 10.7011L15.8182 12.6864M11.1577 8.18182L6.28868 13.2877C6.08633 13.4999 5.98271 13.7844 6.00236 14.0738L6.20234 17.0187C6.23993 17.5724 6.71141 18.0021 7.27903 18L10.2983 17.9888C10.595 17.9877 10.8781 17.8667 11.0805 17.6545L15.8182 12.6864M11.1577 8.18182L15.8182 12.6864"
                    stroke="#EF3838"
                    stroke-width="1.6"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>ویرایش</span>
              </nuxt-link>
            </div>
            <div class="card__body">
              <account-right-left-data
                right-class="font-5"
                left-class="font-5"
                right="شماره موبایل"
                :left="item.phoneNumber"
              />
              <account-right-left-data
                right-class="font-5"
                left-class="font-5"
                right="نوع دسترسی"
                :left="item.role == ConsultantRole.employee ? 'مشاور' : 'مدیر'"
              />
              <account-right-left-data
                right-class="font-5"
                left-class="font-5"
                right="تعداد آگهی های فعال"
                :left="item.activeAdvertisements.toString()"
              />
              <account-right-left-data
                right-class="font-5"
                left-class="font-5"
                right="تعداد آگهی های ثبت شده در این ماه"
                :left="item.advertisementInCurrentMonth.toString()"
              />
              <account-right-left-data
                right-class="font-5"
                left-class="font-5"
                right="تعداد نردبان استفاده شده در این ماه"
                :left="item.usedNardebansInCurrentMonth.toString()"
              />
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import AddUserImg from "~~/assets/img/addUser.png";
import { ref } from "#imports";
import { GetConsultants } from "~~/services/exhibition.service";
import { Ref } from "vue";
import { ExhibitionConsultantDto } from "~~/models/exhibitions/Exhibition.Models";
import { ConsultantRole } from "~~/models/exhibitions/Exhibition.Commands";

definePageMeta({
  layout: "exhibition-layout",
});
const consultants: Ref<ExhibitionConsultantDto[]> = ref([]);
const loading = ref(false);

const router = useRouter();
const pushToAdd = () => {
  router.push("/account/exhibition/consultants/add");
};

onMounted(async () => {
  loading.value = true;
  var res = await GetConsultants();
  consultants.value = res.data ?? [];
  loading.value = false;
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  img {
    width: 146px;
    height: 146px;
  }
  .text {
    text-align: right;
    margin-top: 1rem;
    letter-spacing: -0.03em;
  }
  .text h5 {
    font-family: var(--t3-font-family) !important;
    font-size: var(--t3-font-size) !important;
    margin-bottom: 8px !important;
  }
  .text p {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .no__content {
    gap: 32px !important;
  }
  .card__header h5 {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .card__header a {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
  }
  .mobile-card{
    padding: 1.5rem !important;
  }
}
.no--content {
  margin-top: 3rem;
}
.no__content {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
}
.text h5 {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  margin-bottom: 4px;
}
.text p {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  color: var(--color-gray-600);
}
.card__header {
  margin-bottom: 1.5rem;
}
.card__header h5 {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  font-weight: 500;
}
.card__header a {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>