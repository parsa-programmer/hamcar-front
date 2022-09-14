<template>
  <div>
    <loadings-full-loading v-if="ApiLoading" />
    <Head>
      <Title>ویرایش آگهی</Title>
    </Head>
    <h6 class="page__title">ویرایش آگهی</h6>
    <div class="container card">
      <div class="row" style="flex-direction: column">
        <div>
          <label class="text__description">توضیحات :</label>
          <h-textarea
            name="description"
            v-model="advertData.description"
          />
        </div>
        <div class="row">
          <div class="w-full">
            <label class="text__description">استان :</label>
            <h-select-box
              placeholder="انتخاب استان"
              name="province"
              v-model="advertData.address.province"
              :data="provinces"
              :disabled="provinces.length == 0"
              @selectedItem="provinceChnaged"
            />
          </div>
          <div class="w-full">
            <label class="text__description">شهر :</label>
            <h-select-box
              placeholder="انتخاب شهر"
              name="city"
              :disabled="
                cities.length == 0 || advertData.address.province == ''
              "
              v-model="advertData.address.city"
              :data="cities"
            />
          </div>
        </div>

        <div>
          <label class="text__description">آدرس پستی :</label>
          <h-input
            name="postalAddress"
            v-model="advertData.address.postalAddress"
            placeholder="محله، منظقه، خیابان و..."
          />
        </div>
      </div>
      <div class="row justify-content-flex-end mt-2">
        <h-button class="">ویرایش</h-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useIranDivision } from "~~/composables/iranDivistion/useIranDivision";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { AdvertisementPrice } from "~~/models/advertisements/valueObjects/AdvertisementPrice";
import { Address } from "~~/models/utilities/Address";
import { SelectData } from "~~/models/utilities/SelectData";
import { GetById } from "~~/services/advertisement.service";
import { useAccountStore } from "~~/stores/account.store";
definePageMeta({
  layout: "full-screen",
});
const route = useRoute();
const router = useRouter();
const toast = useToast();
const account = useAccountStore();
const { getCities, getProvinces, loading: ApiLoading } = useIranDivision();

const loading = ref(true);
const advert: Ref<AdvertisementDto | null> = ref(null);

const provinces: Ref<SelectData[]> = ref([]);
const cities: Ref<SelectData[]> = ref([]);
const advertData = reactive({
  description: "",
  mileage: 0,
  gearBox: "",
  address: {} as Address,
  price: {} as AdvertisementPrice,
});

const provinceChnaged = async (data: SelectData) => {
  cities.value = await getCities(data.value);
};

onMounted(async () => {
  var id = route.query.id?.toString();

  var res = await GetById(id ?? "");
  if (!res.isSuccess || !res.data || res.data.userId != account.user.id) {
    toast.showToast("اطلاعات یافت نشد", ToastType.error);
    await router.push("/account/exhibition/adverts");
    return;
  }
  provinces.value = await getProvinces();
  cities.value = await getCities(
    provinces.value.find((f) => f.label == res.data!.address.province)?.value
  );
  advertData.address = res.data.address;
  advertData.description = res.data.description;
  advertData.mileage = res.data.mileage;
  advertData.gearBox = res.data.gearBox;
  advertData.price = res.data.price;
  advertData.description = res.data.description;
});
</script>

<style>
</style>