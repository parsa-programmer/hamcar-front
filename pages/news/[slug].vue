<template>
  <div>{{ post }}</div>
</template>

<script setup lang="ts">
import { GetBySlug } from "~~/services/news.service";
import { NewsDto } from "~/models/news/NewsDto";
import { Ref } from "vue";

const route = useRoute();
const post: Ref<NewsDto | undefined> = ref(undefined);

const slug = route.params.slug.toString();
const { data } = await useAsyncData("single-news", () => GetBySlug(slug));

if (!data?.value) {
  await navigateTo("/404", { replace: true, redirectCode: 301 });
} else {
  post.value = data.value.data;
}
</script>

