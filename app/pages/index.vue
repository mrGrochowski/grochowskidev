<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { locale } = useI18n()

useSeoMeta({
  title: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  ogTitle: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  description: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description),
  ogDescription: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description)
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
  </UPage>
</template>
