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
            
            </template>
            <template v-else>

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
