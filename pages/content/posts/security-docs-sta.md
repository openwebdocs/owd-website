---
author: "Will Bamberg"
title: "Web Security docs on MDN"
date: "2026-06-17"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "All about our project to document web security on MDN"
---

Back in September 2025, we [announced](/content/posts/stf-investment-2025/) that the [Sovereign Tech Agency](https://www.sovereign.tech/) had provided funding to enable Open Web Docs to create developer documentation on web security and privacy. This month we've completed the biggest section of the project: to update the web security documentation on MDN. In this post we'll have a look at what we've added, and what's coming up next.

## MDN Web Security Docs

The docs we've written for MDN consist of four main pillars: Attacks, Defenses, Threat modeling, and Authentication.

### Attacks

Under [Attacks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks), we have a separate article for each type of attack, or in some cases, such as [cross-site leaks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks), for a class of related attacks. We describe the conditions in which a website is vulnerable to the attack, outline possible defenses and recommend which defenses a developer should adopt. We've tried to make these guides highly accessible and very practical.

### Defenses

Under [Defenses](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses), we describe web platform features or developer practices that can be used to defend against attacks. There's typically a many-to-many relationship between attack and defenses. That is, a single defense can protect against multiple attacks, and defending against a single attack may require multiple defenses, so as to provide defense in depth.

Some of the Defenses docs existed already, but we've added new ones and made some updates to the existing ones.

In some cases, the guides to defenses live outside the Web/Security tree - for example, the docs on [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) or [Fetch metadata](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata) live inside MDN's HTTP documentation.

### Threat modeling

[Threat modeling](https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling) is the art of understanding which possible threats a system faces, so a developer can understand which corresponding defenses they need to deploy. As in our other work, we've focused on writing accessible and actionable guides, with [practical examples](https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling/Example_threat_model) walking through sample web applications.

### Authentication

Finally, we have a section dedicated to [authentication](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication), which is centred on a series of guides to four common authentication methods: [traditional passwords](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passwords), [one-time passwords](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/OTP), [federated identity](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Federated_identity), and [passkeys](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passkeys). We describe how each method works, which attacks each method is vulnerable to, and good practices to follow to minimize the risks.

## The SWAG CG

Although most of this project has consisted of writing docs for MDN, we've also participated in the [Security Web Application Guidelines Community Group (SWAG CG)](https://www.w3.org/community/swag/).

The main deliverable of SWAG CG is the [Secure Web Application Guidelines](https://w3c-cg.github.io/swag/docs/swag.html) report. As we've been researching and writing security documentation for MDN, we've also distilled some of our findings into this document, to give web developers a concise set of guidelines for securing their sites.

In 2025 the SWAG CG also ran a web security survey aimed at web developers. We wanted to know about how they approached securing their sites, and which defenses they used. We learned that:

- There is a need for web security documentation aimed at generalist web developers.
- There are some features that are used less than we might have expected, and better documentation could help with adoption in these cases.

For more details, see the [SWAG CG report](https://github.com/w3c-cg/swag/blob/main/surveys/web-security-survey-2025.md).

## What's next

The remainder of this project is dedicated to updating and extending the docs on web privacy. This will be less extensive than the security docs, but we are hoping to cover:

- An explanation of what privacy on the web means, and why it matters.
- Guidelines for how a website should request and handle user data.
- Discussion of tracking, especially around cookies. We will cover the ways browsers restrict third-party and tracking cookies, and the use of partitioned cookies to enable legitimate uses for third-party cookies, without enabling tracking.
- Descriptions of regulatory requirements around privacy, including the [GDPR](https://gdpr.eu/) and the [California CCPA](https://www.oag.ca.gov/privacy/ccpa).

## Thanks!

Thanks first and foremost to the Sovereign Tech Agency for funding this project. Having a reliable source of funding is essential to secure the resources needed for a sustained project like this.

Thanks also to:

- [Dan Appelquist](https://www.torgo.com/blog/), for starting and chairing the SWAG CG, giving us a home where we could plan this work and connect with technical experts.
- Our expert reviewers and collaborators, including [Aaron Shim](https://github.com/aaronshim), [Freddie Braun](https://frederikbraun.de/), and [Simone Onofri](https://onofri.org/), for helping us to understand and document many web security topics, including CSP, XSS, trusted types, cross-site leaks, Fetch metadata, and threat modeling.
- [Hamish Willee](https://github.com/hamishwillee), for reviewing so many security docs PRs, and always giving us thoughtful feedback.
