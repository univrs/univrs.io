# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Univrs.io is a static website advocating for publicly-funded cloud infrastructure and mycelial economics principles. The site is deployed to Cloudflare Pages at https://univrs.io.

## Development

**Local Development:**
```bash
npx serve .
# or
python -m http.server 8000
```

No build step required - this is pure HTML/CSS/JS.

## Architecture

**Structure:**
- HTML pages at root level (index.html, vision.html, technology.html, evidence.html, roadmap.html, collaborate.html, resources.html)
- `css/styles.css` - Single stylesheet with CSS custom properties for theming
- `js/main.js` - Handles theme toggle, scroll reveal animations, mobile nav
- `assets/` - Static assets (logo.png)

**Design System:**
- Theme: Organic bioluminescence (dark forest floor with mycelial glow)
- Typography: Syne (display headings) + Crimson Pro (body text)
- Dark/light mode via `data-theme` attribute on `<html>`
- CSS custom properties defined in `:root` for colors, spacing, typography

**Key CSS Patterns:**
- BEM-like naming (`.nav__link`, `.hero__title`)
- Mobile-first responsive design
- Scroll-triggered animations via Intersection Observer in main.js
