<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const { locale } = useI18n()
const collectionName = computed(() => locale.value === 'pl' ? 'blog_pl' : 'blog_en')

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', async () => {
    const navs = await Promise.all([
      queryCollectionNavigation(collectionName.value)
    ])
    // Clean up paths so they don't have the locale prefix which causes 404s
    const cleanPaths = (items: any[]): any[] => items.map(item => ({
      ...item,
      path: item.path.replace(/^\/(en|pl)\//, '/'),
      children: item.children ? cleanPaths(item.children) : undefined
    }))
    return navs.map(nav => cleanPaths(nav))
  }, {
    transform: data => data.flat(),
    watch: [collectionName]
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections(collectionName.value)
    ])
  }, {
    server: false,
    transform: data => data.flat(),
    watch: [collectionName]
  })
])
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <UMain>
      <UContainer>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        shortcut="meta_k"
        :navigation="navigation"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>

    <UToaster />
  </div>
</template>
