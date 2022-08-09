<template>
  <div>
    <Head>
      <Title>قیمت روز خودرو</Title>
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <a class="breadcrumb__item breadcrumb__item--active">قیمت روز خودرو</a>
    </section>
    <section class="price__content">
      <div class="flex price__header">
        <div
          class="
            flex
            align-items-center
            justify-content-center
            price__header__title
          "
        >
          <h1 class="page__title">قیمت روز خودرو</h1>
           
          <span class="page__sub-title">(امروز: )</span>
        </div>
        <search-advert class="d-sm-none" />
      </div>
      <div class="flex wrap justify-content-space-between filter mt-1_5">
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.همه)"
          :class="{ active: searchOn == CarPriceSearchOn.همه }"
          >قیمت روز همه خودرو ها</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.داخلی)"
          :class="{ active: searchOn == CarPriceSearchOn.داخلی }"
          >قیمت روز خودرو های داخلی</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.وارداتی)"
          :class="{ active: searchOn == CarPriceSearchOn.وارداتی }"
          >قیمت روز خودرو های وارداتی</h-button
        >
        <h-button
          color="default"
          @click="ReSearch(CarPriceSearchOn.قیمت_نمایندگی)"
          :class="{ active: searchOn == CarPriceSearchOn.قیمت_نمایندگی }"
          >قیمت روز نمایندگی</h-button
        >
      </div>
      <div>
        <div class="price-list__item mt-3">
          <h3 class="price-list__item__header">
            <h-image
              src="static/img/Lamborghini.png"
              style="max-width: 100px; margin-left: 5px"
            />
            قیمت روز خودرو های پرداید
          </h3>
          <div class="price-list__item__body">
            <div class="flex grow-1 justify-content-space-between section__1">
              <p class="brand">SE,111</p>
              <p>1400 <span class="text-muted">|</span> مدیران خودرو</p>
              <p>بازار - فلان ساعت پیش</p>
            </div>
            <div class="flex justify-content-space-between grow-1 section__2">
              <p class="d-sm-none price__chart">.</p>
              <p class="font-4 color-green grow-1">
                5.8%
                <icons-triangle-top
                  class="mr-0_5"
                  hash-color="var(--color-green)"
                />
              </p>
              <p class="item__price">123,456,789 تومان</p>
            </div>
          </div>
          <div class="price-list__item__body">
            <div class="flex grow-1 justify-content-space-between section__1">
              <p class="brand">SE,111</p>
              <p>1400 <span class="text-muted">|</span> مدیران خودرو</p>
              <p>بازار - فلان ساعت پیش</p>
            </div>
            <div class="flex justify-content-space-between grow-1 section__2">
              <p class="d-sm-none price__chart">.</p>
              <p class="font-4 color-green grow-1">
                5.8%
                <icons-triangle-top
                  class="mr-0_5"
                  hash-color="var(--color-green)"
                />
              </p>
              <p class="item__price">123,456,789 تومان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { CarPriceSearchOn } from "~~/models/carPrices/CarPriceSearchOn";
import { GetMainPage } from "~~/services/carPrice.service";

//@ts-ignore
const searchOn: Ref<CarPriceSearchOn> = ref(CarPriceSearchOn.همه);

const { data, refresh } = useAsyncData("carPrices", () =>
  GetMainPage("", searchOn.value)
);

const ReSearch = (search: CarPriceSearchOn) => {
  searchOn.value = search;
  refresh();
};
</script>

<style scoped>
.price__chart {
  flex-grow: 1;
  text-align: left;
}
.price-list__item__header {
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  display: flex;
  align-items: center;
}
.price-list__item__body .item__price {
  font-family: var(--t4-font-family);
  font-size: var(--t4-font-size);
}
.price-list__item__body:nth-child(even) {
  background: var(--color-white);
}

.price-list__item__body {
  display: flex;
  justify-content: space-between;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  color: var(--color-black);
  padding: 1.5rem 1rem;
}
.filter .btn-default {
  background: var(--color-white);
}
.price__content .filter button {
  font-family: var(--t3-font-family) !important;
  font-size: var(--t3-font-size) !important;
  width: 296px;
  height: 71px;
  text-align: right;
  letter-spacing: -0.02em;
  line-height: 180%;
}
.filter button.active {
  color: var(--color-white) !important;
  background-color: var(--color-blue) !important;
}
.price__header {
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .price-list__item__body {
    background: var(--color-white);
    box-shadow: 0px 6px 27px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    font-family: var(--t7-font-family);
    font-size: var(--t7-font-size);
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.03em;
    margin-top: 8px !important;
    border-radius: 12px;
  }
  .price-list__item__header {
    margin-bottom: 1rem;
    font-family: var(--t3-font-family);
    font-size: var(--t3-font-size);
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .price-list__item__header img {
    max-width: 55px !important;
  }
  .price__header {
    justify-content: flex-start !important;
  }
  .section__1 {
    flex-direction: column;
  }
  .section__1 p {
    margin-top: 0.5rem;
  }
  .section__1 p:first-child {
    margin-top: 0 !important;
  }
  .section__2 {
    flex-direction: column;
    align-items: flex-end;
  }
  .item__price {
    order: 1;
  }
  .section__2 .font-4 {
    order: 2;
    display: flex;
    align-items: center;
    align-content: center;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
  }
  .price__header__title {
    flex-grow: 1;
    justify-content: space-between;
  }
  .filter button.active {
    color: var(--color-black) !important;
    background-color: var(--color-gray-300) !important;
  }
  .price__content .filter button {
    margin-top: 1rem;
    width: 184px !important;
    height: 48px !important;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    line-height: 21.46px !important;
    text-align: center;
    padding: 0 1rem !important;
  }
  .section__1 .brand {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    font-weight: 500;
  }
}
</style>