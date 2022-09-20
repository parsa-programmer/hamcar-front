 <template>
  <div>
    <div class="filter-list-btn" @click="() => (isOpen = true)">
      <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
        <mask id="path-1-inside-1_2206_11714" fill="white">
          <path
            d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z"
          ></path>
        </mask>
        <path
          d="M13.8855 0H2.78114C0.493508 0 -0.812318 2.72241 0.56026 4.63013L5.18709 11.0609C5.42735 11.3948 5.55724 11.801 5.55724 12.2184V18.0671C5.55724 19.7028 7.38734 20.5963 8.59277 19.5492L10.4435 17.9415C10.8655 17.5749 11.1094 17.032 11.1094 16.4594V12.2184C11.1094 11.801 11.2393 11.3948 11.4796 11.0609L16.1064 4.63013C17.479 2.72241 16.1732 0 13.8855 0Z"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          mask="url(#path-1-inside-1_2206_11714)"
        ></path>
        <path
          d="M5.83203 4.1665H10.832"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <span>فیلتر نمایشگاه ها</span>
      <span class="filter-list-btn__badge">{{ filterCount }}</span>
    </div>
    <div class="filters-page" :style="{ display: isOpen ? 'block' : 'none' }">
      <header class="nav filters-page__header">
        <p class="nav__title">
          <svg width="16" height="21" viewBox="0 0 16 21" fill="none">
            <path
              d="M2.66989 1.25H13.3301C14.0863 1.25 14.7099 1.71261 15.0326 2.41337C15.3561 3.11591 15.3388 3.98905 14.845 4.70389L10.4033 11.1346C10.0835 11.5976 9.91505 12.1533 9.91505 12.7184V16.9594C9.91505 17.3316 9.76214 17.6686 9.52255 17.8854L7.74585 19.493C7.41311 19.7941 7.02357 19.8112 6.69804 19.6457C6.36477 19.4762 6.08495 19.1016 6.08495 18.5671V12.7184C6.08495 12.1533 5.9165 11.5976 5.59671 11.1346L1.15496 4.70389C0.661207 3.98905 0.64394 3.11591 0.967442 2.41337C1.29012 1.71261 1.91365 1.25 2.66989 1.25Z"
              stroke="var(--color-black)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.59766 4.66669H10.3977"
              stroke="var(--color-black)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {{ filterCount }} فیلتر انتخاب شده
        </p>
        <div
          class="nav__icon nav__icon--close-icon nav__icon--fixed-right"
          @click="() => (isOpen = false)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.33203 1.33331L7.9987 7.99998M14.6654 14.6666L7.9987 7.99998M7.9987 7.99998L14.6654 1.33331M7.9987 7.99998L1.33203 14.6666"
              stroke="#ABADB3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </header>
      <main class="filter-page__main">
        <div class="filter-group">
          <search-advert-collapsible-card
            title="استان"
            body-class="filter__body"
          >
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
                  $route.query.province
                    ?.toString()
                    .includes(item.name.toString())
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
                  $route.query.manufacture
                    ?.toString()
                    .includes(Manufacture.داخلی)
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
                  $route.query.manufacture
                    ?.toString()
                    .includes(Manufacture.وارداتی)
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
                    $route.query.specialCases
                      ?.toString()
                      .includes(item.toString())
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
              <h-switch
                id="haveZeroMileage"
                @change="changeeHaveZeroMileage"
                name="haveZeroMileage"
                :checked="$route.query.haveZeroMileage?.toString() == 'true'"
              />
            </label>
          </div>
        </div>
      </main>
      <footer class="filter-page__footer mt-7">
        <button
          class="btn btn-primary filter-page__submit-btn"
          @click="() => (isOpen = false)"
        >
          نمایش {{ exhibitionCount }} نمایشگاه
        </button>
        <button
          class="btn btn-transparent filter-page__delete-btn"
          @click="closeBox"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M0.832031 4.16634H6.66536M19.1654 4.16634H13.332M2.4987 4.16634L3.69853 16.1647C3.86893 17.8687 5.30282 19.1663 7.01532 19.1663H12.9821C14.6946 19.1663 16.1285 17.8687 16.2989 16.1647L17.4987 4.16634M9.9987 9.16634V14.1663M13.7487 9.16634L13.332 14.1663M6.2487 9.16634L6.66536 14.1663M13.332 4.16634H9.9987H6.66536M13.332 4.16634H6.66536M13.332 4.16634V2.49967C13.332 1.5792 12.5858 0.833008 11.6654 0.833008H8.33203C7.41156 0.833008 6.66536 1.5792 6.66536 2.49967V4.16634"
              stroke="#EF3838"
              stroke-width="1.66667"
              stroke-linecap="round"
            ></path>
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
import { splitNumber } from "~~/utilities/numberUtils";
import { UseUtilStore } from "~~/stores/util.store";
import { AlertType } from "~~/models/utilities/AlertType";
import { RemoveEmptyProps } from "~~/utilities/objectUtils";
import { ProvinceModel } from "~~/models/iranDivision/province";
import { SpecialCases } from "~~/models/advertisements/enums/SpecialCases";
import { Manufacture } from "~~/models/advertisements/enums/Manufacture";

const loading = ref(true);
const filterCount = ref(0);
const provinces: Ref<ProvinceModel[]> = ref([]);

const route = useRoute();
const router = useRouter();
const utilStore = UseUtilStore();

defineProps({
  exhibitionCount: {
    type: Number,
    default: 0,
  },
});

onMounted(async () => {
  await utilStore.setProvinces();
  provinces.value = utilStore.getProvinces();
  setFilterCount();
});
const setFilterCount = () => {
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
  filterCount.value = Object.keys(res).length;
};
watch(
  () => route.query,
  () => {
    setFilterCount();
  }
);
const isOpen: Ref<boolean> = ref(false);
const closeBox = async () => {
  isOpen.value = false;
  router.push(route.path);
};

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

<style scoped>
.filter-page__footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>