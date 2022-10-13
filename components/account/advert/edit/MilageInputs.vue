<template>
    <div>
        <h-input type="hidden" name="advertType" v-model="carTypeData" />
        <div class="advert__type__selection">
            <span @click="changeCarType(CarType.صفر)"
                :class="[{ selection__active: carTypeData == CarType.صفر }]">صفر</span>
            <span :class="[{ selection__active: carTypeData == CarType.کارکرده }]"
                @click="changeCarType(CarType.کارکرده)">کارکرده</span>
            <template v-if="isCar">
                <span :class="[{ selection__active:carTypeData == CarType.حواله }]"
                    @click="changeCarType(CarType.حواله)">حواله</span>
                <span :class="[{ selection__active: carTypeData == CarType.پیش_فروش }]"
                    @click="changeCarType(CarType.پیش_فروش)">پیش فروش</span>
            </template>
        </div>
        <Transition enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounceOutRight">
            <div v-if="carTypeData == CarType.کارکرده">
                <h-input name="milage" number suffix="کیلومتر" placeholder="کیلومتر" class="mt-1"
                    v-model="milageData" />
            </div>
        </Transition>
       
    </div>
</template>

<script setup lang="ts">
import { CarType } from '~~/models/advertisements/enums/CarType';
import { GearBox } from '~~/models/advertisements/enums/GearBox';
import { MotorType } from '~~/models/advertisements/enums/MotorType';

const props = defineProps<{
    carType: CarType | MotorType,
    milage: string,
    isCar: boolean,
}>();

const carTypeData = ref(props.carType);
const milageData = ref(props.milage);

const changeCarType = (type: CarType) => {
    carTypeData.value = type;
};

</script>
