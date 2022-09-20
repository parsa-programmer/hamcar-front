<template>
  <div v-if="exhibition">
    <section class="breadcrumb">
      <nuxt-link href="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <nuxt-link to="/exhibitions" class="breadcrumb__item"
        >نمایشگاه های خودرو</nuxt-link
      >
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">
        {{ exhibition?.title }}
      </a>
    </section>
    <section class="company">
      <div class="advertising__head">
        <h1 class="advertising__title">
          {{ exhibition?.title }} {{ exhibition.advertCount }}
          <span> ( {{ exhibition.advertCount }} خودرو، آگهی شده است ) </span>
        </h1>
        <div class="input-group advert__search-box">
          <input
            type="text"
            class="form-control bg-transparent"
            placeholder="جستجو میان همه نمایشگاه ها..."
            :value="$route.query.search"
            @keyup.enter="
              (e) => $router.push(`/exhibitions?search=${e?.target?.value}`)
            "
          />
          <icons-search
            class="input-icon"
            hash-color="var(--color-gray-500)"
          ></icons-search>
        </div>
      </div>
      <div class="company__middle">
        <div class="company__banner">
          <h-image
            :src="GetExhibitionLogoImage(exhibition.id, exhibition.outerImage)"
            :alt="exhibition.title"
            class="company__img"
          />
          <div class="company__logo">
            <h-image
              :src="
                GetExhibitionLogoImage(exhibition.id, exhibition.logoImageName)
              "
              alt="logo"
              class="company__img"
            />
          </div>
        </div>
        <div class="company__detail">
          <span class="company__detail-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.7353 1.0613L14.7802 0.0623055L14.7353 1.0613ZM2 12.0047C2 14.1489 2.06944 15.827 2.27251 17.1531C2.4756 18.4792 2.80123 19.3719 3.25548 20.0005C4.12249 21.2004 5.72274 21.7866 9.29525 21.9484L9.20475 23.9463C5.63042 23.7844 3.10567 23.208 1.63439 21.1719C0.919489 20.1825 0.522655 18.9388 0.295561 17.4558C0.068451 15.9728 0 14.1692 0 12.0047H2ZM9.29525 21.9484C10.1072 21.9852 11.0052 22 12 22V24C10.9872 24 10.057 23.9849 9.20475 23.9463L9.29525 21.9484ZM8.25 22.9474V19.75H10.25V22.9474H8.25ZM12 22C12.9948 22 13.8928 21.9852 14.7047 21.9484L14.7953 23.9463C13.943 23.9849 13.0128 24 12 24V22ZM14.7047 21.9484C18.2773 21.7866 19.8775 21.2004 20.7445 20.0005C21.1988 19.3719 21.5244 18.4792 21.7275 17.1531C21.9306 15.827 22 14.1489 22 12.0047H24C24 14.1692 23.9315 15.9728 23.7044 17.4558C23.4773 18.9388 23.0805 20.1825 22.3656 21.1719C20.8943 23.208 18.3696 23.7844 14.7953 23.9463L14.7047 21.9484ZM15.75 19.75V22.9474H13.75V19.75H15.75ZM12 11.0047C12.9174 11.0047 13.6917 10.7232 14.2254 10.2356C14.7444 9.76132 15.125 9.01175 15.125 7.88141H17.125C17.125 9.4999 16.5596 10.812 15.5744 11.7121C14.6039 12.5989 13.3157 13.0047 12 13.0047V11.0047ZM8.875 7.88141C8.875 9.01175 9.25556 9.76132 9.77463 10.2356C10.3083 10.7232 11.0826 11.0047 12 11.0047V13.0047C10.6843 13.0047 9.39613 12.5989 8.42557 11.7121C7.44041 10.812 6.875 9.4999 6.875 7.88141H8.875ZM9.30956 2.06029C5.72969 2.22111 4.12598 2.8064 3.25734 4.00623C2.80245 4.63456 2.47632 5.52703 2.27293 6.85354C2.06954 8.17998 2 9.85897 2 12.0047H0C0 9.83863 0.0685425 8.03405 0.296032 6.55042C0.52351 5.06686 0.921055 3.82276 1.63733 2.83339C3.11103 0.797808 5.63966 0.223141 9.2198 0.0623055L9.30956 2.06029ZM9.26468 1.0613C10.2111 1.38434 10.2111 1.38426 10.2111 1.38419C10.2111 1.38419 10.2111 1.38414 10.2111 1.38414C10.2111 1.38414 10.2111 1.38419 10.2111 1.38431C10.211 1.38455 10.2108 1.38503 10.2106 1.38575C10.2101 1.3872 10.2093 1.38962 10.2081 1.39298C10.2059 1.3997 10.2023 1.41021 10.1976 1.42434C10.1882 1.4526 10.174 1.49534 10.1558 1.55124C10.1194 1.66306 10.0669 1.82737 10.0036 2.0337C9.8768 2.44686 9.70769 3.02595 9.53879 3.68781C9.19523 5.03408 8.875 6.63831 8.875 7.88141H6.875C6.875 6.37567 7.24961 4.56984 7.60089 3.19327C7.77941 2.49371 7.95773 1.88317 8.09153 1.44707C8.15851 1.22877 8.21453 1.05353 8.25411 0.931973C8.27391 0.871178 8.28961 0.823759 8.30053 0.791044C8.30599 0.774685 8.31026 0.761997 8.31325 0.753145C8.31474 0.74872 8.31592 0.745253 8.31676 0.742765C8.31719 0.741522 8.31753 0.740522 8.31778 0.739771C8.31791 0.739395 8.31802 0.73908 8.3181 0.738829C8.31815 0.738703 8.31819 0.738562 8.31822 0.738499C8.31826 0.738371 8.3183 0.73826 9.26468 1.0613ZM22 12.0047C22 9.85897 21.9305 8.17998 21.7271 6.85354C21.5237 5.52703 21.1976 4.63456 20.7427 4.00623C19.874 2.8064 18.2703 2.22111 14.6905 2.06029L14.7802 0.0623055C18.3603 0.223141 20.889 0.79781 22.3627 2.83339C23.0789 3.82276 23.4765 5.06686 23.704 6.55042C23.9315 8.03405 24 9.83863 24 12.0047H22ZM15.125 7.88141C15.125 6.63831 14.8048 5.03408 14.4612 3.6878C14.2923 3.02594 14.1232 2.44686 13.9965 2.0337C13.9331 1.82737 13.8806 1.66306 13.8442 1.55123C13.826 1.49534 13.8118 1.4526 13.8024 1.42434C13.7977 1.41021 13.7941 1.3997 13.7919 1.39297C13.7907 1.38961 13.7899 1.3872 13.7894 1.38575C13.7892 1.38503 13.789 1.38455 13.7889 1.38431C13.7889 1.38419 13.7889 1.38413 13.7889 1.38414C13.7889 1.38414 13.7889 1.38419 13.7889 1.38419C13.7889 1.38425 13.7889 1.38433 14.7353 1.0613C15.6817 0.738264 15.6818 0.738375 15.6818 0.738501C15.6818 0.738564 15.6819 0.738707 15.6819 0.738832C15.682 0.739084 15.6821 0.739397 15.6822 0.739773C15.6825 0.740524 15.6828 0.741524 15.6833 0.742767C15.6841 0.745256 15.6853 0.748722 15.6868 0.753149C15.6898 0.761999 15.694 0.774687 15.6995 0.791046C15.7104 0.823763 15.7261 0.87118 15.7459 0.931976C15.7855 1.05354 15.8415 1.22877 15.9085 1.44707C16.0423 1.88318 16.2206 2.49371 16.3991 3.19328C16.7504 4.56984 17.125 6.37567 17.125 7.88141H15.125ZM14.6905 2.06029C12.901 1.9799 11.099 1.9799 9.30956 2.06029L9.2198 0.0623055C11.0691 -0.020771 12.9309 -0.020771 14.7802 0.0623055L14.6905 2.06029ZM3.10081 13.0047H1V11.0047H3.10081V13.0047ZM20.8992 11.0047H23V13.0047H20.8992V11.0047ZM17.125 7.88141C17.125 8.78046 17.554 9.53965 18.2592 10.1007C18.9772 10.6719 19.9492 11.0047 20.8992 11.0047V13.0047C19.5146 13.0047 18.0996 12.5294 17.0141 11.6658C15.9158 10.792 15.125 9.48957 15.125 7.88141H17.125ZM8.875 7.88141C8.875 9.48957 8.08422 10.792 6.98594 11.6658C5.90044 12.5294 4.48538 13.0047 3.10081 13.0047V11.0047C4.05077 11.0047 5.0228 10.6719 5.74076 10.1007C6.44595 9.53965 6.875 8.78046 6.875 7.88141H8.875ZM12 16C14.0711 16 15.75 17.6789 15.75 19.75H13.75C13.75 18.7835 12.9665 18 12 18V16ZM8.25 19.75C8.25 17.6789 9.92893 16 12 16V18C11.0335 18 10.25 18.7835 10.25 19.75H8.25Z"
                fill="#ABADB3"
              ></path>
            </svg>
            {{ exhibition?.address }}
          </span>
          <div class="company__wrapper">
            <span class="company__detail-item">
              {{ exhibition?.mobilePhone }}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.5366 14.88C13.2455 15.3793 13.9887 15.7992 14.7547 16.117C15.2304 16.2895 15.9768 15.801 16.5256 15.4418C16.6628 15.3521 16.7877 15.2704 16.8928 15.2091L16.9274 15.1897C17.4443 14.8994 18.0184 14.577 18.7565 14.7324C19.4197 14.8686 21.695 16.6617 22.3238 17.2972C22.7355 17.7058 22.9641 18.137 22.9984 18.5796C23.067 20.2252 20.8603 22.0751 20.3344 22.3928C19.2139 23.2099 17.7161 23.1986 15.9096 22.3815C13.9773 21.5984 11.6677 19.9528 9.43809 17.9555C8.63997 17.2405 7.10729 15.7351 6.67111 15.2323C4.41867 12.7923 2.52068 10.1708 1.62885 8.04858C1.20581 7.15203 1 6.32358 1 5.58591C1 4.8596 1.20581 4.21272 1.60599 3.65663C1.84609 3.23673 3.77839 0.944291 5.482 1.00104C5.90505 1.04643 6.33953 1.26205 6.76258 1.67061C7.40286 2.29479 9.24369 4.55318 9.38089 5.22275C9.53743 5.94415 9.21284 6.51359 8.92041 7.02661L8.90068 7.06125C8.83477 7.17512 8.74541 7.3102 8.64772 7.45788C8.28784 8.00192 7.81488 8.71689 7.98484 9.1721C8.40903 10.2162 9.01501 11.2376 9.74563 12.1795C10.5565 13.149 11.8277 14.3806 12.5366 14.88Z"
                  stroke="#ABADB3"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
            <span class="company__detail-item">
              {{ exhibition?.telephone }}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.5366 14.88C13.2455 15.3793 13.9887 15.7992 14.7547 16.117C15.2304 16.2895 15.9768 15.801 16.5256 15.4418C16.6628 15.3521 16.7877 15.2704 16.8928 15.2091L16.9274 15.1897C17.4443 14.8994 18.0184 14.577 18.7565 14.7324C19.4197 14.8686 21.695 16.6617 22.3238 17.2972C22.7355 17.7058 22.9641 18.137 22.9984 18.5796C23.067 20.2252 20.8603 22.0751 20.3344 22.3928C19.2139 23.2099 17.7161 23.1986 15.9096 22.3815C13.9773 21.5984 11.6677 19.9528 9.43809 17.9555C8.63997 17.2405 7.10729 15.7351 6.67111 15.2323C4.41867 12.7923 2.52068 10.1708 1.62885 8.04858C1.20581 7.15203 1 6.32358 1 5.58591C1 4.8596 1.20581 4.21272 1.60599 3.65663C1.84609 3.23673 3.77839 0.944291 5.482 1.00104C5.90505 1.04643 6.33953 1.26205 6.76258 1.67061C7.40286 2.29479 9.24369 4.55318 9.38089 5.22275C9.53743 5.94415 9.21284 6.51359 8.92041 7.02661L8.90068 7.06125C8.83477 7.17512 8.74541 7.3102 8.64772 7.45788C8.28784 8.00192 7.81488 8.71689 7.98484 9.1721C8.40903 10.2162 9.01501 11.2376 9.74563 12.1795C10.5565 13.149 11.8277 14.3806 12.5366 14.88Z"
                  stroke="#ABADB3"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="company__information">
          <div class="company__data">
            <div class="company__phone-numbers">
              <h-copy class="link" hide-icon :text="exhibition.telephone">
                {{ exhibition?.telephone }}

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4498 12.3987C11.0405 12.8148 11.6598 13.1647 12.2982 13.4295C12.6946 13.5733 13.3166 13.1662 13.774 12.8669C13.8883 12.7921 13.9923 12.724 14.08 12.6729L14.1087 12.6568C14.5395 12.4149 15.0179 12.1462 15.6331 12.2757C16.1857 12.3892 18.0818 13.8835 18.6058 14.4131C18.9488 14.7535 19.1394 15.1129 19.168 15.4817C19.2251 16.853 17.3862 18.3946 16.9479 18.6594C16.0142 19.3403 14.766 19.3308 13.2606 18.6499C11.6503 17.9974 9.72565 16.6261 7.86768 14.9616C7.20258 14.3658 5.92534 13.1113 5.56186 12.6923C3.68483 10.659 2.10317 8.47436 1.35998 6.70585C1.00744 5.95873 0.835938 5.26835 0.835938 4.65362C0.835938 4.04836 1.00744 3.5093 1.34093 3.04589C1.54102 2.69597 3.15126 0.785607 4.57094 0.832894C4.92348 0.870722 5.28555 1.05041 5.63809 1.39087C6.17166 1.91102 7.70568 3.79301 7.82001 4.35099C7.95046 4.95215 7.67997 5.42669 7.43628 5.85421L7.41983 5.88307C7.36491 5.97796 7.29045 6.09053 7.20904 6.21359C6.90913 6.66696 6.515 7.26277 6.65664 7.64212C7.01013 8.51219 7.51512 9.36334 8.12396 10.1483C8.79966 10.9562 9.85904 11.9826 10.4498 12.3987Z"
                    stroke="#007AFF"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </h-copy>
              <h-copy class="link" hide-icon :text="exhibition.mobilePhone">
                {{ exhibition?.mobilePhone }}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4498 12.3987C11.0405 12.8148 11.6598 13.1647 12.2982 13.4295C12.6946 13.5733 13.3166 13.1662 13.774 12.8669C13.8883 12.7921 13.9923 12.724 14.08 12.6729L14.1087 12.6568C14.5395 12.4149 15.0179 12.1462 15.6331 12.2757C16.1857 12.3892 18.0818 13.8835 18.6058 14.4131C18.9488 14.7535 19.1394 15.1129 19.168 15.4817C19.2251 16.853 17.3862 18.3946 16.9479 18.6594C16.0142 19.3403 14.766 19.3308 13.2606 18.6499C11.6503 17.9974 9.72565 16.6261 7.86768 14.9616C7.20258 14.3658 5.92534 13.1113 5.56186 12.6923C3.68483 10.659 2.10317 8.47436 1.35998 6.70585C1.00744 5.95873 0.835938 5.26835 0.835938 4.65362C0.835938 4.04836 1.00744 3.5093 1.34093 3.04589C1.54102 2.69597 3.15126 0.785607 4.57094 0.832894C4.92348 0.870722 5.28555 1.05041 5.63809 1.39087C6.17166 1.91102 7.70568 3.79301 7.82001 4.35099C7.95046 4.95215 7.67997 5.42669 7.43628 5.85421L7.41983 5.88307C7.36491 5.97796 7.29045 6.09053 7.20904 6.21359C6.90913 6.66696 6.515 7.26277 6.65664 7.64212C7.01013 8.51219 7.51512 9.36334 8.12396 10.1483C8.79966 10.9562 9.85904 11.9826 10.4498 12.3987Z"
                    stroke="#007AFF"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </h-copy>
            </div>
          </div>
        </div>
      </div>
      <div class="company__footer">
        <div class="company__footer-wrapper">
          <span class="company__ads-name"
            >آخرین آگهی های {{ exhibition.title }}</span
          >
          <nuxt-link
            :to="`/car?exhibitionTitle=${exhibition?.englishTitle}`"
            class="see-ads"
          >
            مشاهده همه
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
              <path
                d="M5.25 9.75L0.75 5.25L5.25 0.75"
                stroke="#007AFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </nuxt-link>
        </div>
        <div
          class="advertising__row"
          v-if="exhibition.latestAdverts.length > 0"
        >
          <advert-card
            v-for="item in exhibition?.latestAdverts"
            :advert="item"
            :key="item.id"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { SingleExhiitionDto } from "~~/models/exhibitions/Exhibition.Models";
