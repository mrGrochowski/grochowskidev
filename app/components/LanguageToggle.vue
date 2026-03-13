<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <UButton
    :label="locale === 'en' ? 'PL' : 'EN'"
    variant="ghost"
    color="neutral"
    class="rounded-full px-2"
    :aria-label="locale === 'en' ? 'PL - Zmień język na Polski' : 'EN - Switch language to English'"
    @click="setLocale(locale === 'en' ? 'pl' : 'en')"
  />
</template>
