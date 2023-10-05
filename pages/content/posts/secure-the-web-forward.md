---
author: "Florian Scholz, Will Bamberg"
title: "Docs to Secure the Web Forward"
date: "2023-10-05"
tags: ["announcements"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "Open Web Docs attended the Secure the Web Forward W3C workshop."
---

Open Web Docs attended the W3C workshop [Secure the Web Forward](https://www.w3.org/2023/03/secure-the-web-forward/index.html). The workshop was held virtually on September 26-28, 2023 with the goal to drive developer awareness and adoption of web security standards & practices.

We handed in a position paper called [Documentation for web security education](https://www.w3.org/2023/03/secure-the-web-forward/papers.html#owd) and presented our paper as part of the "Developer awareness" track on the last day of the workshop.

In the paper, we take a look at the [MDN short survey results on web security](https://github.com/web-platform-dx/developer-research/blob/main/mdn-short-surveys/2023-05-15-security-dx/interpretation.md).

The responses to the survey suggest a clear need for better education, tools, and best practices to assist developers in detecting and preventing security vulnerabilities in their development workflows. On average, 60% of developers rated the security aspects as somewhat challenging or very challenging, while only 17% of developers rated them as easy or very easy.

With this need in mind, we took a look at the current state of the [MDN security documentation area](https://developer.mozilla.org/en-US/docs/Web/Security), proposed a better structure, and started conversations how to create better documentation for web security.

The talk was recorded:

- [Video & transcript](https://www.w3.org/2023/03/secure-the-web-forward/talks/owd.html)
- [HTML slides](https://florianscholz.com/security-docs-workshop/)
- [PDF slides](https://www.w3.org/2023/03/secure-the-web-forward/talks/slides/owd.pdf)

<iframe width="560" height="315" style="display: block; margin: 0 auto" src="https://www.youtube.com/embed/aAx6-wPaOHc?si=gXVpjo54M8doV8R6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Many thanks to the [program committee](https://www.w3.org/2023/03/secure-the-web-forward/index.html#pc) and in particular to Dan Appelquist (Snyk) and François Daoust (W3C) for inviting us and for all the work on organizing this workshop!

Some takeaways from the discussion that followed the presentation of our paper:

- Agreement that documentation plays a major role in the adoption of best practices and in understanding threats and defense mechanisms.
- Lots of support for a standard "Security considerations" section in reference docs, like MDN has for accessibility.
- There is some gatekeeping going on: We should aim to empower more people and make security more accessible to everyone and not act like security is some else's problem. (or only the browser's problem, or only a problem on the server side).
- Related: No need to be a "Security expert" to care and work on security. Everyone should be responsible and even doing basic checks is already better than doing nothing at all.
- We need to document end user impact: the why, and the potential harm, to help developers (and their managers) understand the value of good security practices.
- We will see regulation in this space, for example the [Cyber Resilience Act](https://en.wikipedia.org/wiki/Cyber_Resilience_Act), but there are no guidelines or best practices. Maybe we need WCAG but for security to help inform regulations.
- Can we incorporate security advice inside IDEs and devtools?
- Can we have demos of security problems, to make them less abstract?

As a next step, we hope to meet again with interested folks to:

- Workshop a content outline for structured documentation on web security including the four quadrants of documentation (tutorials, how-tos, guides, reference).
- Get more insights into developer needs and misunderstandings in the web security field (maybe through additional surveys or user interviews).
- Create guidelines for a "Security considerations" section on reference pages.

We hope to use all of these discussions, the research and the work on a content outline to formulate an Open Web Docs project on web security documentation which we can work on in 2024.

Please reach out to Florian or to Will to be included in planning.
