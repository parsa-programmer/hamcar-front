<template>
  <div v-if="advert">
    <loadings-full-loading v-if="pageLoading" />
    <client-only>
      <single-advert-gallery
        :advert="advert"
        v-model="isOpenGallery"
        :isAdvertSaved="isSavedAdvert"
      />
    </client-only>
    <Head>
      <Title
        >همکار - {{ advert.brand.title }} {{ advert.model.title }}
        {{ advert.trim?.title }} {{ advert.year.yearTitle }}</Title
      >
      <Link href="/css/pdp-personal.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home />
        همکار
      </nuxt-link>

      <template v-if="advert.motorCycleDetail == null">
        <icons-chevron-left />
        <nuxt-link to="/car" class="breadcrumb__item">خودرو</nuxt-link>
      </template>
      <template v-else>
        <icons-chevron-left />
        <nuxt-link to="/motorcycle" class="breadcrumb__item"
          >موتورسیکلت</nuxt-link
        >
      </template>

      <icons-chevron-left />
      <nuxt-link
        :to="`/${searchUrl}/${advert.brand.slug}`"
        class="breadcrumb__item"
        >{{ advert.brand.title }}</nuxt-link
      >

      <icons-chevron-left />
      <nuxt-link
        :to="`/${searchUrl}/${advert.brand.slug}-${advert.model.slug}`"
        class="breadcrumb__item"
        >{{ advert.model.title }}</nuxt-link
      >

      <template v-if="advert.trim">
        <icons-chevron-left />
        <nuxt-link
          :to="`/${searchUrl}/${advert.brand.slug}-${advert.model.slug}-${advert.trim.englishTitle}`"
          class="breadcrumb__item"
          >{{ advert.trim.title }}</nuxt-link
        >
      </template>

      <icons-chevron-left />
      <a class="breadcrumb__item breadcrumb__item--active">جزییات</a>
    </section>
    <section class="ads-company" v-if="advert.exhibition">
      <div class="ads-company__right">
        <svg
          class="ads-company__logo"
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.458 10.5463C56.4236 5.51108 50.009 2.08183 43.0255 0.692225C36.042 -0.697375 28.8033 0.0151666 22.2249 2.73972C15.6464 5.46428 10.0236 10.0786 6.06754 15.9988C2.11153 21.9191 0 28.8796 0 36C0 43.1204 2.11153 50.0809 6.06754 56.0012C10.0236 61.9214 15.6464 66.5357 22.2249 69.2603C28.8033 71.9848 36.042 72.6974 43.0255 71.3078C50.009 69.9182 56.4236 66.4889 61.458 61.4537C68.208 54.7025 72 45.5467 72 36C72 26.4533 68.208 17.2975 61.458 10.5463ZM9.38893 23.8172C11.2029 19.7937 13.8909 16.2249 17.2574 13.3707C20.6238 10.5164 24.584 8.44816 28.85 7.31661C33.1161 6.18505 37.5808 6.01855 41.9193 6.8292C46.2578 7.63984 50.361 9.40718 53.9308 12.0028C45.0944 11.1682 34.0326 15.6846 25.0654 24.6354C21.681 28.0143 18.8137 31.8741 16.5563 36.09C13.4859 32.437 11.0619 28.2863 9.38893 23.8172ZM29.238 65.5772C22.4052 63.7465 16.449 59.5396 12.4392 53.7121C8.42927 47.8847 6.62838 40.8186 7.35995 33.7826C11.0744 41.85 20.4508 49.1809 32.7563 52.4537C37.3501 53.6998 42.1046 54.2513 46.8617 54.09C45.2449 58.5622 42.8824 62.7285 39.8744 66.4118C36.3057 66.7728 32.7011 66.4789 29.238 65.5445V65.5772ZM51.6399 31.3609C50.4269 26.7463 48.5412 22.3354 46.0435 18.27C50.7222 17.4371 55.5083 17.4039 60.198 18.1718C62.2972 21.0779 63.8447 24.3449 64.7635 27.81C66.5973 34.6438 65.934 41.9076 62.8926 48.2962C59.8513 54.6848 54.6314 59.7793 48.1708 62.6646C53.2763 55.4482 54.9126 43.6172 51.6399 31.3609Z"
            fill="var(--color-black-600)"
          ></path>
        </svg>

        <div class="ads-company__wrapper">
          <h3 class="ads-company__name">{{ advert.exhibition.title }}</h3>
          <p class="ads-company__address">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7353 1.0613L14.7802 0.0623055L14.7353 1.0613ZM2 12.0047C2 14.1489 2.06944 15.827 2.27251 17.1531C2.4756 18.4792 2.80123 19.3719 3.25548 20.0005C4.12249 21.2004 5.72274 21.7866 9.29525 21.9484L9.20475 23.9463C5.63042 23.7844 3.10567 23.208 1.63439 21.1719C0.919489 20.1825 0.522655 18.9388 0.295561 17.4558C0.068451 15.9728 0 14.1692 0 12.0047H2ZM9.29525 21.9484C10.1072 21.9852 11.0052 22 12 22V24C10.9872 24 10.057 23.9849 9.20475 23.9463L9.29525 21.9484ZM8.25 22.9474V19.75H10.25V22.9474H8.25ZM12 22C12.9948 22 13.8928 21.9852 14.7047 21.9484L14.7953 23.9463C13.943 23.9849 13.0128 24 12 24V22ZM14.7047 21.9484C18.2773 21.7866 19.8775 21.2004 20.7445 20.0005C21.1988 19.3719 21.5244 18.4792 21.7275 17.1531C21.9306 15.827 22 14.1489 22 12.0047H24C24 14.1692 23.9315 15.9728 23.7044 17.4558C23.4773 18.9388 23.0805 20.1825 22.3656 21.1719C20.8943 23.208 18.3696 23.7844 14.7953 23.9463L14.7047 21.9484ZM15.75 19.75V22.9474H13.75V19.75H15.75ZM12 11.0047C12.9174 11.0047 13.6917 10.7232 14.2254 10.2356C14.7444 9.76132 15.125 9.01175 15.125 7.88141H17.125C17.125 9.4999 16.5596 10.812 15.5744 11.7121C14.6039 12.5989 13.3157 13.0047 12 13.0047V11.0047ZM8.875 7.88141C8.875 9.01175 9.25556 9.76132 9.77463 10.2356C10.3083 10.7232 11.0826 11.0047 12 11.0047V13.0047C10.6843 13.0047 9.39613 12.5989 8.42557 11.7121C7.44041 10.812 6.875 9.4999 6.875 7.88141H8.875ZM9.30956 2.06029C5.72969 2.22111 4.12598 2.8064 3.25734 4.00623C2.80245 4.63456 2.47632 5.52703 2.27293 6.85354C2.06954 8.17998 2 9.85897 2 12.0047H0C0 9.83863 0.0685425 8.03405 0.296032 6.55042C0.52351 5.06686 0.921055 3.82276 1.63733 2.83339C3.11103 0.797808 5.63966 0.223141 9.2198 0.0623055L9.30956 2.06029ZM9.26468 1.0613C10.2111 1.38434 10.2111 1.38426 10.2111 1.38419C10.2111 1.38419 10.2111 1.38414 10.2111 1.38414C10.2111 1.38414 10.2111 1.38419 10.2111 1.38431C10.211 1.38455 10.2108 1.38503 10.2106 1.38575C10.2101 1.3872 10.2093 1.38962 10.2081 1.39298C10.2059 1.3997 10.2023 1.41021 10.1976 1.42434C10.1882 1.4526 10.174 1.49534 10.1558 1.55124C10.1194 1.66306 10.0669 1.82737 10.0036 2.0337C9.8768 2.44686 9.70769 3.02595 9.53879 3.68781C9.19523 5.03408 8.875 6.63831 8.875 7.88141H6.875C6.875 6.37567 7.24961 4.56984 7.60089 3.19327C7.77941 2.49371 7.95773 1.88317 8.09153 1.44707C8.15851 1.22877 8.21453 1.05353 8.25411 0.931973C8.27391 0.871178 8.28961 0.823759 8.30053 0.791044C8.30599 0.774685 8.31026 0.761997 8.31325 0.753145C8.31474 0.74872 8.31592 0.745253 8.31676 0.742765C8.31719 0.741522 8.31753 0.740522 8.31778 0.739771C8.31791 0.739395 8.31802 0.73908 8.3181 0.738829C8.31815 0.738703 8.31819 0.738562 8.31822 0.738499C8.31826 0.738371 8.3183 0.73826 9.26468 1.0613ZM22 12.0047C22 9.85897 21.9305 8.17998 21.7271 6.85354C21.5237 5.52703 21.1976 4.63456 20.7427 4.00623C19.874 2.8064 18.2703 2.22111 14.6905 2.06029L14.7802 0.0623055C18.3603 0.223141 20.889 0.79781 22.3627 2.83339C23.0789 3.82276 23.4765 5.06686 23.704 6.55042C23.9315 8.03405 24 9.83863 24 12.0047H22ZM15.125 7.88141C15.125 6.63831 14.8048 5.03408 14.4612 3.6878C14.2923 3.02594 14.1232 2.44686 13.9965 2.0337C13.9331 1.82737 13.8806 1.66306 13.8442 1.55123C13.826 1.49534 13.8118 1.4526 13.8024 1.42434C13.7977 1.41021 13.7941 1.3997 13.7919 1.39297C13.7907 1.38961 13.7899 1.3872 13.7894 1.38575C13.7892 1.38503 13.789 1.38455 13.7889 1.38431C13.7889 1.38419 13.7889 1.38413 13.7889 1.38414C13.7889 1.38414 13.7889 1.38419 13.7889 1.38419C13.7889 1.38425 13.7889 1.38433 14.7353 1.0613C15.6817 0.738264 15.6818 0.738375 15.6818 0.738501C15.6818 0.738564 15.6819 0.738707 15.6819 0.738832C15.682 0.739084 15.6821 0.739397 15.6822 0.739773C15.6825 0.740524 15.6828 0.741524 15.6833 0.742767C15.6841 0.745256 15.6853 0.748722 15.6868 0.753149C15.6898 0.761999 15.694 0.774687 15.6995 0.791046C15.7104 0.823763 15.7261 0.87118 15.7459 0.931976C15.7855 1.05354 15.8415 1.22877 15.9085 1.44707C16.0423 1.88318 16.2206 2.49371 16.3991 3.19328C16.7504 4.56984 17.125 6.37567 17.125 7.88141H15.125ZM14.6905 2.06029C12.901 1.9799 11.099 1.9799 9.30956 2.06029L9.2198 0.0623055C11.0691 -0.020771 12.9309 -0.020771 14.7802 0.0623055L14.6905 2.06029ZM3.10081 13.0047H1V11.0047H3.10081V13.0047ZM20.8992 11.0047H23V13.0047H20.8992V11.0047ZM17.125 7.88141C17.125 8.78046 17.554 9.53965 18.2592 10.1007C18.9772 10.6719 19.9492 11.0047 20.8992 11.0047V13.0047C19.5146 13.0047 18.0996 12.5294 17.0141 11.6658C15.9158 10.792 15.125 9.48957 15.125 7.88141H17.125ZM8.875 7.88141C8.875 9.48957 8.08422 10.792 6.98594 11.6658C5.90044 12.5294 4.48538 13.0047 3.10081 13.0047V11.0047C4.05077 11.0047 5.0228 10.6719 5.74076 10.1007C6.44595 9.53965 6.875 8.78046 6.875 7.88141H8.875ZM12 16C14.0711 16 15.75 17.6789 15.75 19.75H13.75C13.75 18.7835 12.9665 18 12 18V16ZM8.25 19.75C8.25 17.6789 9.92893 16 12 16V18C11.0335 18 10.25 18.7835 10.25 19.75H8.25Z"
                fill="var(--color-black-200)"
              ></path>
            </svg>
            {{ advert.exhibition.address.province }}،
            {{ advert.exhibition.address.city }}،
            {{ advert.exhibition.address.postalAddress }}
          </p>
        </div>
      </div>
      <div class="ads-company__left">
        <p class="ads-company__stock">
          این نمایشگاه دارای {{ exhibitionAdvertCount }} خودرو میباشد
        </p>
        <nuxt-link
          :to="`/car?exhibitionTitle=${advert.exhibition.englishTitle}`"
          class="ads-company__link"
          >مشاهده تمام آگهی ها</nuxt-link
        >
      </div>
    </section>
    <section class="ads">
      <div class="ads-mobile">
        <div class="ads-mobile__slider" @click="openGallery">
          <span class="image__counter font-6" v-if="advert.images?.length>0">
            <icons-camera class="ml-0_5" />
            {{ advert.images?.length??0 }} عکس
          </span>
          <h-image
            :src="GetAdvertImage(advert.id, advert.images[0]?.imageName)"
            :alt="`${advert.brand.title} ${advert.model.title} ${advert.year.yearTitle}`"
          />
        </div>
        <div class="ads-mobile__info">
          <div class="ads-mobile__wrapper">
            <h2 class="ads__name" v-text="advertTitle"></h2>
            <span class="ads__date">
              {{ TimeAgo(advert.creationDate) }}
            </span>
          </div>
          <div class="ads-mobile__flags">
            <client-only>
              <span
                class="ads-mobile__flag"
                v-if="
                  isSavedAdvert == false &&
                  authStore.isLogin &&
                  saveAdvertLoading == false
                "
                @click="saveAdvert"
              >
                <icons-save
                  hash-color="var(--color-black-300)"
                  :width="17"
                  :height="20"
                />
              </span>
            </client-only>
            <span class="ads-mobile__flag" @click="toggleShareModal">
              <icons-share
                :width="19"
                :height="20"
                hash-color="var(--color-black-300)"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="ads__right">
        <div class="ads__header">
          <h2 class="ads__name" v-text="advertTitle"></h2>
          <span class="ads__date">{{ TimeAgo(advert.creationDate) }}</span>
        </div>
        <div class="ads-info">
          <div class="ads-info__item">
            <span class="ads-info__name">مدل</span>
            <span class="ads-info__value">{{ advert.year.yearTitle }}</span>
          </div>
          <div class="ads-info__item">
            <span class="ads-info__name">کارکرد</span>
            <span class="ads-info__value" v-if="advert.mileage > 0">
              {{ advert.mileage }}
              <span class="ads-info__unit">کیلومتر</span>
              <span class="ads-info__mobile-unit">KM</span>
            </span>
            <span class="ads-info__value" v-else> صفر </span>
          </div>
          <div class="ads-info__item">
            <span class="ads-info__name">گیربکس</span>
            <span class="ads-info__value">{{
              advert.gearBox.replace("_", " ")
            }}</span>
          </div>
        </div>

        <single-advert-detail :advert="advert" :preview="false"/>
        <div class="ads-caption">
          <div class="ads-caption__header">
            <icons-message hash-color="var(--color-black)" />
            توضیحات
          </div>
          <p class="ads-caption__text" v-text="advert.description"></p>
        </div>
        <nuxt-link
          :to="`/car-reviews/${advert.brand.slug}/${carReview.slug}`"
          class="btn btn-primary-outline ads__show-report-btn"
          v-if="carReview"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_864_1910" fill="white">
              <path
                d="M0 12C0 15.5755 0.27728 18.1346 1.09928 19.9448C1.72711 21.3273 2.67271 22.2729 4.05524 22.9007C5.86536 23.7227 8.42446 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
              ></path>
            </mask>
            <path
              d="M6.54404 14.5L7.45289 14.0829C7.62733 14.4629 7.54685 14.9114 7.25115 15.2071L6.54404 14.5ZM1.80639 20.6519C1.41587 21.0424 0.782701 21.0424 0.392177 20.6519C0.0016525 20.2613 0.00165251 19.6282 0.392177 19.2377L1.80639 20.6519ZM9.5 17.456L8.79289 16.7489C9.08859 16.4532 9.53707 16.3727 9.91713 16.5471L9.5 17.456ZM4.76235 23.6078C4.37182 23.9983 3.73866 23.9983 3.34813 23.6078C2.95761 23.2173 2.95761 22.5841 3.34813 22.1936L4.76235 23.6078ZM14.5 6.54404L14.9171 5.63519C15.2146 5.77174 15.4265 6.04523 15.4843 6.36742C15.5421 6.6896 15.4386 7.01969 15.2071 7.25115L14.5 6.54404ZM17.456 9.5L16.7488 8.79289C16.9803 8.56143 17.3104 8.45791 17.6326 8.51572C17.9548 8.57354 18.2283 8.78537 18.3648 9.08287L17.456 9.5ZM10.522 10.522L9.81491 11.2291C9.42439 10.8386 9.42439 10.2054 9.81491 9.81491L10.522 10.522ZM13.478 13.478L14.1851 14.1851C13.7946 14.5756 13.1614 14.5756 12.7709 14.1851L13.478 13.478ZM19 12C19 15.866 15.866 19 12 19V17C14.7614 17 17 14.7614 17 12H19ZM5 12C5 8.13401 8.13401 5 12 5V7C9.23858 7 7 9.23858 7 12H5ZM5.6352 14.9171C5.22705 14.0279 5 13.0391 5 12H7C7 12.7453 7.16244 13.45 7.45289 14.0829L5.6352 14.9171ZM7.25115 15.2071L1.80639 20.6519L0.392177 19.2377L5.83694 13.7929L7.25115 15.2071ZM12 19C10.9609 19 9.97214 18.773 9.08287 18.3648L9.91713 16.5471C10.55 16.8376 11.2547 17 12 17V19ZM10.2071 18.1631L4.76235 23.6078L3.34813 22.1936L8.79289 16.7489L10.2071 18.1631ZM12 5C13.0391 5 14.0279 5.22705 14.9171 5.63519L14.0829 7.45289C13.45 7.16244 12.7453 7 12 7V5ZM18.3648 9.08287C18.7729 9.97214 19 10.9609 19 12H17C17 11.2547 16.8376 10.55 16.5471 9.91713L18.3648 9.08287ZM9.81491 9.81491L13.7929 5.83694L15.2071 7.25115L11.2291 11.2291L9.81491 9.81491ZM12.7709 12.7709L16.7488 8.79289L18.1631 10.2071L14.1851 14.1851L12.7709 12.7709ZM12.7709 14.1851L9.81491 11.2291L11.2291 9.81491L14.1851 12.7709L12.7709 14.1851ZM1.09928 19.9448L-0.721743 20.7717L-0.721744 20.7717L1.09928 19.9448ZM4.05524 22.9007L3.22828 24.7217L3.22828 24.7217L4.05524 22.9007ZM12 22C14.4249 22 16.2369 21.8675 17.6101 21.5623C18.9605 21.2622 19.7608 20.8223 20.2915 20.2915C20.8223 19.7608 21.2622 18.9605 21.5623 17.6101C21.8675 16.2369 22 14.4249 22 12H26C26 14.5161 25.8678 16.6746 25.467 18.4779C25.0612 20.3039 24.3539 21.886 23.12 23.12C21.886 24.3539 20.3039 25.0612 18.4779 25.467C16.6746 25.8678 14.5161 26 12 26V22ZM22 12C22 9.57515 21.8675 7.76307 21.5623 6.38993C21.2622 5.03949 20.8223 4.23924 20.2915 3.70846C19.7608 3.17768 18.9605 2.73783 17.6101 2.43771C16.2369 2.13254 14.4249 2 12 2V-2C14.5161 -2 16.6746 -1.86779 18.4779 -1.46702C20.3039 -1.06121 21.886 -0.353931 23.12 0.880037C24.3539 2.114 25.0612 3.69613 25.467 5.52213C25.8678 7.32543 26 9.48385 26 12H22ZM12 2C9.57515 2 7.76307 2.13254 6.38993 2.43771C5.03949 2.73783 4.23924 3.17768 3.70846 3.70846C3.17768 4.23924 2.73783 5.03949 2.43771 6.38993C2.13254 7.76307 2 9.57515 2 12H-2C-2 9.48385 -1.86779 7.32543 -1.46702 5.52213C-1.06121 3.69613 -0.353932 2.114 0.880036 0.880037C2.114 -0.353931 3.69613 -1.06121 5.52213 -1.46702C7.32543 -1.86779 9.48385 -2 12 -2V2ZM2 12C2 15.5592 2.29172 17.7336 2.92031 19.1178L-0.721744 20.7717C-1.73716 18.5357 -2 15.5919 -2 12H2ZM2.92031 19.1178C3.348 20.0596 3.9404 20.652 4.8822 21.0797L3.22828 24.7217C1.40502 23.8938 0.10623 22.595 -0.721743 20.7717L2.92031 19.1178ZM4.8822 21.0797C6.26641 21.7083 8.44078 22 12 22V26C8.40814 26 5.46431 25.7372 3.22828 24.7217L4.8822 21.0797Z"
              fill="#007AFF"
              mask="url(#path-1-inside-1_864_1910)"
            ></path>
          </svg>
          مشاهده کامل مشخصات فنی
        </nuxt-link>
      </div>
      <div class="ads__left">
        <search-advert class="ads__search-box" />

        <div class="ads-slider">
          <div class="ads-slider__picture">
            <h-image
              @click="openGallery"
              :src="
                GetAdvertImage(
                  advert.id,
                  advert.images.filter((f) => f.isMainImage)[0]?.imageName
                )
              "
              :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`"
            />
            <div class="ads-slider__flags">
              <client-only>
                <span
                  class="ads-slider__flag"
                  v-if="
                    isSavedAdvert == false &&
                    authStore.isLogin &&
                    saveAdvertLoading == false
                  "
                  @click="saveAdvert"
                >
                  <icons-save />
                </span>
              </client-only>
              <span class="ads-slider__flag" @click="toggleShareModal">
                <icons-share />
              </span>
            </div>
          </div>

          <h-slider
            class="ads-slider__list"
            :items="advert.images"
            :dots="true"
            :arrows="false"
          >
            <template #item="{ item, index }">
              <div
                @click="openGallery"
                :class="[
                  'ads-slider__item',
                  { 'ads-slider__item--active': index == 0 },
                ]"
              >
                <h-image
                  :src="GetAdvertImage(advert.id, item.imageName ?? '')"
                  :alt="`${advert.brand.title} ${advert.model.title} ${advert.year}`"
                />
              </div>
            </template>
          </h-slider>
        </div>
        <div class="ads__form mb-2" v-if="noteLoading">
          <h-skeletor width="100%" style="height: 160px" />
          <div class="row" style="flex-direction: row-reverse">
            <h-skeletor
              class="btn-sm mt-0_5"
              width="140px"
              style="height: 60px !important"
            />
          </div>
        </div>
        <Form
          class="ads__form"
          :validation-schema="validationSchema"
          v-slot="{ meta }"
          v-else
        >
          <client-only>
            <h-textarea
              name="note"
              class-value="ads__note-input"
              placeholder="یادداشت من..."
              v-model="advertNote"
              :trans-parent="false"
              v-if="authStore.isLogin"
            ></h-textarea>
            <h-textarea
              name="note"
              class-value="ads__note-input"
              placeholder="برای ثبت یادداشت روی آگهی ها باید وارد حساب کاربری خود شوید"
              disabled
              v-model="advertNote"
              :trans-parent="false"
              v-else
            ></h-textarea>

            <div class="row" style="flex-direction: row-reverse">
              <h-button
                type="button"
                :disabled="loadingButton || meta.valid == false"
                :loading="loadingButton"
                @click="setAdvertNote"
                >ثبت یادداشت</h-button
              >
            </div>
            <span class="ads__form-info"
              >یادداشت در پنل کاربری شما ذخیره می‌شود، و فقط برای شما قابل
              مشاهده است.</span
            >
          </client-only>
        </Form>
        <div class="ads__warning">
          <p class="ads__warning-text">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_864_1908" fill="white">
                  <path
                    d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
                  ></path>
                </mask>
                <path
                  d="M0 12C0 21.882 2.118 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
                  stroke="#0F0F10"
                  stroke-width="3.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  mask="url(#path-1-inside-1_864_1908)"
                ></path>
                <path
                  d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z"
                  fill="#0F0F10"
                ></path>
                <path
                  d="M12 7L12 13"
                  stroke="#0F0F10"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            پیش از انجام معاملات و پرداخت هرگونه وجه، از صحت خودرو اطمینان حاصل
            فرمایید.
          </p>
          <a
            href="javascript:void(0)"
            @click="toggleBugModal"
            class="ads__warning-link"
          >
            (گزارش اشکال)
          </a>
        </div>
        <div class="ads__mobile-connection">
          <button
            @click="togglePhoneModal"
            class="btn btn-primary ads__contact-btn"
          >
            اطلاعات تماس
          </button>
          <a
            href="#"
            @click="chatWithSeller"
            class="btn btn-primary-outline ads__chat-btn"
            >چت</a
          >
        </div>
      </div>
    </section>

    <h-modal title="گزارش اشکال" v-model="isOpenModal">
      <report-bug
        :link-id="advert.id"
        :report-for="BugReportFor.advertisement"
      />
    </h-modal>
    <h-modal
      title="اشتراک گذاری"
      sub-title="با استفاده از روش های زیر میتوانید این صفحه را با دوستان خود به اشتراک بگذارید."
      v-model="isOpenShareModal"
    >
      <share-page
        v-model="isOpenShareModal"
        :link="`/car/detail/${advert.shortLink}`"
      />
    </h-modal>
    <h-modal v-model="isOpenPhoneModal">
      <div class="phone__list">
        <div class="row">
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 1</span>
          </div>
          <div class="copy__phone">
            {{ advert.userDto.phoneNumber }}
            <h-copy hash-color="#C4C4C4" :text="advert.userDto.phoneNumber" />
          </div>
        </div>
        <div class="row" v-if="advert.exhibition != null">
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 2</span>
          </div>
          <div class="copy__phone">
            {{ advert.exhibition.phoneNumbers.mobilePhone }}
            <h-copy
              hash-color="#C4C4C4"
              :text="advert.exhibition.phoneNumbers.mobilePhone"
            />
          </div>
        </div>

        <div
          class="row"
          v-if="
            advert.exhibition != null &&
            advert.exhibition.phoneNumbers.telephone
          "
        >
          <div class="phone__title">
            <icons-phone :width="20" :height="20" />
            <span class="text-muted font-6">شماره تماس 3</span>
          </div>
          <div class="copy__phone">
            {{ advert.exhibition.phoneNumbers.telephone }}
            <h-copy
              hash-color="#C4C4C4"
              :text="advert.exhibition.phoneNumbers.telephone"
            />
          </div>
        </div>
      </div>
    </h-modal>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { ref } from "#imports";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GetByShortLink } from "~~/services/advertisement.service";
import { BugReportFor } from "~~/services/bugReport.service";
import { GetAdvertImage } from "~~/utilities/imageUtil";
import { TimeAgo } from "~~/utilities/dateUtil";
import {
  SaveAdvertisement,
  GetNoteByAdvertId,
  SetNote,
  GetSavedAdvertisements,
} from "~~/services/account.service";
import { authStore as useAuthStore } from "~~/stores/auth.store";
import { AlertType } from "~~/models/utilities/AlertType";
import { ToastType } from "~~/composables/useToast";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { IApiResponse } from "~~/models/IApiResponse";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { GetByModel } from "~~/services/carReview.service";
import { CarReviewDto } from "~~/models/carReviews/CarReviewModels";
import {
  UserAdvertisementSavedDto,
  UserNoteFilterData,
} from "~~/models/account/account.Models";
import { SendMessage } from "~~/services/chat.service";
import { SendChatMessageResponseDto } from "~~/models/chats/Chat.Models";

const noteLoading = ref(true);
const advert: Ref<AdvertisementDto | undefined> = ref(undefined);
const isOpenModal = ref(false);
const isOpenPhoneModal = ref(false);
const isOpenShareModal = ref(false);
const isOpenGallery = ref(false);
const advertNote = ref("");
const loadingButton = ref(false);
const carReview: Ref<CarReviewDto | null> = ref(null);
const saveAdvertLoading = ref(true);
const isSavedAdvert = ref(false);

const toast = useToast();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const pageLoading = ref(false);

var slug = route.params.slug;
const shortLink = slug.toString().split("-")[0];
const advertTitle = ref("");
const exhibitionAdvertCount = ref(0);

const searchUrl = ref("car");

const validationSchema = Yup.object().shape({
  note: Yup.string()
    .min(5, "توضیحات باید حداقل 5 کاراکتر باشد")
    .required("لطفا یادداشت خود را بنویسید"),
});
const { data, pending } = await useAsyncData(
  "single-advert",
  () => GetByShortLink(shortLink),
  {
    initialCache: false,
  }
);
if (data.value?.data) {
  advert.value = data.value.data;
  advertTitle.value = `${advert.value.brand.title} ${advert.value.model.title}  ${advert.value.year.yearTitle}`;
  searchUrl.value =
    advert.value.motorCycleDetail == null ? "car" : "motorcycle";
}
const saveAdvert = async () => {
  var res = await SaveAdvertisement(advert.value!.id);
  if (res.isSuccess) {
    isSavedAdvert.value = true;
    toast.showToast("آگهی شما با موفقیت ذخیره شد", ToastType.success);
  }
};
const toggleBugModal = () => {
  isOpenModal.value = !isOpenModal.value;
};
const togglePhoneModal = () => {
  isOpenPhoneModal.value = !isOpenPhoneModal.value;
};
const toggleShareModal = () => {
  isOpenShareModal.value = !isOpenShareModal.value;
};
const openGallery = () => {
  isOpenGallery.value = true;
};
const setAdvertNote = async () => {
  if (advertNote.value.length < 5) {
    toast.showToast("توضیحات باید حداقل 5 کاراکتر باشد", ToastType.error);
    return;
  }
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () =>
      SetNote({
        advertisementId: advert.value!.id,
        description: advertNote.value,
      }),
    loadingButton
  );
  if (res.isSuccess) {
    toast.showToast("یادداشت با موفقیت ذخیره شد", ToastType.success);
  }
};
const chatWithSeller = async () => {
  if (authStore.isLogin == false) {
    toast.showToast("برای شروع گفتوگو وارد حساب کاربری شوید", ToastType.error);
    return;
  }
  var res = await ProssesAsync<IApiResponse<SendChatMessageResponseDto>>(
    () =>
      SendMessage({
        message: null,
        advertisementId: advert.value!.id,
        groupId: null,
      }),
    pageLoading
  );
  if (res.isSuccess) {
    router.push("/account/messages?id=" + res.data?.groupId);
  }
};
onMounted(async () => {
  if (authStore.isLogin) {
    var res = await ProssesAsync<IApiResponse<UserNoteFilterData>>(
      () => GetNoteByAdvertId(advert.value!.id),
      noteLoading
    );
    if (res.isSuccess) {
      advertNote.value = res.data?.text ?? "";
    }
  } else {
    noteLoading.value = false;
  }

  var res2 = await GetByModel(advert.value!.model.id, advert.value!.trim?.id);
  if (res2.data) {
    carReview.value = res2.data;
  }

  var result = await ProssesAsync<IApiResponse<UserAdvertisementSavedDto[]>>(
    () => GetSavedAdvertisements(),
    saveAdvertLoading
  );
  if (result.isSuccess) {
    var saved = result.data!.find((f) => f.advertisementId == advert.value!.id);
    if (saved) {
      isSavedAdvert.value = true;
    }
  }
});
</script>
<style scoped>
.phone__list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.phone__title {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
}
.text-muted {
  color: var(--color-gray-600) !important;
}
.phone__list .row {
  flex-direction: row;
  border-bottom: 1px solid var(--color-gray-200);
  justify-content: space-between;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
}
.phone__list .row:last-child {
  border-bottom: none;
  padding-bottom: 0rem;
}
.copy__phone {
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  color: var(--color-blue);
}
.copy__phone div {
  top: 6px;
  position: relative;
}
</style>
