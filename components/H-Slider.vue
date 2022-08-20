<template>
  <div class="relative">
    <template v-if="arrows">
      <button class="arrow-button right-arrow" @click="clickPrev">
        <icons-chevron-right></icons-chevron-right>
      </button>
      <button class="arrow-button left-arrow" @click="clickNext">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none"
        >
          <path
            d="M9.16699 1.76172L1.66699 8.61886L9.16699 15.476"
            stroke="#85858F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </template>
    <slot
      name="custom_arrows"
      :prevSlide="clickPrev"
      :nextSlide="clickNext"
    ></slot>
    <div class="overflow-x-hidden">
      <div ref="sliderWrapperRef" class="row">
        <slot name="first-item"></slot>

        <div
          v-for="(item, index) in items"
          :key="index"
          :ref="(el) => setChildrenRef(el, index)"
          :class="['slider-item', itemContainerClass]"
        >
          <slot name="item" :item="item" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { useEventListener } from "@vueuse/core";

export default defineComponent({
  name: "AppSlider",
  props: {
    items: { type: Array, default: () => [] },
    arrows: {
      type: Boolean,
      default: () => true,
    },
    dots: {
      type: Boolean,
      default: () => false,
    },
    itemContainerClass: {
      type: [Array, Object, String],
      default: "",
    },
    config: {
      type: Object,
      default: () => ({ duration: 1, ease: "power1" }),
    },
    middle: {
      type: Number,
      default: -1,
    },
    end: {
      type: Number,
      default: -1,
    },
    start: {
      type: Number,
      default: -1,
    },
  },
  setup(props) {
    const sliderWrapperRef = ref<any>(null);
    const childrenRef = ref<any>([]);
    const setChildrenRef = (el: any, index: number) => {
      if (el) childrenRef.value[index] = el;
    };
    onBeforeUpdate(() => {
      childrenRef.value = [];
    });
    const getConfig = () => {
      const el = unref(sliderWrapperRef);
      const maxX: number = el?.scrollWidth - el?.clientWidth;
      //console.log("maxX", maxX, el!.scrollWidth, el!.clientWidth);

      return { el, maxX };
    };
    const recalculate = () => {
      const { el, maxX } = getConfig();
      //@ts-ignore
      Draggable.get(unref(el)).applyBounds({ minX: 0, maxX });
    };
    onUpdated(() => {
      recalculate();
    });
    onMounted(() => {
      setTimeout(() => {
          gsap.registerPlugin(Draggable);
        let { el, maxX } = getConfig();
        Draggable.create(unref(el), {
          type: "x",
          edgeResistance: 0.9,
          //@ts-ignore
          bounds: { minX: 0, maxX },
        });
        useEventListener("resize", recalculate);
      }, 100);
    });
    const getValidX = (x: number) => {
      const { maxX } = getConfig();
      if (x < 0) return 0;
      if (x > maxX) {
        return maxX;
      }
      return x;
    };
    const getPrevItemsWidth = (activeIndex: number): number => {
      let xDistance = 0;
      for (let i = 0; i < activeIndex; i++) {
        xDistance += childrenRef.value[i].clientWidth;
      }
      return xDistance;
    };
    const setActiveIndexStart = (activeIndex: number) => {
      //move to first item
      if (childrenRef.value[activeIndex]) {
        const { el } = getConfig();
        const xDistance = getPrevItemsWidth(activeIndex);
        gsap.to(unref(el), {
          x: getValidX(xDistance),
          ...props.config,
        });
      }
    };
    const setActiveIndexEnd = (activeIndex: number) => {
      //move to last item
      if (childrenRef.value[activeIndex]) {
        const { el } = getConfig();
        const xDistance = getPrevItemsWidth(activeIndex);
        const visibleBack =
          (unref(el)?.clientWidth || 0) -
          childrenRef.value[activeIndex].clientWidth;
        gsap.to(unref(el), {
          x: getValidX(xDistance - visibleBack),
          ...props.config,
        });
      }
    };

    const setActiveIndexMiddle = (activeIndex: number) => {
      //move to middle item
      if (childrenRef.value[activeIndex]) {
        const { el } = getConfig();
        const xDistance = getPrevItemsWidth(activeIndex);
        const visibleBack =
          (unref(el)?.clientWidth || 0) -
          childrenRef.value[activeIndex].clientWidth;
        gsap.to(unref(el), {
          x: getValidX(xDistance - visibleBack / 2),
          ...props.config,
        });
      }
    };
    watch(
      () => props.start,
      (value) => {
        setActiveIndexStart(value);
      }
    );
    watch(
      () => props.middle,
      (value) => {
        setActiveIndexMiddle(value);
      }
    );
    watch(
      () => props.end,
      (value) => {
        setActiveIndexEnd(value);
      }
    );
    const clickNext = () => {
      const { el } = getConfig();
      const currentX = gsap.getProperty(unref(el), "x");
      const plusX = unref(el)!.clientWidth;
      gsap.to(unref(el), {
        x: getValidX(+currentX + plusX),
        ...props.config,
      });
    };
    const clickPrev = () => {
      const { el } = getConfig();
      const currentX = gsap.getProperty(unref(el), "x");
      const plusX = unref(el)!.clientWidth;
      gsap.to(unref(el), {
        x: getValidX(+currentX - plusX),
        ...props.config,
      });
    };
    return {
      clickNext,
      clickPrev,
      sliderWrapperRef,
      setChildrenRef,
    };
  },
});
</script>
<style scoped>
.left-arrow {
  left: -20px;
}
.arrow-button {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-white);
  box-shadow: 0px 4px 25px 0px #00000026;
  z-index: 100;
  top: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}
.right-arrow {
  right: -20px;
}
@media screen and (max-width: 768px) {
  .arrow-button {
    display: none;
  }
}
</style>
