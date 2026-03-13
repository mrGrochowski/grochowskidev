---
title: "Dlaczego Etsy dusi prawdziwych twórców i jak własna strona to zmienia – Case Study: Becia"
description: "Rękodzieło po godzinach etatu a internetowi giganci. Zobacz, jak strona na zamówienie pomaga wybić się z tłumu twórców."
keywords: "strona na zamówienie, rękodzieło, łódź, zgierz, strony internetowe łódź, portfolio"
date: 2026-03-09
image: /becia.jpg
minRead: 4
author:
  name: Mateusz Grochowski
  avatar:
    src: https://secure.gravatar.com/avatar/fe6cdb120a3f64222f15e7d252d6b354
    alt: Mateusz Grochowski
---

# Zmierzch Etsy i powrót do korzeni: Jak własna strona ratuje twórców po godzinach

Każdy, kto próbował sprzedawać **rękodzieło** w internecie, prędzej czy później zderza się ze ścianą. Wchodzisz na Etsy, pełen nadziei, że świat doceni twoje szydełkowe maskotki czy ceramikę. A potem... cisza. Giniesz w morzu masowo produkowanego "handmade'u" z Chin.

Kiedy tworzysz z pasji, dłubiesz po godzinach pracy na pełen etat, nie masz czasu ani siły na walkę z algorytmami platform, które faworyzują sprzedawców hurtowych. Prawdziwy twórca potrzebuje swojego miejsca w sieci. Miejsca, gdzie nie jest tylko kolejnym kafelkiem w niekończącej się liście wyników.

Dlatego właśnie **strona na zamówienie** to dzisiaj nie kaprys, to być albo nie być dla autentycznych twórców z takich miast jak **Łódź** czy **Zgierz**. I o tym jest dzisiejsze case study – o projekcie dla Beci, która szydełkuje cuda, a ja pomogłem jej pokazać to światu na jej własnych zasadach.

## Jak budowaliśmy "Mięciutkie szydełkowanie" (od kuchni)

Nie chciałem stawiać Beci kolejnego ciężkiego, powolnego kloca na WordPressie. Zależało mi na czymś ultra szybkim, co od razu zrobi dobre wrażenie na klientach. Zdecydowaliśmy się na nowoczesny stack: Nuxt 4, z treścią zarządząną przez Nuxt Content i Nuxt Studio.

Droga od pomysłu do działającej strony (która śmiga na Vercelu) była pełna mniejszych i większych wyzwań. Oto jak to wyglądało krok po kroku w kodzie:

### 1. Fundamenty i pierwszy kontakt ze światem
Zaczęliśmy od postawienia bazowego projektu w Nuxt 4. Żeby strona nie była tylko ładną wizytówką, od razu wleciał system formularzy kontaktowych oparty o Nodemailer. Dzięki temu klienci mogą bez problemu zamawiać personalizowane pluszaki prosto na maila Beci.

### 2. Walka z maszynami (Vercel i Nuxt Studio)
Każdy dev wie, że deploy rzadko kiedy przechodzi za pierwszym razem. Mieliśmy trochę przepychanek z błędami budowania i kompatybilnością między Nuxt Content a Studio, a potem Vercel rzucał nam błędami 404 w podglądach. Ale odpowiednia konfiguracja `tsconfig` i dopieszczenie ścieżek do repo w `nuxt.config.ts` szybko załatwiły sprawę. Teraz podglądy na Vercelu (Vercel Preview) działają jak złoto przy każdym nowym PR.

### 3. Detale robią różnicę (Mobile, UI i wektory)
Większość ruchu w branży handmade to mobile. Dlatego wdrożyłem w pełni responsywny layout bez powielania kodu (zero duplikacji w DOM). Dodaliśmy "przyklejone" menu, żeby nawigacja na telefonach była bajecznie prosta.

Ale to co mnie najbardziej cieszy to ewolucja logotypu. Zaczęliśmy od zwykłej ikonki Material Icon, potem wleciało customowe logo na przezroczystym tle, aż w końcu zrobiliśmy pełną wektoryzację. Raster zastąpiliśmy ostrym jak brzytwa plikiem SVG, zintegrowanym przez `@nuxt/icon`. Odpowiednio wykadrowane viewBox, powiększony rozmiar, kolor "leather" i favicon z postacią Beci – to te drobiazgi budują profesjonalny wizerunek marki.

### 4. Zarządzanie treścią dla "nietechnicznych"
Twórca ma tworzyć, a nie uczyć się HTML-a. Zmigrowaliśmy stronę do otwartoźródłowej wersji Nuxt Studio i zrefaktoryzowaliśmy Nuxt Content. Cała treść strony, razem z zewnętrznymi danymi do galerii zdjęć, siedzi sobie teraz wygodnie w jednym pliku `index.md`. Załatwiliśmy też mały zgrzyt z renderowaniem bloków przez bezpośrednie użycie `<ContentRenderer>`. Becia może teraz sama edytować teksty, a strona generuje się błyskawicznie.

## SEO, Social Media i co przyniesie przyszłość

Dlaczego ucieczka z Etsy na własne podwórko ma sens? Bo budujesz **własne SEO**. Grochowsk.it zadbał o to, żeby "Mięciutkie szydełkowanie" miało solidne podstawy pod pozycjonowanie – semantyczny kod, błyskawiczne ładowanie i optymalizacja obrazków (Nuxt Image). Dzięki temu z czasem strona zacznie organicznie łapać ruch od ludzi z regionu (**Łódź**, **Zgierz** i okolice), którzy szukają unikalnych prezentów.

Ale to dopiero początek. Własna strona daje pełną kontrolę nad integracją z social mediami. W przyszłych aktualizacjach planujemy podpiąć moduły ułatwiające promocję bezpośrednio ze strony – marzą nam się wbudowane podglądy i płynne przejścia na transmisje Live na Facebooku czy TikToku, gdzie Becia mogłaby pokazywać proces tworzenia "na żywo".

Rękodzieło potrzebuje duszy, a korporacyjne platformy sprzedażowe powoli tę duszę zabijają. Dobrze skrojona, autorska strona internetowa to najlepsza inwestycja dla każdego twórcy, który traktuje swoją pasję na poważnie.
