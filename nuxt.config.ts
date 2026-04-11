// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxt/scripts',
    'nuxt-studio',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://grochowski.it'
  },

  routeRules: {
    '/__nuxt_studio': { prerender: false },
    '/__nuxt_studio/**': { prerender: false },
    '/__studio': { prerender: false },
    '/__studio/**': { prerender: false },
    '/**': { prerender: true }
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/_studio'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' }
    ],
    langDir: './locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
      alwaysRedirect: false,
      fallbackLocale: 'en'
    }
  },

  llms: {
    domain: 'https://grochowski.it',
    title: 'Mateusz Grochowski - Frontend Developer',
    description: 'Frontend Developer with 8 years of experience specializing in Nuxt.js, Node.js (Medusa.js), and Supabase.',
    full: {
      title: 'Mateusz Grochowski - Full Content',
      description: 'Full content of Mateusz Grochowski portfolio and blog.'
    }
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-TB84TPHG'
      }
    }
  },

  sitemap: {
    cacheMaxAgeSeconds: 360,
    autoLastmod: true,
    sitemaps: false
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'grochowski_it',
      repo: 'becia'
    }
  }
})
