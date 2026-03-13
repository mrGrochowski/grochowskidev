<script setup lang="ts">
const { locale } = useI18n()
const collectionName = computed(() => locale.value === 'pl' ? 'blog_pl' : 'blog_en')

const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: posts, refresh } = await useAsyncData('blogs', () =>
  queryCollection(collectionName.value).order('date', 'DESC').all()
)

watch(collectionName, () => {
  refresh()
})

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'blogs posts not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  ogTitle: page.value?.seo?.title || (locale.value === 'pl' ? page.value?.title_pl : page.value?.title),
  description: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description),
  ogDescription: page.value?.seo?.description || (locale.value === 'pl' ? page.value?.description_pl : page.value?.description)
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="locale === 'pl' ? page.title_pl : page.title"
      :description="locale === 'pl' ? page.description_pl : page.description"
      :links="page.links ? page.links.map(l => ({ ...l, label: locale === 'pl' && l.label_pl ? l.label_pl : l.label })) : []"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <UBlogPosts orientation="vertical">
        <Motion
          v-for="(post, index) in posts"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost
            variant="naked"
            orientation="horizontal"
            :to="post.path.replace(/^\/(en|pl)\//, '/')"
            v-bind="post"
            :ui="{
              root: 'md:grid md:grid-cols-2 group overflow-visible transition-all duration-300',
              image:
                'group-hover/blog-post:scale-105 rounded-lg shadow-lg border-4 border-muted ring-2 ring-default',
              header:
                index % 2 === 0
                  ? 'sm:-rotate-1 overflow-visible'
                  : 'sm:rotate-1 overflow-visible'
            }"
          />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
