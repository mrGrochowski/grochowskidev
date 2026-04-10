<script setup lang="ts">
const colorMode = useColorMode()
const { locale } = useI18n()
const localePath = useLocalePath()

const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

const personStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Mateusz Grochowski',
  'jobTitle': 'Frontend Developer',
  'url': 'https://grochowski.it' + (locale.value === 'pl' ? '/pl/' : '/'),
  'image': 'https://grochowski.it/hero/chrome-Gw3qknD8al.png',
  'worksFor': {
    '@type': 'Organization',
    'name': 'Oferteo S.A.'
  },
  'alumniOf': [
    {
      '@type': 'Organization',
      'name': 'Sii sp. z o.o.'
    },
    {
      '@type': 'Organization',
      'name': 'Divante S.A'
    }
  ],
  'knowsAbout': [
    'Nuxt.js',
    'Vue.js',
    'Frontend Development',
    'Node.js',
    'Medusa.js',
    'Supabase'
  ],
  'sameAs': [
    'https://github.com/mrGrochowski',
    'https://www.linkedin.com/in/grochowski-it/'
  ]
}))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(personStructuredData.value)
    },
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
    { rel: 'icon', href: '/favicon.ico', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', href: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' }
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

const { data: navData } = await useAsyncData('main-navigation', () => queryCollection('navigation').first())

const navLinksComputed = computed(() => {
  const contentLinks = navData.value?.links?.map(link => ({
    label: locale.value === 'pl' && link.label_pl ? link.label_pl : link.label,
    icon: link.icon,
    to: localePath(link.to)
  })) || []

  return [
    { label: 'Logo', to: localePath('/'), isLogo: true },
    ...contentLinks
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
