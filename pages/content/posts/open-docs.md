---
author: "Florian Scholz"
title: "Maximizing impact of open documentation for the web platform"
date: "2023-07-20"
tags: ["announcements"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "The Open Web Docs community believes that freely available open web platform documentation, written by experts, and contributed to by the community is essential to the ongoing health of the web."
---

The Open Web Docs community believes that freely available open web platform documentation, written by experts, and contributed to by the community is essential to the ongoing health of the web. In this post we outline our relationship with MDN as the current main web presentation of the open source content we contribute to, and share our thoughts on future presentations and uses of this content.

Since its inception in 2021, Open Web Docs has been heavily contributing to [mdn/content](https://github.com/mdn/content), which contains the documentation for all features of the web platform, and [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data), which contains detailed browser-compatibility data for all features of the web platform. These two repositories are the foundation of Mozilla's [MDN Web Docs](https://developer.mozilla.org/). These repositories are also used by [devdocs.io](https://devdocs.io/) and [caniuse.com](https://caniuse.com/#comparison), and there are integrations with browser tools, W3C and WHATWG specifications, other developer tools, and IDEs as well.

Open Web Docs believes that contributing to these open source projects drives the biggest impact on web developer documentation worldwide. These repositories build a foundation that helps developers understand web technologies.

Thanks to the clarity of open source licenses and the generosity of open source contributors, `mdn/content` and `mdn/browser-compat-data` data can be published anywhere by anyone.

Over the years, several MDN community members have created forks of `mdn/content` for their own publication and use. While OWD continues to see this pattern as a feature rather than a bug of open source, OWD plans to continue contributing to the upstream `mdn/content` repository and encourages the community to continue making their own content contributions to the upstream repository in order to sustain the high degree of quality and editorial review necessary for content of this caliber and importance.

The proper presentation of web platform documentation should be driven by the needs of the web development community and what is best for it.

Consuming technical documentation using a website has been the standard practice for many years, but developer needs are changing. Web platform documentation can benefit developers in many other useful ways if it is made available not only through a website but also within context to not interrupt developers in their flow, for example in developer tools (in browser developer tools and extensions, IDEs, and other code editors). Sites and platforms that have specific goals or audience needs in mind might provide only documentation components that are relevant given that context.

Since its founding, Open Web Docs has focused on supporting the quality and coverage of web platform docs as [core digital infrastructure](https://github.com/openwebdocs/project/blob/main/charter.md), whether they are embedded on websites, platforms suited to specific needs, or within context in new and existing products, like IDEs and code editors. Migrating the docs into markdown was one of our initial steps; our next project on this path will be developing [embeddable versions of the HTML and CSS documentation](https://github.com/openwebdocs/project/issues/174).

We imagine an ecosystem of tools and resources that deliver high-quality, technically correct web platform documentation and data wherever the developer needs it. If your organization or project is interested in embedding open web platform documentation into your tools or services, we would love to hear from you. Please reach out to [florian@openwebdocs.org](mailto:florian@openwebdocs.org).
