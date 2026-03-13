<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

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
    <UPageHero
      :title="locale === 'pl' ? page.title_pl : page.title"
      :description="locale === 'pl' ? page.description_pl : page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <MDC
        :value="locale === 'pl' ? page.content_pl : page.content"
        unwrap="p"
      />
      <div class="flex flex-row justify-center items-center py-10 space-x-[-2rem]">
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>
    </UPageSection>
  </UPage>
</template>
