<template>
  <div class="card">
    <loadings-full-loading v-if="loading" />
    <div class="content">
      <div class="form" v-if="pageLoading">
        <div class="header mb-2">
          <div class="w-full grow-1">
            <h-skeletor width="100%" height="100px" />
          </div>
        </div>
        <h-skeletor width="100%" height="60px" />
        <h-skeletor width="100%" height="60px" />
        <div class="row gap-1">
          <div class="w-full">
            <h-skeletor class="grow-1" width="100%" height="60px" />
          </div>
          <div class="w-full">
            <h-skeletor class="grow-1 w-full" width="100%" height="60px" />
          </div>
        </div>
        <div class="row gap-1">
          <div class="w-full">
            <h-skeletor class="grow-1" width="100%" height="60px" />
          </div>
          <div class="w-full">
            <h-skeletor class="grow-1 w-full" width="100%" height="60px" />
          </div>
        </div>
        <h-skeletor width="100%" height="60px" />
      </div>
      <template v-else>
        <div class="header">
          <img src="/img/notification.png" />
          <p>
            لطفا مشخصات <span v-if="isCar">خودرو</span>
            <span v-if="isCar == false">متور سیکلت</span> مدنظر خود را وارد کنید
            تا به محض انتشار آگهی، از طریق پنل کاربری به شما اطلاع دهیم
          </p>
        </div>
        <Form
          @submit="createNotify"
          :validation-schema="validationSchema"
          v-slot="{ meta }"
          class="form"
        >
          <h-select-box
            placeholder="انتخاب برند"
            name="brandId"
            :data="brands"
            v-model="brandId"
            :show-check-box="true"
          ></h-select-box>
          <h-select-box
            placeholder="مدل"
            name="modelId"
            :data="models"
            :disabled="!brandId"
            v-model="modelId"
            :show-check-box="true"
          ></h-select-box>
          <Transition name="page">
            <h-select-box
              v-if="trims.length > 0"
              placeholder="تریم"
              name="trimId"
              :data="trims"
              :disabled="!modelId"
              v-model="trimId"
              :show-check-box="true"
            ></h-select-box>
          </Transition>
          <div class="row">
            <h-select-box
              placeholder="از سال"
              name="startYear"
              v-model="startYear"
              :disabled="startYears.length == 0"
              :data="startYears"
            ></h-select-box>
            <h-select-box
              placeholder="تا سال"
              name="endYear"
              v-model="endYear"
              :disabled="endYears.length == 0"
              :data="endYears"
            ></h-select-box>
          </div>
          <div class="row">
            <div class="w-full">
              <h-input
                name="startPrice"
                placeholder="از قیمت"
                v-model="startPrice"
                number
              />
            </div>
            <div class="w-full">
              <h-input
                name="endPrice"
                placeholder="تا قیمت"
                v-model="endPrice"
                number
              />
            </div>
          </div>
          <h-button
            class="w-auto"
            :disabled="meta.valid == false || processLoading"
            :loading="processLoading"
            type="submit"
          >
            <div class="row gap-0_5">
              <icons-notification :width="20" :height="24" hash-color="#fff" />
              <span>به من اطلاع بده !</span>
            </div>
          </h-button>
        </Form>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { Form } from "vee-validate";
import { Ref } from "vue";
import * as Yup from "yup";
import Reference from "yup/lib/Reference";
import { ToastType } from "~~/composables/useToast";
import { AdvertisementType } from "~~/models/advertisements/enums/AdvertisementType";
import { IApiResponse } from "~~/models/IApiResponse";
import { CreateNotifyCommand } from "~~/models/notify/Notify.Commands";
import { Brand } from "~~/models/utilities/Brand";
import { Model } from "~~/models/utilities/Model";
import { SelectData } from "~~/models/utilities/SelectData";
import { Year } from "~~/models/utilities/Year";
import { GetYears } from "~~/services/brand.service";
import {
  CreateNotify,
  GetRemainingNotifiesCount,
} from "~~/services/notify.service";
import { UseUtilStore } from "~~/stores/util.store";
import { ProssesAsync } from "~~/utilities/ProssesAsync";

const router = useRouter();
const utilStore = UseUtilStore();
const toast = useToast();

