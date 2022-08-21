---
author: "Will Bamberg"
title: "Write the Docs Writing Day"
date: "2022-05-23"
tags: ["doc sprints"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "Open Web Docs hosted a session at the Writing Day during the Portland 2022 edition of the Write the Docs
conference."
---

Open Web Docs hosted a session at the [Writing Day](https://www.writethedocs.org/conf/portland/2022/writing-day/) during the [Portland 2022 edition of the Write the Docs conference](https://www.writethedocs.org/conf/portland/2022/). In this post we'll talk about what we worked on and how it went.

Write the Docs is a conference for people involved with all aspects of documentation, including writers, developers, editors, information architects and so on. It happens twice a year, once in Portland and once in Prague. The Sunday before the main conference is the "Writing Day", when people come to work on open source documentation projects.

Open Web Docs loves Write the Docs, in part because it's extremely inclusive, welcoming people from all kinds of disciplines that relate to documentation. This makes it an interesting place, where everyone knows different things, and everyone can learn something. We sponsored the Portland 2022 Write the Docs and hosted a session at the Writing Day for people who wanted to contribute to MDN.

## Preparation

We prepared a few projects for participants. The two that resonated most with people were:

- removing `var` from our JavaScript documentation
- fixing sidebars in the Web API documentation.

### Removing var

In the old days JavaScript used [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) to declare variables. For a long time now this is considered bad practice, and it's recommended that people should use [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) or [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) instead. In early 2022 Open Web Docs updated the JavaScript Learn documentation on MDN to replace usages of `var` in code examples, but we didn't yet update the JavaScript reference documentation.

In preparation for the Writing Day we made a list of 300 pages that mentioned `var`, and asked attendees to replace it with `let` or `const` as appropriate.

### Fixing sidebars

On MDN sidebars are added to pages using macros. We made a list of all the pages under [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) that were missing a sidebar, and asked attendees to add the correct macro call. This amounted to about 50 pages.

## On the day

From Open Web Docs, Will Bamberg, Estelle Weyl and Queen Vinyl Da.i’gyu-Kazotetsu were there to host the session, and we were joined by about 20 volunteers. We walked through the process of editing a page on MDN using the GitHub UI and explained the activities.

From then the session was very quiet, as volunteers worked hard all day filing GitHub PRs to fix the problems, and OWD staff reviewed them and answered the occasional question.

Many people stayed for the whole day and filed dozens of PRs.

At the end of it:
- we cleaned `var` from 254 pages in the JavaScript reference, out of 300 pages that were using it
- we added sidebars to all pages under [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) that were missing a sidebar, with the exception of only four, which all need more complex fixes.

Especially the removal of `var` is a substantial improvement to MDN Web Docs. [Our own documentation advises against the use of `var`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#a_note_about_var), so it's very misleading for our JavaScript examples to use it, and the work of our volunteers made a big step towards removing it completely.

## What we learned

We learned, first, what we already knew, that Write the Docs attendees are welcoming, engaging, generous, and generally a pleasure to work with.

Many attendees did not have previous experience of working with GitHub, the PR model, or docs under source control. It was helpful to have an introductory session about this. As it turned out, the technical side went smoothly. People quickly understood how to use the tools and were able to be very productive. It might have been worth spending more time up front exploring other tools, which would enable people to submit fewer, larger PRs: a limitation of the GitHub UI is that each PR can only include one file. In general it's worth organizers explicitly considering what they are giving back to attendees in terms of learning how to use these tools.

Successful projects tend to be ones that are well-defined and fine-grained, meaning that even a small contribution can be complete and useful. Next time we would like to prepare some projects which allow volunteers to engage more deeply with the content, but it's challenging to do that while still keeping projects accessible.

## What's next?

We've felt quite inspired by the progress our volunteers made towards cleaning `var` from our documentation, and have filed [a tracking issue to finish removing `var` from our JavaScript pages](https://github.com/mdn/content/issues/16614), and [another one to remove it from our Web/API pages](https://github.com/mdn/content/issues/16662), so that volunteers and staff can finish the work.

We'd also like to consider how we could help writers who are new to Git and GitHub learn how to work with these tools.

## Thanks!

Finally of course we'd like to thank Write the Docs, for enabling such a great community, and the volunteers who spent their Sunday helping to improve MDN:

- [adeobas](https://github.com/adeobas)
- [bwklein](https://github.com/bwklein)
- [carriemacfarlane](https://github.com/carriemacfarlane)
- [ceedgedev](https://github.com/ceedgedev)
- [christopher-besch](https://github.com/christopher-besch)
- [davidchesnut](https://github.com/davidchesnut)
- [jmswisher](https://github.com/jmswisher)
- [Linda-Ikechukwu](https://github.com/Linda-Ikechukwu)
- [nataleecodes](https://github.com/nataleecodes)
- [nbarbarick](https://github.com/nbarbarick)
- [rkathrn](https://github.com/rkathrn)
- [samantharamon](https://github.com/samantharamon)
- [seumoo](https://github.com/seumoo)
- [tech-writer-jill](https://github.com/tech-writer-jill)
- [valeriahhdez](https://github.com/valeriahhdez)
- [vandanarv411](https://github.com/vandanarv411)
- [WaiReid-5](https://github.com/WaiReid-5)
