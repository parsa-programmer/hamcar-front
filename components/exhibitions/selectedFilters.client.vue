<template>
  <div class="selected_filter" v-if="selectedFilter">
    <template v-if="selectedFilter.province">
      <div class="selected-filters__item">
        <label class="selected-filters__name" :for="`province_s`">
          {{ selectedFilter.province }}
        </label>
        <h-input
          type="checkbox"
          checked
          :input-id="`province_s`"
          name="province_filter"
          :value="selectedFilter.province"
        />
      </div>
    </template>
    <template v-if="selectedFilter.hasZeroMileageCar">
      <div class="selected-filters__item">
        <label class="selected-filters__name" :for="`hasZeroMileageCar_s`">
          خودروی صفر هم دارد
        </label>
        <h-input
          type="checkbox"
          checked
          :input-id="`hasZeroMileageCar_s`"
          name="hasZeroMileageCar_filter"
          :value="selectedFilter.hasZeroMileageCar"
        />
      </div>
    </template>
    <template v-if="selectedFilter.manufacture">
      <hr class="mt-1 mb-1" />
      <div
        class="selected-filters__item"
        v-for="(manufacture, index) in selectedFilter.manufacture"
        :key="manufacture"
      >
        <label
          class="selected-filters__name"
          :for="`manufacture_s${index}`"
        >
          {{ manufacture.replaceAll("_", " ") }}
        </label>
        <h-input
          type="checkbox"
          checked
          :input-id="`manufacture_s${index}`"
          name="manufacture_filter"
          :value="manufacture"
        />
      </div>
    </template>
    <template v-if="selectedFilter.specialCases">
      <div
        class="selected-filters__item"
        v-for="(specialCases, index) in selectedFilter.specialCases"
        :key="index"
      >
        <label
          class="selected-filters__name"
          :for="`specialCases_s${specialCases}`"
        >
          {{ specialCases.replaceAll("_", " ") }}
        </label>
        <h-input
          type="checkbox"
          checked
          :input-id="`specialCases_s${specialCases}`"
          name="specialCases_filter"
          :value="specialCases"
        />
      </div>
    </template>
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
import { Ref } from "vue";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import {
  ExhibitionFilterOrderBy,
  ExhibitionFilterParams,
} from "~~/models/exhibitions/Exhibition.Models";
import { UseUtilStore } from "~~/stores/util.store";
import { splitNumber } from "~~/utilities/numberUtils";
import { RemoveEmptyProps } from "~~/utilities/objectUtils";
const emit = defineEmits(["closed"]);

const utilStore = UseUtilStore();
const router = useRouter();
const route = useRoute();

const selectedFilter: Ref<ExhibitionFilterParams | null> = ref(null);

const setFilters = async () => {
  const province =
    document.querySelector("input[name=province_filter]:checked") != null;

  const hasZeroMileageCar =
    document.querySelector("input[name=hasZeroMileageCar_filter]:checked") !=
    null;

  await GetDataAndChangeQueryParam(
    "specialCases_filter",
    "specialCases",
    selectedFilter.value?.specialCases ?? []
  );

  await GetDataAndChangeQueryParam(
    "manufacture_filter",
    "manufacture",
    selectedFilter.value?.manufacture ?? []
  );

  if (province == false && selectedFilter.value?.province) {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        province: null,
      },
    });
    return;
  }

  if (hasZeroMileageCar == false && selectedFilter.value?.hasZeroMileageCar) {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        haveZeroMileage: "false",
      },
    });
    return;
  }
};
const removeFilters = async () => {
  await router.push(router.currentRoute.value.path);
  emit("closed");
};

onMounted(() => {
  setSelectedFilter();
});
watch(
  () => route.query,
  () => {
    setSelectedFilter();
    if (getFilterCount() == 0) {
      emit("closed");
    }
  }
);
const setSelectedFilter = () => {
  var hasZeroMileageCar = route.query.haveZeroMileage?.toString() == "true";
  var province = route.query.province?.toString();
  selectedFilter.value = {
    hasZeroMileageCar,
    manufacture: (route.query.manufacture as Manufacture[]) ?? null,
    specialCases: (route.query.specialCases as SpecialCases[]) ?? null,
    province: province ?? "",
    title: route.query.search?.toString() ?? "",
    orderBy: ExhibitionFilterOrderBy.creationDate,
    pageId: 1,
    take: 12,
  };
  if (typeof selectedFilter.value.manufacture == "string") {
    selectedFilter.value.manufacture = [selectedFilter.value.manufacture];
  }
  if (typeof selectedFilter.value.specialCases == "string") {
    selectedFilter.value.specialCases = [selectedFilter.value.specialCases];
  }
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
    await changeQueryParams(fuelValues, queryParamKey);
  }
};
const changeQueryParams = async (data: any, key: string) => {
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      [key]: data,
    },
  });
};

const getFilterCount = () => {
  var hasZeroMileageCar = route.query.haveZeroMileage?.toString() == "true";
  var hasProvince = route.query.province?.toString();
  var specialCases = route.query.specialCases?.toString();
  var manufacture = route.query.manufacture?.toString();
  var res = {
    hasZeroMileageCar,
    hasProvince,
    specialCases,
    manufacture,
  };
  RemoveEmptyProps(res);
  return Object.keys(res).length;
};
</script>

<style>
.selected_filter h5 {
  margin-bottom: 1rem;
}
</style>