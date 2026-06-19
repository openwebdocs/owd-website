---
author: "Will Bamberg"
title: "Web Security docs on MDN"
date: "2026-06-22"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "All about our project to document web security on MDN"
---

Back in September 2025, we [announced](/content/posts/stf-investment-2025/) that the [Sovereign Tech Agency](https://www.sovereign.tech/) had provided funding to enable Open Web Docs to create developer documentation on web security and privacy. This month we've completed the biggest section of the project: to update the web security documentation on MDN. In this post we'll have a look at what we've added, and what's coming up next.

The docs we've written for MDN consist of four main pillars: [Attacks](#attacks), [Defenses](#defenses), [Threat modeling](#threat-modeling), and [Authentication](#authentication).

## Attacks

Under [Attacks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks), we have a separate article for each type of attack:

<div class="grid-container-compact">

<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking">Clickjacking</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/CSRF">Cross-site request forgery (CSRF)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks">Cross-site leaks</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS">Cross-site scripting (XSS)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/IDOR">Insecure Direct Object Reference</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/MITM">Manipulator in the Middle (MITM)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Phishing">Phishing</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Prototype_pollution">Prototype pollution</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/SSRF">Server Side Request Forgery</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Subdomain_takeover">Subdomain takeover</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Supply_chain_attacks">Supply chain attacks</a></p>

</div>

In each article, we describe the conditions in which a website is vulnerable to the attack, outline possible defenses and recommend which defenses a developer should adopt. We've tried to make these guides highly accessible and very practical.

## Defenses

Under [Defenses](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses), we describe web platform features or developer practices that can be used to defend against attacks.

There's typically a many-to-many relationship between attack and defenses. That is, a single defense can protect against multiple attacks, and defending against a single attack may require multiple defenses, so as to provide defense in depth.

<div class="grid-container-compact">

<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Certificate_Transparency">Certificate transparency</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP">Content Security Policy (CSP)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Fetch_metadata">Fetch metadata</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Input_validation">Input validation</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content">Mixed content blocking</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Operational_security">Operational security</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy">Same-origin policy</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Secure_Contexts">Secure contexts</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity">Subresource integrity</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security">Transport Layer Security (TLS)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/User_activation">User activation</a></p>

</div>

Some of these guides existed already, but we've added new ones and made extensive updates to many of the existing ones.

## Threat modeling

[Threat modeling](https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling) is the art of understanding which possible threats a system faces, so a developer can understand which corresponding defenses they need to deploy.

As in our other work, we've focused on writing accessible and actionable guides, with [practical examples](https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling/Example_threat_model) walking through sample web applications.

<div class="grid-container-compact">

<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling">Threat modeling guide</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling/Example_threat_model">Example threat model</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling/PWA_threat_model">Threat model for a PWA</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Threat_modeling/Frameworks">Frameworks and tools</a></p>

</div>

## Authentication

Finally, we have a section dedicated to [authentication](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication), which is centred on a series of guides to four common authentication methods:

<div class="grid-container-compact">

<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Federated_identity">Federated Identity</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/OTP">One-time passwords (OTP)</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passkeys">Passkeys</a></p>
<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passwords">Passwords</a></p>

</div>

We describe how each method works, which attacks each method is vulnerable to, and good practices to follow to minimize the risks.

We've also added a guide to session management:

<div class="grid-container-compact">

<p class="callout"><a href="https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Session_management">Session management</a></p>

</div>

## What's next

The remainder of this project is dedicated to updating and extending the docs on web privacy. This will be less extensive than the security docs, but we are hoping to cover:

- An explanation of what privacy on the web means, and why it matters.
- Guidelines for how a website should request and handle user data.
- Discussion of tracking, especially around cookies. We will cover the ways browsers restrict third-party and tracking cookies, and the use of partitioned cookies to enable legitimate uses for third-party cookies, without enabling tracking.
- Descriptions of regulatory requirements around privacy, including the [GDPR](https://gdpr.eu/) and the [California CCPA](https://www.oag.ca.gov/privacy/ccpa).

## Thanks!

Thanks first and foremost to the Sovereign Tech Agency for funding this project. Having a reliable source of funding is essential to secure the resources needed for a sustained project like this.

Thanks also to:

- [Dan Appelquist](https://www.torgo.com/blog/), for starting and chairing the [Security Web Application Guidelines Community Group (SWAG CG)](https://www.w3.org/community/swag/), giving us a home where we could plan this work and connect with technical experts.
- Our expert reviewers and collaborators, including [Aaron Shim](https://github.com/aaronshim), [Freddy Braun](https://frederikbraun.de/), and [Simone Onofri](https://onofri.org/), for helping us to understand and document many web security topics, including CSP, XSS, trusted types, cross-site leaks, Fetch metadata, and threat modeling.
- [Hamish Willee](https://github.com/hamishwillee), for reviewing so many security docs PRs, and always giving us thoughtful feedback.
