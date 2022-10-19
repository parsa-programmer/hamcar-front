<template>
  <div>
    <div class="filter-list-btn" @click="() => (isOpen = true)">
      <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
        <mask id="path-1-inside-1_2206_11714" fill="white">
          <path
            d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z">
          </path>
        </mask>
        <path
          d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z"
          stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
          mask="url(#path-1-inside-1_2206_11714)"></path>
        <path d="M5.83203 4.1665H10.832" stroke="white" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
      <span>فیلتر آگهی ها</span>
      <span class="filter-list-btn__badge">{{
      advertFilter.getFilterCount()
      }}</span>
    </div>
    <div class="filters-page" :style="{ display: isOpen ? 'block' : 'none' }">
      <header class="nav filters-page__header">
        <p class="nav__title">
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
            <path
              d="M2.66989 1.25H13.3301C14.0863 1.25 14.7099 1.71261 15.0326 2.41337C15.3561 3.11591 15.3388 3.98905 14.845 4.70389L10.4033 11.1346C10.0835 11.5976 9.91505 12.1533 9.91505 12.7184V16.9594C9.91505 17.3316 9.76214 17.6686 9.52255 17.8854L7.74585 19.493C7.41311 19.7941 7.02357 19.8112 6.69804 19.6457C6.36477 19.4762 6.08495 19.1016 6.08495 18.5671V12.7184C6.08495 12.1533 5.9165 11.5976 5.59671 11.1346L1.15496 4.70389C0.661207 3.98905 0.64394 3.11591 0.967442 2.41337C1.29012 1.71261 1.91365 1.25 2.66989 1.25Z"
              stroke="var(--color-black)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M5.59766 4.66669H10.3977" stroke="var(--color-black)" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
          {{ advertFilter.getFilterCount() }} فیلتر انتخاب شده
        </p>
        <div class="nav__icon nav__icon--close-icon nav__icon--fixed-right" @click="() => (isOpen = false)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.33203 1.33331L7.9987 7.99998M14.6654 14.6666L7.9987 7.99998M7.9987 7.99998L14.6654 1.33331M7.9987 7.99998L1.33203 14.6666"
              stroke="#ABADB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </div>
      </header>
      <div class="filter-page__main" v-if="loading">
        <h-skeletor width="100%" style="height: 500px;" />
      </div>
      <main class="filter-page__main" v-else>
        <div class="filter-group">
          <search-advert-filters-brands :brands="brands" />
          <search-advert-filters-models :models="models" />
          <search-advert-collapsible-card title="سال تولید" body-class="filter__body--scroll-disable"
            :is-open="startYear != '' || endYear != ''">
            <div class="filter__space">
              <div class="filter__right">
                <span>از</span>
                <span>تا</span>
              </div>
              <div class="filter__wrapper">
                <h-searchable-select name="startYear" placeholder="انتخاب کنید" v-model="startYear" :select-data="
                  GenerateYear(1325, new Date().getFullYear() - 621)
                " />

                <h-searchable-select name="startYear" placeholder="انتخاب کنید" v-model="endYear"
                  :select-data="endYearsData" />
              </div>
            </div>
          </search-advert-collapsible-card>
        </div>
        <search-advert-collapsible-card title="قیمت">
          <div class="flex">
            <div class="filter__selected-range">
              <span>از</span>
              <p>{{ splitNumber(price[0]) }}</p>
              <span>تومان</span>
            </div>
            <div class="filter__selected-range">
              <span>تا</span>
              <p>{{ splitNumber(price[1]) }}</p>
              <span>تومان</span>
            </div>
          </div>
          <div>
            <h-range-slider :step="1000" :min="0" :max="5000000000" v-model="price" style="width: 100%" @value-changed="
              advertFilter.changePrice(
                price[0].toString(),
                price[1].toString()
              )
            " />
          </div>
          <div class="filter__item">
            <h-input name="ghesti" input-id="ghesti" type="checkbox" @change="changeJustGhesti" :checked="
              advertFilter.getFilterQueryParams().justGhesti?.toString() ==
              'true'
            ">
              <span class="filter__data p-0">اقساطی</span>
            </h-input>
          </div>
        </search-advert-collapsible-card>

        <search-advert-collapsible-card title="کارکرد">
          <div class="filter__tabs">
            <span @click="changeCarType(CarType.صفر)" :class="[
              'filter__tab-item',
              { 'filter__tab-item--active': carType == CarType.صفر },
            ]">صفر</span>
            <span @click="changeCarType(CarType.کارکرده)" :class="[
              'filter__tab-item',
              { 'filter__tab-item--active': carType == CarType.کارکرده },
            ]">کارکرده</span>
            <span @click="changeCarType(null)" :class="[
              'filter__tab-item',
              { 'filter__tab-item--active': carType == null },
            ]">همه</span>
          </div>
          <template v-if="carType == CarType.کارکرده">
            <div class="flex">
              <div class="filter__selected-range">
                <span>از</span>
                <p>{{ splitNumber(milage[0]) }}</p>
                <span>کیلومتر</span>
              </div>
              <div class="filter__selected-range">
                <span>تا</span>
                <p>{{ splitNumber(milage[1]) }}</p>
                <span>کیلومتر</span>
              </div>
            </div>
            <!-- @ts-ignore -->
            <h-range-slider :min="0" :max="500000" :step="1" v-model="milage" @value-changed="
              advertFilter.changeMilage(
                milage[0].toString(),
                milage[1].toString()
              )
            " />
          </template>
        </search-advert-collapsible-card>

        <search-advert-filters-province />

        <search-advert-collapsible-card title="تعداد سیلندر"
          :is-open="advertFilter.getFilterQueryParams().cylinderCount != null">
          <div class="filter__item">
            <h-input type="checkbox" input-id="ss3" name="sylandr" :value="CylinderCount.Three"
              @change="changeCylinderCount" :checked="
                advertFilter
                  .getFilterQueryParams()
                  .cylinderCount?.toString()
                  .includes(CylinderCount.Three.toString())
              ">
              <span class="filter__data"> 3 سیلندر </span>
            </h-input>
          </div>
          <div class="filter__item">
            <h-input type="checkbox" input-id="ss4" name="sylandr" :value="CylinderCount.Four"
              @change="changeCylinderCount" :checked="
                advertFilter
                  .getFilterQueryParams()
                  .cylinderCount?.toString()
                  .includes(CylinderCount.Four.toString())
              ">
              <span class="filter__data"> 4 سیلندر </span>
            </h-input>
          </div>
          <div class="filter__item">
            <h-input type="checkbox" input-id="ss5" name="sylandr" :value="CylinderCount.Five"
              @change="changeCylinderCount" :checked="
                advertFilter
                  .getFilterQueryParams()
                  .cylinderCount?.toString()
                  .includes(CylinderCount.Five.toString())
              ">
              <span class="filter__data"> 5 سیلندر </span>
            </h-input>
          </div>
          <div class="filter__item">
            <h-input type="checkbox" input-id="ss6" name="sylandr" :value="CylinderCount.Six"
              @change="changeCylinderCount" :checked="
                advertFilter
                  .getFilterQueryParams()
                  .cylinderCount?.toString()
                  .includes(CylinderCount.Six.toString())
              ">
              <span class="filter__data"> 6 سیلندر </span>
            </h-input>
          </div>
          <div class="filter__item">
            <h-input type="checkbox" input-id="ss8" name="sylandr" :value="CylinderCount.Eight"
              @change="changeCylinderCount" :checked="
                advertFilter
                  .getFilterQueryParams()
                  .cylinderCount?.toString()
                  .includes(CylinderCount.Eight.toString())
              ">
              <span class="filter__data"> 8 سیلندر </span>
            </h-input>
          </div>
        </search-advert-collapsible-card>

        <div class="filter-group">
          <div class="filter">
            <label for="justHasImagee" class="filter__header">
              <span class="filter__name">عکس دار</span>
              <h-switch id="justHasImagee" @change="changeJustImage" name="justHasImagee" :checked="
                advertFilter.getFilterQueryParams().haveImage?.toString() ==
                'true'
              " />
            </label>
          </div>
          <div class="filter">
            <label for="justPricee" class="filter__header">
              <span class="filter__name">قیمت دار</span>
              <h-switch type="checkbox" name="justPrice" id="justPricee" @change="changeJustPrice" :checked="
                advertFilter.getFilterQueryParams().havePrice?.toString() ==
                'true'
              " />
            </label>
          </div>
        </div>
        <search-advert-collapsible-card title="رنگ">
          <template v-for="(item, index) in Object.values(Color)" :key="index">
            <div class="filter__item" v-if="typeof item == 'string'">
              <h-input type="checkbox" name="color" :input-Id="`coo${index}`" :value="item" :checked="
                advertFilter.getFilterQueryParams().colors?.includes(item)
              " @change="colorChanged">
                <span class="filter__data">
                  <span class="filter__text">
                    <span class="filter__color" :style="{
                      'background-color': ConvertColorNameToHashColor(item),
                    }"></span>
                    {{ item.toString().replace("_", " ") }}
                  </span>
                </span>
              </h-input>
            </div>
          </template>
        </search-advert-collapsible-card>
        <search-advert-collapsible-card title="شاسی" :is-open="advertFilter.getFilterQueryParams().modelType != null">
          <template v-for="(item, index) in Object.values(BodyType)" :key="index">
            <div class="filter__item" v-if="typeof item == 'string'">
              <h-input type="checkbox" :input-id="`cw${item}`" name="bodyType" :value="item" @change="changeBodyType"
                :checked="
                  advertFilter
                    .getFilterQueryParams()
                    .modelType?.toString()
                    .includes(item.toString())
                ">
                <span class="filter__data">{{
                item.toString().replace("_", " ")
                }}</span>
              </h-input>
            </div>
          </template>
        </search-advert-collapsible-card>
        <search-advert-filters-gear-box />
        <search-advert-filters-country />
        <search-advert-filters-car-fuel />
        <search-advert-filters-engine-volume />
        <search-advert-filters-differential />
        <search-advert-filters-manufacture />
        <search-advert-filters-special-cases />
      </main>
      <footer class="filter-page__footer">
        <button class="btn btn-primary filter-page__submit-btn" @click="() => (isOpen = false)">
          نمایش {{ advertCount }} آگهی
        </button>
        <button class="btn btn-transparent filter-page__delete-btn" @click="closeBox">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M0.832031 4.16634H6.66536M19.1654 4.16634H13.332M2.4987 4.16634L3.69853 16.1647C3.86893 17.8687 5.30282 19.1663 7.01532 19.1663H12.9821C14.6946 19.1663 16.1285 17.8687 16.2989 16.1647L17.4987 4.16634M9.9987 9.16634V14.1663M13.7487 9.16634L13.332 14.1663M6.2487 9.16634L6.66536 14.1663M13.332 4.16634H9.9987H6.66536M13.332 4.16634H6.66536M13.332 4.16634V2.49967C13.332 1.5792 12.5858 0.833008 11.6654 0.833008H8.33203C7.41156 0.833008 6.66536 1.5792 6.66536 2.49967V4.16634"
              stroke="#EF3838" stroke-width="1.66667" stroke-linecap="round"></path>
          </svg>
          حذف همه
        </button>
      </footer>
    </div>
  </div>
