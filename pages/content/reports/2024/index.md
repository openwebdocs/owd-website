---
author: "Florian Scholz"
title: "Open Web Docs Impact and Transparency Report 2024"
date: "2025-01-30"
ShowToc: true
ShowBreadCrumbs: false
---

## Executive summary

Open Web Docs is taking a look at how our efforts have helped to ensure the long-term health of web platform documentation on critical resources like MDN Web Docs, independently of any single vendor or organization. Founded in January 2021, the year 2024 marked Open Web Docs’ fourth year of operation!

Open Web Docs (OWD) is an open source collective that employs technical writers to publicly document open web technologies. OWD currently employs two full time writers, one compat data engineering contractor, and OWD's director to run the program. Everyone at OWD has extensive experience with Web standards documentation, MDN Web Docs, and browser compatibility data. The OWD team writes new documentation, updates existing documentation, and improves documentation infrastructure together with other organizations such as Mozilla, Google, Microsoft, W3C, Igalia, and other external contributors and volunteers.

In 2024, Open Web Docs:

- Was again the organization that contributed the greatest number of pull requests (PRs) merged to the [mdn/content](https://github.com/mdn/content) (14.1%) and [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) (52.4%) repositories.
- Provided 27% of all pull request reviews to the mdn/content repository and 52% of reviews to mdn/browser-compat-data.
- Started to become a maintainer of the [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) repo and contributed 14.8% of merged pull requests.
- Completed major technical writing and documentation engineering projects which were determined and guided by OWD’s [Steering Committee](https://github.com/openwebdocs/project/blob/main/steering-committee/membership-expectations.md). This included among other things:
  - Collecting browser compatibility data whenever browsers release a new beta version
  - Documentation for interoperable and widely available features
  - Replacing all "true" and "null" versions with real version numbers in BCD
  - Web Security docs for MDN
  - W3C WebDX web-features mapping of BCD keys into baseline features
  - WebView compatibility data
- Secured a second round of [investment from the Sovereign Tech Fund](https://openwebdocs.org/content/posts/sovereign-tech-fund/) to implement improved tooling and maintenance of the [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) project and development of the [openwebdocs/mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector) tool.

Previous Open Web Docs Impact and Transparency Reports: [2023](https://openwebdocs.org/content/reports/2023/), [2022](https://openwebdocs.org/content/reports/2022/), [2021](https://openwebdocs.org/content/reports/2021/).

<div class="callout">
<p>Open Web Docs is a non-profit, strongly community-focused open source collective that uses its donations to employ a group of technical writers who are dedicated to writing and improving documentation for the web platform.</p>

Donate today:

- <a href="https://github.com/sponsors/openwebdocs">GitHub Sponsors</a>
- <a href="https://opencollective.com/open-web-docs">Open Collective</a>

Also, tell your company to support us with a membership!
As a [member organization](https://openwebdocs.org/membership) you are entitled to further benefits in addition to supporting core web platform documentation and engineering. Reach out to [florian@openwebdocs.org](mailto:florian@openwebdocs.org) for more information.

</div>

## OWD maintainership by the numbers

In 2024, Open Web Docs continued to work on improving and maintaining the following four essential projects for the web platform documentation ecosystem:

- [mdn/content](https://github.com/mdn/content)
- [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)
- [openwebdocs/mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector)
- [web-platform-dx/web-features](https://github.com/web-platform-dx/web-features)

Documentation about open web standards needs ongoing updating and maintenance as new web platform features are introduced and best practices change. We believe all of the above projects are essential information sources that web developers consult and trust on a daily basis. OWD believes that by contributing to these repositories, we have the biggest impact on open web platform documentation and we reach the majority of web developers worldwide.

At the 2024 annual W3C TPAC conference, and for W3C's 30th anniversary, François Daoust spoke about the [Web and the art of specification maintenance](https://www.youtube.com/watch?v=gkg2WBVfeho). OWD is proud to play a key role in the maintenance of the web's infrastructure and enhancing the overall resilience of the system.

Git Pulse rankings help to put our work in perspective in the overall open source ecosystem. In 2024, the mdn/content repository is again in the top 10 of all of the repositories hosted on GitHub, see [git-pulse.github.io](https://git-pulse.github.io/snapshots/).

### Pull requests authored

Like in previous years, Open Web Docs was the primary contributor to the mdn/content and the mdn/browser-compat-data repositories. We also substantially helped with the new web-features project. Here's the summary of merged PRs authored (excluding bots):

| Project                 | Total authored PRs | OWD authored PRs |
| ----------------------- | ------------------ | ---------------- |
| mdn/content             | 3907               | 551 (14.1%)      |
| mdn/browser-compat-data | 2034               | 1066 (52.4%)     |
| webdx/web-features      | 1150               | 170 (14.8%)      |

### Pull requests reviewed

As in previous years, there's a very long tail of contributors and a thriving community actively involved with our work. For mdn/content, we group all contributors into three categories: one-timers, casual contributors (2-9 PRs) and core contributors (10+ PRs). The 2024 breakdown looks like this:

- 708 contributors had 1 PR merged.
- 166 contributors had 2-9 PRs merged.
- 44 contributors had 10 or more PRs merged.

Supporting this long tail of volunteers is a large part of OWD's work. PR reviews for the mdn/content repository are performed by members of the maintainer group, which consists of OWD staff, Mozilla, Google and Microsoft staff, W3C staff, and a select group of volunteer maintainers.

Special shout outs to volunteer reviewer [Josh-Cena](https://github.com/Josh-Cena), who alone took on 18.3% of reviews in 2024 for mdn/content, and to [Daniel D. Beck](https://github.com/ddbeck) who reviewed more than half (56.4%) of all web-features pull requests in 2024. A pleasure to work with both of you and your impact in 2024 on these two projects is very noteworthy! Thank you!

Here's the summary of reviewed PRs:

| Project                 | Total reviewed PRs | OWD reviewed PRs |
| ----------------------- | ------------------ | ---------------- |
| mdn/content             | 4595               | 1254 (27.3%)     |
| mdn/browser-compat-data | 2209               | 1154 (52.3%)     |
| webdx/web-features      | 1961               | 135 (6.9%)       |

## Sovereign Tech Fund

Open Web Docs is very proud to have received a second round investment from the Sovereign Tech Fund at the beginning of 2024. The [Sovereign Tech Fund (STF)](https://www.sovereign.tech/programs/fund) supports the development, improvement, and maintenance of open digital infrastructure in the public interest. The [Sovereign Tech Fund’s Contribute Back Challenges](https://www.sovereign.tech/programs/challenges) selected Open Web Docs as a partner to implement improved tooling and maintenance of the [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) and further development of the [openwebdocs/mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector) tool.

As part of this program, that continued from the first round in 2023, we completed key milestones:

- Open Web Docs (OWD) automated browser compatibility data updates using OWD’s [mdn-bcd-collector](https://github.com/openwebdocs/mdn-bcd-collector) project. Now, browser compatibility information is available to web developers for new browser releases faster than ever.
- OWD automatically detects added and removed browser features for 90.15% of the entire web platform when a new browser is released. The data is recorded in the open-source [BCD](https://github.com/mdn/browser-compat-data) project, which is used by tools commonly used by web developers, such as [CanIUse, MDN Web Docs, and used by](https://caniuse.com/) [Baseline](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility) and [web-features](https://github.com/web-platform-dx/web-features).
- OWD runs tests on mobile browsers and WebViews to have accurate compatibility data for these platforms and to point out differences between mobile and desktop browsers.
- We also made our tooling more generally available, so that new tools, such as [runtime-compat-data](https://runtime-compat.unjs.io/) can display compatibility across different JavaScript runtimes. We hope that our work on this data will contribute to better understanding of compatibility issues, to more interoperability, and better standardization on the web platform.

## **OWD project work**

The Open Web Docs [Steering Committee](https://github.com/openwebdocs/project/blob/main/steering-committee/membership-expectations.md) meets on a weekly basis to determine project work for OWD's technical writing staff. The Steering Committee is guided by the [OWD prioritization criteria](https://github.com/openwebdocs/project/blob/main/steering-committee/prioritization-criteria.md) and OWD’s [charter](https://github.com/openwebdocs/project/blob/main/charter.md). We prioritize based on the needs of the global community of web developers and designers. The [project proposal submission](https://github.com/openwebdocs/project/issues/new/choose) process is open to everyone, with proposals reviewed by the Steering Committee.

Some of the major projects Open Web Docs completed in 2024 were:

### Collecting browser compatibility data whenever browsers release a new beta version

This project has initially been funded by the Sovereign Tech Fund with the goal to provide web developers with the latest information about available web platform features whenever a new browser version is released and continues thanks to OWD's main sponsors Google and Microsoft. In 2024, we observed 11 releases from Chrome, 12 from Firefox, and 7 from Safari. We systematically collected compatibility data 30 times in 2024.

For Chrome 122-132, Firefox 123-134, and Safari 17.4-18.3 we were able to update browser compat data within the beta cycles of the browser releases, so that web developers were provided with updated information at the time these browsers released the stable version.

2024 was the first year we systematically collected web platform compatibility data and we want to continue this effort and make it as efficient as possible for the years and browser releases to come. The maintenance of the mdn-browser-compat-data project has highly benefited from this and the data is much more reliable allowing data consumers, especially the web-features and baseline projects, to be most up-to-date and accurate.

The project is led by Florian Scholz and representatives of browser projects have been reviewing data. Thank you: Philip Jägenstedt (Chromium/Google), Rachel Andrew (Chromium/Google), Chris Mills (Chromium/Google), Patrick Brosset (Chromium/Microsoft), Jon Davis (WebKit/Apple), Jen Simmons (WebKit/Apple), Ruth John (Gecko/Mozilla), Brian Smith (Gecko/Mozilla), Hamish Willee (Gecko/Mozilla), Claas Augner (Gecko/Mozilla).

### Documentation for interoperable and widely available features

TBD @estelle

Mention our new backlog dashboard https://openwebdocs.github.io/web-docs-backlog/

### Web Security docs for MDN

One of our major projects in 2024 has been to plan and execute improvements to web security documentation on MDN. The W3C's [Secure the Web Forward ](https://www.w3.org/2023/03/secure-the-web-forward/report.html) workshop concluded that documentation plays a major role in promoting security best practices and in helping web application developers understand security threats and mitigations. In June 2024 the [Security Web Application Guidelines Community Group (SWAG CG)](https://www.w3.org/community/swag/) was created to develop security guidelines for web application developers. The OWD team has regularly participated in the SWAG CG to identify areas where we need better web security documentation and to get guidance form experts about current best practices.

One result of this was an overhaul of the Content Security Policy documentation on MDN. This included a rewrite of the [CSP guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to align guidance with [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) and [web.dev](https://web.dev/articles/strict-csp), to document some of the other protections offered by a CSP in addition to resource loading controls, and to explain better how a CSP can help protect against XSS attacks. We also [rewrote and reorganized the reference documentation for fetch directive syntax](https://github.com/orgs/mdn/discussions/756) to fix many errors and make the syntax easier to understand.

We've also started writing guide pages about attacks and their mitigations. The first of these was a [guide about cross-side scripting (XSS)](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS) explaining what it is and how to protect against it in both client- and server-side code, using web platform features such as CSP and [trusted types](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS#trusted_types). We've also written a guide about [clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking). The next part of this work will be a guide to [cross-site leaks](https://xsleaks.dev/), including mitigations such as [Cross-Origin-Resource-Policy (CORP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy) and [Cross-Origin-Opener-Policy (COOP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy).

### Updated Fetch documentation

Fetch is one of the most important Web APIs. The [Fetch guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is the third most popular page on MDN, and the most popular page that isn't a landing page like <https://developer.mozilla.org/en-US/docs/Web/JavaScript>. But the docs hadn't had a systematic update since Fetch was first documented on MDN back in the mists of time, and they were showing their age. In 2024 [we rewrote the Fetch guide](https://github.com/mdn/content/pull/34278) and much of the associated reference docs, in the process adding explanations of several aspects of its behavior, completing the documentation of error codes that can be thrown by response-reading methods, and closing almost all the issues people had filed against these docs.

The impetus to this was [an issue](https://github.com/mdn/content/issues/13208) that some of the exceptions raised by [`response.json()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) were not documented on MDN. It turned out that these exceptions were related to the fact that a response body is a stream: but because we didn't explain streaming responses anywhere, there was nowhere the references doc could point to.

Adding an explanation to the existing Fetch guide was not straightforward, because the existing guide was so disorganized: people had incrementally added bits to it over the years without considering how they could fit together. So we reorganized the guide, adding not just a section about [streaming responses](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#streaming_the_response_body) but also sections on other important aspects of Fetch like [making cross-origin requests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) and [including credentials](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#including_credentials).

After that was in place, we could [update the `Response` reference to document exceptions properly](https://github.com/mdn/content/pull/34576), and close the original issue along with a whole slew of others.

Many thanks to [Joshua Chen](https://github.com/Josh-Cena) and [Mike Smith](https://github.com/sideshowbarker) for their careful and expert reviews as we navigated this tricky bit of work!

### W3C WebDX web-features mapping of BCD keys into baseline features

This work has been team work with a group of people contracted by Google.

TBD more content Florian

### Replacing all "true" and "null" versions with real version numbers in BCD

In mdn/browser-compat-data, we used to set the version number to "true" whenever we know that a web platform feature is supported in a browser but we don't know which was the first version that introduced support. Also, when a features' support was entirely unknown, we used to set the version number to "null". This meant that the compatibility data was quite incomplete and not always useful to data consumers. Especially the calculation of baseline was not possible with incomplete data.

Thanks to a 2024 project led by Queen Vinyl Da.i'gyu-Kazotetsu and Florian Scholz, BCD no longer has "true" and "null" values. All data in BCD now comes with a real version number or at least a [ranged version number](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#ranged-versions-).

### WebView compatibility data

In 2024, Open Web Docs joined the W3C WebView Community Group. Together with the group participants, we started investigating compatibility for WebViews. Historically, BCD only contained Chrome Android WebView data but in 2024 we added WebView on iOS data and helped launching https://caniwebview.com/. This collaboration was led by Florian Scholz and you can find more information in the [WebView CG 2024 recap](https://caniwebview.com/news/2024-12-06-WebView-Community-Group-Recap/). Shoutout to Niklas Merz and Ben Wiser for being the driving forces here!

## 2024 Budget

OWD is very grateful to its Platinum Members Google and Microsoft, its Gold Member Igalia, and its Silver Member Canva for their membership in 2024. Since its inception in January 2021, Open Web Docs has raised $3.4m from nearly 200 individual and organizational supporters.

Additionally, the Sovereign Tech Fund invested 150,000€ in Open Web Docs in 2024 as part of the STF Contribute Back Challenge (round 2).

Open Web Docs also contracted with Google in 2024, for a total of $90,000, to work on the W3C web-features project to map BCD keys into baseline features.

Payroll is Open Web Docs’ only meaningful expense. We pay competitive salaries in our staff's local currency, and receive health care and other regionally compliant benefits. In 2024, OWD spent a total of $XXXXX on payroll, inclusive of contractors, taxes, wire fees, exchange fees and payroll services. Minor operating expenses ($XXk) and transaction fees on collective revenue ($XXk) account for the balance of OWD expenses. We post all transactions on our [Open Collective](https://opencollective.com/open-web-docs) page.

## 2025 Financial Forecast

For 2025, the following sponsorships have been committed:

- $250,000 has been committed by Platinum sponsor Google
- $250,000 has been committed by Platinum sponsor Microsoft
- $25,000 has been committed by Gold sponsor Bloomberg
- $20,000 has been committed by Gold sponsor Igalia.

About $10,000 is anticipated to come from individual Open Collective and GitHub Sponsors for a total of $555,000.

Open Web Docs is actively looking for additional sponsors in 2025 in order to continue our project work at full capacity. Becoming a supporting member of Open Web Docs offers benefits in addition to supporting core web platform documentation and engineering. Email [florian@openwebdocs.org](mailto:florian@openwebdocs.org) for more information.

## Thank you to Mozilla and Smashing Magazine

In December 2024, advertisements to promote Open Web Docs on the MDN Web Docs and Smashing Magazine sites and in the Smashing Magazine newsletters.

We would like to thank Hermina Condei, Sonal Sood, Anuja Rajput from the Mozilla MDN team and Mariona Jones and Vitaly Friedman from Smashing Magazine for helping to spread the word about Open Web Docs. The ad spaces are offered to us for free and they promoted our GitHub Sponsors program. Extended thank you also to Patrick Brosset for connecting us and working copy texts and creative designs which turned out great:

![Ad banner on Smashing Magazine](owd_ad_smashing.png) ![Ad banner on MDN Web Docs](owd_ad_mozilla.png)

## **Gratitude for our Individual Supporters in 2024**

Thank you to each and everyone who supports us with recurring or one-time donations! Your sponsorship means the world to us!

### Individual supporters

Huge thanks to all the individuals who support us with a recurring monthly donation of $10 or more!

<object type="image/svg+xml" data="https://opencollective.com/open-web-docs/tiers/monthly-supporter.svg?avatarHeight=80&width=480"></object>

### Individual backers

Also thanks to the many backers who support us with a recurring donation of $5 or more every month!

<object type="image/svg+xml" data="https://opencollective.com/open-web-docs/tiers/backer.svg?avatarHeight=80&width=480"></object>

### GitHub Sponsors

And of course, thank you to all of Open Web Docs' [GitHub Sponsors](https://github.com/sponsors/openwebdocs)!

  <iframe
    src="https://github.com/sponsors/openwebdocs/card"
    title="Sponsor openwebdocs"
    height="225"
    width="500"
    style="border: 0"
  ></iframe>

## Looking forward to 2025

We’re inviting all of our partners and backers for another year of supporting web platform documentation for the benefit of web developers & designers worldwide. We aim to continue with our [mission](https://github.com/openwebdocs/project/blob/main/charter.md) and foster collaborations with existing initiatives to improve the general developer experience for people developing for the web. We consider web platform docs critical digital infrastructure, and we work cooperatively to ensure its long-term health.

We are funded by corporate and individual donations. If your organization or project is interested in advancing open web platform documentation, we would love to hear from you! Please reach out to [florian@openwebdocs.org](mailto:florian@openwebdocs.org).

TBD: TPAC team photo here?
