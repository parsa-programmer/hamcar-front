<template>
  <div>
    <Head>
      <Title>مشخصات فنی و مقایسه خودرو ها</Title>
      <Link href="/css/technical.css" rel="stylesheet" />
    </Head>
    <section class="breadcrumb">
      <nuxt-link to="/" class="breadcrumb__item">
        <icons-home></icons-home>
        همکار
      </nuxt-link>
      <icons-left-arrow></icons-left-arrow>
      <nuxt-link to="/car-reviews" class="breadcrumb__item"
        >مشخصات فنی خودرو</nuxt-link
      >
    </section>
    <section class="technical">
      <div class="technical__head">
        <h1 class="technical__title">مشخصات فنی و مقایسه خودرو ها</h1>
        <search-advert />
      </div>
      <div class="technical__content mb-3">
        <skeleton-loading-car-review-model-card class="mb-3" v-if="loading" />

        <div class="row cards" ref="sticky" v-else>
          <div class="compare__Item" v-for="data in cars" :key="data.slug">
            <button @click="deleteCar(data.slug)">
              حذف
              <icons-close />
            </button>

            <div class="model__card">
              <h-image
                class="model__card-img"
                :src="GetModelImage(data.carReviewModel.imageName)"
              />
              <div class="model__card-footer">
                <h3 class="model__card-title">
                  {{ data.carReviewBrand.title }}
                  {{ data.carReviewModel.title }}
                </h3>
                <h3 class="model__card-sub-title">
                  {{ data.carReviewModel.slug.replace("-", " ") }}
                </h3>
              </div>
            </div>
          </div>
          <div
            class="compare__Item compare__select"
            v-if="accessCount > cars.length"
          >
            <div class="model__card" @click="openModal">
              <div class="select__car__img">
                <icons-car
                  v-if="accessCount == 2"
                  :width="72"
                  :height="32.52"
                />
                <icons-car v-else />
                <p>برای افزودن خودرو به مقایسه کلیک کنید</p>
              </div>
              <div class="model__card-footer">
                <a>افزودن خودرو به مقایسه</a>
              </div>
            </div>
          </div>
        </div>
        <template v-if="cars.length > 1">
          <div class="details">
            <div
              class="compare__card"
              v-for="(item, index) in cars[0].percentageSpecifications"
              :key="index"
            >
              <div
                :class="[
                  'compare__card__header',
                  { compare__card__radius: index == 0 },
                ]"
              >
                {{ item.title }}
              </div>
              <div class="compare__card__body">
                <div class="row">
                  <div
                    class="compare__card__item"
                    v-for="(car, index2) in cars"
                    :key="index2"
                  >
                    <div class="proggress-bar">
                      <p>
                        {{
                          car.percentageSpecifications.filter(
                            (f) => f.title == item.title
                          )[0].percentage
                        }}%
                      </p>
                      <div class="progress">
                        <div
                          class="progress_inner"
                          :style="`width: ${
                            car.percentageSpecifications.filter(
                              (f) => f.title == item.title
                            )[0].percentage
                          }%`"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="compare__points">
              <div class="compare__card">
                <div class="compare__card__header compare__card__radius">
                  نقاط قوت
                </div>
                <div class="compare__card__body">
                  <div class="row">
                    <div
                      class="compare__card__item point__item"
                      v-for="(item, index) in cars"
                      :key="index"
                    >
                      <ul v-if="accessCount == 2">
                        <li
                          v-for="(p, index2) in item.advantages.split('-')"
                          :key="index2"
                        >
                          {{ p }}
                        </li>
                      </ul>
                      <div v-else>
                        <template
                          v-for="(p, index2) in item.advantages.split('-')"
                          :key="index2"
                        >
                          {{ p }}
                          <span
                            v-if="
                              item.advantages.split('-').length != index2 + 1
                            "
                            >،
                          </span>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="compare__card">
                <div class="compare__card__header">نقاط ضعف</div>
                <div class="compare__card__body">
                  <div class="row">
                    <div
                      class="compare__card__item point__item"
                      v-for="(item, index) in cars"
                      :key="index"
                    >
                      <ul v-if="accessCount == 2">
                        <li
                          v-for="(p, index2) in item.disadvantages.split('-')"
                          :key="index2"
                        >
                          {{ p }}
                        </li>
                      </ul>
                      <div v-else>
                        <template
                          v-for="(p, index2) in item.disadvantages.split('-')"
                          :key="index2"
                        >
                          {{ p }}
                          <span
                            v-if="
                              item.disadvantages.split('-').length != index2 + 1
                            "
                            >،
                          </span>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="compare__specifications">
            <div
              class="compare__card"
              v-for="(item, index) in cars[0]?.specifications"
              :key="index"
            >
              <h2>
                <car-review-specification-icons :title="item.title" />
                {{ item.title }}
              </h2>
              <template v-for="(detail, index2) in item.details" :key="index2">
                <div
                  :class="[
                    `compare__card__header`,
                    index2 == 0 ? 'compare__card__radius' : null,
                  ]"
                >
                  {{ detail.key }}
                </div>
                <div class="compare__card__body">
                  <div class="row">
                    <div
                      class="compare__card__item"
                      v-for="(item2, index4) in cars"
                      :key="index4"
                    >
                      <p class="value">
                        <icons-check
                          hash-color="var(--color-green-600)"
                          v-if="
                            item2.specifications
                              .filter((f) => f.title == item.title)[0]
                              .details.filter((f) => f.key == detail.key)[0]
                              .value == 'دارد'
                          "
                        />
                        <icons-close-box
                          v-else-if="
                            item2.specifications
                              .filter((f) => f.title == item.title)[0]
                              .details.filter((f) => f.key == detail.key)[0]
                              .value == ''
                          "
                          hash-color="#EF3838"
                        />
                        <template v-else>
                          {{
                            item2.specifications
                              .filter((f) => f.title == item.title)[0]
                              .details.filter((f) => f.key == detail.key)[0]
                              .value
                          }}
                        </template>
                      </p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
        <div v-else>
          <h-alert :type="AlertType.Warning">
            برای نمایش جزئیات خودرو  روی افزودن خودرو به مقایسه کلیک کنید و یک
            خودرو دیگه انتخاب کنید
          </h-alert>
        </div>
      </div>
    </section>
    <client-only>
      <Transition name="bounce" mode="out-in">
        <CarReviewSelectCarForComare
          v-model="isOpenModal"
          @selectedCar="addCar"
        />
      </Transition>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
import {
  CarReviewDto,
  CarReviewFilterData,
} from "~~/models/carReviews/CarReviewModels";
import { GetModelImage } from "~~/utilities/imageUtil";
import { GetBySlug } from "~/services/carReview.service";
import { ToastType } from "~~/composables/useToast";
import { AlertType } from "~~/models/utilities/AlertType";

const loading = ref(false);
const accessCount = ref(4);
const cars: Ref<CarReviewDto[]> = ref([]);
const route = useRoute();
const router = useRouter();
const toast = useToast();
const isOpenModal = ref(false);
const sticky: Ref<HTMLElement | null> = ref(null);
const deleteCar = (slug: string) => {
  cars.value = cars.value.filter((f) => f.slug != slug);
};

const openModal = () => {
  isOpenModal.value = true;
};
const addCar = (slug: string) => {
  isOpenModal.value = false;
  window.scrollTo(0, 0);
  if (cars.value.filter((f) => f.slug == slug)[0]) {
    toast.showToast(
      "این ماشین در لیست مقایسه وجود دارد",
      ToastType.error,
      5000
    );
    return;
  }
  loading.value = true;
  GetBySlug(slug)
    .then((res) => {
      if (res.data) {
        cars.value.push(res.data);
      }
    })
    .finally(() => {
      loading.value = false;
    });
};
onMounted(async () => {
  const slug = route.params.slug.toString();
  const data = await GetBySlug(slug);
  if (data.isSuccess == false) {
    router.push("/car-reviews");
    toast.showToast(data.metaData.message, ToastType.warning);
  } else {
    cars.value.push(data.data!);
  }

  nextTick(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 1400) {
      accessCount.value = 4;
    } else if (windowWidth < 1400 && windowWidth >= 1000) {
      accessCount.value = 3;
    } else {
      accessCount.value = 2;
    }
    window.onscroll = function () {
      myFunction();
    };
    var element = sticky.value!.offsetTop;
    function myFunction() {
      if (window.pageYOffset > element + 100) {
        sticky.value!.classList.add("sticky");
        sticky.value!.classList.add("container");
      } else {
        sticky.value!.classList.remove("sticky");
        sticky.value!.classList.remove("container");
      }
    }
  });
});
</script>
<style scoped>
@media screen and (max-width: 420px) {
  .sticky {
    width: 100% !important;
    right: 0 !important;
    padding: 0 !important;
  }
  .row.cards {
    justify-content: center !important;
  }
}
@media screen and (max-width: 575px) {
  .sticky.container {
    width: 97%;
    padding-bottom: 0 !important;
  }
  .value,
  li {
    font-family: var(--t7-font-family) !important;
    font-size: var(--t7-font-size) !important;
    font-weight: 400 !important;
    line-height: 18.19px !important;
    font-style: normal;
  }
  .compare__card__body {
    border: 2px solid var(--color-gray-200) !important;
  }
  .compare__points {
    margin-top: 2rem;
  }
  .compare__points .compare__card:first-child .compare__card__header {
    color: var(--color-green) !important;
    font-weight: 700 !important;
  }
  .compare__points .compare__card:last-child {
    margin-top: 12px;
  }
  .compare__points .compare__card:last-child .compare__card__header {
    color: var(--color-error) !important;
    font-weight: 700 !important;
  }
  .compare__points .compare__card__header {
    text-align: center !important;
    border-radius: 12px 12px 0px 0px !important;
  }
  .compare__card__item {
  }
}
@media screen and (max-width: 1000px) {
  .compare__specifications p {
    text-align: center !important;
  }
}
.compare__specifications .compare__card__item {
  width: 296px;
  margin-left: 0 !important;
}
.sticky {
  position: fixed;
  top: 0;
  background: var(--body-bg-color);
  z-index: 1000;
  margin: auto;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 0;
  padding-left: 2rem;
}

.sticky .model__card {
  height: 250px;
}
.compare__specifications p {
  font-size: var(--t5-font-size);
  font-family: var(--t5-font-family);
  color: var(--color-black);
  font-weight: 500;
}
.compare__specifications h2 {
  font-size: var(--t2-font-size);
  font-family: var(--t2-font-family);
  color: var(--color-black);
  font-weight: 800;
  margin: 2rem 0 1.25rem 0;
}
.compare__specifications h2 svg {
  position: relative;
  top: 7px;
  margin-left: 0.5rem;
}
.compare__specifications {
  margin-top: 2.1rem;
}
@media screen and (max-width: 768px) {
  .select__car__img p {
    display: none;
  }
  .compare__select .model__card-footer {
    bottom: 0 !important;
    background: transparent !important;
    backdrop-filter: unset !important;
  }
  .select__car__img svg {
    position: absolute;
    top: 25%;
  }
  .compare__select a {
    font-family: var(--t5-font-family) !important;
    font-size: var(--t5-font-size) !important;
    font-weight: 700 !important;
    line-height: 21.94px !important;
    margin-top: 1.5rem !important;
  }
  .compare__card__header {
    color: var(--color-gray-600) !important;
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    font-weight: 400 !important;
    padding: 5px 24px !important;
    background: var(--color-gray-200) !important;
  }
  .compare__specifications h2{
    font-family: var(--t5-font-family);
    font-size: var(--t5-font-size);
    font-weight: 700 !important;
    line-height: 22px !important;
  }
}
@media screen and (max-width: 1000px) {
  .row {
    justify-content: space-between !important;
  }

  .progress {
    width: 152px !important;
    height: 4px !important;
    text-align: center;
  }
  .proggress-bar p {
    text-align: center !important;
  }
  .compare__card__item {
    margin-left: 0 !important;
  }
  .compare__card__body {
    padding: 1rem 20px !important;
  }
}
.compare__select {
  cursor: pointer;
}
.point__item {
  width: 250px;
}
.select__car__img {
  background: var(--color-gray-300);
  border-radius: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23C6C7CCFF' stroke-width='2' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 12px;
}
.select__car__img p {
  font-weight: 400;
  line-height: 170.1%;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  color: var(--color-gray-600);
  margin-top: 0.8rem;
  max-width: 10.2rem;
  text-align: center;
}
.compare__select .model__card-footer {
  align-self: center;
  margin-top: 1.88rem;
  margin-bottom: 0.6rem;
}
.compare__select a {
  font-weight: 800;
  line-height: 31.5px;
  font-family: var(--t2-font-family);
  font-size: var(--t2-font-size);
  color: var(--color-blue);
}
.compare__points {
  margin-top: 1.5rem;
  width: 100%;
  flex-direction: column;
}
.compare__card__item {
  margin-left: 5.01rem;
}
.compare__points .compare__card__item {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  line-height: 27.2px;
  font-weight: 400;
  text-align: justify;
  color: var(--color-black);
}
.compare__card__item:last-child {
  margin-left: 0rem !important;
}
.cards {
  margin-bottom: 1.5rem;
}
.compare__Item {
  position: relative;
}
.compare__Item button {
  width: 77px;
  height: 2rem;
  color: var(--color-black);
  position: absolute;
  left: 2rem;
  top: 2rem;
  background: var(--color-white);
  border-radius: 6px;
  cursor: pointer;
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  font-weight: 500;
}
.compare__Item button svg {
  margin-right: 14px;
}
.compare__card {
  display: flex;
  flex-direction: column;
}
.compare__card__header {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
  line-height: 27.2px;
  font-weight: 500;
  color: var(--color-black-200);
  background: var(--color-gray-300);
  padding: 5px 40px;
}
.compare__card__radius {
  border-radius: 12px 12px 0px 0px;
}
.compare__card__body {
  background: var(--color-white);
  padding: 1rem 40px;
}
.proggress-bar {
  width: fit-content;
  text-align: center;
  font-family: var(--t6-font-family);
  font-size: var(--t6-font-size);
  line-height: 23.81px;
}
.progress {
  text-align: center;
  width: 216px;
  height: 8px;
  background: var(--color-gray-300);
  border-radius: 35px;
  position: relative;
}
.progress_inner {
  background: var(--color-blue);
  height: 100%;
  border-radius: 35px;
  position: absolute;
  left: 0;
}
</style>