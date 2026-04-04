<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

const { data: navData } = await useAsyncData('main-navigation-layout', () => queryCollection('navigation').first())

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
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <AppHeader :links="navLinksComputed" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