import { GetByEnglishTitle } from "~~/services/exhibition.service";
import { GetExhibitionLogoImage } from "~~/utilities/imageUtil";

const router = useRouter();
const route = useRoute();
const exhibition: Ref<SingleExhiitionDto | null> = ref(null);
const slug = route.params.slug?.toString();

if (!slug) {
  await showError({ statusCode: 404, statusMessage: "Error" });
} else {
  const { data } = await useAsyncData("single_exhibition", () =>
    GetByEnglishTitle(slug!)
  );
  if (data.value?.isSuccess == false || !data.value?.data) {
    await showError({ statusCode: 404, statusMessage: "Error" });
  }
  exhibition.value = data.value?.data!;

  useHead({
    title: exhibition.value.title,
  });
}
</script>

<style scoped>
.company__title span {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
  font-weight: 500;
  margin-right: 1rem;
}
.company__banner {
  position: relative;
  margin-bottom: 2rem;
  height: 420px;
}
.company__img {
  border-radius: var(--app-border-radius);
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.company__logo {
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background-color: var(--color-gray-400);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1rem solid var(--color-gray-200);
  position: absolute;
  bottom: -7rem;
  right: 88px;
}
.company__logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.company__detail {
  margin-right: 329px;
  display: flex;
  justify-content: space-between;
}
.company__detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.company__wrapper {
  display: flex;
  gap: 3rem;
}

.company__information {
  display: flex;
  gap: 1rem;
  margin-top: 80px;
}
.company__data {
  flex-grow: 1;
}
.company__phone-numbers {
  display: none;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.company__phone-numbers .link {
  background-color: var(--color-gray-200);
  color: var(--color-black);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--t4-font-size);
  font-family: var(--t4-font-family);
  height: 3rem;
  flex-grow: 1;
  border-radius: var(--app-border-radius);
}
.company__footer {
  margin-top: 90px;
}
.company__footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.company__ads-name {
  font-size: var(--t2-font-size);
  font-family: var(--t2-font-family);
}
@media screen and (max-width: 1400px) {
  .advert {
    flex-grow: 1;
    max-width: 366px;
  }
  .company__logo {
    width: 12rem;
    height: 12rem;
    bottom: -6rem;
    right: 60px;
  }
  .company__detail {
    margin-right: 290px;
  }
  .company__social-item {
    flex-grow: 1;
    width: auto;
  }
  .company__social-item:first-child {
    width: auto;
  }
}
@media screen and (max-width: 1200px) {
  .company__logo {
    width: 9rem;
    height: 9rem;
    bottom: -5rem;
    right: 35px;
    border-width: 0.8rem;
  }
  .company__logo svg {
    width: 72px;
    height: 72px;
  }
  .company__detail {
    margin-right: 200px;
  }
  .company__wrapper {
    gap: 2rem;
  }
  .company__information {
    margin-top: 60px;
  }
  .company__social {
    flex-wrap: wrap;
  }

  .company__serach-box {
    width: 28rem;
  }
  .advert {
    max-width: 306px;
  }
}

@media screen and (max-width: 992px) {
  .company__serach-box {
    width: 26rem;
  }
  .company__wrapper {
    display: block;
  }
  .company__logo {
    width: 100px;
    height: 100px;
    bottom: -3rem;
    border-width: 6px;
  }
  .company__logo svg {
    width: 40px;
    height: 40px;
  }
  .company__detail {
    margin-right: 145px;
  }
  .company__map {
    width: 340px;
  }
  .advert {
    width: 351px;
    max-width: 100%;
  }
}

@media screen and (max-width: 768px) {
  body {
    background-color: var(--color-white);
  }
  .header {
    background-color: var(--color-gray-200);
  }
  .company__search-box {
    display: none;
  }
  .company__title {
    font-size: var(--t5-font-size);
    font-family: var(--t5-font-family);
  }
  .company__title span {
    font-size: var(--t7-font-size);
    font-family: var(--t7-font-family);
    color: var(--color-gray-600);
    margin-right: 4px;
  }
  .company__banner {
    height: 217px;
    margin-bottom: 10px;
  }

  .company__logo {
    width: 88px;
    height: 88px;
    bottom: -3.4rem;
    border-width: 6px;
    right: 2rem;
    border-color: var(--color-white);
    background-color: var(--color-gray-200);
  }
  .company__phone-numbers {
    display: flex;
  }
  .company__detail {
    margin-right: 128px;
  }
  .company__detail-item {
    color: var(--color-black-200);
    font-size: var(--t7-font-size);
    font-family: var(--t7-font-family);
  }
  .breadcrumb,
  .company__wrapper,
  .company__detail-item svg {
    display: none;
  }
  .company__information {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  .company__map {
    height: 144px;
    width: 100%;
  }
  .company__map-btn {
    background-color: rgba(0, 122, 255, 0.72);
    font-size: var(--t6-font-size);
    font-family: var(--t6-font-family);
    height: 3rem;
    padding: 0 1.5rem;
  }
  .company__social {
    gap: 0.5rem;
  }
  .company__social-item {
    height: 3rem;
    background-color: var(--color-gray-200);
    flex-grow: 1;
    width: 48%;
  }
  .company__social-item:first-child {
    width: 100%;
  }
  .company__ads-name {
    font-size: var(--t5-font-size);
    font-family: var(--t5-font-family);
  }
  .company__footer {
    margin-top: 2rem;
  }
  .company__footer-wrapper {
    margin-bottom: 1rem;
  }
  .advert {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.08);
  }
}

@media screen and (max-width: 576px) {
  body {
    background-color: #fff;
  }

  .advert {
    padding: 0;
  }
}

@media screen and (max-width: 380px) {
  .company__social-item {
    width: 100%;
  }
}
</style>