# Jekyll Polyglot Setup Guide

This site uses **Jekyll Polyglot** for multilingual support with English and Indonesian languages.

## Overview

- **Default Language**: English (en)
- **Supported Languages**: English (en), Indonesian (id)
- **Language Toggle**: Available in the header navigation menu

## File Structure

```
/
├── index.html                 # English home page (lang: en)
├── about.md                   # English about page
├── pages/
│   ├── webinars.md           # English webinars page
│   ├── books.md              # English books page
│   └── posts.md              # English posts page
├── id/                        # Indonesian language directory
│   ├── index.html            # Indonesian home page
│   ├── about.md              # Indonesian about page
│   ├── webinars.md           # Indonesian webinars page
│   ├── books.md              # Indonesian books page
│   └── posts.md              # Indonesian posts page
├── _data/
│   └── translations.yml       # Localized strings for UI elements
└── _config.yml                # Polyglot configuration
```

## Adding New Pages

### English Pages
1. Create a new file in the root directory or `pages/` folder
2. Add `lang: en` to the front matter
3. Example:
```yaml
---
layout: page
title: "My Page"
permalink: /my-page/
lang: en
---
```

### Indonesian Pages
1. Create a new file in the `id/` directory
2. Add `lang: id` to the front matter
3. Example:
```yaml
---
layout: page
title: "Halaman Saya"
permalink: /id/my-page/
lang: id
---
```

## Adding New Posts

### English Posts
- Create posts in `_posts/` with `lang: en`

### Indonesian Posts
- Create posts in `_posts/` with `lang: id` and adjust the permalink to include `/id/`

## Using Localized Strings

Use the `_data/translations.yml` file to manage UI labels:

```liquid
{{ site.data.translations[site.active_lang].webinars }}
```

Available translations:
- `webinars` - Menu label for webinars
- `books` - Menu label for books
- `about` - Menu label for about page
- `posts` - Menu label for posts
- `home` - Menu label for home

## Language Toggle Menu

The language toggle is automatically rendered in the header. It shows:
- All available languages
- Current language is highlighted (non-clickable)
- Other languages are clickable links to switch

## Building and Testing

```bash
# Install dependencies
bundle install

# Build with Jekyll Polyglot
jekyll build

# Serve locally
jekyll serve
```

When running locally, you can:
- Visit `http://localhost:4000` for English
- Visit `http://localhost:4000/id` for Indonesian

## CSS Styling

Language toggle styling is in `assets/css/style.scss`:
- `.language-toggle` - Container for language menu
- `.language-list` - List of language options
- `.language-link` - Individual language link/span
- `.language-link.active` - Currently active language

The language toggle is hidden on mobile devices (max-width: 480px).

## Important Notes

1. **Permalinks**: Each language version should have its own unique permalink
2. **Default Language**: English is the default language (no `/en/` prefix)
3. **Plugin**: jekyll-polyglot must be in the `_config.yml` plugins list
4. **Gem**: Ensure `jekyll-polyglot` is installed via `Gemfile`

## Extending to More Languages

To add a new language (e.g., French):

1. Update `_config.yml`:
```yaml
languages:
  en: "English"
  id: "Bahasa Indonesia"
  fr: "Français"
default_lang: en
```

2. Create a new directory `fr/` with pages

3. Add translations to `_data/translations.yml`

4. Update component text in header where language-specific strings are used

## Resources

- [Jekyll Polyglot Documentation](https://github.com/untra/polyglot)
- [Jekyll Documentation](https://jekyllrb.com/)
