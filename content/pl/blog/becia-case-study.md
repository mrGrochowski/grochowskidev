---
title: "Strona na zamówienie dla rękodzieła: Moje case study z Łodzi i Zgierza"
description: Zobacz jak stworzyłem szybką i nowoczesną stronę dla twórcy mięciutkich maskotek na szydełku. Prawdziwe case study z wdrożenia!
date: 2024-03-12
image: https://i.postimg.cc/MHxft4y4/becia.jpg
minRead: 4
author:
  name: Mateusz Grochowski
  avatar:
    src: https://secure.gravatar.com/avatar/fe6cdb120a3f64222f15e7d252d6b354
    alt: Mateusz Grochowski
---

Cześć! Dzisiaj chciałbym Wam trochę opowiedzieć o jednym z moich ostatnich projektów. Własna strona na zamówienie to dla wielu twórców, zwłaszcza tych działających lokalnie, ogromny krok w przód. Ostatnio miałem przyjemność stworzyć coś naprawdę wyjątkowego dla twórczyni z okolic, takich miast jak Łódź i Zgierz, która tworzy przepiękne rękodzieło — mięciutkie maskotki na szydełku.

Chciałem, żeby ta strona była tak samo unikalna i dopracowana, jak same szydełkowe dzieła, dlatego od samego początku postawiłem na najnowsze i najszybsze rozwiązania w świecie frontendu.

## Początki, czyli architektura oparta o najnowsze technologie

Zacząłem od mocnych fundamentów. Zdecydowałem się na framework Nuxt w jego najnowszej wersji (Nuxt 4), który jest po prostu świetny do tworzenia szybkich stron. Od razu wrzuciłem tam moduły takie jak Nuxt Content do zarządzania wpisami, Nuxt Studio i Nuxt Image. Chciałem, żeby strona działała jak błyskawica, a zdjęcia galerii nie ważyły ton i ładowały się błyskawicznie na smartfonach.

Nie mogło też zabraknąć możliwości kontaktu! Zintegrowałem na stronie prosty, ale niezawodny formularz kontaktowy z powiadomieniami zrobionymi w pakiecie Nodemailer. Teraz każdy, kto marzy o przytulance (czy to Łódź, Zgierz, czy inny zakątek Polski), może w prosty sposób zapisać się na listę oczekujących.

## Zmagania z wdrożeniem i konfiguracją

Żaden projekt nie jest w 100% idealny od pierwszej linijki kodu. Miałem kilka małych potknięć na starcie – podczas wrzucania strony na Vercel pojawiły się błędy w procesie budowania aplikacji. Musiałem trochę posiedzieć przy konfiguracji TypeScripta (tzw. `tsconfig`) i pogrzebać w ustawieniach Nuxt Studio. Kiedy uporządkowałem ścieżki do repozytorium (by usunąć irytujące błędy 404 w trybie podglądu), wszystko wreszcie zaczęło śmigać jak w zegarku.

## Design i detale, które robią robotę

Zależało mi bardzo na tym, żeby to "rękodzieło" było widoczne już na pierwszy rzut oka.

* **Logo jak żyleta:** Wyrzuciłem na śmietnik starą, standardową ikonkę w nagłówku. Na jej miejsce wleciało piękne, wywektoryzowane logo w formacie SVG (które wrzuciłem przez moduł `@nuxt/icon`). Przeskalowałem je, dopasowałem do koloru z motywu przewodniego ("leather") i strona od razu zyskała ten profesjonalny, ostry jak brzytwa wygląd. Dodatkowo ikoną w przeglądarce (favicon) stała się urocza, wykadrowana miniaturka głównej maskotki.
* **Perfekcyjne pozycjonowanie:** Czasami drobnostki robią największą różnicę. Długo bawiłem się z pozycjonowaniem emblematu "HANDMADE" koło formularza kontaktowego, aż wreszcie wpadł na swoje idealne miejsce. W sekcji "Hero" też poprawiłem parę rzeczy, wyśrodkowałem opisy na desktopach i dostosowałem wysokość.

## Responsywność przede wszystkim!

Umówmy się – większość osób przegląda dziś internet na telefonach, przeglądając Instagrama czy siedząc w tramwaju. Dlatego cały interfejs przeprojektowałem pod kątem "Responsive Web Design". I to mądrze! Zrobiłem to tak, by nawigacja płynnie dostosowywała się do ekranu bez dublowania elementów kodu w DOM (co niestety robi wielu programistów). Dla telefonów dorzuciłem też fajne, przyklejone do góry menu ("sticky"), żeby nawigacja po galerii prac była maksymalnie wygodna.

## Co dalej? Rękodzieło w wersji na żywo!

Strona na zamówienie działa, klienci mogą łatwo skontaktować się i wpisać na listę oczekujących na swojego amigurumi misia, a Nuxt Content v3 po moim małym refaktorze dba o to, żeby zarządzanie plikami i galerią z poziomu Markdowna było super proste.

Ale to nie koniec moich pomysłów. Mamy już świetną bazę, więc w niedalekiej przyszłości planuję wdrożyć na stronie odtwarzacz sesji live! Zgadza się – planujemy przenieść szydełkowanie na ekran i stworzyć dedykowaną sekcję na stronie, która będzie bezpośrednio strumieniować transmisje z YouTube. Będzie można podejrzeć powstawanie maskotek na żywo.

Tworzenie takich dedykowanych rozwiązań sprawia mi masę frajdy. Widząc, jak szybka i piękna strona pomaga lokalnym biznesom z naszych okolic wypłynąć na szerokie wody – wiem, że ta praca ma ogromny sens. Jeżeli sami myślicie, że pora na własne, niezależne miejsce w sieci, to wierzcie mi, że warto!
