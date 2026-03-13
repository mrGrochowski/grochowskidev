# SEO Strategy for grochowski.it (Targeting Poland)

## Overview

The primary goal of this strategy is to rank the domain **grochowski.it** organically on Polish search engines (like google.pl) and for Polish queries, despite using an `.it` (Italian ccTLD) extension.

By default, search engines often associate Country Code Top-Level Domains (ccTLDs) with their respective country. To override this and tell Google that your content is primarily meant for a Polish audience, we need a combination of technical SEO signals, Google Search Console configurations, and off-page optimization.

---

## Technical Foundations (Implemented)

We have already set up the core technical foundations in the Nuxt application:

1. **URL Structure for Languages:**
   - English (Default): `/`
   - Polish: `/pl/`
   *This logical separation ensures that Polish content has its own dedicated URLs, which is crucial for indexing.*

2. **Language Auto-Detection:**
   - We configured `@nuxtjs/i18n` to automatically detect if a user's browser is set to Polish and redirect them to the `/pl/` prefix.
   - A cookie (`i18n_redirected`) saves this preference so users are smoothly routed in future visits.

3. **Automated XML Sitemap with Hreflang:**
   - We installed and configured `@nuxtjs/sitemap` which integrates directly with the i18n module.
   - The generated sitemap now automatically includes `hreflang` attributes. This tells Google exactly which URL is the English version and which is the Polish version of the same page, preventing duplicate content issues and directly associating your `/pl/` pages with the `pl-PL` language region.

---

## Step-by-Step Action Plan

To fully overcome the `.it` domain bias and rank in Poland, please follow these steps:

### 1. Google Search Console Configuration

Because you are using an `.it` domain, Google might naturally assume your site targets Italy. You must manually override this.

**Step-by-Step:**
1. Log in to [Google Search Console](https://search.google.com/search-console).
2. Ensure your property `https://grochowski.it` is verified.
3. **Submit the Sitemap:**
   - Go to **Indexing > Sitemaps** in the left sidebar.
   - Enter `sitemap_index.xml` (or `sitemap.xml`) and click **Submit**. This forces Google to crawl your new `hreflang` tags.
4. **Note on International Targeting:**
   - *Historically*, GSC had a "Legacy tool" for International Targeting where you could pick a target country. Google has deprecated this specific tool because it now relies heavily on `hreflang` tags and server location/local signals.
   - Because you have `hreflang="pl-PL"` set up on your `/pl/` URLs (thanks to the Nuxt i18n + sitemap integration), Google will now automatically understand those pages are for Poland.

### 2. Content & On-Page Signals

Ensure the actual Polish content sends strong local signals:

- **Translate Meta Tags:** Make sure all your Nuxt Content Markdown files for the Polish language have fully translated `<title>` and `<meta name="description">` tags.
- **Use Local Entities:** Mention Polish cities, standard Polish phrasing, or local industry terms where relevant in your content.
- **Contact Info:** If you have an address or phone number, displaying a Polish phone prefix (`+48`) is a strong signal to Google.

### 3. Off-Page SEO (Backlinks)

This is the most critical step for an `.it` domain targeting Poland. You need to convince Google that Polish websites care about your domain.

- **Get `.pl` Backlinks:** Reach out to Polish directories, tech blogs, or partners. Getting links from `.pl` domains or websites written in Polish is the strongest indicator that your site belongs in the Polish search ecosystem.
- **Social Media:** Link to your website from Polish social media profiles (e.g., a LinkedIn profile optimized in Polish).
- **Google My Business (Optional):** If you have a physical location or business registration in Poland, creating a Google Business Profile linking to `grochowski.it/pl/` will heavily anchor your site to local Polish SEO.

---

## Summary

The technical barrier of the `.it` domain has been addressed by strictly isolating the Polish language to the `/pl/` subdirectory and broadcasting `pl-PL` targeting via the newly implemented XML sitemap. Your next steps are primarily content translation and building Polish backlinks.
