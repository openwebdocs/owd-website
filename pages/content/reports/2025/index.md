---
author: "Florian Scholz"
title: "Open Web Docs Impact and Transparency Report 2025"
date: "2026-01-22"
ShowToc: true
ShowBreadCrumbs: false
---

## Executive summary

Open Web Docs' work in 2025 helped ensure the long-term health of web platform documentation on critical resources like MDN Web Docs, independently of any single vendor or organization. Founded in January 2021, 2025 marked Open Web Docs' fifth year of operation!

Open Web Docs (OWD) is an [Open Source Collective](https://opencollective.com/open-web-docs) that employs engineers to publicly document open web technologies. The team at OWD has extensive experience with Web standards documentation, MDN Web Docs, and browser compatibility data. We write new documentation, update existing documentation, and improve documentation infrastructure. Open Web Docs works together with other organizations such as Mozilla, Google, Microsoft, W3C, Igalia, as well as the [Sovereign Tech Agency](https://openwebdocs.org/content/posts/stf-investment-2025/), and other external contributors and volunteers.

In 2025, Open Web Docs:

- Was again the organization that contributed the greatest number of pull requests (PRs) merged to the [mdn/content](https://github.com/mdn/content) (10.0%) and [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (27.2%) repositories.
- Provided 14.25% of all pull request reviews to the `mdn/content` repository and 27.29% of reviews to the `mdn/browser-compat-data` repository.
- Worked on major technical writing and documentation engineering projects. This included among other things:
  - [Collecting browser compatibility data for every browser release, including all beta releases](#collecting-browser-compatibility-data-whenever-browsers-release-a-new-beta-version)
  - [Documenting missing features](#document-missing-features)
  - [Web Security documentation](#web-security-documentation)
  - [CSS module project](#css-module-project]
  - [Accessibility Compat Data](#accessibility-compat-data)
- Launched the [W3C Documentation Community Group](#w3c-documentation-cg)

Previous Open Web Docs Impact and Transparency Reports:
[2024](https://openwebdocs.org/content/reports/2024/), [2023](https://openwebdocs.org/content/reports/2023/), [2022](https://openwebdocs.org/content/reports/2022/), [2021](https://openwebdocs.org/content/reports/2021/).

<div class="callout">

Open Web Docs is a non-profit, strongly community-focused open source collective that uses its donations to employ a group of technical writers who are dedicated to writing and improving documentation for the web platform.

Donate today:

- [GitHub Sponsors](https://github.com/sponsors/openwebdocs)
- [Open Collective](https://opencollective.com/open-web-docs)

Tell your company to support us with a membership!
As a [member organization](https://openwebdocs.org/membership) you are entitled to further benefits in addition to supporting core web platform documentation and engineering. Reach out to [florian@openwebdocs.org](mailto:florian@openwebdocs.org) for more information.

</div>

## OWD maintainership by the numbers

In 2025, Open Web Docs continued to maintain and improve the following four essential web platform documentation ecosystem projects:

- [mdn/content](https://github.com/mdn/content)
- [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)
- [openwebdocs/mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector)
- [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features)

Open web standards documentation needs ongoing updating and maintenance as new web platform features are introduced and best practices change. At OWD, we believe the above projects are essential sources of information web developers consult and trust and that by contributing to these repositories, we can reach the majority of web developers worldwide with comprehensive, accurate and informative documentation about the open web platform.

[Git Pulse rankings](https://git-pulse.github.io/snapshots/) help put OWD's work in perspective as compared to the overall open-source ecosystem. In 2025, the `mdn/content` repository was again in the top 10 of all of the repositories hosted on GitHub!

### Pull requests authored

Since our launch in 2021, Open Web Docs has been the primary organizational contributor to the `mdn/content` and the `mdn/browser-compat-data` repositories. Here's the summary of merged PRs authored (excluding bots):

| Project                 | Total authored PRs | OWD authored PRs |
| ----------------------- | ------------------ | ---------------- |
| mdn/content             | 3158               | 316 (10.0%)      |
| mdn/browser-compat-data | 1117               | 304 (27.2%)      |

For the second year in a row, contributor [Joshua Chen](https://github.com/Josh-Cena) deserves a special shout out: Josh authored 400 PRs that were merged to `mdn/content` in 2025.

### Pull requests reviewed

As in previous years, there's a very long tail of contributors and a thriving community actively involved with our work. For this reason,  we group all `mdn/content` contributors into three categories: one-timers, casual contributors (2-9 PRs) and core contributors (10+ PRs). In 2025, there were 723 contributors to to `mdn/content`, including:

- 558 one-time contributors with 1 PR merged.
- 132 casual contributors with 2-9 PRs merged.
- 33 core contributors with 10 or more PRs merged.

Supporting this long tail of volunteers is a large part of OWD's work. PR reviews for the `mdn/content` repository are performed by members of the maintainer group, which consists of OWD, Mozilla, Google, Microsoft, and W3C staff and contractors, and a select group of volunteer maintainers.

Here's the summary of reviewed PRs:

| Project                 | Total reviewed PRs | OWD reviewed PRs |
| ----------------------- | ------------------ | ---------------- |
| mdn/content             | 3761               | 536 (14.25%)     |
| mdn/browser-compat-data | 1704               | 465 (27.29%)     |

## OWD project work

The work of Open Web Docs is guided by the [OWD prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md) and [OWD’s charter](https://github.com/openwebdocs/project/blob/main/charter.md). OWD efforts are prioritized based on the needs of the global community of web developers and designers and best practices. The [OWD project proposal](https://github.com/openwebdocs/project/issues/new/choose) process is open to everyone, with proposals reviewed by the OWD staff team and Governing Committee. We are also participating in the [W3C SWAG CG](https://www.w3.org/community/swag/) and since April 2025 we chair the [W3C Documentation CG](https://www.w3.org/community/docs-cg/) to plan our execute writing projects.

### W3C Documentation CG

In addition to the fruitful work we've been doing in the [W3C SWAG CG](https://www.w3.org/community/swag/), to help web developers with guidance on web security, we launched a community group for overall web platform documentation at the W3C in April 2025.

The [W3C Documentation CG](https://www.w3.org/community/docs-cg/) is an open community with the mission to ensure web developers and designers worldwide have the best information available so they can build things on the web platform.

If you haven't joined yet, we would encourage you to do so! You can join on the [group's homepage](https://www.w3.org/community/docs-cg/join) and take a look at the [GitHub repository](https://github.com/w3c-cg/webdocs).

See also our [blog post about launching the W3C Documentation CG](https://openwebdocs.org/content/posts/w3c-docs-cg/).

### Collecting browser compatibility data whenever browsers release a new beta version

In 2025, OWD was able to systematically collected web platform compatibility data for the second year in a row. We want to continue this effort and make it as timely and efficient as possible for every browser release for all the years to come. The maintenance of the `mdn-browser-compat-data` project benefits greatly from these efforts; the data is accurate, reliable, and complete, which allows the consumers of the data, especially MDN, CanIUse, web-features, and the Baseline projects, to be up-to-date and accurate.

The browser compatibility data (BCD) automation project's mission is to provide web developers with the latest information about available web platform features whenever a new browser version is released. The project was initially funded by the Sovereign Tech Fund and continued thanks to the support of OWD's main sponsors in 2025: Google and Microsoft. In 2025, we systematically collected compatibility data 28 times; we observed 12 releases from Chrome (applying to Edge too), 13 from Firefox, and 3 from Safari.

For Chrome 133-144, Firefox 135-147, and Safari 18.4, 26 and 26.2, OWD was able to update browser compatibility data within the beta cycles of each browser release. This enabled us to provide web developers with updated information at the time the stable browser version was released.

The BCD automation project is led by [Florian Scholz](https://github.com/Elchi3) and representatives of browser projects have been reviewing data. Thank you: [Rachel Andrew](https://github.com/rachelandrew) (Chromium/Google), [Chris Mills](https://github.com/chrisdavidmills) (Chromium/Google), [Patrick Brosset](https://github.com/captainbrosset/) (Chromium/Microsoft), [Jon Davis](https://github.com/jdatapple) (WebKit/Apple), [Jen Simmons](https://github.com/jensimmons) (WebKit/Apple), [Ruth John](https://github.com/Rumyra) (Gecko/Mozilla), [Brian Smith](https://github.com/bsmth) (Gecko/Mozilla), [Hamish Willee](https://github.com/hamishwillee) (Gecko/Mozilla).

A special shout out to [Claas Augner](https://github.com/caugner) (Gecko/Mozilla) who has been taking on a leading role in reviewing PRs and advancing the BCD project in 2025.

### Document missing features

Some MDN new feature documentation is provided by browser vendors, generally right as they add new featues to their browser. However, not all features get documented. And, if they’re not documented right away, there is no one championing the feature and encouraging their documentation. At OWD, we champion all browser features, and want to ensure that all features are properly documented and findable by the developer community. This is why we work to ensure every open web feature is fully documented on MDN.

To this end, in 2024, OWD created a tool to identify missing reference pages. Based on the [Web Platform Features Explorer](https://web-platform-dx.github.io/web-features-explorer/) developed by Patrick Brosset, Florian Scholz created [web platform documentation backlog](https://openwebdocs.github.io/web-docs-backlog/), a site that displays missing reference documentation for web platform features.

Open Web Docs used this tool to identify and then document all the missing newly available and widely available features, including documenting over 650 missing API reference page, ensuring that MDN is truly a complete reference.

The OWD missing features project was led by [Estelle Weyl](https://github.com/estelle) and was successfully completed with contributions from community voluteer [Yash Raj Bharti](https://github.com/yashrajbharti) and reviews from the MDN community.

### Web Security documentation

In 2024, OWD started a long-term project to improve and extend web security documentation on MDN. OWD was awarded funding from the [Sovereign Tech Fund](https://www.sovereign.tech/tech/open-web-docs-2025) to continue this work in 2025 and into 2026.

#### Web security attacks

Initially, the main focus of our web security documentation project was continuing and concluding our series of guides on [web security attacks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks). Our aim here is to help developers understand:

- The conditions under which sites are vulnerable to specific attacks
- The impact of these attacks
- Recommended practices to defend against them

Our guiding principles for this web security documentation project is to write relevant guides that are _accessible_, _practical_, and _up to date_.

We've written guides on the attacks most likely to be faced by web developers today, including [cross-site leaks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks), [cross-site request forgery](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/CSRF), [prototype pollution](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Prototype_pollution), and [supply chain attacks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Supply_chain_attacks). We've included modern defenses such as [trusted types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) and [fetch metadata](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header) alongside more traditional methods. We've included clear guidance about which defenses are essential and which can add defense in depth.

Aaron Shim, Software Engineer at Google Security, [says](https://bughunters.google.com/blog/effortless-web-security-secure-by-design-in-the-wild) about our work:

> Given the feedback from the external developer community that many of these security features on the Web might have lower adoption rates due to their relative complexity, this community group has delivered – thanks to the support of the excellent content team from OpenWebDocs – much improved documentation on XSS, CSP, Trusted Types, cross-site leaks, and prototype pollution, to name a few.

#### Authentication

In September 2025, we pivoted to  the next stage of the web security project: Authentication.  Authentication is probably the most common target for attacks, so it's a core component of the web security project. We have been focused on writing documentation for web developers who need to authenticate users on their sites.

The main part of this work is a series of articles on the four main authentication methods available to web developers. In 2025, we published guides to three of these: [passwords](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passwords), [one-time codes](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/OTP), [federated identity](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Federated_identity), and submitted the fourth guide on [passkeys](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Passkeys), which was [merged in January](https://github.com/mdn/content/pull/42338).

Each guide explains the authentication method and how it works, walking through the main flows involved, highlighting potential vulnerabilities and outlining recommended practices.

### CSS module project

CSS modules
As critical digital infrastructure, OWD completed a 2+ year CSS project reviewing, updating, rewriting, and in many cases, creating, the entire CSS reference section of MDN content. In order to ensure specifications and browser implementation of CSS are up to date, well documented, accurate, and findable, OWD completed the [CSS module project](​​https://github.com/openwebdocs/project/issues/147). The goal of the project was to ensure that every feature defined in every CSS specification existed in MDN’s CSS reference, with implemented features being well documented, findable, and well explained.

Prior to the project onset, there was no consistent way to learn about individual CSS specification and the features defined in each. While there were several reference pages named `CSS_spec_name`, not all CSS specifications had module page on MDN, many of these pages were guides to a few properties, and none were a complete reference to the specification with links to reference pages for all the features the covered specification introduced. The CSS module pages only listed features to include in a stylesheet: none included any of the many events and interfaced introduced in CSS specifications.

It was a huge endeavor, but now, there are 65 CSS module reference guides reflecting the CSS specifications with at least one browser supported feature. Every CSS module page now includes all the properties, at-rules, functions, data types, events, interfaces, and glossary terms and definitions introduced in the specification. Every CSS module page begins with a one to five paragraph overview of the module, naming the module and explaining what features the module, why the features are useful, along with how the module’s features interact with features from other specifications, if relevant. In many cases, we included an example highlighting the features introduced in the specification as a quick overview.

The objectives of the project were to ensure every implemented feature was accurately explained with current, understandable information. The project included a full review and rewrite of every existing CSS module page and a review, and rewrite if needed, of all linked pages, and the creation of missing CSS module pages, data types, glossary entries, and guides.

Every module page includes a reference section. This section includes a link to every property, at-rule, descriptor, selector, pseudo-class, pseudo-element, and function introduced in the specification. In the updating process, we reviewed all the existing linked pages, and created many data-type reference pages and glossary definitions. 

The reference section also includes events and interfaces defined in the specification. This was a major change to MDN documentation. Prior to this project, there was no consistent way to include events and APIs defined in CSS specification within the CSS reference documentation.

Any unimplemented features included in the specification are now mentioned at the end of the  relevant section within the module reference section. In this way, we can inform readers searching for an unimplemented feature that, while the feature is defined, it is not yet implemented and therefore not documented; save people seeking more information on unimplemented features  a lot of time.  

Every module page, except the Ruby layout module, includes a “guides” section. As part of this project, we reviewed all the existing guides, relocated all the guides into their module’s directory, and created a plethora of new guides and a new color tool.

Every CSS module overview reference page also includes “related concepts” and “see also” sections. Related concepts include properties, data types, glossary terms, etc. related to the module defined in other specifications. The “see also” includes links to any other reference pages and other content that is relevant but doesn't fit in the other sections.

This project was made possible by the generous contributions of OWD member organizations and sponsors.


### Accessibility Compat Data

In 2025 we supported the [Accessibility Compat Data](https://github.com/lolaslab/accessibility-compat-data) project run by [Lola Odelola](https://lolaslab.co).

As creators of the Browser Compat Data (BCD) project as well as active participants in the W3C WebDX CG and contributors to the Baseline and web-features projects, we see the need to research compatibility data for accessibility feature support in browsers and in Assistive Technologies (AT). We're supporting this effort with our expertise and we contributed a $5,000 USD grant for the research phase of this project which Lola kicked off in 2025.

## Project Economics: Finding a Sustainable Future for Web Platform Documentation

Open Web Doc's budget is openly shared with the community on the [Open Collective Platform](https://opencollective.com/open-web-docs#category-BUDGET). While this makes our transactions viewable, it does not readily convey the challenges we face when it comes to long-term project sustainability. Memberships, grants, one-time sponsorships, and recurring donations are forecasted against known expenses; sustainability requires balancing this revenue and risk.

In March 2025, Jory Burson and Florian Scholz gave a talk at the FOSS Backstage conference in Berlin: [Project Economics: A case study with Open Web Docs](https://program.foss-backstage.de/fossback25/talk/RDZVGW/). We presented some insights to how we “sell” open documentation (which isn’t on software dependency lists) and talked about our fundraising strategies.

However, the reality is that last year was again a challenging year for open source sustainability across the tech industry, and OWD was not an exception: the OWD Governing Committee made the difficult decision to part with a cherished part-time team member. This allowed the project to rebalance risk and ensure OWD could make it into the next funding cycle.

To further reduce risk, OWD is working to diversify its funding sources. Membership revenue accounts for the greatest source of financial support. In 2025, OWD was very grateful to have the support of Platinum Members Google and Microsoft, Gold Member Igalia, and Silver Member Bloomberg. Additionally, the Sovereign Tech Fund committed a total of 220,000€ to Open Web Docs to help web developers to secure their sites by documenting Web Security and Privacy topics. This investment started in 2025 and continues in 2026. For the fiscal year 2025, OWD was able to raise about $662,000 USD in total.

Payroll is Open Web Docs’ only meaningful expense. We pay competitive salaries in our staff's local currency, and receive health care, retirement, and other regionally compliant benefits. In 2025, we reduced our expenses by about $90,000 USD and spent a total of $664,000 USD on payroll expenses, inclusive of contractors, taxes, wire fees, exchange fees and payroll services. We post all transactions on our [Open Collective](https://opencollective.com/open-web-docs) page.

### 2026 Financial Forecast

We have forecasted a total of $450,000 USD in fundraising which consists of commitments from our Platinum and Gold Members Microsoft and Igalia, an investment from the Sovereign Tech Agency. Like in 2025, we anticipate about $10,000 USD in community donations from Open Collective and GitHub Sponsors. Throughout 2025, in all but one week an individual donated to Open Web Docs! Thank you so much! While these smaller donations won't pay our salaries, they allow us to afford in-person meetings, such as the annual W3C TPAC conference.

Our forecasted expenses for 2026 are once again down from 2025 to about $600,000 USD. That said, OWD is forecasting a budget deficit for 2026. We're working on closing this $140,000 USD gap with additional grant applications, special project funding, and new member support. Becoming a supporting member of Open Web Docs offers benefits in addition to supporting core web platform documentation and engineering. **If your organization would be interested in helping us close this short deficit by becoming a [Member](https://openwebdocs.org/membership/) or making a one-time [donation](https://opencollective.com/open-web-docs/donate?interval=oneTime&amount=500&name=&legalName=&email=), please email [florian@openwebdocs.org](mailto:florian@openwebdocs.org).**

## Gratitude for our Individual Supporters in 2025

Thank you to each and everyone who supports us with recurring or one-time donations! Your sponsorship means the world to us!

### Individual supporters

Huge thanks to all the individuals who support us with a recurring monthly donation of $10 or more via [Open Collective](https://opencollective.com/open-web-docs#category-CONTRIBUTE)!

<object type="image/svg+xml" data="https://opencollective.com/open-web-docs/tiers/monthly-supporter.svg?avatarHeight=80&width=480"></object>

### Individual backers

Also, thank you to the many backers who support us with a recurring donation of $5 or more every month!

<object type="image/svg+xml" data="https://opencollective.com/open-web-docs/tiers/backer.svg?avatarHeight=80&width=480"></object>

### GitHub Sponsors

And, of course, thank you to all of Open Web Docs' [GitHub Sponsors](https://github.com/sponsors/openwebdocs)!

  <iframe
    src="https://github.com/sponsors/openwebdocs/card"
    title="Sponsor openwebdocs"
    height="225"
    width="500"
    style="border: 0"
  ></iframe>

## Looking forward to 2026

We're inviting all of our partners and backers to another year of supporting web platform documentation for the benefit of web developers, designers, and users around the world. We aim to continue with our [mission](https://github.com/openwebdocs/project/blob/main/charter.md) and foster collaborations with existing initiatives to improve the general developer experience for people developing for the web, and, in-turn, a better experience for those accessing the web. We consider web platform docs critical digital infrastructure, and we work cooperatively to ensure its long-term health.

We are funded by corporate and individual donations. If your organization or project is interested in advancing open web platform documentation, we would love to hear from you! Please reach out to [florian@openwebdocs.org](mailto:florian@openwebdocs.org).

![The OWD team: Florian Scholz, William Bamberg, and Estelle Weyl with various W3C members as well as OWD Governing Committee members](owd_team_2025.jpg)
_Open Web Docs in Kōbe, Japan for W3C TPAC. November 2025._
