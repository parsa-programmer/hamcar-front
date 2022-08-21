<template>
  <div class="selected_filter">
    <template v-if="selectedFilter.brand || selectedFilter.model">
      <h5 class="text-center">فیلتر برند و مدل</h5>
      <template v-if="advertFilter.brand">
        <div class="selected-filters__item">
          <label class="selected-filters__name" :for="`brand_filter`">
            {{ utilStore.getBrandBySlug(advertFilter.brand)?.title }}
          </label>
          <h-input
            type="checkbox"
            checked
            :input-id="`brand_filter`"
            name="brand_filter"
            :value="selectedFilter.brand"
          />
        </div>
      </template>
      <template v-else-if="selectedFilter.brand">
        <div
          class="selected-filters__item"
          v-for="(item, index) in selectedFilter.brand"
          :key="index"
        >
          <label class="selected-filters__name" :for="`brand_filters${index}`">
            {{ utilStore.getBrandBySlug(item)?.title }}
          </label>
          <h-input
            type="checkbox"
            checked
            :input-id="`brand_filters${index}`"
            name="brand_filters"
            :value="item"
          />
        </div>
      </template>
      <template v-if="advertFilter.model">
        <div class="selected-filters__item">
          <label class="selected-filters__name" :for="`model_filter`">
            {{ utilStore.getModelBySlug(advertFilter.model)?.title }}
          </label>
          <h-input
            type="checkbox"
            checked
            :input-id="`model_filter`"
            name="model_filter"
            :value="selectedFilter.model"
          />
        </div>
      </template>
      <template v-else-if="selectedFilter.model">
        <div
          class="selected-filters__item"
          v-for="(item, index) in selectedFilter.model"
          :key="index"
        >
          <label class="selected-filters__name" :for="`model_filters${index}`">
            {{ utilStore.getModelBySlug(item)?.title }}
          </label>
          <h-input
            type="checkbox"
            checked
            :input-id="`model_filters${index}`"
            name="model_filters"
            :value="selectedFilter.model"
          />
        </div>
      </template>
    </template>
    <template v-if="selectedFilter.startYear || selectedFilter.endYear">
      <h5 class="text-center">فیلتر سال تولید</h5>
      <div class="selected-filters__item" v-if="selectedFilter.startYear">
        <label class="selected-filters__name" for="start_year">
          از سال {{ selectedFilter.startYear }}
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="start_year"
          name="start_year"
          :value="selectedFilter.startYear"
        />
      </div>

      <div class="selected-filters__item" v-if="selectedFilter.endYear">
        <label class="selected-filters__name" for="end_year">
          تا سال {{ selectedFilter.endYear }}
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="end_year"
          name="end_year"
          :value="selectedFilter.endYear"
        />
      </div>
    </template>
    <template v-if="selectedFilter.startPrice || selectedFilter.endPrice">
      <h5 class="text-center">فیلتر قیمت</h5>
      <div class="selected-filters__item" v-if="selectedFilter.startPrice">
        <label class="selected-filters__name" for="start_Price">
          از {{ splitNumber(selectedFilter.startPrice) }}
          <small>تومان</small>
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="start_Price"
          name="start_Price"
          :value="selectedFilter.startPrice"
        />
      </div>

      <div class="selected-filters__item" v-if="selectedFilter.endPrice">
        <label class="selected-filters__name" for="end_Price">
          <span v-if="!selectedFilter.startPrice"
            >از 0 <small>تومان</small></span
          >

          تا {{ splitNumber(selectedFilter.endPrice) }}
          <small>تومان</small>
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="end_Price"
          name="end_Price"
          :value="selectedFilter.endPrice"
        />
      </div>
    </template>
    <template v-if="selectedFilter.startMileage || selectedFilter.endMileage">
      <h5 class="text-center">فیلتر کارکرد</h5>
      <div class="selected-filters__item" v-if="selectedFilter.startMileage">
        <label class="selected-filters__name" for="start_Mileage">
          از {{ splitNumber(selectedFilter.startMileage) }}
          <small>کیلومتر</small>
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="start_Mileage"
          name="start_Mileage"
          :value="selectedFilter.startMileage"
        />
      </div>
      <div
        class="selected-filters__item"
        v-if="selectedFilter.endMileage == '0'"
      >
        <label class="selected-filters__name" for="start_Mileage">
          صفر
          <small>کیلومتر</small>
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="start_Mileage"
          name="start_Mileage"
          :value="0"
        />
        <h-input
          type="checkbox"
          input-id="end_Mileage"
          name="end_Mileage"
          :value="0"
          style="position: fixed; left: -100%; opacity: 0; z-index: -10000"
        />
      </div>
      <div
        class="selected-filters__item"
        v-else-if="
          selectedFilter.endMileage && selectedFilter.endMileage != '500000'
        "
      >
        <label class="selected-filters__name" for="end_Mileage">
          <span v-if="!selectedFilter.startMileage"
            >از 0 <small>کیلومتر </small></span
          >
          تا {{ splitNumber(selectedFilter.endMileage) }}
          <small>کیلومتر</small>
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="end_Mileage"
          name="end_Mileage"
          :value="selectedFilter.endMileage"
        />
      </div>
    </template>

    <template v-if="selectedFilter.cylinderCount?.length ?? 0 > 0">
      <h5 class="text-center">فیلتر سیلندر</h5>
      <div
        class="selected-filters__item"
        v-for="(item, index) in selectedFilter.cylinderCount"
        :key="index"
      >
        <label
          class="selected-filters__name"
          :for="`fcy_${index}`"
          v-if="item == 'three'"
          >3 سیلندر</label
        >
        <label
          class="selected-filters__name"
          :for="`fcy_${index}`"
          v-if="item == 'four'"
          >4 سیلندر</label
        >
        <label
          class="selected-filters__name"
          :for="`fcy_${index}`"
          v-if="item == 'five'"
          >5 سیلندر</label
        >
        <label
          class="selected-filters__name"
          :for="`fcy_${index}`"
          v-if="item == 'six'"
          >6 سیلندر</label
        >
        <label
          class="selected-filters__name"
          :for="`fcy_${index}`"
          v-if="item == 'eight'"
          >8 سیلندر</label
        >
        <h-input
          type="checkbox"
          checked
          :input-id="`fcy_${index}`"
          :value="item"
          name="cylinderCount_"
        />
      </div>
    </template>
    <template
      v-if="
        selectedFilter.haveImage ||
        selectedFilter.havePrice ||
        selectedFilter.justGhesti
      "
    >
      <hr
        class="mt-0_5"
        style="margin-bottom: 1rem"
        v-if="advertFilter.getFilterCount() > 1"
      />
      <div class="selected-filters__item" v-if="selectedFilter.haveImage">
        <label class="selected-filters__name" for="just_have_Image">
          عکس دار
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="just_have_Image"
          name="just_have_Image"
        />
      </div>
      <div class="selected-filters__item" v-if="selectedFilter.havePrice">
        <label class="selected-filters__name" for="just_havePrice_">
          قیمت دار
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="just_havePrice_"
          name="just_havePrice_"
        />
      </div>
      <div class="selected-filters__item" v-if="selectedFilter.justGhesti">
        <label class="selected-filters__name" for="_just_Gesti_">
          اقساطی
        </label>
        <h-input
          type="checkbox"
          checked
          input-id="_just_Gesti_"
          name="_just_Gesti_"
        />
      </div>
    </template>
    <template v-if="selectedFilter.colors?.length ?? 0 > 0">
      <h5 class="text-center">فیلتر رنگ</h5>
      <div
        class="selected-filters__item"
        v-for="(item, index) in selectedFilter.colors"
        :key="index"
      >
        <label class="selected-filters__name" :for="`fc_${index}`">{{
          item.replace("_", " ")
        }}</label>
        <h-input
          type="checkbox"
          checked
          :value="item"
          :input-id="`fc_${index}`"
          name="color_"
        />
      </div>
    </template>
    <template v-if="selectedFilter.modelType?.length ?? 0 > 0">
      <h5 class="text-center">فیلتر شاسی</h5>
      <div
        class="selected-filters__item"
        v-for="(item, index) in selectedFilter.modelType"
        :key="index"
      >
        <label class="selected-filters__name" :for="`fmt_${item}`">{{
          item.toString().replace("_", " ")
        }}</label>
        <h-input
          type="checkbox"
          checked
          :input-id="`fmt_${item}`"
          name="modelType_"
          :value="item"
        />
      </div>
    </template>
    <search-advert-selected-filters-car-fuel :filters="selectedFilter" />
    <search-advert-selected-filters-country :filters="selectedFilter" />
    <search-advert-selected-filters-differential :filters="selectedFilter" />

    <search-advert-selected-filters-engine-volume :filters="selectedFilter" />
    <search-advert-selected-filters-gear-box :filters="selectedFilter" />
    <search-advert-selected-filters-manufacture :filters="selectedFilter" />
    <search-advert-selected-filters-special-cases :filters="selectedFilter" />

    <div class="selected-filters__action">
      <button
        @click="removeFilters"
        class="btn btn-sm btn-transparent selected-filters__delete-btn"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 3.75H6M17.25 3.75H12M2.25 3.75L3.32985 14.5485C3.48321 16.0821 4.77371 17.25 6.31497 17.25H11.685C13.2263 17.25 14.5168 16.0821 14.6701 14.5485L15.75 3.75M9 8.25V12.75M12.375 8.25L12 12.75M5.625 8.25L6 12.75M12 3.75H9H6M12 3.75H6M12 3.75V2.25C12 1.42157 11.3284 0.75 10.5 0.75H7.5C6.67157 0.75 6 1.42157 6 2.25V3.75"
            stroke="#EF3838"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>
        </svg>
        حذف همه
      </button>
      <button
        class="btn btn-sm btn-primary selected-filters__submit-btn"
        @click="setFilters"
      >
        اعمال
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { filter } from "lodash";
import { UseUtilStore } from "~~/stores/util.store";
import { splitNumber } from "~~/utilities/numberUtils";
import { RemoveEmptyProps } from "~~/utilities/objectUtils";
const emit = defineEmits(["closed"]);

