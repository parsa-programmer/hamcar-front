<template>
  <div class="technical__specifications">
    <div class="property" v-for="(spec, index) in rightSide" :key="index">
      <span class="property__title">
        <car-review-specification-icons :title="spec.title" />
        {{ spec.title }}
      </span>
      <div class="property__list">
        <ul class="property__name-list">
          <li
            v-for="(detail, index) in spec.details"
            :key="index"
            class="property__name"
          >
            {{ detail.key }}
          </li>
        </ul>
        <ul class="property__value-list">
          <li
            v-for="(detail, index) in spec.details"
            :key="index"
            class="property__value"
          >
            <icons-check
              hash-color="var(--color-green-600)"
              v-if="detail.value == 'دارد'"
            />
            <icons-close-box
              v-else-if="detail.value == '' || detail.value == 'ندارد'"
              hash-color="#EF3838"
            />
            <template v-else> {{ detail.value }}</template>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="technical__specifications">
    <div class="property" v-for="(spec, index) in leftSide" :key="index">
      <span class="property__title">
        <car-review-specification-icons :title="spec.title" />
        {{ spec.title }}
      </span>
      <div class="property__list">
        <ul class="property__name-list">
          <li
            v-for="(detail, index) in spec.details"
            :key="index"
            class="property__name"
          >
            {{ detail.key }}
          </li>
        </ul>
        <ul class="property__value-list">
          <li
            v-for="(detail, index) in spec.details"
            :key="index"
            class="property__value"
          >
            <icons-check
              hash-color="var(--color-green-600)"
              v-if="detail.value == 'دارد'"
            />
            <icons-close-box
              v-else-if="detail.value == '' || detail.value == 'ندارد'"
              hash-color="#EF3838"
            />
            <template v-else> {{ detail.value }}</template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Specification } from "~~/models/carReviews/Specification";

defineProps<{
  leftSide: Specification[];
  rightSide: Specification[];
}>();
</script>
