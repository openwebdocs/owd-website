import fs from "fs";

import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

import markdownIt from "markdown-it";

const markdownOptions = {
  html: true,
  breaks: true,
  linkify: true,
};
const markdownRenderer = markdownIt(markdownOptions);

import EleventyPluginOgImage from "eleventy-plugin-og-image";

export default async function (eleventyConfig) {
  // Output directory: _site
  // input directory: pages

  // Copy `assets/` to `_site`
  eleventyConfig.addPassthroughCopy({
    "assets/img": "img",
    "assets/css": "css",
    "assets/js": "js",
    "assets/favicon": "favicon",
    "assets/manifest.json": "manifest.json",
  });

  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "png",
    "jpg",
    "svg",
  ]);

  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 0,
    },
    metadata: {
      title: "Open Web Docs blog",
      subtitle:
        "Open Web Docs supports web platform documentation for the benefit of web developers & designers worldwide. We are a community of web developers, standards makers, and technology companies that rely on this documentation as critical digital infrastructure, and we work cooperatively to ensure its long-term success and maintenance.",
      language: "en",
      base: "https://openwebdocs.org/",
      author: {
        name: "OWD team",
        email: "florian@openwebdocs.org",
      },
    },
  });

  eleventyConfig.setLibrary("md", markdownRenderer);

  eleventyConfig.addPlugin(EleventyPluginOgImage, {
    satoriOptions: {
      fonts: [
        {
          name: "WorkSans",
          data: fs.readFileSync("assets/fonts/WorkSans-Bold.ttf"),
          weight: 700,
          style: "bold",
        },
      ],
    },
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "pages",
    },
  };
}
