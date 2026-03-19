<script setup lang="ts">
defineProps<{
  image: {
    src: string
    alt: string
    alt_pl?: string
    image_x?: string
    image_y?: string
    image_fit?: string
  }
  index: number
}>()
const { locale } = useI18n()
</script>

<template>
  <div
    class="bg-white p-2 flex flex-col drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0 hover:z-10"
    :class="[
      index % 2 === 0 ? '-rotate-5' : 'rotate-5',
      index % 2 === 0 ? 'hover:-translate-x-4' : 'hover:translate-x-4'
    ]"
  >
    <img
      :src="image.src"
      :alt="image.alt"
      class="size-32"
      :style="{ objectPosition: `${image.image_x || '50%'} ${image.image_y || '50%'}`, objectFit: image.image_fit || 'cover' }"
    >
    <span class="w-32 text-xs text-black font-serif font-medium text-center mt-2">
      {{ locale === 'pl' && image.alt_pl ? image.alt_pl : image.alt }}
    </span>
  </div>
</template>
