<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>

<template>
  <UButton
    :label="locale === 'en' ? 'PL' : 'EN'"
    variant="ghost"
    color="neutral"
    class="rounded-full px-2"
    :aria-label="locale === 'en' ? 'Zmień język na Polski' : 'Switch language to English'"
    @click="setLocale(locale === 'en' ? 'pl' : 'en')"
  />
</template>
