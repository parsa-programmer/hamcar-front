<template>
  <div>

    <Head>
      <Title>ویرایش آگهی</Title>
    </Head>
    <loadings-full-loading v-if="loading" />

    <div v-else class="container">
      <h-alert class="alert__text mb-1" :type="AlertType.Warning" show-icon>
        بعد از ویرایش اطلاعات یا تغییر تصاویر ، وضعیت آگهی به ' <b class="text-error">در حال برسی</b> ' تغییر می کند.
      </h-alert>
      <div class="card">
        <h4 class=" mb-1">ویرایش تصاویر آگهی</h4>

        <p class="text__description">
          <small> تعداد مجاز تصویر برای این آگهی : {{maxImage}}</small>
        </p>
        <h-image-uploader v-on:upload-new-image="UploadNewImage" size="sm" :max-file-count="maxImage"
          v-if="imageLoading==false">
          <div class="image__item" v-for="(item, index) in advert?.images" :key="index" :id="item.id">
            <h-image :src="GetBitMapAdvertImage(advert.id, item.imageName)" />
            <button type="button" class="delete__image__item" @click="OpenDeletePopup(item.id)">
              <icons-trash :width="20" :height="40" />
            </button>
          </div>
        </h-image-uploader>
        <div v-else>
          <h-skeletor width="100%" height="250px" />
        </div>
        <Teleport to="body">
          <h-delete-popup v-model="isShowDeletePopup" @accepted="deleteAdvertImage" title="حذف تصویر آگهی"
            description="آیا از حذف این تصویر اطمینان دارید؟" />
        </Teleport>
      </div>

      <Form @submit="FullEditAdvert" class="p-1 card mt-1" :validationSchema="formSchema" v-slot="{meta}">
        <h4 class=" mb-1">ویرایش اطلاعات آگهی</h4>

        <div class="row" style="flex-direction: column">
          <account-advert-edit-full-edit-inputs :advert="advert" />
          <div>
            <label class="text__description">گیربکس :</label>
            <h-select-box placeholder="گیربکس" :data="[
              {
                label: 'اوتوماتیک',
                value: GearBox.اوتوماتیک,
              },
              {
                label: 'دنده ای',
                value: GearBox.دنده_ای,
              },
            ]" name="gearBox" v-model="advertData.gearBox" />
          </div>

          <div>
            <label class="text__description">توضیحات :</label>
            <h-textarea name="description" v-model="advertData.description" />
          </div>
          <div class="row">
            <div class="w-full">
              <label class="text__description">استان :</label>
              <h-select-box placeholder="انتخاب استان" name="province" v-model="advertData.address.province"
                :data="provinces" :disabled="provinces.length == 0" @selectedItem="provinceChnaged" />
            </div>
            <div class="w-full">
              <label class="text__description">شهر :</label>
              <h-select-box placeholder="انتخاب شهر" name="city" :disabled="
                cities.length == 0 || advertData.address.province == ''
              " v-model="advertData.address.city" :data="cities" />
            </div>
          </div>

          <div>
            <label class="text__description">آدرس پستی :</label>
            <h-input name="postalAddress" v-model="advertData.address.postalAddress"
              placeholder="محله، منظقه، خیابان و..." />
          </div>
          <hr class="mt-1 mb-1" style="background: var(--color-gray-300) !important;" />

          <div class="row flex-column wrap">
            <div class="grow-1">
              <p class="text__description">قیمت گذاری : </p>
              <account-advert-edit-price-inputs v-model="advertData.price" />
            </div>
            <div class="grow-1 mt-4">
              <p class="text__description">مشخصات فنی : </p>
              <account-advert-edit-milage-inputs class="grow-1" :carType="advertData.advertType"
                :milage="advertData.mileage.toString()" :is-car="advertData.isCar" />
            </div>
          </div>

        </div>
        <div class="row justify-content-flex-end mt-2">
          <h-button type="submit" :disabled="meta.valid==false || apiLoading" :loading="apiLoading" class="">ویرایش آگهی
          </h-button>
        </div>
      </Form>

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
import { GetById, EditAdvertisement, AddImage, DeleteImage, GetMaxImageCount, FullEditAdvertisement } from "~~/services/advertisement.service";
import { useAccountStore } from "~~/stores/account.store";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { CarType } from "~~/models/advertisements/enums/CarType";
import { MotorType } from "~~/models/advertisements/enums/MotorType";
import { EditAdvertisementCommand, FullEditAdvertisementCommand } from "~~/models/advertisements/Advertisement.Commands";
import { AlertType } from "~~/models/utilities/AlertType";
import { GetBitMapAdvertImage } from "~~/utilities/imageUtil";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { IApiResponse } from "~~/models/IApiResponse";
import { AdvertisementPlanType } from "~~/models/advertisements/enums/AdvertisementPlanType";
import { CarAdvertisementDetail } from "~~/models/advertisements/valueObjects/CarAdvertisementDetail";
import { EditConsultantAdvertisement, GetConsultAdvertById } from "~~/services/consultant.service";
import { MotorCycleAdvertisementDetail } from "~~/models/advertisements/valueObjects/MotorCycleAdvertisementDetail";

definePageMeta({
  layout: "full-screen",
});

const route = useRoute();
const router = useRouter();
const toast = useToast();
const account = useAccountStore();
const { getCities, getProvinces } = useIranDivision();
const loading = ref(true);
const apiLoading = ref(false);
const imageLoading = ref(false);
const isShowDeletePopup = ref(false);
const advert: Ref<AdvertisementDto> = ref({} as AdvertisementDto);
const advertImageIdForDelete = ref("");
const maxImage = ref(4);

