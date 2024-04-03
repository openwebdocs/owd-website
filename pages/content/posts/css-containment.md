---
author: "Estelle Weyl"
title: "CSS containment"
date: "2024-03-19"
description: "Improving CSS containment documentation"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "The Open Web Docs team is improving documentation for all Baseline features. Most recently, the CSS containment module has been revised, along with a new guide on using size and style container queries."
---

One of the Open Web Docs's 2024 goals is to [document features supported by the three browser engines](https://github.com/openwebdocs/project/issues/153), including ensuring all [Interop features](https://wpt.fyi/results/) are fully documented.

We are starting by documenting all the features of [Interop 2021-22](https://github.com/openwebdocs/project/issues/189) and [2023](https://github.com/openwebdocs/project/issues/190). In Q4, we will focus on the [Interop 2024 features](https://github.com/openwebdocs/project/issues/191) that will be newly supported.

## CSS containment project

The first sub-project completed was [CSS containment](https://github.com/openwebdocs/project/issues/195). CSS containment is part of both [Interop 2022](https://wpt.fyi/interop-2022) and [Interop 2023](https://wpt.fyi/interop-2023), and is still being worked on as part of [Interop 2024](https://wpt.fyi/interop-2024).

Containment improves rendering performance by isolating sections of content for delayed layout and rendering. Container queries, also defined in the CSS containment specification, enable targeting styles based on a container's size or style features.

We created a new [CSS containment module](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment) landing page. The module landing page includes a reference with links to all the properties, at-rules and descriptors, CSS functions, events, interfaces defined in the CSS containment specification, and guides. All of these references were reviewed and updated as necessary.

The larger component of this project included updating the existing containment guides and creating new ones.  We also created a new guide.

### CSS containment guides

There are now three CSS containment guides on MDN:

* [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries): 
We updated this introductory `@container` queries guide, which discusses size queries, naming queries, and container query length units, which are well supported. We left in the fallback for now, but look forward to removing it!

* [Using CSS containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment):
We fully updated this guide which describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` properties for a better user experience. The guide explains size, layout, style, and paint containment.

    We also moved this guide to follow the current CSS guide structure of module-relevant guides being housed under the associated CSS module landing page.

    The `contain` property is supported in all browsers. The two other main features defined in the containment specification -- `content-visibility`, which improves initial page load speed by enabling browsers to omit sections of layout and rendering until the content is needed becomes needed, and `@container` queries, that enable applying styles to an element based on the size or style feature of a containment context -- has more limited support. But, as per the goals of Interop, support is improving, and now, the documentation for these up and coming features is available!  

- : [Using container size and style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)

    The largest part of this project job was creating this new guide to writing container size and style queries with `@container`, including style queries for custom properties, query syntax and names, and nesting container queries. 

    This new guide covers all the basics of currently supported container queries including a deep dive into container size queries and the size query descriptors, naming containers to limit their scope, and using the `style()` functional notation within the `@container` at rule's `<container-condition>` to create style queries with custom properties.

    The guide also touches on container style feature queries, as we await browser support for this exciting feature.

### Open Web Docs

Because of OWD, our technical writers are able to review and update existing content and dedicate the time to write in depth guides when documentation is found to be lacking, as was the case with container style queries with custom properties. We found a void and had the support to fill it!

If you use MDN and find these resources helpful, please [become an Open Web Docs sponsor](https://opencollective.com/open-web-docs#category-CONTRIBUTE). Contributions are what make OWD and our documentation efforts possible.