const validationSchema = Yup.object().shape({
  brandId: Yup.string().required().label("برند"),
  modelId: Yup.string().required().label("مدل"),
  endPrice: Yup.string().notRequired(),
});

const brands: Ref<SelectData[]> = ref([]);
const models: Ref<SelectData[]> = ref([]);
const trims: Ref<SelectData[]> = ref([]);
const years: Ref<Year[]> = ref([]);
const startYears: Ref<SelectData[]> = ref([]);
const endYears: Ref<SelectData[]> = ref([]);

const brandId: Ref<string | null> = ref(null);
const modelId: Ref<string | null> = ref(null);
const trimId: Ref<string | null> = ref(null);
const startYear = ref(null);
const endYear = ref(null);
const startPrice = ref(undefined);
const endPrice = ref(undefined);

const isCar = ref(true);
const loading = ref(false);
const pageLoading = ref(true);
const processLoading = ref(false);

const createNotify = async (data: any, form: any) => {
  const stPrice = Number(startPrice.value ?? 0);
  const enPrice = Number(endPrice.value ?? 0);
  if (startPrice.value && endPrice.value && stPrice > enPrice) {
    form.setFieldError("endPrice", "مقدار وارد شده نامعتبر است");
    return;
  }
  const brand = utilStore.getBrandById(data.brandId);
  const model = utilStore.getModelById(data.modelId);
  const trim = utilStore.getTrimById(data.trimId ?? "");

  var command = {
    advertisementType: isCar.value
      ? AdvertisementType.car
      : AdvertisementType.motorCycle,
    brandId: data.brandId,
    brandTitle: brand.title,
    endPrice: data.endPrice,
    endYear: data.endYear,
    modelId: data.modelId,
    modelTitle: model.title,
    trimId: data.trimId,
    trimTitle: trim?.title ?? null,
    startPrice: data.startPrice,
    startYear: data.startYear,
  };
  var res = await ProssesAsync<IApiResponse<undefined>>(
    () => CreateNotify(command),
    processLoading
  );
  if (res.isSuccess) {
    toast.showToast("گوش به زنگ با موفقیت ثبت شد");
    router.push("/account/notify");
  }
};

watch(brandId, async (val) => {
  await ProssesAsync(() => utilStore.setModels(val ?? ""), loading);
  models.value = utilStore.getModels("", [val ?? ""]).map((m) => {
    return {
      label: m.title,
      value: m.id,
    };
  });
  trims.value = [];
});

watch(modelId, async (val) => {
  trims.value = [];
  if (!val) return;
  loading.value = true;

  await utilStore.setTrims(val ?? "");
  trims.value = utilStore.getTrims("").map((m) => {
    return {
      label: m.title,
      value: m.id,
    };
  });
  let result = await ProssesAsync<IApiResponse<Year[]>>(
    () => GetYears(val),
    loading
  );
  years.value = result.data ?? [];
  startYears.value = [...years.value].map((y) => {
    return {
      label: y.yearTitle,
      value: y.yearTitle,
    };
  });
});
watch(startYear, (val) => {
  endYears.value = [...years.value]
    .filter((f) => Number(f.yearTitle) > Number(val))
    .map((y) => {
      return {
        label: y.yearTitle,
        value: y.yearTitle,
      };
    });
});
onMounted(async () => {
  var remainingCount = await GetRemainingNotifiesCount();
  if(remainingCount.data==0){
    toast.showToast("گوش به زنگ های شما به اتمام رسیده است",ToastType.error,5000);
    router.push("/account/notify");
  }
  var type = router.currentRoute.value.query.type?.toString();
  if (type) {
    if (type == "motor") {
      isCar.value = false;
    }
  }
  await ProssesAsync(() => utilStore.setBrands(), pageLoading);
  if (isCar.value) {
    brands.value = utilStore.getCarBrands().map((b) => {
      return { label: b.title, value: b.id };
    });
  } else {
    brands.value = utilStore.getMotorBrands().map((b) => {
      return { label: b.title, value: b.id };
    });
  }
});
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .content {
    width: 100% !important;
  }
}
.form {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.content {
  width: 60%;
  margin: auto;
}
.header {
  display: flex;
  gap: 1.5rem;
}
.header p {
  font-family: var(--t3-font-family);
  font-size: var(--t3-font-size);
}
img {
  width: 128px;
  height: 128px;
}
</style>