const advertFilter = useAdverFilter();
const selectedFilter = ref(advertFilter.getFilterQueryParams());
const utilStore = UseUtilStore();
const setFilters = async () => {
  const justGhesti =
    document.querySelector("input[name=_just_Gesti_]:checked") != null;
  const justHavePrice =
    document.querySelector("input[name=just_havePrice_]:checked") != null;

  const justHaveImage =
    document.querySelector("input[name=just_have_Image]:checked") != null;

  const haveBrand =
    document.querySelector("input[name=brand_filter]:checked") != null;

  const haveModel =
    document.querySelector("input[name=model_filter]:checked") != null;

  const startYear =
    document.querySelector("input[name=start_year]:checked") != null;

  const endYear =
    document.querySelector("input[name=end_year]:checked") != null;

  const startPrice =
    document.querySelector("input[name=start_Price]:checked") != null;

  const endPrice =
    document.querySelector("input[name=end_Price]:checked") != null;

  const startMileage =
    document.querySelector("input[name=start_Mileage]:checked") != null;

  const endMileage =
    document.querySelector("input[name=end_Mileage]:checked") != null;

  //#region Brand And Model
  if (haveBrand == false && advertFilter.brand) {
    await advertFilter.removeBrandFilter();
    return;
  }
  if (haveModel == false && advertFilter.model) {
    await advertFilter.removeModel();
    return;
  }
  //#endregion

  // Price
  if (startPrice == false && selectedFilter.value.startPrice) {
    await advertFilter.changePrice(
      "0",
      selectedFilter.value.endPrice ?? "5000000000"
    );
  }
  if (endPrice == false && selectedFilter.value.endPrice) {
    await advertFilter.changePrice(
      selectedFilter.value.startPrice ?? "0",
      "5000000000"
    );
  }

  //Mileage
  if (startMileage == false && selectedFilter.value.startMileage) {
    await advertFilter.changeMilage(
      "0",
      selectedFilter.value.endMileage ?? "500000"
    );
  }
  if (endMileage == false && selectedFilter.value.endMileage) {
    await advertFilter.changeMilage(
      selectedFilter.value.startMileage ?? "0",
      "500000"
    );
  }

  //Year
  if (startYear == false && selectedFilter.value.startYear) {
    await advertFilter.changeYear("", selectedFilter.value.year);
  }
  if (endYear == false && selectedFilter.value.endYear) {
    await advertFilter.changeYear(selectedFilter.value.startYear, null);
  }

  if (justGhesti == false && selectedFilter.value.justGhesti) {
    await advertFilter.justGhesti(false);
  }
  if (justHaveImage == false && selectedFilter.value.haveImage) {
    await advertFilter.justHaveImage(false);
  }
  if (justHavePrice == false && selectedFilter.value.havePrice) {
    await advertFilter.justHavePrice(false);
  }

  //cylinderCount
  await GetDataAndChangeQueryParam(
    "cylinderCount_",
    "cylinderCount",
    selectedFilter.value.cylinderCount
  );

  //colors
  await GetDataAndChangeQueryParam(
    "color_",
    "colors",
    selectedFilter.value.colors
  );

  //modelType_
  await GetDataAndChangeQueryParam(
    "modelType_",
    "modelType",
    selectedFilter.value.modelType
  );

  //Fuel
  await GetDataAndChangeQueryParam("fuel_", "fuel", selectedFilter.value.fuel);

  //country
  await GetDataAndChangeQueryParam(
    "country_",
    "country",
    selectedFilter.value.country
  );

  //differential
  await GetDataAndChangeQueryParam(
    "differential_",
    "differential",
    selectedFilter.value.differential
  );

  //engineVolume
  await GetDataAndChangeQueryParam(
    "engineVolume_",
    "engineVolume",
    selectedFilter.value.engineVolume
  );

  //gearBox
  await GetDataAndChangeQueryParam(
    "gearBox_",
    "gearBox",
    selectedFilter.value.gearBox
  );

  //manufacture
  await GetDataAndChangeQueryParam(
    "manufacture_",
    "manufacture",
    selectedFilter.value.manufacture
  );

  //specialCases
  await GetDataAndChangeQueryParam(
    "specialCases_",
    "specialCases",
    selectedFilter.value.specialCases
  );

  //brands
  await GetDataAndChangeQueryParam(
    "brand_filters",
    "brands",
    selectedFilter.value.brand
  );

  //brands
  await GetDataAndChangeQueryParam(
    "model_filters",
    "models",
    selectedFilter.value.model
  );
};

