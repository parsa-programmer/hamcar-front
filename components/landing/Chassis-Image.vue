<template>
  <div class="content">
    <h-image
      :src="getImage()"
      :alt="selected.toString().replace('_', ' ')"
      class="content__img"
    />
    <div class="div">
      <span>{{ selected.toString().replaceAll("_", " ") }}</span>
    </div>
    <h-button
      class="d-mobile-none advert__count font-4 advert__count"
      size="lg"
      @click="showAdverts"
    >
      مشاهده {{ advertCount }} آگهی
      {{ selected.toString().replace("_", " ") }}
    </h-button>
  </div>
</template>

<script setup lang="ts">
import { BodyType } from "~~/models/advertisements/enums/BodyType";
import { ModelCarType } from "~~/models/advertisements/enums/ModelCarType";

const props = defineProps<{
  selected: BodyType | String;
  advertCount: number;
}>();

const getImage = () => {
  switch (props.selected) {
    case BodyType.سدان:
      return "static/img/sedan.png";
    case BodyType.شاسی_بلند:
      return "static/img/shasi.png";
    case BodyType.موتورسیکلت:
      return "static/img/motor.png";
    case BodyType.هاچبک:
      return "static/img/hach.png";
    case BodyType.وانت:
      return "static/img/vanet.png";
    case BodyType.ون:
      return "static/img/van.png";
    case BodyType.کامیون:
      return "static/img/camyoon.png";
    case BodyType.کروک:
      return "static/img/crok.png";
    case BodyType.کوپه:
      return "static/img/cope.png";
  }
};
const router = useRouter();

const showAdverts = () => {
  if(props.selected==BodyType.موتورسیکلت){
    router.push("/motor");

  }else{
    router.push("/car?modelType=" + props.selected.toString());

  }
};
</script>

<style scoped>
.content {
  position: relative;
}
.advert__count {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  width: 400px;
  border: 5px solid var(--color-white);
  z-index: 2;
}
.advert__count:after{
  position: absolute;
  content: " ";
  background:  var(--color-white);
  width: 6px;
  height: 20px;
  bottom: -7px;
  right: -11px;
  border-radius: 20px;
  transform: rotateZ(130deg) rotate(10deg); 
  z-index: 1;
}
.advert__count::before{
  position: absolute;
  content: " ";
  background:  var(--color-white);
  width: 6px;
  height: 20px;
  bottom: -7px;
  left: -10.5px;
  border-radius: 20px;
  transform: rotateZ(25deg) rotate(10deg); 
  z-index: 1;
}
</style>