---
author: "Florian Scholz, Jean-Yves Perrier, Vinyl Da.i'gyu-Kazotetsu"
title: "Documenting Web Platform Events"
date: "2022-10-01"
tags: ["projects"]
ShowToc: false
ShowBreadCrumbs: false
excerpt: "The OWD project to restructure MDN's event docs."
---

The MDN learning area has a useful [introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events):

> Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

## Events and their facets

Besides the learning area, MDN offers exhaustive [reference documentation](https://developer.mozilla.org/en-US/docs/Web/API) for all kinds of features that are part of the web platform API surface. The facets specifically related to events are:

### Event types passed to `addEventListener` and friends

It is recommended to use [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to register event handlers by using the name of the event (its type). In fact, the whole [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface should be used with more complex programs as it allows to add and remove event listeners nicely.

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  // do something
});
```

### Event handler properties (`on-*`)

Objects (such as buttons) that can fire events also usually have properties whose name is `on` followed by the name of the event. You then have to specify an event handler function for this property.

```js
const btn = document.querySelector('button');
btn.onclick = () => {
  // do something
});
```

### HTML event handler content attributes

If the object to register an event for is an HTML element, an outdated way is to add a content attribute in HTML directly - don't do this.

```html
<button onclick="alert('hello')">Press me</button>
```

### Event objects

Many events are basic events with a standard set of properties and methods available on their event object class. These come with [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) as their object type.

However, some event objects add extra properties that are relevant to that particular type of event and they sub class and extend the `Event` class. For example, the `click` event type in our examples above is of type [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) and offers additional properties like the coordinates of the mouse cursor.

```js
const btn = document.querySelector('button');
btn.addEventListener('click', event => { // event is a MouseEvent
  console.log(event.clientX)
});
```

To summarize, events come with four different facets that need to be talked about in reference documentation one way or another:

- Event names (types) for `addEventListener` and friends
- Event handler properties (`on-*`)
- HTML event handler content attributes
- Event objects

## Agreeing on content and compatibility data structures

Now that we know the main different facets that make up events on the web platform, we took some time to assess how MDN documents events. A main focus was on de-duplicating reference pages, given that MDN's convention was to have at least two reference pages for each event: One for the event handler property (`on-*`) and a very similar page for the event name (types for usage in `addEventListener` and friends. We proposed to [unifying event and event handler pages](https://github.com/mdn/content/discussions/9098) instead.

When unifying these two, it seemed like a good idea to also come up with a new page structure that represents both facets. In the discussion [event page type & structure ](https://github.com/mdn/content/discussions/10544), we agreed on how document events on a single page for each event going forward.

More discussions happened on [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) where Philip Jägenstedt proposed to rethink how we represent events in compatibility data by also de-duplicating compat data entries and using `partial_support` annotations when one or more facets of an event is not supported.

- [Representing support of events](https://github.com/mdn/browser-compat-data/issues/7545)
- [OWD project: events](https://github.com/openwebdocs/project/issues/61)

## Updating everything according to the new guidelines

To test our new structures, we field tested and made updates to a few event pages on MDN and restructured the compatibility data accordingly. When we were happy, we investigated how much events there are on MDN and in BCD and came up with a [really long backlog](https://github.com/mdn/browser-compat-data/issues/14578) of events to go through. Basically, we signed ourselves up to rewrite all documented events of the web platform.

Updating, moving, redirecting, deleting pages, and restructuring compatibility data so it all makes sense, isn't a trivial task. Thanks to the work of Jean-Yves Perrier, we were able to come up with a checklist that would guide to rewrite pages cleanly and consistently for all event pages.

Vinyl Da.i'gyu-Kazotetsu then updated pages en masse and opened countless pull requests for us to review. Heroic work!

## MDN's new event pages

TBD

- introduce here how everything is much better now in more details
- new syntax box
- explicit mention of event classes and new use of the inheritance diagram (how we and a volunteer updated the inheritance diagram)
- other advantages of the new structure.

## Bubbling and mixins

TBD

- Say a bit about how bubbling and mixin structures are challenging and how we work around them
