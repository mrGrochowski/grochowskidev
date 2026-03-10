<script setup lang="ts">
useSeoMeta({
  title: 'Deklaracja Dostępności'
})
</script>

<template>
  <UPage>
    <UPageHero
      title="Deklaracja Dostępności"
      description="Mateusz Grochowski zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych oraz wytycznymi WCAG 2.1."
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left mt-6'
      }"
    />
    <UPageSection :ui="{ container: '!pt-0 text-left' }">
      <div class="prose dark:prose-invert max-w-none text-muted">
        <h3>Status pod względem zgodności</h3>
        <p>Niniejsza strona internetowa jest <strong>częściowo zgodna</strong> z ustawą o dostępności cyfrowej stron internetowych ze względu na następujące niezgodności lub włączenia:</p>
        <ul>
          <li>Niektóre archiwalne zdjęcia mogą nie posiadać w pełni opisu alternatywnego.</li>
        </ul>

        <h3>Przygotowanie deklaracji dostępności</h3>
        <p>Deklarację sporządzono dnia: {{ new Date().toISOString().split('T')[0] }}</p>
        <p>Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot publiczny/prywatny.</p>

        <h3>Skróty klawiaturowe</h3>
        <p>Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki.</p>

        <h3>Informacje zwrotne i dane kontaktowe</h3>
        <p>W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Osobą kontaktową jest Mateusz Grochowski. Kontaktować można się pod adresem poczty elektronicznej mateusz.grochowski1992@gmail.com.</p>
        <p>Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak zapewnienia dostępności.</p>
      </div>
    </UPageSection>
  </UPage>
</template>
