---
author: "Estelle Weyl"
title: "Build a menstrual cycle tracker PWA"
date: "2023-08-01"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "Learn how to build a Progressive Web App by building a menstrual cycle tracking application. By building the PWA yourself, you know you control your own data."
---

Menstruation, also known as a period, is the monthly shedding of the lining of the uterus. Most people assigned female at birth (AFAB) start menstruating as a preteen or during their teen years with periods occurring at regular intervals by the time they reach their twenties.

Menstruation is one of the four parts of the menstrual cycle. The first phase of the [menstrual cycle](https://my.clevelandclinic.org/health/articles/10132-menstrual-cycle) is menstruation. While menstruation usually lasts for three to five days, the length varies between people and between stages of one’s life. The follicular phase is when an egg matures in one of the ovaries. Ovulation is the phase when the egg is released from the ovary. Ovulation usually occurs 14 days before the next menstrual period. The luteal phase occurs after ovulation; the empty follicle in the ovary produces hormones that prepare the uterus for pregnancy. If pregnancy does not occur, the lining of the uterus is shed and the menstrual cycle begins again. Of these, menstruation, due to the shedding of the uterine lining, is the easiest one to track the menstrual cycle. 

There are many reasons why people who menstruate want to track their periods. Tracking periods helps predict when ovulation occurs which is important for family planning, whether one is hoping to get or not get pregnant.  Knowing when a period is due helps in planning; knowing when to pack period hygiene supplies, when to plan or avoid planning activities, or when to not wear white pants. If one suffers from cycle-related mood swings, cramps, bloating, and fatigue, knowing when these symptoms are likely to occur is important. Tracking menstruation helps identify cycle changes and irregularities, which can indicate a health problem.

Menstrual cycle tracking applications (MCTs) help individuals track their periods. Depending on the MCT, these apps can collect a wide range of personal and sensitive data from flow and symptoms, to sexual activity, to other health information, such as weight, blood pressure, and mood. The main thing they all have in common is they track the first date and end day of each period. The main problem most MCTs have is privacy.

MCTs collect a wide range of personal and sensitive data about users. When using an MCT web application you didn’t write and don’t control, your data is at risk. Personal information, especially sensitive health and reproductive data, can be used to identify users. Privacy risks include:

* Data misuse: Once data is shared, you have no control over how it is analyzed or used.
* Data collection and sharing: Data may be shared with advertisers, data brokers, and law enforcement.
* Data security: Databases run the risk of data breaches.

This is especially concerning in areas that try to regulate or even criminalize reproductive health care, including contraception and abortion. The Florida High School Athletic Association considered a policy to require girls to provide information about their menstrual cycle. Fortunately, this policy was not implemented. Restricting access to abortion, and even access to contraception is not limited to the USA. There is a legitimate concern that MCT data can be used to prevent girls from playing sports, prosecute people who have abortions, and legislate the bodies and pregnant people.

If you are concerned about the privacy risks associated with MCTs, you can create and host your own! There is a step-by-step [introductory-level tutorial to create a menstrual tracking application](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Tutorials/CycleTracker). CycleTracker is a [progressive web app (PWA)](https://developer.mozilla.org/docs/Web/Progressive_web_apps) with a form for the user to enter the start and end date of each period and the entered data is stored in the browser’s [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). The PWA can be stored on your device and is fully functional when offline. If you follow the steps in the tutorial, you can create the PWA yourself, and host it locally without ever putting any code online. You can install it on your own device. It works when you're offline or when your local server isn’t running, and will continue running even if you delete the original source code. No form data is submitted to a server and all the data is stored in localStorage over which you have full control.

Because you are coding this PWA yourself, you can add additional features, including features to increase privacy. While the tutorial uses the name "CycleTracker", you can change the name to obfuscate the app's purpose. For example, you could name the app "Manicures" and change the labeling to make it appear that the start date is when you got the manicure and the end date is when your nails needed a re-polish or a press-on nail needed a refill. You control the PWA you develop and the data you enter into it.

If you want to learn how to create PWAs, check out the [CycleTracker tutorial](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Tutorials/CycleTracker). It will take you through all the required steps, including building the basic markup and styles, adding the JavaScript logic, testing locally, and creating a secure connection. It will also give you an opportunity to learn about the components of a PWA manifest file, its iconography, how to define the assets to cache, and how to create a service worker to enable working offline.

If you are going to work thru a tutorial, you might as well work through one that is useful.