const GetDataAndChangeQueryParam = async (
  inputName: string,
  queryParamKey: string,
  oldValue: any[] | null
) => {
  const fuelChecked = document.querySelectorAll(
    `input[name=${inputName}]:checked`
  );
  let fuelValues: any[] = [];
  fuelChecked.forEach((checkbox) => {
    //@ts-ignore
    fuelValues.push(checkbox.value);
  });
  if (fuelValues?.length != oldValue?.length ?? 0) {
    await advertFilter.changeQueryParams(fuelValues, queryParamKey);
  }
};

const route = useRoute();
watch(
  () => route.query,
  () => {
    emit("closed");
  }
);
const removeFilters = () => {
  advertFilter.removeAllFilters();
  emit("closed");
};
onMounted(() => {
  fixFilters();
});
const fixFilters = () => {
  RemoveEmptyProps(selectedFilter);
  if (typeof selectedFilter.value.colors == "string") {
    selectedFilter.value.colors = [selectedFilter.value.colors];
  }
  if (typeof selectedFilter.value.cylinderCount == "string") {
    selectedFilter.value.cylinderCount = [selectedFilter.value.cylinderCount];
  }

  if (typeof selectedFilter.value.modelType == "string") {
    selectedFilter.value.modelType = [selectedFilter.value.modelType];
  }
  if (typeof selectedFilter.value.fuel == "string") {
    selectedFilter.value.fuel = [selectedFilter.value.fuel];
  }
  if (typeof selectedFilter.value.country == "string") {
    selectedFilter.value.country = [selectedFilter.value.country];
  }
  if (typeof selectedFilter.value.differential == "string") {
    selectedFilter.value.differential = [selectedFilter.value.differential];
  }
  if (typeof selectedFilter.value.engineVolume == "string") {
    selectedFilter.value.engineVolume = [selectedFilter.value.engineVolume];
  }
  if (typeof selectedFilter.value.gearBox == "string") {
    selectedFilter.value.gearBox = [selectedFilter.value.gearBox];
  }
  if (typeof selectedFilter.value.manufacture == "string") {
    console.log(selectedFilter.value.manufacture);
    selectedFilter.value.manufacture = [selectedFilter.value.manufacture];
  }

  if (typeof selectedFilter.value.specialCases == "string") {
    selectedFilter.value.specialCases = [selectedFilter.value.specialCases];
  }

  //@ts-ignore
  delete selectedFilter.value["take"];
  //@ts-ignore
  delete selectedFilter.value["pageId"];
  //@ts-ignore
  delete selectedFilter.value["orderBy"];
  //@ts-ignore
  delete selectedFilter.value["advertisementType"];

  if (selectedFilter.value.startMileage == "0") {
    //@ts-ignore
    delete selectedFilter.value["startMileage"];
  }
  if (selectedFilter.value.startPrice == "0") {
    //@ts-ignore
    delete selectedFilter.value["startPrice"];
  }
  if (selectedFilter.value.endPrice == "5000000000") {
    //@ts-ignore
    delete selectedFilter.value["endPrice"];
  }
  if (selectedFilter.value.endMileage == "500000") {
    //@ts-ignore
    delete selectedFilter.value["endMileage"];
  }
  if (selectedFilter.value.haveImage?.toString() == "false") {
    //@ts-ignore
    delete selectedFilter.value["haveImage"];
  }
  if (selectedFilter.value.havePrice?.toString() == "false") {
    //@ts-ignore
    delete selectedFilter.value["havePrice"];
  }
  if (selectedFilter.value.justGhesti?.toString() == "false") {
    //@ts-ignore
    delete selectedFilter.value["justGhesti"];
  }
};
</script>

<style>
.selected_filter h5 {
  margin-bottom: 1rem;
}
</style>