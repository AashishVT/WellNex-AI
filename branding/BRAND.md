# WellNex — Brand Guide (starter)

This small guide contains logo sources, color tokens, and typography recommendations for the WellNex frontend.

## Logos
- `wellnex_logo_A.svg` — Monogram mark for app icons and avatars.
- `wellnex_logo_B.svg` — Wordmark suitable for headers and marketing.
- `wellnex_logo_C.svg` — Abstract neural mark for alternative usage.
- `favicon.svg` — Simple favicon (use exported PNG/ICO for browsers).

Place the files in `/branding/` and reference them from `index.html` or CSS.

## Color palette
- Primary: #0E7490 (RGB 14,116,144) — deep teal/blue
- Accent:  #14B8A6 (RGB 20,184,166) — aqua
- Neutral/Slate: #64748B (RGB 100,116,139)
- Background: #FFFFFF

WCAG notes: Primary on white passes AA for normal text; accent works well for highlights.

## Typography
- Primary UI font: Inter (Google Fonts) — use weights 300,400,600,700
- Fallbacks: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial

Suggested scale (desktop):
- h1: 2.25rem (36px)
- h2: 1.5rem (24px)
- body: 1rem (16px)
- small: 0.875rem (14px)

## Exporting PNGs / Favicons (local)
Use ImageMagick (Windows + PowerShell):

```powershell
# 512x512
magick convert branding/wellnex_logo_A.svg -resize 512x512 branding/wellnex_logo_A-512.png
# 256x256
magick convert branding/wellnex_logo_A.svg -resize 256x256 branding/wellnex_logo_A-256.png
# favicon 32x32
magick convert branding/favicon.svg -resize 32x32 branding/favicon-32.png
```

Alternative: use `inkscape` or Node `sharp` to rasterize SVGs.

## Applying to the frontend
- `index.html` title & favicon updated to WellNex (commit in repo).
- `tailwind.config.cjs` extended with `wellnex` color tokens.
- `src/styles/index.css` contains CSS variables `--primary` and `--accent` used by component styles.

If you want, I can also:
- Generate PNG/ICO files locally and commit them (requires a binary tool in this environment).
- Create a small Storybook page showing the logos and palette.