</template>
 
<script setup lang="ts">
import { ref } from "#imports";
import { Ref } from "vue";
import { CarType } from "~~/models/advertisements/enums/CarType";
import { splitNumber } from "~~/utilities/numberUtils";
import { UseUtilStore } from "~~/stores/util.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { Brand } from "~~/models/utilities/Brand";
import { AlertType } from "~~/models/utilities/AlertType";
import { Model } from "~~/models/utilities/Model";
import { GenerateYear } from "~~/utilities/selectDataGenerator";
import { toPersianDate } from "~~/utilities/dateUtil";
import { CylinderCount } from "~~/models/advertisements/enums/CylinderCount";
import { BodyType } from "~~/models/advertisements/enums/BodyType";
import { Color } from "~~/models/advertisements/enums/Color";
import { ConvertColorNameToHashColor } from "~~/utilities/colorUtils";
import HSkeletor1 from "../H-Skeletor.vue";

const loading = ref(true);
const advertFilter = useAdverFilter();

const startYear = ref(advertFilter.getFilterQueryParams().startYear ?? "0");
const endYear = ref(advertFilter.getFilterQueryParams().endYear ?? "0");
const endYearsData = ref(
  GenerateYear(
    startYear.value != "" ? Number(startYear.value) : 1325,
    new Date().getFullYear() - 621
  )
);
watch(startYear, (val) => {
  endYearsData.value = GenerateYear(
    Number(val),
    new Date().getFullYear() - 621
  );
});
var filters = advertFilter.getFilterQueryParams();
const price: Ref<string[]> = ref([
  filters.startPrice ?? "0",
  filters.endPrice ?? "5000000000",
]);
const milage: Ref<string[]> = ref([
  filters.startMileage ?? "0",
  filters.endMileage ?? "500000",
]);
const carType: Ref<CarType | null> = ref(CarType.کارکرده);
const brands: Ref<Brand[]> = ref([]);
const models: Ref<Model[]> = ref([]);
const router = useRouter();
const utilStore = UseUtilStore();

