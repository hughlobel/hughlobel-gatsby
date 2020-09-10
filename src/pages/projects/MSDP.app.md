---
templateKey: projects-post
title: MSDP.app
date: 2020-12-17T15:04:10.000Z
featuredpost: true
featuredimage: /img/msdp_2.0_banner.jpg
imageUrl: msdpSiteImage1.jpg
imageAlt: msdp_2.0_banner.jpg
concepts:
  - SSG (Static-Site Generator) Website Development 
  - Software Distribution
  - Website Copywriting
  - Web Design
  - Community Building + Social Media Marketing
tools:
  - Hugo
  - Markdown
  - Javascript / NodeJS
  - Go
  - AWS S3
  - AWS Lambda
relatedLinks:
  - link: '#'
    text: Learn about the MSDP program
  - link: '#'
    text: Learn about the MSDP documentation, education, and social media campaigns
more:
  - link: 'https://www.msdp.app'
    text: Visit the MSDP website
  - link: 'https://www.facebook.com/groups/msdp.community/'
    text: Join the MSDP Facebook group
description: The website for MSDP acts as both a hub for information about the program, and as the official download source.
category: Website Development and Design
tags:
  - multimedia software
  - music software
---
## Overview
MSDP.app is the official website for the distribution of the MSDP program, along with information about the platform. It was built with Hugo, uses AWS S3 and Lambda, and is deployed to Netlify via Github.

## Development Notes
The MSDP website was completely rebuilt from the ground up to coincide with the launch of MSDP version 2.0. Because this was a personal project, both the development and design was lead by Hugh Lobel, but Michelle Cutler was brought on as a design consultant, and she assisted in the creation of a variety of new assets, including a new logo and new photography.

When building this site, speed was a huge focus. There were a number of speed-related problems that had to be addressed:  

---

**Problem #1.** Because MSDP is a popular app in academia, the website would be visited by people on shared networks, either at school or at dorms. To ensure a good experience on slow networks, the website needed to have a very small footprint, and the site couldn't depend on large libraries that needed to be downloaded.  

**Solution #1.** To address this issue, the site was built with Hugo, a static-site generator that compiles projects into incredibly lean websites. Hugo allowed the project to avoid using large Javascript libraries to tackle common problems. On build-time, Hugo does an excellent job of compiling the project down to a very small footprint. Netlify was selected as the hosting platform, as it specializes in hosting serverless content and is optimized around it. For content delivery, Netlify offers it's own CDN, but video was hosted on YouTube and embedded on the site, so that larger files would load in after the site's first contentful paint.

---

**Problem #2.** Because MSDP is a relatively young application without a marketing budget, visitors need to know *immediately* what the program is, and need to very quickly feel compelled to try it out. This is complicated by the fact that MSDP is a very large, multi-faceted program that is applicable in a large variety of artistic spaces.  

**Solution #2.** It was determined that visitors needed to be convinced to try the application before they began scrolling past the fold on the home page. Along with the program name, the home page hero contains three elements:  

* A one sentence description that emphasizes that the program is free and open-source (both explaining what it is succintly, and giving you a compelling reason to try it). 
* A download button with the application's logo (re-inforcing brand and compelling the visitor to act). 
* A carefully designed YouTube video embedded into the hero of the site, that explains the program while sharing audio and visuals built directly in the program.

The rest of the home page includes images and copy that explain the value of the application for different scenarios and different types of artists. At the end of the page, before the mailing list sign-up, is another call to action that leads to the download page while reminding the visitor that the application is both free and open-source.

---

**Problem #3.** The executable for the file is slightly over one gigabyte in size. On affordable hosting services, files of this size are not permitted, or if they are allowed, download slowly for the visitor. When downloading the application from the server that hosted the 1.0 version of MSDP, users could expect to wait 20-30 minutes to download this much data.

**Solution #3:** Amazon Web Services (AWS)' S3 provided the perfect solution to this dilemma. By hosting the files on Amazon, users can download the executable at the same speeds available to industry leaders. Along with S3, AWS was also utilized to provide functions that would normally be available on websites that leverage a persistent server.