---
author: "Will Bamberg"
title: "OWD projects in H1 2023"
date: "2023-07-12"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "A quick survey of the projects we completed in H1 2023"
---

We're at the start of H2 and [planning the projects we expect to take on next](https://github.com/openwebdocs/project/issues/171). So it's a good time to look back at the projects we completed in the first half of the year. We've blogged about a couple of these projects before and hope to write more detailed posts about some of the others, but for now, here's a relatively quick rundown.

As well as the projects listed below, we've continued our day-to-day work of supporting the MDN contributor community, by mentoring volunteers and reviewing PRs.

## The great renaming of Web/API

This year we finally addressed a problem with MDN's Web/API docs that has vexed web developers [since at least 2018](https://discourse.mozilla.org/t/incorrect-titles-for-method-property-articles/31641): that the titles of pages for Web/API properties and methods, like the [`postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/postMessage) method of the `ServiceWorker` interface, were written as though they were static members of those interfaces, like `ServiceWorker.postMessage()`.

Discussion of an acceptable alternative reached consensus in 2022, but implementing the change consistently across all 4000 or so pages only became practical after we had assigned machine-readable [page types](https://github.com/openwebdocs/project/issues/91) to the Web/API pages. After that, we could update the titles in a couple of days.

The retitling also enabled us to document, for the first time, Web/API static methods that have the same name as Web/API instance methods, like [`Response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json_static).

For more details on this project, see our separate post on [The great renaming of Web/API](https://openwebdocs.org/content/posts/web-api-page-titles/).

## Documenting interoperable Web/API features

In January, [Dominique Hazaël-Massieux](https://www.w3.org/People/Dom/) came up with the [mdn-gaps tool](https://dontcallmedom.github.io/mdn-gaps/), which cross-checks between items in BCD, items in the specifications, and pages in MDN, to flag web platform features that are in at multiple browser engines, but don't yet have docs on MDN.

This enabled us to start a project to document all Web/API features that are supported in at least three browser engines. We split this into phases:

- [the first phase](https://github.com/openwebdocs/project/issues/152) includes all features except those that relate to the HTML and SVG specs, that are often reflections in JavaScript of attributes in those languages.
- [the second phase](https://github.com/openwebdocs/project/issues/153) includes the HTML and SVG features.

In H1 we completed the first phase, adding over 100 new reference pages to MDN, including topics in such diverse and important APIs as [web components](https://github.com/mdn/content/pull/25649), [service workers](https://github.com/mdn/content/pull/24494), and [file handling](https://github.com/mdn/content/pull/25621).

This project also has its own standalone post: see [Documenting missing interoperable web features](http://localhost:8080/content/posts/complete-interop-features/).

## Progressive web apps revamp

Also in January, [Patrick Brosset](https://patrickbrosset.com/), who's one of the Microsoft representatives on our Governing Committee, proposed [a project to update the MDN documentation for progressive web apps](https://github.com/mdn/mdn/issues/280). MDN's docs on progressive web apps were mostly written in 2017, and were never substantially updated since.

To get an idea of what kind of content to add, we used the [Divio documentation system](https://documentation.divio.com/) which describes four different types of documentation, that each perform a different function. The Divio system is - we think - one of those ideas that is so useful, that when you hear it, you wonder why you never thought of it before.

We've never really used Divio on MDN, because most of our work is on reference docs only. But the progressive web apps project added mostly learning material, such as guides and tutorials, and we found the Divio system very helpful in planning our work. We added [explanations](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides), [how-to pages](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to), a new [tutorial](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker), and updated the existing [reference docs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Reference) where that was needed.

Patrick not only proposed the project, but helped plan it and wrote and reviewed a lot of the content. We think OWD's super power is our connections with people like Patrick, and we're very grateful for his engagement with us in this and other projects!

## Performance API docs revamp

This project was [originally proposed by Google in 2021](https://github.com/openwebdocs/project/issues/62), and saw us completely overhauling the reference documentation for the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API).

The Performance API enables web developers to gather metrics about various aspects of a web application's performance, such as how [long it takes for event handler to run in response to a user action](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming) or [how long it takes to download and process a resource](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Resource_timing).

The existing MDN docs were incomplete and out of date, and did not present a unified view of the different APIs, or include useful guide pages.

We wrote or rewrote around 150 reference pages, reorganized the Performance API reference docs to be in a single structure, and wrote new guide pages.

## Fixing BCD errors

The final project we'll highlight today was to fix errors in browser compatibility data.

The BCD project uses a tool called the [mdn-bcd-collector](https://mdn-bcd-collector.gooborg.com/), which tests browsers for support of various web platform features. When the results of this tool differ from the data in the [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) repository, this is sometimes a false positive, but often points to an actual error in the data.

This year, we're working on a project to eliminate these errors from the BCD repository for all browser releases from 2020 onwards. In the first half of the year we completed the main part of this work, to fix errors in the [Web/API, CSS, and JavaScript](https://github.com/openwebdocs/project/issues/85) sections of the data.

This gives web developers a more accurate picture of the compatibility status of a feature, whether they use MDN, Caniuse, or some other application that integrates BCD.

## What's next?

We're currently [planning our H2 projects](https://github.com/openwebdocs/project/issues/171). As you might see from the list above, many of our projects are those proposed by the web developer community. So if there are content projects you'd like to see us work on, we encourage you to [file a proposal](https://github.com/openwebdocs/project/issues/new?assignees=&labels=not+ready&projects=&template=owd-project.yml), and talk to us about it. If you want to work with us on it, either to help specify the work or even to help with writing, that's great too!

Open Web Docs is a non-profit collective entirely funded by individual and corporate donors. We're very grateful to [everyone who contributes to us](https://opencollective.com/open-web-docs), thereby enabling us to continue our work. If you or your employer don't currently donate to us, but think our work is valuable, please consider donating, or asking your employer to.
