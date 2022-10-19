<template>
    <search-advert-collapsible-card title="استان" :is-open="advertFilter.getFilterQueryParams().province != null">
        <div class="filter__item" v-for="(item) in provinces" :key="item.id">
            <h-input type="checkbox" :input-id="`pr${item.name}`" name="province" :value="item.name" @change="changeValue"
                :checked="
                  advertFilter
                    .getFilterQueryParams()
                    .province?.toString()
                    .includes(item.name)
                ">
                <span class="filter__data">{{
                item.name.replace("_", " ")
                }}</span>
            </h-input>
        </div>
    </search-advert-collapsible-card>
</template>
  
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { ProvinceModel } from '~~/models/iranDivision/province';
import { UseUtilStore } from '~~/stores/util.store';


const utilStore = UseUtilStore();

const router = useRouter();
const route = useRoute();
const provinces: Ref<ProvinceModel[]> = ref([]);
const advertFilter = useAdverFilter();

async function changeValue() {
    var values: any[] = [];
    const checked = document.querySelectorAll("input[name=province]:checked");
    checked.forEach((checkbox) => {
        //@ts-ignore
        values.push(checkbox.value);
    });
    await advertFilter.changeQueryParams(values, "province");
}

onMounted(async () => {
    await utilStore.setProvinces();
    provinces.value = utilStore.getProvinces();
})
</script>
  
<style>

</style>