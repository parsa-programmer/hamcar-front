<template>
    <Form :validation-schema="schema" class="mt-7">
        <div class="advert__type__selection">
            <span @click="changeType(MotorType.صفر)"
                :class="[{ selection__active: stepData.motorData.type == MotorType.صفر }]">صفر</span>
            <span :class="[{ selection__active: stepData.motorData.type == MotorType.کارکرده }]"
                @click="changeType(MotorType.کارکرده)">کارکرده</span>
        </div>
        <Transition enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounceOutRight">
            <div v-if="stepData.motorData.type == MotorType.کارکرده">
                <h-input name="milage" number suffix="کیلومتر" placeholder="کیلومتر" class="mt-1"
                    v-model="stepData.milage" />
            </div>
        </Transition>
        <h-textarea v-model="stepData.description" class="mt-1" name="discription" placeholder="توضیحات" />
        <h-select-box name="gearBox" v-model="stepData.gearBox" class="mt-1" placeholder="گیربکس" show-check-box :data="[
          {
            label: 'اوتوماتیک',
            value: GearBox.اوتوماتیک,
          },
          {
            label: 'دنده ای',
            value: GearBox.دنده_ای,
          },
        ]" />

        <h-select-box name="fuel" v-model="stepData.motorData.fuel" class="mt-1" placeholder="سوخت" show-check-box
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

        <h-select-box class="mt-1" placeholder="رنگ" :data="GenerateColorSelectData()" name="exteriorColor"
            v-model="stepData.motorData.color" show-check-box />
    </Form>
</template>
  
<script setup lang="ts">
import { Form } from "vee-validate";
import { ToastType } from "~~/composables/useToast";
import { GenerateBodyConditionSelectData } from "~~/models/advertisements/enums/BodyCondition";
import { CarType } from "~~/models/advertisements/enums/CarType";
import * as Yup from "yup";
import {
    Color,
    GenerateColorSelectData,
} from "~~/models/advertisements/enums/Color";
import { GearBox } from "~~/models/advertisements/enums/GearBox";
import { advertStore } from "~~/stores/advert.store";
import { MotorType } from "~~/models/advertisements/enums/MotorType";
import { Fuel } from "~~/models/advertisements/enums/Fuel";

const toast = useToast();
const store = advertStore();
const stepData = reactive(store.steps.two);
const schema = Yup.object().shape({
    milage: Yup.number().min(1, "کیلومتر را وارد کنید").label("کیلومتر"),
    exteriorColor: Yup.string().required().label("رنگ")
});
onMounted(() => { });
const changeType = (type: MotorType) => {
    stepData.motorData.type = type;
};

watch(stepData, (val) => {
    if (
        val.motorData.type != null &&
        val.motorData.color != null &&
        val.motorData.fuel != null &&
        val.description != ""
    ) {
        if (
            val.motorData.type == MotorType.کارکرده &&
            (val.milage == "0" || val.milage == "")
        ) {
            toast.showToast("کارکرد متورسیکلت را وارد کنید", ToastType.error);
            store.changeStep(2);
        } else if (store.currentStep == 2) {
            store.changeStep(3);
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 100);
        }
    }
});
</script>
  
<style scoped>

</style>