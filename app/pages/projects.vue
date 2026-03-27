<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const collectionName = computed(() => locale.value === 'pl' ? 'projects_pl' : 'projects_en')

const { data: projects, refresh } = await useAsyncData('projects', () => {
  return queryCollection(collectionName.value).all()
})

watch(collectionName, () => {
  refresh()
})

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  ogTitle: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  description: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description),
  ogDescription: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description)
})

const itemListStructuredData = computed(() => {
  if (!projects.value) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': locale.value === 'pl' ? page.value?.title_pl || page.value?.title : page.value?.title,
    'itemListElement': projects.value.map((project, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'CreativeWork', // Use CreativeWork or SoftwareApplication for projects
        'name': project.title,
        'description': ('description_pl' in project && locale.value === 'pl' && project.description_pl) ? project.description_pl : project.description,
        'url': project.url.startsWith('http') ? project.url : `https://grochowski.it${project.url}`
      }
    }))
  }
})

useHead(() => ({
  script: itemListStructuredData.value
    ? [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(itemListStructuredData.value)
        }
      ]
    : []
}))
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="locale === 'pl' ? page.title_pl : page.title"
      :description="locale === 'pl' ? page.description_pl : page.description"
      :links="page.links.map(l => ({ ...l, label: locale === 'pl' && l.label_pl ? l.label_pl : l.label }))"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div
          v-if="page.links"
          class="flex items-center gap-2"
        >
          <UButton
            :label="locale === 'pl' && page.links[0]?.label_pl ? page.links[0].label_pl : page.links[0]?.label"
            :to="global.meetingLink"
            v-bind="page.links[0]"
          />
          <UButton
            :label="locale === 'pl' && page.links[1]?.label_pl ? page.links[1].label_pl : page.links[1]?.label"
            :to="`mailto:${global.email}`"
            v-bind="page.links[1]"
          />
        </div>
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="('description_pl' in project && locale === 'pl' && project.description_pl) ? project.description_pl : project.description"
          :to="project.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :ui="{
            wrapper: 'max-sm:order-last',
            description: 'line-clamp-3'
          }"
        >
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <ULink
              :to="project.url"
              class="text-sm text-primary flex items-center"
            >
              {{ locale === 'pl' ? 'Zobacz projekt' : 'View Project' }}
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 rounded-lg"
            :style="{ objectPosition: `${project.image_x || '50%'} ${project.image_y || '50%'}`, objectFit: project.image_fit || 'cover' }"
          >
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
