<template>
  <div>
    <Head>
      <Title>قیمت روز خودرو</Title>
      <Link href="/css/price-list.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>

      <icons-left-arrow></icons-left-arrow>
      <nuxt-link to="/price" class="breadcrumb__item">قیمت روز خودرو</nuxt-link>

      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active"
        >قیمت روز {{ carPriceData.title }}</a
      >
    </section>
    <section class="price-list">
      <div class="price-list__head">
        <h2 class="price-list__title">
          قیمت روز خودرو , {{ carPriceData.title }}
          <span>( امروز: {{ new Date().toLocaleDateString("fa-IR") }} )</span>
        </h2>
        <div class="input-group price-list__search-box">
          <input
            type="text"
            class="form-control bg-transparent"
            placeholder="جستجو میان همه برند ها، مدل ها و."
            @keydown.enter="(e) => search(e)"
          />
          <icons-search class="input-icon" hash-color="var(--color-gray-600)" />
        </div>
        <div class="price-list__info">
          <h-image
            class="price-list__logo"
            :src="GetBrandImage(carPriceData.brand.imageName)"
            alt="Hamcar"
          />
          <h1 class="price-list__name" v-text="carPriceData.title"></h1>
        </div>
        <span class="price-list__date">{{
          new Date().toLocaleDateString("fa-IR")
        }}</span>
      </div>
      <div class="price-list__content">
        <div class="price-list__wrapper">
          <div class="price-list__product-banner">
            <h-image
              :src="GetModelImage(carPriceData.model.imageName)"
              :alt="carPriceData.title"
              class="price-list__img"
            />
          </div>
          <div class="prices">
            <div class="prices__head">
              <h3 class="prices__name">{{ carPriceData.title }}</h3>
              <span class="prices__date">{{
                TimeAgo(carPriceData.lastUpdate)
              }}</span>
            </div>
            <div class="prices__list">
              <div
                v-for="(item, index) in orderBy(
                  carPriceData.details,
                  'year',
                  'desc'
                )"
                :key="index"
                :class="[
                  'prices__item',

                  { 'prices__item--blue': index == 0 },
                  { 'prices__item--orange': index == 1 },
                  { 'prices__item--pink': index == 2 },
                  { 'prices__item--green': index == 3 },
                ]"
              >
                <div class="prices__right">
                  <span class="prices__model">مدل {{ item.year }}</span>
                  <span class="prices__detail">{{ item.priceType }}</span>
                </div>
                <div class="prices__left">
                  <span class="prices__time">{{ TimeAgo(item.date) }}</span>
                  <div class="prices__info">
                    <span
                      :class="[
                        'prices__percent',
                        { 'prices__percent--up': item.growPercentage >= 0 },
                        { 'prices__percent--down': item.growPercentage < 0 },
                        { 'prices__percent--rectangel': item.growPercentage == 0 },
                      ]"
                    >
                      <template v-if="item.growPercentage % 1 == 0">
                        {{ item.growPercentage.toString().replace("-", "") }}%
                      </template>
                      <template v-else>
                        {{
                          item.growPercentage
                            .toFixed(2)
                            .toString()
                            .replace("-", "")
                        }}%
                      </template>
                      <span></span>
                    </span>
                    <p class="prices__price">
                      {{ splitNumber(item.price) }}
                      <span>تومان</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-wrapper">
          <client-only>
            <apexchart
              id="price-list-chart"
              width="100%"
              height="600"
              type="line"
              :options="options"
              :series="series"
            ></apexchart>
          </client-only>
        </div>
        <div class="price-list__links">
          <a href="#" class="btn btn-primary-outline price-list__link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_1721_19054" fill="white">
                <path
                  d="M0 12C0 15.5755 0.27728 18.1346 1.09928 19.9448C1.72711 21.3273 2.67271 22.2729 4.05524 22.9007C5.86536 23.7227 8.42446 24 12 24C21.882 24 24 21.882 24 12C24 2.118 21.882 0 12 0C2.118 0 0 2.118 0 12Z"
                ></path>
              </mask>
              <path
                d="M6.54404 14.5L7.45289 14.0829C7.62733 14.4629 7.54685 14.9114 7.25115 15.2071L6.54404 14.5ZM1.80639 20.6519C1.41587 21.0424 0.782701 21.0424 0.392177 20.6519C0.0016525 20.2613 0.00165251 19.6282 0.392177 19.2377L1.80639 20.6519ZM9.5 17.456L8.79289 16.7489C9.08859 16.4532 9.53707 16.3727 9.91713 16.5471L9.5 17.456ZM4.76235 23.6078C4.37182 23.9983 3.73866 23.9983 3.34813 23.6078C2.95761 23.2173 2.95761 22.5841 3.34813 22.1936L4.76235 23.6078ZM14.5 6.54404L14.9171 5.63519C15.2146 5.77174 15.4265 6.04523 15.4843 6.36742C15.5421 6.6896 15.4386 7.01969 15.2071 7.25115L14.5 6.54404ZM17.456 9.5L16.7488 8.79289C16.9803 8.56143 17.3104 8.45791 17.6326 8.51572C17.9548 8.57354 18.2283 8.78537 18.3648 9.08287L17.456 9.5ZM10.522 10.522L9.81491 11.2291C9.42439 10.8386 9.42439 10.2054 9.81491 9.81491L10.522 10.522ZM13.478 13.478L14.1851 14.1851C13.7946 14.5756 13.1614 14.5756 12.7709 14.1851L13.478 13.478ZM19 12C19 15.866 15.866 19 12 19V17C14.7614 17 17 14.7614 17 12H19ZM5 12C5 8.13401 8.13401 5 12 5V7C9.23858 7 7 9.23858 7 12H5ZM5.6352 14.9171C5.22705 14.0279 5 13.0391 5 12H7C7 12.7453 7.16244 13.45 7.45289 14.0829L5.6352 14.9171ZM7.25115 15.2071L1.80639 20.6519L0.392177 19.2377L5.83694 13.7929L7.25115 15.2071ZM12 19C10.9609 19 9.97214 18.773 9.08287 18.3648L9.91713 16.5471C10.55 16.8376 11.2547 17 12 17V19ZM10.2071 18.1631L4.76235 23.6078L3.34813 22.1936L8.79289 16.7489L10.2071 18.1631ZM12 5C13.0391 5 14.0279 5.22705 14.9171 5.63519L14.0829 7.45289C13.45 7.16244 12.7453 7 12 7V5ZM18.3648 9.08287C18.7729 9.97214 19 10.9609 19 12H17C17 11.2547 16.8376 10.55 16.5471 9.91713L18.3648 9.08287ZM9.81491 9.81491L13.7929 5.83694L15.2071 7.25115L11.2291 11.2291L9.81491 9.81491ZM12.7709 12.7709L16.7488 8.79289L18.1631 10.2071L14.1851 14.1851L12.7709 12.7709ZM12.7709 14.1851L9.81491 11.2291L11.2291 9.81491L14.1851 12.7709L12.7709 14.1851ZM1.09928 19.9448L-0.721743 20.7717L-0.721744 20.7717L1.09928 19.9448ZM4.05524 22.9007L3.22828 24.7217L3.22828 24.7217L4.05524 22.9007ZM12 22C14.4249 22 16.2369 21.8675 17.6101 21.5623C18.9605 21.2622 19.7608 20.8223 20.2915 20.2915C20.8223 19.7608 21.2622 18.9605 21.5623 17.6101C21.8675 16.2369 22 14.4249 22 12H26C26 14.5161 25.8678 16.6746 25.467 18.4779C25.0612 20.3039 24.3539 21.886 23.12 23.12C21.886 24.3539 20.3039 25.0612 18.4779 25.467C16.6746 25.8678 14.5161 26 12 26V22ZM22 12C22 9.57515 21.8675 7.76307 21.5623 6.38993C21.2622 5.03949 20.8223 4.23924 20.2915 3.70846C19.7608 3.17768 18.9605 2.73783 17.6101 2.43771C16.2369 2.13254 14.4249 2 12 2V-2C14.5161 -2 16.6746 -1.86779 18.4779 -1.46702C20.3039 -1.06121 21.886 -0.353931 23.12 0.880037C24.3539 2.114 25.0612 3.69613 25.467 5.52213C25.8678 7.32543 26 9.48385 26 12H22ZM12 2C9.57515 2 7.76307 2.13254 6.38993 2.43771C5.03949 2.73783 4.23924 3.17768 3.70846 3.70846C3.17768 4.23924 2.73783 5.03949 2.43771 6.38993C2.13254 7.76307 2 9.57515 2 12H-2C-2 9.48385 -1.86779 7.32543 -1.46702 5.52213C-1.06121 3.69613 -0.353932 2.114 0.880036 0.880037C2.114 -0.353931 3.69613 -1.06121 5.52213 -1.46702C7.32543 -1.86779 9.48385 -2 12 -2V2ZM2 12C2 15.5592 2.29172 17.7336 2.92031 19.1178L-0.721744 20.7717C-1.73716 18.5357 -2 15.5919 -2 12H2ZM2.92031 19.1178C3.348 20.0596 3.9404 20.652 4.8822 21.0797L3.22828 24.7217C1.40502 23.8938 0.10623 22.595 -0.721743 20.7717L2.92031 19.1178ZM4.8822 21.0797C6.26641 21.7083 8.44078 22 12 22V26C8.40814 26 5.46431 25.7372 3.22828 24.7217L4.8822 21.0797Z"
                fill="#007AFF"
                mask="url(#path-1-inside-1_1721_19054)"
              ></path>
            </svg>
            مشاهده مشخصات فنی پراید 132 , SE
          </a>
          <a href="#" class="btn btn-primary price-list__link">
            همه آگهی های پراید 132 , SE
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts" >
import { splitNumber } from "~~/utilities/numberUtils";
import { ref } from "#imports";
import { GetBySlug } from "~~/services/carPrice.service";
import { Ref } from "vue";
import {
  CarPrice,
  CarPriceChartData,
  CarPriceDetail,
} from "~~/models/carPrices/CarPriceModels";
import { GetBrandImage, GetModelImage } from "~~/utilities/imageUtil";
import { getPersianDate, TimeAgo, toPersianDate } from "~~/utilities/dateUtil";
import orderBy from "lodash/orderBy.js";

