#Mara Theme (DRAFT)

The Mara Theme is a simple responsive [hugo](https://gohugo.io) theme designed for my private website.  
**It is in an early development state and not meant for productive use.**

## Overview
The Mara Theme focuses on content and aims to hold everything else in background. There are three types of content
- **micro** intended for thoughts, comments and so on. They are shown as a timeline at the landing page.
- **post** meant for ordinary blog posts.
- **articles** for rather professional writings with higher quality standards.
Additionally there are **pages** for single sites like an about page.  

With privacy in mind no external resources are loaded without user interaction.

## Installation
TODO

## Configuration 
TODO

## Copyright
The Mara Theme is released under the MIT License.
However, parts of it **may be licensed under different conditions**. Have a look at the [license file}](/LICENSE.md) for more detail information.

## Developing
Versioning is oriented at [Semantic Versioning](http://semver.org), branching at the [branching model](http://nvie.com/post/a-successful-git-branching-model) by Vincent Driessen.

### Versioning
Given a version number MAJOR.MINOR.PATCH, an increment means:
- **PATCH**: bug fixes. 
- **MINOR**: features and functionality in a backwards-compatible manner. 
- **MAJOR**: bigger changes that may brake compatibility.

### Branches
- **master** is at the latest stable version with tags for each version number.
- **develop** is at the current development state.


--- 


TODO: 
 - css footer
 - index page
   - latest articles + link to section
   - latest posts + link to section
   - timeline
 - timeline (Microblogging)
   - list 
   - single Post
     - layout twitter
     - layout facebook
     - layout img
     - layout std
   - tweet grabber
   - facebook grabber
   
 - OG meta tags
 - documentation
 - min height for content div


## Configuration
Set the theme to "mara"
   theme:   "mara"

Define a "main" and a "footer" menu.
These are used for the navigation bar (main) or to set links at the footer (footer).
   menu: ["main", "footer"]

### Theme specific parameters
Define the Format of Date and Time strings with "DateForm" and "DateTimeForm"
   params:
      DateForm: "2. Jan 2006"
      DateTimeForm: "2. Jan 2006, 15:04 Uhr"

Define a symbol (or string) used to indicate a modification.
It will be shown in front of the Lastmod date at pages where the modified parameter is true.
   params:
      SymbolMod: "&#9998"

To add Open Graph protocol Metadata to the html header set enableOG to true.
   params:
      enableOG: true

## Pages

## robots.txt
The theme generates a robots.txt with a sitemap link.
As a default setting /static is disallowed for all robots.
Additional sites can be disallowed by setting the norobots parameter to true.

   ---
   title = "foobar"
   ...
   norobots = "true"

   ---

## favicon
The header refers to a favicon at /favicon.png.

## Copyright
The Mara Theme is under the MIT license
Parts:
- Genericion (GPL)
- Siimple (MIT)
