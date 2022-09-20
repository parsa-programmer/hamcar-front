<template>
  <aside class="advertising__sidebar">
    <div class="filter-group">
      <search-advert-collapsible-card title="استان" body-class="filter__body">
        <div class="filter__search">
          <form action="">
            <input
              type="text"
              class="form-control"
              placeholder="جستجوی نام استان"
              @input="(e) => searchProvince(e)"
            />
          </form>
        </div>
        <div
          class="filter__item"
          v-for="(item, index) in provinces"
          :key="index"
        >
          <h-input
            type="radio"
            :input-id="`p_${index}`"
            name="province"
            :value="item.name"
            @change="changeProvince"
            :checked="
              $route.query.province?.toString().includes(item.name.toString())
            "
          >
            <span class="filter__data">{{ item.name }}</span>
          </h-input>
        </div>
        <div class="filter__item" v-if="provinces.length == 0">
          <h-alert class="font-6" :type="AlertType.Warning"
            >استانی برای نمایش وجود ندارد</h-alert
          >
        </div>
      </search-advert-collapsible-card>
    </div>
    <div class="filter-group">
      <search-advert-collapsible-card
        title="نوع خودرو"
        body-class="filter__body--scroll-disable"
        :is-open="true"
      >
        <div class="filter__item">
          <h-input
            type="checkbox"
            :input-id="`man_dakh`"
            name="manufacture"
            :value="Manufacture.داخلی"
            @change="changeManufacture"
            :checked="
              $route.query.manufacture?.toString().includes(Manufacture.داخلی)
            "
          >
            <span class="filter__data">داخلی</span>
          </h-input>
        </div>
        <div class="filter__item">
          <h-input
            type="checkbox"
            :input-id="`man_varedati`"
            name="manufacture"
            :value="Manufacture.وارداتی"
            @change="changeManufacture"
            :checked="
              $route.query.manufacture?.toString().includes(Manufacture.وارداتی)
            "
          >
            <span class="filter__data">وارداتی</span>
          </h-input>
        </div>
      </search-advert-collapsible-card>
    </div>
    <div class="filter-group">
      <search-advert-collapsible-card
        title="موارد خاص"
        body-class="filter__body--scroll-disable"
        :is-open="true"
      >
        <template
          v-for="(item, index) in Object.keys(SpecialCases)"
          :key="index"
        >
          <div class="filter__item" v-if="item != SpecialCases.نا_مشخص">
            <h-input
              type="checkbox"
              :input-id="item"
              name="specialCases"
              :value="item"
              @change="changeSpecialCases"
              :checked="
                $route.query.specialCases?.toString().includes(item.toString())
              "
            >
              <span class="filter__data">{{
                item.toString().replace("_", " ")
              }}</span>
            </h-input>
          </div>
        </template>
      </search-advert-collapsible-card>
    </div>
    <div class="filter-group">
      <div class="filter">
        <label for="haveZeroMileage" class="filter__header">
          <span class="filter__name">خودروی صفر هم دارد</span>
          <h-input
            type="checkbox"
            name="haveZeroMileage"
            input-id="haveZeroMileage"
            @change="changeeHaveZeroMileage"
            :checked="$route.query.haveZeroMileage?.toString() == 'true'"
          />
        </label>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { splitNumber } from "~~/utilities/numberUtils";
import { ref } from "#imports";
import { UseUtilStore } from "~~/stores/util.store";
import { ProvinceModel } from "~~/models/iranDivision/province";
import { AlertType } from "~~/models/utilities/AlertType";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import { RemoveEmptyProps } from "~~/utilities/objectUtils";

const emit = defineEmits(["loading"]);

const router = useRouter();
const route = useRoute();
const utilStore = UseUtilStore();
const provinces: Ref<ProvinceModel[]> = ref([]);

onMounted(async () => {
  await utilStore.setProvinces();
  provinces.value = utilStore.getProvinces();
});
const searchProvince = (e: any) => {
  provinces.value = utilStore.getProvinces(e.target.value);
};

const changeeHaveZeroMileage = () => {
  const checked = document.querySelector("#haveZeroMileage:checked") !== null;
  router.push({
    path: router.currentRoute.value.path,
    query: {
      ...router.currentRoute.value.query,
      haveZeroMileage: checked.toString(),
    },
  });
};
async function changeSpecialCases() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=specialCases]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      specialCases: values,
    },
  });
}
async function changeManufacture() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=manufacture]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      manufacture: values,
    },
  });
}
async function changeProvince() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=province]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await router.push({
    path: route.path,
    query: {
      ...route.query,
      province: values,
    },
  });
}

</script>

<style>
</style>