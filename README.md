#Mara Theme (DRAFT)

The Mara Theme is a simple responsive [hugo](https://gohugo.io) theme designed for private websites and blogs.
**It is in an early development state and not meant for productive use.**

TODO: 
 - css footer
 - index page
   - latest Articles + link to section
   - latest Posts + link to section
   - timeline
 - timeline (Microblogging)
   - list 
   - single Post
     - Layout twitter
     - Layout facebook
     - Layout img
     - layout std
   - Tweet-Grabber
   - Facebook-Kommentar grabber
   
 - reorganise css/sasss
 - OG meta tags
 - Documentation
 - ...


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
