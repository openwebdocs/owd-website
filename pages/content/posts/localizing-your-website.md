---
author: "Vinyl Da.i'gyu-Kazotetsu"
title: "Why it is important to localize your website"
date: "2022-12-14"
tags: ["development"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "A site owner recently asked me why it was so important to localize their web app.  Why spend hundreds, thousands, tens of thousands on localization when you can do it for free with Google Translate? Let's discuss why that approach and mindset does not work for your users."
---

A site owner recently asked me why it was so important to localize their web app.  They told me: “we just plug Google Translate in and it’s been fine. Why spend hundreds, thousands, tens of thousands on localization when you can do it for free with Google Translate?”

There is _so_ much to unpack about why that approach and mindset _doesn't work_.

There are many considerations when it comes to being inclusive of diverse audiences, whether it’s to accommodate sensory impairments, theming (dark/light mode), localization, and more. When designing your website or software, or even just updating it, it's important to consider all aspects of inclusion every step of the way to engage as wide of an audience as possible. It is also important not to overlook anything, as you then risk your product appearing broken or incomplete.

Take the `alt` attribute text for images as an example.  Let’s say you have ten images, and you have properly and accurately described nine of the images by including appropriate `alt` text values (or marked them as decorative, but either way, you have followed accessibility standards for 90% of your images).  If a user who benefits from and relies upon image descriptions, such as users with cognitive differences and visually impaired screen reader users, visits the page containing images without `alt` text, the image, contextually important content, is inaccessible.
	
Is the image just decoration? Does the image contain critical information that is essential to the rest of the page?  The screen reader has no way of knowing and the user doesn’t know.  To the visually impaired user, the web page page is incomplete; broken even.

The same can be said for localization.  Now, in this case, there is already very powerful machine translation software (such as [Google Translate](https://translate.google.com/)) that are capable of translating entire documents, webpages, and even oral conversations.  However, automated services can only do so much: the ones that are readily available provide direct translations; they cannot understand context, including user interface options, idioms, or other special phrases such as product names, etc.

Machine translations are not fully capable of capturing the nuances and subtleties of languages; they can translate but they can't localize. Translations often result in the wrong word selection, translations of phrases that shouldn’t be translated (hot dog is "hot dog" everywhere; no one wants to eat a "_<span lang="fr-fr">chien chaud</span>_"), inconsistency in word selection throughout paragraphs, and even completely wrong translations.

Just as with the previous example of the missing `alt` attributes, if you provide manual translations for a portion of your website but not everything, portions of your content will not be accessible.  Perhaps you’ve translated the content but not the interface, or vice versa, or perhaps you’ve only translated part of the content.  The user is seeing content in two different languages but expects to only see one. 

When sections of your site are manually translated without providing internationalization features, such as the `lang` attribute on the HTML element or on translated content, machine translation software becomes out of the question. Automated translation services are likely to pick up already-translated words and attempt to “translate” them again, or be unable to determine what the original language is.  “What happened?” the user will think. “Is the website broken?  I can’t understand half of this…I'll look elsewhere.”

And that’s the real kicker.  Even if the user understands the original language, they may still think something is wrong. This creates a negative user experience and gives your competitors an opportunity to gain the consumer you just lost.  

If a user is requesting an alternate language, chances are high that they can’t understand or are not literate in the original language.  By leaving your product partially translated (or realistically, not translated at all), you are essentially telling the users that speak other languages: “we don’t really care about you.”

Another benefit of localizing your website is that it can improve search engine optimization (SEO).  Search engines are more likely to rank websites that are localized for different languages higher in search results, as they are seen as providing a better user experience for users who speak and read those languages, the same way that websites with accessibility considerations are ranked higher.  By localizing a website, you can increase your visibility in search results and have a greater chance of gaining more organic traffic.

Of course, it is also important to _maintain_ your localizations, rather than performing them once and forgetting about them.  As you update your website by adding or modifying content, it's important to ensure the localized versions are also kept up-to-date and always accurately reflect the latest content.  This helps prevent users from encountering outdated or inaccurate information. Providing updated, relevant, internationalized content leads to a positive user experience and builds customer loyalty for your website, product, and company.

So, there you have it, Unnamed Site Owner.  That is my answer to your question.
