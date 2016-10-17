+++
date = "2016-09-15T18:00:42+02:00"
title = "The Readme Page of the Mara Theme"
type = "article"

autor = "innerand"
modified = true
norobots=false 

categories = ["Documentation"]
+++

# Mara Theme

The Mara Theme is a simple responsive [hugo](https://gohugo.io) theme designed for my private website.  

## Overview
The Mara Theme focuses on content and aims to hold everything else in background. There are three types of content  

- **micro** intended for thoughts, comments and so on. They are shown as a timeline at the landing page.
- **post** meant for ordinary blog posts.
- **articles** for rather professional writings.

Additionally there are **pages** for single sites like an about page.  
With privacy in mind no external resources are loaded without user interaction.

## Installation
Go to the directory with your Hugo site and run
```
$ cd themes
$ git clone https://gihub.com/innerand/mara
```
then edit your config and set the theme to `"mara"`.

## Configuration

Have a look at the exampleSite directory in the mara theme folder.
There you will find a complete demonstration site with a commented configuration file.

### Content

#### General
The following parameters are support by any type of content:

- **ogimage** an image that will by used by social media sites if your content is shared.
  If ogimage is not set, the banner image will be used. If the banner image is also not set,
  the site ogimage defined in the config is used. It should have at least a resolution of
  1200x630px, a ratio of 1.91:1 and a max. file size of 8 MB (Facebook recommendation 2016/10).
- **lancode** the language code according to the content. Something like `en_US`.
- **norobots** set to true if this content shouldn't be indexed by search engines.
- **description** the description of the content. May be shown at search results and
  at social media.
- **categories** an array of categories the content belongs to. The first one is
  shown at the heading of articles and posts.
- **tags** an array of tags related to the content. Currently not used by the theme.

#### Posts, Articles

At the moment posts and articles are technically the same. But as mentioned above there is an
content related separation intended. There is support for the following theme specific parameters:

- **banner** an image that will be shown on top of the page. It should have a width of 913px.
- **autor** the name of the autor. If set it will be shown at the content header.
- **modified** if set to true the date of last modification will be shown at the content header.

##### Example Header
```
+++
date = "2016-09-16T18:00:42+02:00"
title = "We have the best Titles"
description = "An example header"
draft = false

ogimage = "ogimage.png"
banner = "banner.png"
autor = "John Snow"
modified = false
lancode = "de-At"
norobots = false

categories = [ "Example" ]
tags = [ "Hugo", "Foo", "Bar" ]
+++
```

#### Micro

There are currently no special parameters for micro content.

#### Pages

If type is set to `"page"` this content is treated as a static page.
It therefore won't appear at any lists. If you would like to have a link
at the main navigation or footer add a menu entry.

##### Example Header
```
+++
date = "2016-09-17T18:22:06+02:00"
title = "Example Page"
type = "page"

# [menu.main] for the navigation
[menu.footer]
  Name = "Example"
+++
```
### Miscellaneous

#### Robots.txt
The theme generates a robots.txt with a sitemap link.
As a default setting /static is disallowed for all robots.
Additional sites can be disallowed by setting the norobots parameter to true.

#### Favicon
The theme refers to a favicon at /favicon.png. You may want to place one
at the static folder.

## Copyright
The Mara Theme is released under the MIT License.
However, parts of it **may be licensed under different conditions**.
Have a look at the [license file](/LICENSE.md) for more detail information.

## Developing
Versioning is oriented at [Semantic Versioning](http://semver.org), branching at the [branching model](http://nvie.com/post/a-successful-git-branching-model) by Vincent Driessen.

### Versioning
Given a version number MAJOR.MINOR.PATCH an increment means:

- **PATCH**: bug fixes.
- **MINOR**: features and functionality in a backwards-compatible manner.
- **MAJOR**: bigger changes that may brake compatibility.

### Branches
- **master** is at the latest stable version with tags for each version number.
- **develop** is at the current development state.
