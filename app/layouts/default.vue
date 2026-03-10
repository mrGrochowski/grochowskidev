<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
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
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="navLinksComputed" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
