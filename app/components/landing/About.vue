<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
const { locale } = useI18n()
</script>

<template>
  <UPageSection
    :title="locale === 'pl' && page.about.title_pl ? page.about.title_pl : page.about.title"
    :description="locale === 'pl' && page.about.description_pl ? page.about.description_pl : page.about.description"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  />
</template>

<style scoped>

</style>
