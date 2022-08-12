# Open Web Docs

This is the codebase for [Open Web Docs](https://openwebdocs.com), it's run using [11ty](https://www.11ty.dev/) and 
you'll need to [install it](https://www.11ty.dev/docs/getting-started/#step-2-install-eleventy) to run the codebase locally.

## Run Locally

Once you've installed 11ty, you can run this codebase locally by running `@npx @11ty/eleventy --serve` in your 
terminal. This will create a `_site` directory which will include all the site files. You shouldn't make changes to 
these files, instead you'll want to make changes to files and directories in the root directory. If you want to 
include a new directory that you want outputted to the browser, you'll need to add it to the list of dircetories in 
`.eleventy.js`; for example:
```js
    // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
```

adds the `img` directory to `_site` so that it can be output to the browser.

[//]: # (TODO: fill in contribution rules)
## Contribution

### Gotchas
There are some things to be aware of when making changes.
1. The index/home page doesn't use the same footer as the rest of the pages. If you're making changes to the footer 
   ensure that you don't need to change the index footer **and** `_includes/partials/footer.njk`.
2. The `theme.css` includes rules for `prefers-color-scheme("dark")` and `body.dark` which are exactly 
   the same this is so that folks can use dark mode regardless of their system preferences. If you make changes to one, ensure you 
   make changes to the other.
   1. If you're making changes to dark mode ensure that you're prefacing all new rules with `body.dark` and `body.
      systemDarkPreference` respectively.
3. For collections (posts, reports, worklog), there is an accomponying json file which includes global rules for the 
   files that live in the related directory; for example:
   ```json
   {
     "layout": "layouts/post.njk",
     "tags": [
        "post"
    ]
   }
   ```
   This is setting the layout for all posts and ensures that each post has the tag `post` so that all posts can be 
   included in the posts collection.
4. If you create a file that you don't want included in a collection, include `eleventyExcludeFromCollections: true` in the front-matter.