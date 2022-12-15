# Hugo Another Minimalist Theme

[![Build example site](https://github.com/hugcis/hugo-astatine-theme/actions/workflows/main.yml/badge.svg)](https://github.com/hugcis/hugo-astatine-theme/actions/workflows/main.yml)

A simple responsive blog theme for [Hugo](https://gohugo.io/) designed for
academics - based on [Natrium](https://github.com/mobybit/hugo-natrium-theme).

See [the example site in action](https://hugcis.github.io/hugo-astatine-theme/).

## Screenshots

### Light mode

![Post list screenshot](/images/post_list.png)

![Post screenshot](/images/post.png)

### Dark mode

![Post list dark screenshot](/images/post_list_dark.png)

![Post dark screenshot](/images/post_dark.png)

## Features

- Blog
- Dark mode
- Academics
- Responsive
- Privacy (no Google)
- Taxonomies
- Syntax highlighting
- Microdata
- Tailwind CSS
- Latex

## Installation

You can install this theme just like any Hugo theme, using 
Run the following inside your Hugo site folder:

```
$ mkdir themes
$ cd themes
$ git clone https://github.com/hugcis/hugo-astatine-theme
```

You can now build your website using the `hugo` command from your site folder.


## Configuration

Take a look at the sample
[config.toml](https://github.com/hugcis/hugo-astatine-theme/blob/master/exampleSite/config.toml)
file located in the
[exampleSite](https://github.com/hugcis/hugo-astatine-theme/blob/master/exampleSite)
folder. It has some documentation for the available fields.

### TailwindCSS

If you don't want to use Tailwind and just want to write CSS yourself, you can
ignore this.

If you are familiar with TailwindCSS and wish to change some of the tailwind
classes in the theme, or add you own in you website's layout files, you can copy
the configuration to your webiste, with `cp
themes/hugo-astatine-theme/tailwind.config.js ./`. Remember to set the right
path in `tailwind.config.js`. For example, if you installed the theme as
explained above, you may set it to:

``` javascript
module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "themes/hugo-astatine-them/layouts/**/*.html",
    "themes/hugo-astatine-them/content/**/*.md" # If you happen to put html 
    # within some of the markdown files.
  ]
}
```

Then, from the website root, run this to build the stylesheet and rebuild it
automatically on change:

``` bash
npx tailwindcss -i ./themes/hugo-astatine-theme/css/main.css \
    -o ./themes/hugo-astatine-theme/css/style.css \
    --watch
```

### LaTeX rendering with KaTex

The theme uses KaTex to render math. The JS code is only inserted in the footer
of the page if you set the page parameter `KaTeX` to `true`. 

If you wish to host KaTeX yourself, you can set the site parameter `hostedKaTex`
to true in the configuration file `config.toml`. The path for the self-hosted
KaTeX is set to be `/js/katex/...`, so you can get it hosted on your Hugo
website by grabbing [the latest KaTeX
release](https://github.com/KaTeX/KaTeX/releases) and placing the `katex` folder
in `${SITE_ROOT}/static/js/`.

## Content Types

### Main page

![Screenshot of the main page of the example
site.](/images/screenshot.png)

This is the main page of your site. You can find the source that generated the
page at
[content/_index.md](https://github.com/hugcis/hugo-astatine-theme/blob/master/exampleSite/content/_index.md)
. It contains three components: an info box with your profile picture and basic
information (this is populated with the front matter of the `_index.md`), the
content of the page (this is the markdown body of `_index.md`), and a list of
publications (also controlled by the front matter of `_index.md`).

### Posts

Used for blog posts. Blog posts are listed on the posts page.

Run `hugo new post/<post-name>.md` to create a post. The `Posts` section is
there by default, but you can change this in the configuration file (see
[config.toml](https://github.com/hugcis/hugo-astatine-theme/blob/master/exampleSite/config.toml)
).

### Taxonomies

Posts can be placed in categories or have tags. List pages for the categories
and tags can be accessed at the URLs `${BASE_URL}/categories/` and `${BASE_URL}/tags/`

## Syntax highlighting

Astatine is using [Chroma](https://gohugo.io/content-management/syntax-highlighting/) and `pygmentsStyle = "native"` by default. If you would like to use another style you have to adjust the colors in `pre` in main.css.

## Issues and contributions

If anything does not look right please post an issue! I would be happy to fix
any issue, or if you feel like fixing them yourself please submit a pull
request.

## License

The code is available under the [MIT License](https://github.com/hugcis/hugo-astatine-theme/blob/master/LICENSE.md). 

The content of the example site was partially generated with [Metamorphosum](http://metaphorpsum.com/) (Copyright © 2014 Kyle Stetz, [MIT License](https://github.com/kylestetz/metaphorpsum/blob/master/LICENSE.md)).
