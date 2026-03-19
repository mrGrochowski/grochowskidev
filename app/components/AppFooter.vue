<script setup lang="ts">
const { footer } = useAppConfig()
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      {{ t('footer.builtBy', { name: 'Mateusz Grochowski', year: new Date().getFullYear() }) }}
      <NuxtLink
        :to="localePath('/deklaracja-dostepnosci')"
        class="hover:underline"
      >
        {{ t('nav.accessibility') }}
      </NuxtLink>
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
