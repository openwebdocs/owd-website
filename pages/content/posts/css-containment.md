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

One of the Open Web Docs team's goals for 2024, is [document features supported by the three browser engines](https://github.com/openwebdocs/project/issues/153). This includes ensuring that all [Interop features](https://wpt.fyi/results/) are well and fully documented.

In 2024, we will be documenting all the features from [Interop 2021-22](https://github.com/openwebdocs/project/issues/189), [2023](https://github.com/openwebdocs/project/issues/190), and, towards the end of the year when [2024 features](https://github.com/openwebdocs/project/issues/191) are mostly implemented.

## CSS containment project

The first "Interop feature" project completed was [CSS containment](https://github.com/openwebdocs/project/issues/195). CSS containment is part of [Interop 2022](https://wpt.fyi/interop-2022) and [Interop 2023](https://wpt.fyi/interop-2023), and is still being worked on for [Interop 2024](https://wpt.fyi/interop-2024). 

Containment can be used to improve rendering performance. Container queries, defined in the CSS containment specification, enable targeting styles based on a container's size or style features.

As part of this project, we created a [CSS containment module](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment) landing page, reviewed all the feature pages linked to from that page, and created a new [guide](#css-containment-guides).

The module landing page includes a reference with links to all the properties, at-rules and descriptors, CSS functions, events, and interfaces defined in the CSS containment specification. All of these references were reviewed and updated as necessary.

The larger component of this project included updating the existing containment guides and creating new ones.

### CSS containment guides

We fully updated the [using CSS containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment) guide.

This guide describes the basic aims of CSS containment and how to leverage `contain` and `content-visibility` properties for a better user experience. The guide explains size, layout, style, and paint containment.
We also moved this guide to follow the current CSS guide structure of module-relevant guides being housed under the associated CSS module landing page.

The `contain` property is supported in all browsers. The two other main features defined in the containment specification -- `content-visibility`, which improves initial page load speed by enabling browsers to omit sections of layout and rendering until the content is needed becomes needed, and `@container` queries, that enable applying styles to an element based on the size or style feature of a containment context -- has more limited support. But, as per the goals of Interop, support is improving, and now, the documentation for these up and coming features is available!  

We updated the introductory [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) guide, which discusses size queries, container query length units, and fallbacks. This introduction to container queries covers size container queries, which are well supported. 

A larger job was creating a new [Using container size and style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries) guide. This guide covers writing container size and style queries with `@container`, including style queries for custom properties, query syntax and names, and nesting container queries.

This guide covers all the basics of currently supported container queries including container size queries, naming containers to limit their scope, and using the `style()` functional notation within the `@container` at rule's `<container-condition>` to create style queries with custom properties.

### Open Web Docs

Because of OWD, our technical writers are able to review and update existing content and to dedicate the time to write in depth guides when documentation is found to be missing. 

If you use MDN and find these resources helpful, please [become an Open Web Docs sponsor](https://opencollective.com/open-web-docs#category-CONTRIBUTE). Contributions are what make OWD and our documentation efforts possible.
