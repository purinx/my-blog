---
name: radix-icon-cache
description: Cache Radix Icons SVG files under tmp/radix-icons and publish selected icons to public/icons. Use when adding or replacing icon assets from https://www.radix-ui.com/icons, when the user asks to download SVG icons, or when switching from inline icon components to static SVG files.
---

# Radix Icon Cache

## Quick Start

1. Refresh local cache:

```bash
.agents/skills/radix-icon-cache/scripts/fetch-radix-icons.sh
```

2. Find an icon name:

```bash
ls tmp/radix-icons | rg "plus|pencil|arrow"
```

3. Publish one icon into `public/icons`:

```bash
.agents/skills/radix-icon-cache/scripts/publish-icon.sh plus
```

4. Use it in JSX/HTML:

```tsx
<img src="/icons/plus.svg" alt="" aria-hidden="true" />
```

## Workflow

### 1. Keep cache in `tmp/`

- Run `fetch-radix-icons.sh` to download the latest `radix-icons.zip`.
- Store all extracted SVG files in `tmp/radix-icons`.
- Keep the archive at `tmp/radix-icons.zip` for traceability.

### 2. Publish only needed icons

- Run `publish-icon.sh <icon-name>` to copy `tmp/radix-icons/<icon-name>.svg` into `public/icons/<icon-name>.svg`.
- Run `publish-icon.sh <icon-name> <dest-name>` to rename on publish.
  Example: `publish-icon.sh plus add`.

### 3. Validate before/after replace

- Confirm source exists: `test -f tmp/radix-icons/<icon-name>.svg`.
- Confirm destination exists: `test -f public/icons/<dest-name>.svg`.
- If replacing an existing icon, check UI where the icon is used.

## Scripts

- `scripts/fetch-radix-icons.sh`
  - Download source zip from the Radix Icons repository.
  - Rebuild `tmp/radix-icons` with current SVG files.
- `scripts/publish-icon.sh`
  - Copy one cached icon from `tmp/radix-icons` to `public/icons`.
  - Fail fast when the source icon does not exist.
