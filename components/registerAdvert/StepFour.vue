<template>
  <div class="mt-7">
    <div v-if="isLogin == false">
      <Transition
        enter-active-class="animate__lightSpeedInRight"
        leave-active-class="animate__lightSpeedOutLeft"
      >
        <register-advert-step-four-login
          v-if="loginStep == 1"
          @toggleLoginStep="changeAuthSteps"
        />
      </Transition>
      <Transition
        enter-active-class="animate__lightSpeedInRight"
        leave-active-class="animate__lightSpeedOutLeft"
      >
        <register-advert-step-four-validate-code
          @toggleLoginStep="changeAuthSteps"
          v-if="loginStep == 2"
        />
      </Transition>
    </div>
    <div v-else>
      <div class="row">
        <h-select-box
          placeholder="انتخاب استان"
          name="province"
          v-model="userAddress.Province"
          :data="provinces"
          :disabled="provinces.length == 0"
          @selectedItem="provinceChnaged"
        />
        <h-select-box
          placeholder="انتخاب شهر"
          name="city"
          :disabled="cities.length == 0 || userAddress.Province == ''"
          v-model="userAddress.City"
          :data="cities"
        />
      </div>
      <h-input
        name="postalAddress"
        class="mt-1"
        v-model="userAddress.PostalAddress"
        placeholder="محله، منظقه، خیابان و..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { useIranDivision } from "~~/composables/iranDivistion/useIranDivision";
import { ProvinceModel } from "~~/models/iranDivision/province";
import { SelectData } from "~~/models/utilities/SelectData";
import { advertStore } from "~~/stores/advert.store";
import { authStore } from "~~/stores/auth.store";
const auth = authStore();
const adStore = advertStore();
const { getCities, getProvinces, loading: ApiLoading } = useIranDivision();
const isLoading = ref(false);
const provinces: Ref<SelectData[]> = ref([]);
const cities: Ref<SelectData[]> = ref([]);
const isLogin = ref(false);
const loginStep = ref(1);
const userAddress = reactive(adStore.steps.four);

const changeAuthSteps = (step: number) => {
  loginStep.value = step;
};
const provinceChnaged = async (data: SelectData) => {
  cities.value = await getCities(data.value);
};

onMounted(async () => {
  isLogin.value = auth.isLogin;
  provinces.value = await getProvinces();
  if(auth.user.address){
    userAddress.Province = auth.user.address.Province;
    userAddress.City = auth.user.address.City;
    userAddress.PostalAddress = auth.user.address.PostalAddress;
  }
});
watch(userAddress, (val) => {
  if (val.City && val.Province && val.PostalAddress) {
    adStore.changeStep(5);
  }
});
</script>

<style scoped>
</style>