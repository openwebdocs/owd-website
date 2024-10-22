---
author: "Will Bamberg"
title: "Security documentation at TPAC 2024"
date: "2024-10-18"
tags: ["announcements"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "At TPAC Anaheim, the Open Web Docs team spoke with security experts about security documentation needs."
---

In September, Open Web Docs attended [TPAC](https://www.w3.org/2024/09/TPAC/), the main annual meeting for the W3C. It's the first time we've been together for almost 2 years, and it was great to reconnect with each other and with many of our collaborators. We proposed and chaired a [breakout session](https://github.com/w3c/tpac2024-breakouts/issues/96) about the activities of the [Security Web Application Guidelines Community Group (SWAG CG)](https://www.w3.org/community/swag/), and in this post we'd like to summarise some of the discussions that came out of this.

The SWAG CG was formed by [Dan Appelquist](https://mastodon.social/@torgo) in June 2024 and has been meeting weekly since then. Its mission is:

> To increase the overall security of web application development, thereby making the web a more secure platform for web users. It will accomplish this by writing security best practices for web developers and providing a platform for stakeholder collaboration.

Open Web Docs participates in this group because we think better documentation will improve the state of web security, and we think the SWAG CG can reveal gaps in web security documentation and provide technical support for us as we work to fill them.

At TPAC [we presented four topics in security documentation](https://wbamberg.github.io/web-security-w3c-breakouts-september-2024/Templates/Overview.html) that have come up through the work of the SWAG CG:

- **Security 101**: a page, or a series of pages, on [MDN](https://developer.mozilla.org), listing fundamental things a developer can do, that have a big impact on the security of their site. This is partly addressed by the work [Chris Mills](https://github.com/chrisdavidmills/) has done on [Practical security implementation guides](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides), but there may be further updates needed.

- **Security considerations for Web APIs**: some web platform features — [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch), for example — have special implications for web security. Features like this should have a "Security considerations" section in their reference pages summarizing these implications, so they're more apparent to developers using the feature.

- **Frameworks and libraries**: security documentation should help developers make good choices about which third-party software to use, either by recommending specific libraries or by [writing guidelines that developers can use to make their own choices](https://github.com/w3c-cg/swag/issues/1).

- **Content security policy (CSP) adoption**: can more consistent and approachable documentation help more developers implement an effective [content security policy](/en-US/docs/Web/HTTP/CSP) for their sites? While [OWASP recommends a strict CSP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html#csp-types-granularallowlist-based-or-strict) which uses nonces and hashes rather than an allowlist, MDN's documentation does not mention strict CSP. We should aim for consistency here so we can give a clear message to developers.

The [conversation that followed](https://www.w3.org/2024/09/25-mdn-security-minutes.html) took in a number of interesting ideas in connection with these topics, and we've highlighted a few of them below:

- It would be easier for developers to deploy a CSP if it were provided out of the box by frameworks and libraries.
- We should consider not just documentation but the full set of support that developers can use to implement secure websites, including developer tools and testing. There may be opportunities for integrating documentation into workflows. For example, if there is tooling to help test whether a website will break when its CSP is deployed, we could integrate errors with documentation, so developers can understand and fix the issues (note that this is what the [Mozilla observatory](https://developer.mozilla.org/en-US/observatory) is already doing).
- We should relate security documentation to the developer journey, mapping guidance to the lifecycle of a project. For example, when a developer chooses their dependencies, they should consider how this choice will impact the CSP they will want to enforce.
- How should we maintain security documentation as guidance changes? Sometimes a security recommendation becomes less important as browsers deploy more secure defaults (for example, with respect to [`Referrer-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)). This is like [Baseline](https://web.dev/baseline/): once a feature has good browser support, knowing the exact support situation is less important. One way to help with this is to document attacks separately from specific mitigations: while guidance about mitigations changes relatively frequently, the threats faced by web developers tend to stay the same over time.

The next steps for Open Web Docs are to revise MDN's CSP guidance, to write a set of pages documenting common attacks, and to integrate feedback on the "Security 101" material on MDN.

As writers, especially in a relatively specialized area like security, it's critically important to have this kind of engagement with domain experts, so we're very grateful to the participants in the SWAG CG and in the TPAC session for their time and expertise. If you're interested in how we can give better security guidance to web developers, we'd encourage you to [participate in the SWAG CG](https://www.w3.org/community/swag/), as well!
