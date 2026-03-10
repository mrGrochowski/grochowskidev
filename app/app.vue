<script setup lang="ts">
const colorMode = useColorMode()
const { locale, t } = useI18n()
const localePath = useLocalePath()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  script: [
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'wait_for_update': 500
        });
      `
    }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: locale
  }
})

useSeoMeta({
  titleTemplate: '%s - Mateusz Grochowski',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterCard: 'summary_large_image'
})

const [{ data: navigation }, { data: files }] = await Promise.all([
  useAsyncData('navigation', () => {
    return Promise.all([
      queryCollectionNavigation('blog')
    ])
  }, {
    transform: data => data.flat()
  }),
  useLazyAsyncData('search', () => {
    return Promise.all([
      queryCollectionSearchSections('blog')
    ])
  }, {
    server: false,
    transform: data => data.flat()
  })
])

const navLinksComputed = computed(() => {
  return [
    { label: t('nav.home'), icon: 'i-lucide-home', to: localePath('/') },
    { label: t('nav.projects'), icon: 'i-lucide-folder', to: localePath('/projects') },
    { label: t('nav.blog'), icon: 'i-lucide-file-text', to: localePath('/blog') },
    { label: t('nav.about'), icon: 'i-lucide-user', to: localePath('/about') }
  ]
})
</script>

<template>
  <UApp>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border focus:border-black rounded focus:outline-none"
      rel="nofollow"
    >
      {{ locale === 'en' ? 'Skip to main content' : 'Przejdź do głównej treści' }}
    </a>
    <NuxtLayout>
      <UMain
        id="main-content"
        class="relative"
      >
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        shortcut="meta_k"
        :links="navLinksComputed"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
