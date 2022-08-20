<template>
  <search-advert-collapsible-card
    title="حجم موتور"
    :is-open="advertFilter.getFilterQueryParams().engineVolume != null"
  >
    <template v-for="(item, index) in Object.values(EngineVolume)" :key="index">
      <div
        class="filter__item"
        v-if="typeof item == 'string'"
      >
        <h-input
          type="checkbox"
          :input-id="`eng${item}`"
          name="engineVolume"
          :value="item"
          @change="changeData"
          :checked="
            advertFilter
              .getFilterQueryParams()
              .engineVolume?.toString()
              .includes(item.toString())
          "
        >
          <span class="filter__data">{{
            item.toString().replaceAll("_", " ")
          }}</span>
        </h-input>
      </div>
    </template>
  </search-advert-collapsible-card>
</template>

<script setup lang="ts">
import { CarFuel } from "~~/models/advertisements/enums/CarFuel";
import { EngineVolume } from "~~/models/advertisements/enums/EngineVolume";

const router = useRouter();
const route = useRoute();

const advertFilter = useAdverFilter();

async function changeData() {
  var values: any[] = [];
  const checked = document.querySelectorAll("input[name=engineVolume]:checked");
  checked.forEach((checkbox) => {
    //@ts-ignore
    values.push(checkbox.value);
  });
  await advertFilter.changeQueryParams(values, "engineVolume");
}
</script>

<style>
</style>