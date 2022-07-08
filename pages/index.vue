<template>
  <div>
    <nuxt-link to="/test">test</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { CarReviewFilterOrderBy } from "~~/models/carReviews/CarReviewModels";
import { BugReportFor, SendBugReport } from "~~/services/bugReport.service";
import {
  GetByFilter,
  GetMainPageData,
  GetSpecifications,
} from "~~/services/carReview.service";

onMounted(async () => {
  var result = await GetSpecifications();
  console.log(result);
});
</script>

<style scoped></style>