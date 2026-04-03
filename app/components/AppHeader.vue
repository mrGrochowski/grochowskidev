<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

export interface ExtendedNavigationMenuItem extends NavigationMenuItem {
  isLogo?: boolean
}

defineProps<{
  links: ExtendedNavigationMenuItem[]
}>()
</script>

<template>
  <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden'
      }"
    >
      <template #item="{ item }">
        <template v-if="(item as any).isLogo">
          <NuxtImg
            src="/logo.png"
            alt="Logo"
            class="h-6 w-auto dark:invert"
          />
        </template>
        <template v-else>
          <span class="truncate">{{ (item as any).label }}</span>
        </template>
      </template>
      <template #list-trailing>
        <LanguageToggle />
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div>
</template>