defineProps({
  advertCount: {
    type: Number,
    default: 0,
  },
});

const changeCarType = (type: CarType | null) => {
  carType.value = type;
  if (type == null || type == CarType.کارکرده) {
    milage.value = ["0", "500000"];
    advertFilter.changeMilage("0", "500000");
  }
  if (type == CarType.صفر) {
    advertFilter.changeMilage("0", "0");
  }
};
watch(startYear, (val) => {
  advertFilter.changeYear(val, endYear.value);
});
watch(endYear, (val) => {
  advertFilter.changeYear(startYear.value, val);
});
watch(
  () => router.currentRoute.value.query,
  (val) => {
    price.value[0] = val.startPrice?.toString() ?? "0";
    price.value[1] = val.endPrice?.toString() ?? "5000000000";

    milage.value[0] = val.startMileage?.toString() ?? "0";
    milage.value[1] = val.endMileage?.toString() ?? "500000";

    startYear.value = val.startYear?.toString() ?? "";
    endYear.value = val.endYear?.toString() ?? "";
  }
);
watch(
  () => router.currentRoute.value.query.brands,
  async (val) => {
    var brands = val;
    if (typeof brands == "string") {
      brands = [brands];
    }
    models.value = await advertFilter.GetModels("", brands as string[]);
  }
);
onMounted(async () => {
  brands.value = await advertFilter.getBrands(advertFilter.isCarFilter(), "");
  models.value = await ProssesAsync(() => advertFilter.GetModels(), loading);
});

function changeJustGhesti() {
  const checked = document.querySelector("#ghesti:checked") !== null;
  advertFilter.justGhesti(checked);
}

function changeJustImage() {
  const checked = document.querySelector("#justHasImagee:checked") !== null;
  console.log(checked);
  advertFilter.justHaveImage(checked);
}
function changeJustPrice() {
  const checked = document.querySelector("#justPricee:checked") !== null;
  console.log(checked);
  advertFilter.justHavePrice(checked);
}

function changeCylinderCount() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=sylandr]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  advertFilter.changeQueryParams(values, "cylinderCount");
}
function changeBodyType() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=bodyType]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  advertFilter.changeQueryParams(values, "modelTypes");
}
function colorChanged() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=color]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  advertFilter.changeQueryParams(values, "colors");
}

const isOpen: Ref<boolean> = ref(false);
const closeBox = async () => {
  await advertFilter.removeAllFilters();
  isOpen.value = false;
};
</script>
 
<style>

</style>