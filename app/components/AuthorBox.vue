<script setup lang="ts">
defineProps<{
  author: {
    name: string
    description?: string
    avatar?: {
      src: string
      alt: string
    }
    to?: string
    twitter?: string
  }
}>()
</script>

<template>
  <aside class="mt-12 p-6 rounded-xl border border-border bg-muted/30 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
    <UAvatar
      v-if="author.avatar"
      :src="author.avatar.src"
      :alt="author.avatar.alt"
      size="3xl"
      class="shrink-0"
    />
    <div class="flex flex-col gap-2 text-center sm:text-left">
      <h3 class="text-lg font-semibold text-foreground">
        {{ author.name }}
      </h3>
      <p
        v-if="author.description"
        class="text-sm text-muted-foreground leading-relaxed"
      >
        {{ author.description }}
      </p>
      <div class="flex gap-3 justify-center sm:justify-start mt-2">
        <UButton
          v-if="author.to"
          :to="author.to"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
          icon="simple-icons:github"
          aria-label="GitHub Profile"
        />
        <UButton
          v-if="author.twitter"
          :to="`https://twitter.com/${author.twitter}`"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
          icon="simple-icons:x"
          aria-label="X (Twitter) Profile"
        />
        <UButton
          to="https://www.linkedin.com/in/grochowski-it/"
          target="_blank"
          color="neutral"
          variant="ghost"
          size="sm"
          icon="simple-icons:linkedin"
          aria-label="LinkedIn Profile"
        />
      </div>
    </div>
  </aside>
</template>
