# Raport SEO 2026: Strategia i Optymalizacja dla grochowski.it

**Dokument opracowany z myślą o dominacji na rynku polskim, z uwzględnieniem wytycznych Google AI Overviews (SGE / LLM Replays) i rozwiązywaniu problemu nachodzenia się tożsamości w sieci.**

---

## 1. Wstęp i Główne Założenia (Executive Summary)

Cel nadrzędny strategii SEO na 2026 rok to ugruntowanie domeny `grochowski.it` jako centralnego, autorytatywnego punktu obecności Mateusza Grochowskiego na polskim rynku. Jako **Frontend Developer** specjalizujący się w **Nuxt.js, Node.js, Medusa.js, i Supabase**, kluczowe będzie pozycjonowanie na zapytania komercyjne i eksperckie w Polsce.

Pomimo posiadania włoskiej domeny `.it`, wdrożona konfiguracja (Hreflang, Nuxt i18n ze ścieżką `/pl/`) oraz dedykowane polskie treści tworzą mocną podstawę pod polskie SEO. Ten raport identyfikuje kroki potrzebne do skalowania wyników w realiach wyszukiwarek mocno napędzanych przez AI w 2026 roku.

---

## 2. Zrozumienie Tożsamości przez AI (Entity Overlapping & Google LLM)

W erze Google AI Overviews i wyszukiwań opartych o LLM (Large Language Models), wyszukiwarki starają się identyfikować *Podmioty* (Entities), a nie tylko słowa kluczowe. Istnieje duże prawdopodobieństwo, że imię i nazwisko "Mateusz Grochowski" dzieli kilka innych publicznych osób w Polsce (np. sportowcy, inni specjaliści, politycy). Zjawisko to nazywa się **Entity Overlapping** (Nachodzenie się Tożsamości).

Aby algorytmy, w tym LLMy (np. Gemini), jednoznacznie połączyły hasło "Mateusz Grochowski" z usługami programistycznymi i profilem eksperckim, musimy stworzyć twardy **Knowledge Graph** (Graf Wiedzy).

### Jak to rozwiązać technologicznie w Nuxt:
Twoja strona musi asertywnie deklarować, "kim" jest właściciel, przy użyciu uporządkowanych danych (Schema.org / JSON-LD). Należy wstrzykiwać skrypt JSON-LD z typem `Person` globalnie (lub na stronie O mnie / Głównej), wykorzystując funkcję Nuxt `useHead`.

**Przykładowa implementacja do wdrożenia:**

```typescript
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mateusz Grochowski",
        "jobTitle": "Frontend Developer",
        "url": "https://grochowski.it/pl/",
        "image": "https://grochowski.it/hero/chrome-Gw3qknD8al.png", // twój oficjalny awatar
        "worksFor": {
          "@type": "Organization",
          "name": "Oferteo S.A."
        },
        "alumniOf": [
          {
             "@type": "Organization",
             "name": "Sii sp. z o.o."
          },
          {
             "@type": "Organization",
             "name": "Divante S.A"
          }
        ],
        "knowsAbout": [
          "Nuxt.js",
          "Vue.js",
          "Frontend Development",
          "Node.js",
          "Medusa.js",
          "Supabase"
        ],
        "sameAs": [
          "https://github.com/mrGrochowski",
          "https://www.linkedin.com/in/grochowski-it/", // Wskazówka: Twoje spójne profile społecznościowe
          // Dodaj tu linki do profilu np. na X (Twitter) jeśli posiadasz
        ]
      })
    }
  ]
})
```

**Kluczowe benefity powyższego kodu:**
- **`sameAs`**: Konsoliduje Twoją cyfrową obecność. Łączy w Google domenę `grochowski.it` z autorytetem z GitHub i LinkedIn.
- **`knowsAbout`**: Wyraźnie wskazuje LLMom kompetencje. Kiedy ktoś zapyta AI *"Kto zajmuje się Nuxt.js w Polsce?"*, te tagi ułatwiają modelom wyciągnięcie Twojego profilu.
- **`worksFor` / `alumniOf`**: Wykorzystanie wiarygodności znanych firm, z którymi współpracowałeś, budzi zaufanie w algorytmach i pozwala "odkleić" Cię od innych Mateuszów Grochowskich (Google wie, że tamci np. nie pracowali w Oferteo czy Sii).

---

## 3. Optymalizacja Techniczna na Rzecz Rynku Polskiego

Stan wyjściowy jest bardzo dobry: posiadasz dedykowany moduł `@nuxtjs/i18n` z prefixem `/pl/`, wygenerowaną mapę witryny za pomocą `@nuxtjs/sitemap`, wyłączone dla robotów ścieżki Nuxt Studio.

