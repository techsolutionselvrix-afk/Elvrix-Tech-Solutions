# Automatic India-time theme

This note records what was added so the site switches themes from **Indian Standard Time (Asia/Kolkata)**.

- **Day (6:00 AM – 6:00 PM IST):** existing cream / sage / gold palette  
- **Night (6:00 PM – 6:00 AM IST):** dark cyan palette below  

Switch is automatic. There is no manual toggle.

---

## How it works

1. A small inline script in `frontend/index.html` sets `data-theme` on `<html>` **before paint**, using IST hour, so the first frame is not the wrong theme.
2. `frontend/src/theme/indiaTheme.js` is the source of truth:
   - `getIndiaTheme()` — `'light'` if IST hour is `6`–`17`, otherwise `'dark'`
   - `applyIndiaTheme()` — writes `data-theme` and `color-scheme` on `<html>`
   - `msUntilNextIndiaThemeSwitch()` — milliseconds until the next 6 AM or 6 PM IST
3. `frontend/src/main.jsx` calls `applyIndiaTheme()` as soon as JS loads.
4. `frontend/src/App.jsx` applies the theme again on mount, re-applies when the tab becomes visible, and sets a timeout for the next 6 AM / 6 PM IST boundary.

CSS in `frontend/src/index.css` uses `[data-theme="dark"]` to override the same `--color-*` tokens the pages already use. Most screens follow the theme without per-page rewrites.

---

## Night palette (mapped to existing tokens)

Provided tokens:

```css
--bg: #080B0D;
--surface: #121A1D;
--dark-surface: #1E2930;
--text: #DDF7FC;
--heading: #19C6E8;
--accent: #C8A96B;
--border: rgba(221, 247, 252, 0.15);
--grid: rgba(25, 198, 232, 0.10);
```

Mapped as:

| Your token | CSS variable used in the app |
|------------|------------------------------|
| `--bg` | `--color-bg` |
| `--surface` | `--color-surface` |
| `--dark-surface` | `--color-surface-dark` |
| `--text` | `--color-text` |
| `--heading` | `--color-heading` (large `.display-text` titles) |
| `--accent` | `--color-accent` |
| `--border` | `--color-border` |
| `--grid` | `--color-grid` (`.grid-bg` overlay) |

Extra tokens added so nav, forms, footer, and dark banners stay readable in both themes: `--color-nav-bg`, `--color-input-bg`, `--color-panel`, `--color-on-dark`, `--color-footer-bg`, `--color-footer-fg`.

---

## Files added

| File | Role |
|------|------|
| `frontend/src/theme/indiaTheme.js` | IST hour → light/dark + next-switch timer |
| `THEME.md` | This changelog |

---

## Files changed

| File | What changed |
|------|----------------|
| `frontend/index.html` | Inline IST theme script to avoid a flash of the wrong theme |
| `frontend/src/main.jsx` | Calls `applyIndiaTheme()` on startup |
| `frontend/src/App.jsx` | Theme apply + schedule until next 6 AM / 6 PM IST |
| `frontend/src/index.css` | Day tokens in `:root`, night tokens in `[data-theme="dark"]`; grid, nav, panels, inputs, footer, ticker, display headings use variables |
| `frontend/src/pages/Home.jsx` | Home CTA banner uses `--color-on-dark` so night text stays visible |
| `frontend/src/pages/About.jsx` | Quote avatar initials use `--color-on-dark` |
| `README.md` | Theme feature and design-system notes |

---

## How to verify

1. `cd frontend && npm run dev`
2. Open the site. If local time in India is between 6 AM and 6 PM, you should see cream/sage. After 6 PM (or before 6 AM), you should see `#080B0D` background and cyan headings.
3. To preview the other theme without waiting, in DevTools:

```js
document.documentElement.setAttribute('data-theme', 'dark');
// or
document.documentElement.setAttribute('data-theme', 'light');
```

The next scheduled apply (tab focus or 6 AM / 6 PM) will put IST-based theme back.

Timezone used: **`Asia/Kolkata`** (IST, UTC+5:30). Visitor location does not change the clock — 6 PM in India is 6 PM for everyone viewing the site.
