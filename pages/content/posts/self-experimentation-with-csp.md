---
author: "Will Bamberg"
title: "Self-experimentation with CSP"
date: "2024-10-29"
tags: ["announcements"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "What we learned when we tried to deploy a CSP for openwebdocs.org."
---

This week we landed a big update to the [MDN guide page about Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), a web security feature that has a reputation for being complicated and difficult to deploy. This started with a discussion in the [Security Web Applications Community Group](https://www.w3.org/community/swag/) (SWAG CG) about [how we can help CSP gain more adoption among web developers](https://github.com/w3c-cg/swag/issues/3).

[Florian](https://front-end.social/@floscholz) asked whether our site, <https://openwebdocs.org>, has a CSP, and embarrassingly, it didn't. We thought perhaps that by trying to add one, we might get some insight into the difficulties web developers face when trying to deploy their own.

## Strict CSP

Netlify generously host openwebdocs.org under their [Open Source Plan](https://www.netlify.com/legal/open-source-policy/). So I went there, and found a very interesting post: [How I learned to stop worrying and love the Content Security Policy](https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/), which describes how Netlify supports a style of CSP which uses a nonce (number used once) to determine whether scripts are allowed to execute, rather than a CSP that lists acceptable hosts. The general idea is that every time a document is served, the server generates a random value, and embeds this value both in the CSP header and in the [`nonce`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#nonce) attribute of any [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) tags. The browser checks that the value in the header matches the attribute value, and refuses to execute the script unless they match. Because an attacker can't predict the nonce, they can't add a valid `nonce` attribute into any script tags they manage to inject.

A big attraction of this approach is that it's much easier to implement than listing acceptable hosts: the Netlify article notes that just adding Google Analytics to your site requires you to add 187 domains to the list.

Next, I found that although both [web.dev](https://web.dev/articles/strict-csp) and [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html#csp-types-granularallowlist-based-or-strict) recommend this style, which they call a _strict CSP_, MDN doesn't even mention it. So we filed an issue and started updating the docs.

## Does OWD need a CSP?

While we were discussing how to add a CSP to the OWD website, [Estelle](https://front-end.social/@estelle) asked a really good question: does our site need a CSP? In our pull request to update the CSP guide, [Hamish](https://github.com/hamishwillee) had a similar comment: [how, specifically, does a CSP protect websites from XSS?](https://github.com/mdn/content/pull/36157#discussion_r1789293865)

Our current documentation tended to go like this:

> 1. XSS is bad
> 2. CSP protects you from XSS
> 3. So you should have a CSP

We need to go deeper than this. We ought to explain when and how XSS can cause specific problems for sites, and exactly where a CSP can help: where the features of a CSP meet up with the prongs of an XSS attack. We ought to explain how the threats and corresponding protections might be different for different sites. For example:

- a site where the server dynamically constructs responses from templates, based on the contents of a database
- a single-page app that uses client-side rendering to update the page content
- a more or less static site where the server always serves the same content, and the page contains little to no JavaScript.

Our CSP guide update made some steps towards this, but there's more work to do here: in particular we need better documentation of XSS, to cover the different ways an XSS attack can be made and the different tools that can be used to counter it: not only CSP, but tools like [trusted types](https://developer.mozilla.org/en-US/docs/Web/API/Trusted_Types_API) and output encoding.

## Auto-CSP

The Netlify feature also connects with an idea that was mentioned in the [TPAC session on security docs](https://openwebdocs.org/content/posts/swag-at-tpac-anaheim/) and which recently [landed in Angular](https://github.com/angular/angular-cli/pull/28663): tool support to deploy a CSP automatically based on a configuration setting. We'd like to include this in our CSP documentation and again, we'd like to talk about not just its existence but the specific web app architectures for which it is appropriate.

For example: in a strict CSP, the server typically uses a template to insert nonces into the script tags it intends to include in the document it serves:

```html
<script nonce="{% raw %}{{nonce}}{% endraw %}">
  // ...
</script>
```

The server's explicit intention is important here: it means that even if an attacker tricks the server into inadvertently including a malicious script (for example, in a [reflected XSS attack](https://portswigger.net/web-security/cross-site-scripting/reflected)), then the injected script won't contain the nonce, and it won't execute.

By definition, though, auto-CSP doesn't understand the server's intention. Netlify's dynamic CSP runs in the CDN, and automatically injects the nonce into every `<script>` tag it finds in the document that the server provided. If this contains scripts that the server inadvertently included, they will be given the nonce, and will be allowed to execute.

What Netlify's CSP does is protect against client-side script injection, where the front-end code inadvertently inserts a malicious script by calling an unsafe DOM API like [`document.write()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write). So this kind of CSP is appropriate for a web app that uses client-side rendering.

## So... does OWD have a CSP yet?

Not yet! We're technical writers, so as soon as we learn something new, we have to make sure all the docs are updated first. But our practical investigations have already generated improvements to MDN's security documentation, and as we've seen in this post, there's much more to come.