const route = useRoute();
const { slug } = route.params;
const { data } = await useAsyncData(
  "single-carPrice",
  () => GetBySlug(slug.toString()),
  {
    server: true,
    initialCache: false,
  }
);
if (!data?.value) {
  showError({ statusCode: 404, message: "not found" });
}
//@ts-ignore
const carPriceData: Ref<CarPrice> = ref(data!.value);

const options = ref({
  chart: {
    id: "vuechart-example",
    toolbar: {
      show: false,
    },
    fontFamily: "DanaFaNum Medium",
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
  },
  xaxis: {},
  theme: {
    mode: "light",
  },
  markers: {
    colors: ["#007aff", "#ff9500", "#ef5da8", "#66d3cf"],
  },
  fill: {
    colors: ["#007aff", "#ff9500", "#ef5da8", "#66d3cf"],
  },
  stroke: {
    show: true,
    lineCap: "butt",
    colors: ["#007aff", "#ff9500", "#ef5da8", "#66d3cf"],
    width: 2,
    dashArray: 0,
  },
  tooltip: {
    enabled: true,
    colors: ["#007aff", "#ff9500", "#ef5da8", "#66d3cf"],
    style: {
      fontSize: "14px",
      fontFamily: undefined,
    },
    y: {
      formatter: function (value: any) {
        if (!value) return;
        return splitNumber(value) + " تومان";
      },
      title: {
        formatter: (seriesName: any) => {
          if (!seriesName) return;
          return ` ${seriesName} :`;
        },
      },
    },
  },
});
const series: Ref<any[]> = ref([]);
const router = useRouter();
const search = (e: any) => {
  router.push("/price?search=" + e.target.value);
};
onMounted(() => {
  var chartdata: any[] = [];
  var index = 0;
  const theme = localStorage.getItem("theme");
  if (theme && theme == "dark") {
    options.value.theme = { mode: "dark" };
  }
  const days = getAllDate(carPriceData.value.chartData);
  orderBy(carPriceData.value.chartData, "year", "desc").map((f) => {
    let data: any[] = [];
    var color = "#007aff";
    if (index == 1) {
      color = "#ff9500";
    } else if (index == 2) {
      color = "#ef5da8";
    } else if (index == 3) {
      color = "#66d3cf";
    }
    days.map((d) => {
      if (!f.details.find((f) => f.date == d)) {
        f.details.push({
          date: d,
          price: null,
        });
      }
    });

    orderBy(f.details,'date','asc').map((r) => {
      data.push({
        x: getPersianDate(r.date, "M/dd"),
        y: r.price,
      });
    });

    chartdata.push({
      name: `مدل ${f.year}`,
      data: data,
      color: color,
    });
    index += 1;
  });
  setTimeout(() => {
    series.value = chartdata;
  }, 100);
});

const getAllDate = (data: CarPriceChartData[]): Date[] => {
  let dates: Date[] = [];
  data.map((f) => {
    f.details.map((r) => {
      dates.push(r.date);
    });
  });
  return [...new Set(dates)];
};
</script>

<style scoped>
/* price list head */
</style>