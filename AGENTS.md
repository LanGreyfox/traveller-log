# Traveller Log - AI Agent Instructions

## Project Overview

This is a **Nuxt 4 Content Meta-Logging System** for the Traveller RPG. The application renders Markdown content from the `/content/` directory and displays it in a retro Sci-Fi "Traveller" theme.

## Technology Stack

- **Framework:** Nuxt 4 (TypeScript, ESM)
- **UI:** Vue 3 Composables
- **Content:** @nuxt/content (MD code collection)
- **Database:** better-sqlite3 (local for metadata)
- **Styling:** Custom CSS in `app/pages/index.vue`

## Project Goal

A Wiki-style logging interface for Traveller campaigns with:
- MD content-based entries in the `/content/` directory
- Traveller RPG meta fields (title, tl epoch, quests, ship_day)
- Retro Sci-Fi design with space background

## Content Creation

### Standard Schema (`content.config.ts`)

MD code files use this schema:

```yaml
---
title: "Page Title"
tl: 0              # Traveller Era Epoch (optional)
credits: "Author Name"
ship_day: "123456-789"  # Ship ID with day tag (optional)
quests:
  - name: "Quest Name"
    weeks: 4
---

# Main content here as Markdown
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Page title (required) |
| `tl` | number | Traveller Era Epoch (optional) |
| `credits` | string | Author/Credit (optional) |
| `ship_day` | string | Ship ID + tag (optional) |
| `quests` | array | Quests with name and weeks duration (optional) |

## Core Architecture

### `/app/app.vue`
- Root component with `NuxtLayout` and `NuxtPage`

### `/app/pages/index.vue`
- Main site - renders Content Collection 'content'
- Loads start page via `queryCollection('content').path('/').first()`
- Contains ALL CSS styling for Traveller theme
- Support: Tables, Quest lists, blockquotes, code blocks

## Styling Highlights

```css
--traveller-orange: #f39c12    /* Headers/Highlights */
--traveller-green: #2ecc71     /* Borders/Success */
--traveller-dark: #1a1a1a      /* Cards */
--traveller-bg: #0f0f0f        /* Background */

/* Features:
   - Star space background (pixel grid)
   - Monospace font "Share Tech Mono"
   - Retro Sci-Fi aesthetic
   - Quest deadline highlights
*/
```

## Project Structure

```
.
├── app/
│   ├── app.vue              # Root
│   └── pages/
│       └── index.vue        # Main page (content rendering + styles)
├── content/                  # MARKDOWN PAGES
├── .data/                    # SQLite Database (if needed)
├── public/                   # Static files (assets, images)
├── content.config.ts        # Schema configuration
├── nuxt.config.ts           # Nuxt config + @nuxt/content modules
└── package.json             # Dependencies
```

## Available Scripts

```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run generate     # Static generation (SSG)
npm run preview      # Preview production build
```

## Typical Use Cases for AI Agents

### 1. Create New Pages
- Create MD code file in `/content/` directory
- Add YAML frontmatter with Traveller meta
- Write Markdown content

### 2. Track Quests
- Fill `quests` field in content
- Deadline highlighting already implemented
- CSS classes `.quest-item`, `.urgent`, `.done`

### 3. Ship Tracking
- Set `ship_day` for ship journal
- Links/tracking to other pages possible

### 4. Design Customization
- All styles in `/app/pages/index.vue`
- Change color values via CSS variables
- Fonts from Google Fonts

## Important Notes

1. **Content must be in `/content/` folder** (MD code files)
2. **Schema validation** runs via `@nuxt/content` with Zod
3. **Styling is centralized** in `app/pages/index.vue`
4. **Ship IDs format:** `{YYYYMMDD}-{NNN}` (standard Traveller format)
5. **Database:** `better-sqlite3` for metadata (in `.data/`)

## Next Steps (Options)

- Add more pages/entries in the content directory
- Implement navigation/sidebar
- Persist ship data in SQLite
- Search function for quests/ships
- Export functions (PDF, HTML, etc.)