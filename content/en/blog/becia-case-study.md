---
title: "Custom Website for Handmade Crafts: My Case Study from Łódź and Zgierz"
description: Discover how I built a fast, modern website for a creator of soft, crocheted plushies. A real case study of the implementation!
date: 2024-03-12
image: https://i.postimg.cc/MHxft4y4/becia.jpg
minRead: 4
author:
  name: Mateusz Grochowski
  avatar:
    src: https://secure.gravatar.com/avatar/fe6cdb120a3f64222f15e7d252d6b354
    alt: Mateusz Grochowski
---

Hi! Today I’d like to tell you a bit about one of my recent projects. Getting a custom website is a huge step forward for many creators, especially those working locally. Recently, I had the pleasure of creating something truly special for a creator from the area of cities like Łódź and Zgierz, who makes beautiful handmade crafts—soft, crocheted plushies.

I wanted this site to be just as unique and refined as the crocheted works themselves, so from the very beginning, I focused on the latest and fastest solutions in the frontend world.

## The Beginnings: Architecture Based on the Latest Technologies

I started with a strong foundation. I decided on the Nuxt framework in its latest version (Nuxt 4), which is simply fantastic for creating blazing-fast websites. I immediately threw in modules like Nuxt Content for managing posts, Nuxt Studio, and Nuxt Image. I wanted the site to run like lightning, ensuring the gallery photos weren't heavy and loaded instantly on smartphones.

Of course, a way to get in touch was a must! I integrated a simple but reliable contact form on the site with notifications handled by the Nodemailer package. Now, anyone dreaming of a cuddly toy (whether in Łódź, Zgierz, or any other corner of Poland) can easily sign up for the waiting list.

## Struggles with Deployment and Configuration

No project is 100% perfect from the very first line of code. I had a few small hiccups at the start—when deploying the site to Vercel, some build process errors popped up. I had to spend some time tweaking the TypeScript configuration (`tsconfig`) and dig into the Nuxt Studio settings. Once I sorted out the repository paths (to remove those annoying 404 errors in preview mode), everything finally started running like clockwork.

## Design and Details That Make the Difference

It was very important to me that the "handmade" feel was visible at first glance.

* **Razor-Sharp Logo:** I threw out the old, standard icon in the header. In its place went a beautiful, vectorized SVG logo (which I added via the `@nuxt/icon` module). I scaled it, matched it to the primary theme color ("leather"), and the site instantly gained that professional, razor-sharp look. Additionally, the browser icon (favicon) became an adorable, cropped thumbnail of the main mascot.
* **Perfect Positioning:** Sometimes the little things make the biggest difference. I played around with the positioning of the "HANDMADE" emblem next to the contact form for a long time until it finally landed in its perfect spot. I also tweaked a few things in the "Hero" section, centering the descriptions on desktops and adjusting the height.

## Responsiveness First!

Let’s face it—most people browse the internet on their phones today, scrolling through Instagram or sitting on the tram. That's why I redesigned the entire interface with "Responsive Web Design" in mind. And I did it smartly! I made the navigation smoothly adapt to the screen without duplicating code elements in the DOM (which, unfortunately, many developers still do). For mobile phones, I also added a nice, sticky top menu to make navigating the project gallery as comfortable as possible.

## What's Next? Handmade Crafts Live!

The custom website is up and running, clients can easily get in touch and sign up for the waiting list for their amigurumi bear, and Nuxt Content v3—after a small refactor I did—ensures that managing files and the gallery via Markdown is super simple.

But that's not the end of my ideas. We already have a great base, so in the near future, I plan to implement a live stream player on the site! That's right—we plan to bring crocheting to the screen and create a dedicated section on the site that will stream YouTube live broadcasts directly. Visitors will be able to watch the plushies being made in real time.

Creating these dedicated solutions brings me a ton of joy. Seeing how a fast, beautiful website helps local businesses from our area reach a wider audience—I know this work makes absolute sense. If you’re thinking it’s time for your own independent place on the web, believe me, it’s worth it!