---
author: "Jean-Yves Perrier"
title: "Documenting missing interoperable web features"
date: "2023-04-17"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "Filling some MDN gaps by documenting missing interoperable features."
---

[MDN Web Docs](https://developer.mozilla.org/) is an invaluable information set about the web platform. With about 12000 pages, it is the most extensive corpus of documents that web developers can referene to create their websites.

Unfortunately, despite being almost 20 years old, many reference pages still need to be included. We call these missing pages _gaps_, and even have tools to detect some of them:

- Mozilla's [Yari](https://github.com/mdn/yari/) renderer logs missing pages as flaws when it builds a page.
- [Dominique Hazaël-Massieux](https://www.w3.org/People/Dom/), of the [W3C](https://www.w3.org/), created the ([mdn-gaps](https://dontcallmedom.github.io/mdn-gaps/)) tool which lists all specification features with missing reference documentation. 

![MDN gaps screen shot showing 5 missing fetch standard API pages and the browser support each feature](mdn-gaps-example.png)

These tools enable us to identify missing content and understand the extent of the issue.

## Why are there gaps on MDN?

Gaps came organically. MDN Web Docs is the home of a diverse set of documents. Initially, writers put great effort into documenting Firefox technologies like XUL and XBL, and time was scarce to focus on standardized languages. While CSS, HTML, and JavaScript were well documented, docs for APIs were an afterthought. They were still living under a DOM hierarchy on MDN. With the advent of HTML as a living standard and CSS module structure initiatives (and later the EcmaScript 6 one), Mozilla Developer Network's focus shifted from proprietary to open and interoperable technologies. The shift was progressive, culminating in rebranding the site as _MDN Web Docs_, the archiving of XUL and XBL docs, and, later, the move of [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/) documentation to a dedicated website.

But, since the early 2010s, and even a bit earlier, standard bodies and browser makers rapidly specified and implemented new APIs. The focus was to document these new features: they were the focus of web developers, and there needed to be more good documentation about them! It was an easier move to sell internally: new technologies lead to more engagement; getting resources to document them was more straightforward than the old HTML table features, for example. The HTML5, CSS3, and ES6 initiatives allowed MDN to revamp these areas of documentation as there was an interest in positioning the web as a recognized interoperable platform.

![The three logos of HTML5, CSS3, and JS](logos.png)

So, the combination of the scarcity of resources and the high-speed development of the web platform led to the original gaps staying open. Some mitigating actions were taken, like listing every method and property for each interface, but there was still a large gap (more than 1000 missing pages).

Today's gaps mostly fall into three categories:

- HTML DOM and the SVG DOM features added to the web platform when MDN was still in its infancy;
- non-interoperable features: APIs supported by only one or two browser engines and missed by the browser makers' writers;
- single properties and methods forgotten when their API was initially documented or added later (but they slipped below the radar of the different writing processes).

## Opportunities created by the Interop initiative

As a collective of writers dedicated to helping document the open web platform, [Open Web Docs (OWD)](https://openwebdocs.org/) can help in _closing some of these gaps_. Unlike writers paid by browser makers needing to justify their work, our backers, individuals or companies, gave us the more generic mission to improve the open web documentation. We focus on much-needed activities that do not necessarily bring the most engagement at first, though improving in the middle term situation significantly. We still need to focus on the most valuable activities, but anybody's internal projects do not dictate our priorities.

For several years now, browser makers have sat together at the end of each year to discuss the pain points of web developers and define a set of features that needs more love to increase their functionality or to fix bugs and incoherence so that web devs can use them reliably. They define areas to focus on as part of the [Interop](https://web.dev/interop-2023/) initiative.

OWD, and its partners, think these projects are good opportunities to revisit the relevant area of the MDN Web Docs documentation: the idea is to have the docs in good shape for each set of features made interoperable over the year. Most of the time, this leads to minor changes to the docs: MDN writers tried to describe the interoperable behaviour, only mentioning browsers when their implementations diverged.

One of the Interop focus area this year, [interop-2023-forms](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-forms%20or%20label%3Ainterop-2023-forms), is about making HTML Forms genuinely interoperable. It was an excellent opportunity to fill part of the MDN gaps. So we decided to do the following:

1. Document all interoperable APIs unrelated to HTML and SVG.
2. Document all interoperable HTML APIs not part of the DOM (that is, everything in the HTML spec that is not an `HTML*Element` property or method).
3. Finally, document all missing HTML*Element features related to `<form>` (For example, `HTMLSelectElement`, `HTMLInputElement`, or `HTMLButtonElement`properties and methods).

The two first points let us detect any newly interoperable property or method and document it if nobody has done it before. We already found some after the launch of Safari 16.4 (like [`WritableStreamDefaultController.signal`](https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/signal)). These two initial steps will enable us to maintain the completeness of our API reference for interoperable features once we finish documenting the backlog.

## Current progress

During the first Quarter of 2023, we focused on the first point, documenting all interoperable APIs unrelated to HTML and SVG (See our [tracking project](https://github.com/openwebdocs/project/issues/152)). We added more than 100 pages to MDN, documenting missing modern features like [`CSSLayerBlockRule`](https://developer.mozilla.org/en-US/docs/Web/API/CSSLayerBlockRule) and [`CSSLayerStatementRule`](https://developer.mozilla.org/en-US/docs/Web/API/CSSLayerStatementRule), or old features writers forgot over the years, like [`XMLHttpRequestUpload`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestUpload).

Already we can detect missed interoperable, unrelated to HTML and SVG DOMs, features that become interactive: for example, we added the [`CSSFontFeaturesValuesRule`](https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFeatureValuesRule) that became interoperable in Q1.

In this Quarter, we will document HTML APIs not part of the HTML DOM, interfaces like `ErrorEvent`, `HTMLAllCollection`, or even `HTMLOptionsCollection`. You can follow our progress in our [tracking GitHub issue](https://github.com/openwebdocs/project/issues/153) In the future, writers will link numerous times to these documents. New pages will not have _red links_, links to non-written pages, improving the quality of our new docs. We also plan to improve the documentation for the _Constraint Validation API_ this Quarter.

Then, in Q3, we plan to tackle the last point, the missing `HTML*Element` features related to forms. Overall we plan to add 350 pages this year, about 30% of the overall gaps (for interoperable features).

## And all the rest?

About 700 more interoperable properties and methods will not be documented after this first project. Even if we do not have a plan, we have a few ideas to tackle the remaining gaps. For SVG, we would like to take a similar approach: first, we would like to document fundamental interfaces, like the types: `SVGLength`, `SVGAnimatedLength`, … Then, in the second phase, we would like to call the community for help: there are a lot of similar docs to write, like the different kinds of SVG filters. The pages will have the same structure, although the examples will differ. We will see what will happen, and hopefully, we can report back on progress here!