const formSchema = Yup.object().shape({
  description: Yup.string().required().label("توضیحات"),
  province: Yup.string().required().label("استان"),
  city: Yup.string().required().label("شهر"),
  postalAddress: Yup.string().required().label("آدرس پستی"),
  price: Yup.number().min(10000).label("قیمت"),
  milage: Yup.number().min(1, "کیلومتر را وارد کنید").label("کیلومتر"),
  brandId: Yup.string().required().label("برند"),
  modelId: Yup.string().required().label("مدل"),
  yearId: Yup.string().required().label("سال"),
  trimId: Yup.string().label("تریم"),
});

const provinces: Ref<SelectData[]> = ref([]);
const cities: Ref<SelectData[]> = ref([]);
const advertData = reactive({
  description: "",
  mileage: 0,
  gearBox: GearBox.اوتوماتیک,
  address: {} as Address,
  price: {} as AdvertisementPrice,
  advertType: CarType.صفر as CarType | MotorType,
  isCar: false
});

const provinceChnaged = async (data: SelectData) => {
  cities.value = await getCities(data.value);
};
const UploadNewImage = async (file: any): Promise<boolean> => {
  var formData = new FormData();
  formData.append("AdvertisementId", advert.value!.id);
  formData.append("Images", file);
  var result = await AddImage(formData);
  if (result.isSuccess) {
    setAdvertImage();
  }
  return false;
};
const OpenDeletePopup = (imageId: string) => {
  isShowDeletePopup.value = true;
  advertImageIdForDelete.value = imageId;
};
const deleteAdvertImage = async () => {
  var result = await ProssesAsync<IApiResponse<undefined>>(
    () => DeleteImage(advert.value!.id, advertImageIdForDelete.value),
    imageLoading
  );
  if (result.isSuccess) {
    document.getElementById(advertImageIdForDelete.value)?.remove();
    advert.value.images = advert.value.images.filter(f => f.id != advertImageIdForDelete.value);
    advertImageIdForDelete.value = "";
    toast.showToast("تصویر حذف شد !");
  }
};
onMounted(async () => {
  var id = route.query.id?.toString();

  loading.value = true;
  var res = await GetConsultAdvertById(id ?? "");
  if (!res.isSuccess || !res.data) {
    toast.showToast("اطلاعات یافت نشد", ToastType.error);
    await router.push("/account/exhibition/adverts");
    return;
  }
  var maxImageCountResult = await GetMaxImageCount(id!);
  maxImage.value = maxImageCountResult.data ?? 4;
  advert.value = res.data;
  provinces.value = await getProvinces();
  cities.value = await getCities(
    provinces.value.find((f) => f.label == res.data!.address.province)?.value
  );
  advertData.address = res.data.address;
  advertData.description = res.data.description;
  advertData.mileage = res.data.mileage;
  advertData.gearBox = res.data.gearBox as GearBox;
  advertData.price = res.data.price;
  advertData.description = res.data.description;
  advertData.isCar = res.data.brand.isCar;

  if (res.data.carDetail) {
    advertData.advertType = res.data.carDetail.carType;
  } else {
    advertData.advertType = res.data.motorCycleDetail.motorType;
  }
  loading.value = false;
});
const FullEditAdvert = async (data: any, e: any) => {
  var model = {
    address: {
      city: data.city,
      province: data.province,
      postalAddress: data.postalAddress
    },
    mileage: data.milage ?? 0,
    gearBox: data.gearBox,
    description: data.description,
    advertisementId: route.query.id!.toString(),
    price: {
      staticAmount: data.amount ?? 0,
      advertisementPaymentType: data.advertisementPaymentType,
      amountPricePerGhest: data.amountPricePerGhest ?? 0,
      deliveryDate: data.deliveryDate ?? 0,
      ghestiPaymentType: data.ghestiPaymentType ?? "ماهانه",
      pishPardakht: data.pishPardakht ?? 0,
      tedadeGhestHa: data.tedadeGhestHa ?? 0
    },
    carType: advertData.isCar ? data.advertType : null,
    motorType: advertData.isCar ? null : data.advertType,
    brandId: data.brandId,
    modelId: data.modelId,
    trimId: data.trimId,
    yearId: data.yearId,
    carDetail: {} as CarAdvertisementDetail,
    motorDetail: {} as MotorCycleAdvertisementDetail,
  } as FullEditAdvertisementCommand;

  apiLoading.value = true;
  var result = await EditConsultantAdvertisement(model);
  apiLoading.value = false;
  if (result.isSuccess) {
    toast.showToast("آگهی با موفقیت ویرایش شد");
    await router.push('/account/adverts');
  }
}
const setAdvertImage = async () => {
  imageLoading.value = true;
  var res = await GetById(advert.value.id);
  advert.value.images = res.data?.images ?? [];
  imageLoading.value = false;
}
</script>

<style scoped>
@media (max-width:991px) {
  .container {
    width: 80% !important;
  }
}

@media (max-width:768px) {
  .container {
    width: 100% !important;
    padding: 0 !important;

  }

  .alert__text {
    font-family: var(--t6-font-family) !important;
    font-size: var(--t6-font-size) !important;
    font-weight: normal !important;
  }
}

.text__description {
  margin-bottom: .5rem;
  display: block;
}

.alert__text {
  font-family: var(--t5-font-family);
  font-size: var(--t5-font-size);
}

.container {
  width: 60%;
}
</style>