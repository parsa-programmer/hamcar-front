<template>
  <Head>
    <Title>{{ meta?.metaTitle }}</Title>
    <Meta name="og:title" :content="meta.metaTitle" />
    <Meta name="twitter:title" :content="meta.metaTitle" />
    <Meta name="description" :content="meta.metaDescription" />
    <Meta name="twitter:description" :content="meta.metaDescription" />
    <Meta name="og:description" :content="meta.metaDescription" />
    <Meta name="keywords" :content="meta.metaKeyWords" />
    <Meta rel="canonical" :href="meta.canonical" v-if="meta.canonical" />
    <slot />
  </Head>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
</style>