### Akcje na rok 2026:
1. **Dynamiczne Metadane:**
   W kolekcji `content/index.yml` korzystasz ze struktury `title_pl` oraz `description_pl`. Upewnij się, że we wszystkich kluczowych widokach (strona główna, o mnie, projekty) te tłumaczenia są bezpośrednio używane w `useSeoMeta()` przy wejściu na wariant polski:

   ```typescript
   useSeoMeta({
     title: locale.value === 'pl' ? page.title_pl : page.title,
     description: locale.value === 'pl' ? page.description_pl : page.description
   })
   ```

2. **Core Web Vitals (Podstawowe Wskaźniki Internetowe):**
   Nuxt jest szybki z założenia, ale do 2026 roku AI Overviews będą faworyzować błyskawiczne strony (TTFB < 200ms).
   - Skup się na optymalizacji obrazów z `@nuxt/image` do formatu `WebP/AVIF`. Zaktualizuj ścieżki w `index.yml` z `/mm-event.jpg` by korzystały z `<NuxtImg />`.
   - Zadbaj o pre-rendering. Posiadasz `'/**': { prerender: true }` co działa rewelacyjnie przy statycznym hostingu (Vercel).

3. **Plik sitemap.xml:**
   Masz wdrożone `sitemap: { sitemaps: false }` i `autoLastmod: true`. Upewnij się, że Hreflang poprawnie się buduje i w GSC (Google Search Console) wszystkie adresy `/pl/` nie wyrzucają błędu braku kanoniczności.

---

## 4. Strategia Treści (Content & Keywords)

Na podstawie sekcji `index.yml` zdefiniowaliśmy obszar specjalizacji. Na 2026 rok, zamiast "upychania słów kluczowych", skupiamy się na **Topical Authority** (Autorytecie Tematycznym).

### Klastry Tematyczne na rynek Polski:
1. **Technologie Frontendowe:**
   - *Frazy:* "Nuxt.js wdrożenia", "Migracja do Vue.js", "Frontend Developer wynajem", "Ekspert Medusa.js Polska".
   - *Działanie:* Publikuj na blogu szczegółowe case-studies z tych technologii. Pisząc po polsku (katalog `content/pl/blog/`), demonstrujesz unikalną, ekspercką wiedzę, co LLMy uznają za treść wysokiej jakości (zgodnie z EEAT - Experience, Expertise, Authoritativeness, Trustworthiness).
2. **E-Commerce i Supabase:**
   - *Frazy:* "Headless E-commerce Polska", "Medusa.js sklep internetowy", "Supabase backend dla frontendowca".

### FAQ jako Pożywka dla Google (Snippet Optimization):
Masz świetnie zbudowaną sekcję FAQ w `index.yml` (np. *Jakie usługi oferujesz?*, *Jak wygląda proces?*).
- Zastosuj do sekcji FAQ strukturalne dane `FAQPage` JSON-LD. Odpowiedzi z tej sekcji mogą bezpośrednio zasilać wyniki zero-click w Google.

---

## 5. Off-site i Budowa Autorytetu Domeny (.it w Polsce)

Domena włoska (`.it`) pozycjonowana w Polsce wciąż wymaga jasnych sygnałów dla Google, że należy ją powiązać z polskim rejonem. Hreflang w Sitemap to krok numer 1. Krok numer 2 to sygnały zewnętrzne.

1. **Lokalne Linki (Backlinks .pl):**
   - Pozyskuj linki ze sprawdzonych polskich portali.
   - Gościnne wpisy na polskojęzycznych blogach programistycznych (np. Just Join IT Blog, Bulldogjob).
2. **Katalogi Eksperckie / Prelekcje:**
   - Jako doświadczony developer, dodaj się do polskich katalogów prelegentów lub portali dla freelancerów. Twoja sekcja `speaking.yml` powinna obfitować w wystąpienia z polskiego rynku.
3. **LinkedIn & Github Lokalizacja:**
   - Ustaw na swoim LinkedIn publicznie lokalizację jako "Poland" i wskaż link do domeny wariantu `/pl/` (`https://grochowski.it/pl/`). Github również powinien wskazywać na Twoją stronę. To potężne, weryfikowalne przez AI sygnały powiązania.

---

## Podsumowanie działań "Quick Wins" na Teraz:
1. Skopiuj i wdróż skrypt JSON-LD (`Person`) na stronę "O mnie" i do layoutu polskiego, aby przeciąć problem nachodzenia tożsamości.
2. Zaktualizuj dane w Google Search Console (wymuś przeliczenie `sitemap.xml`).
3. Wprowadź mikroformat `FAQPage` dla sekcji "Często zadawane pytania".
4. Stwórz na blogu 3 artykuły rozwiązujące realne problemy z Nuxt 3 lub Medusa.js po polsku.

Taka baza pozwoli Ci konkurować na 2026 rok, czyniąc domenę kuloodporną na zawirowania generowanych przez AI wyników wyszukiwania (SGE/LLM).
