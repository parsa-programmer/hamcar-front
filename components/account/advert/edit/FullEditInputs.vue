<template>
    <div>
        <loadings-full-loading v-if="isLoading" />
        <div class="registration__main">
            <div class="selectbox__wrapper">
                <p class="text__description">برند :</p>
                <h-select-box class="mb-1" placeholder="انتخاب برند" name="brandId" :data="brands"
                    :disabled="brands.length == 0" v-model="brand" />

                <p class="text__description">مدل :</p>
                <h-select-box class="mb-1" placeholder="انتخاب مدل" name="modelId"
                    :disabled="!brand || models.length == 0" :data="models" v-model="model" />

                <p class="text__description">سال :</p>
                <h-select-box class="mb-1" placeholder="انتخاب سال" name="yearId"
                    :disabled="!model || years.length == 0" :data="years" v-model="year" />

                <template v-if="year && trims.length > 0">
                    <p class="text__description">تریم :</p>
                    <h-select-box placeholder="انتخاب تریم" name="trimId" :data="trims" v-model="trim" />
                </template>
            </div>
            <template v-if="advert.brand.isCar">
                <hr style="margin: 2rem 0;" />

                <p class="text__description">وضعیت بدنه :</p>
                <h-select-box class="mb-1" name="bodyCondition" v-model="carDetail.bodyCondition"
                    :data="GenerateBodyConditionSelectData()" />

                <div class="row">
                    <div class="grow-1">
                        <p class="text__description">رنگ بدنه :</p>
                        <h-select-box class="mb-1" :data="GenerateColorSelectData()" name="exteriorColor"
                            v-model="carDetail.exteriorColor" />
                    </div>
                    <div class="grow-1">
                        <p class="text__description">رنگ داخل :</p>
                        <h-select-box class="mb-1" :data="GenerateColorSelectData()" name="interiorColor"
                            v-model="carDetail.interiorColor" />
                    </div>
                </div>

                <hr style="margin: 2rem 0;" />

            </template>
            <template v-else>
                <hr style="margin: 2rem 0;" />
                <h-select-box name="fuel" v-model="motorDetail.fuel" class="mt-1" placeholder="سوخت" show-check-box
                    :data="[
                      {
                        label: 'برقی',
                        value: Fuel.برقی,
                      },
                      {
                        label: 'بنزینی',
                        value: Fuel.بنزینی,
                      },
                    ]" />

                <h-select-box class="mt-1" placeholder="رنگ" :data="GenerateColorSelectData()" name="color"
                    v-model="motorDetail.color" show-check-box />
                <hr style="margin: 2rem 0;" />
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
import { advertStore } from "~~/stores/advert.store";
import { GetModels, GetTrims, GetYears } from "~~/services/brand.service";
import { Ref, ref } from "vue";
import { SelectData } from "~~/models/utilities/SelectData";
import { ProssesAsync } from "~~/utilities/ProssesAsync";
import { AdvertisementDto } from "~~/models/advertisements/Advertisement.Models";
import { GenerateBodyConditionSelectData } from "~~/models/advertisements/enums/BodyCondition";
import { GenerateColorSelectData } from "~~/models/advertisements/enums/Color";
import { Fuel } from "~~/models/advertisements/enums/Fuel";

const store = advertStore();

const isLoading = ref(false);


const brands: Ref<SelectData[]> = ref([]);
const models: Ref<SelectData[]> = ref([]);
const years: Ref<SelectData[]> = ref([]);
const trims: Ref<SelectData[]> = ref([]);



const props = defineProps<{
    advert: AdvertisementDto
}>();

const brand = ref(props.advert.brandId);
const model = ref(props.advert.modelId);
const trim = ref(props.advert.trimId);
const year = ref(props.advert.yearId);

const carDetail = ref(props.advert.carDetail);
const motorDetail = ref(props.advert.motorCycleDetail);

onMounted(async () => {
    isLoading.value = true;
    await store.setBrands();

    if (props.advert.brand.isCar == false) {
        brands.value = store.getMotorBrands.map((brand) => {
            return {
                value: brand.id,
                label: brand.title,
            };
        });
    } else {
        brands.value = store.getCarBrands.map((brand) => {
            return {
                value: brand.id,
                label: brand.title,
            };
        });
    }
    GetModels(props.advert.brandId).then((res) => {
        models.value =
            res.data?.map((model) => {
                return {
                    value: model.id,
                    label: model.title,
                };
            }) ?? [];
    });
    GetYears(props.advert.modelId).then((res) => {
        years.value =
            res.data?.map((model) => {
                return {
                    value: model.id,
                    label: model.yearTitle,
                };
            }) ?? [];
    });
    isLoading.value = false;
});
watch(brand,
    (brandId) => {
        if (brandId) {
            ProssesAsync(
                () =>
                    GetModels(brandId).then((res) => {
                        models.value =
                            res.data?.map((model) => {
                                return {
                                    value: model.id,
                                    label: model.title,
                                };
                            }) ?? [];
                    }),
                isLoading
            );
            model.value = "";
            year.value = "";
            trim.value = "";
        }
    }
);
watch(model,
    (modelId) => {
        if (modelId) {
            ProssesAsync(
                () =>
                    GetYears(modelId).then((res) => {
                        years.value =
                            res.data?.map((model) => {
                                return {
                                    value: model.id,
                                    label: model.yearTitle,
                                };
                            }) ?? [];
                    }),
                isLoading
            );
            year.value = "";
            trim.value = "";
        }
    }
);
watch(year,
    (yearId) => {
        if (yearId) {
            ProssesAsync(() => {
                return GetTrims(yearId).then((res) => {
                    trims.value =
                        res.data?.map((model) => {
                            return {
                                value: model.id,
                                label: model.title,
                            };
                        }) ?? [];
                });
            }, isLoading);
            trim.value = "";
        }
    }
);
</script>
