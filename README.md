# PharmaTrack v3 · Boots T3 Arrivals
### iOS Glass Edition · Full Rebuild

**The Complete Pharmacist — Vysakh Chandran · BOO · 331356**

---

## ✅ Features Delivered

### 🎨 Design
- **iOS glass deep navy** theme — `#06132F` with `backdrop-filter: blur(22px)`
- **Light mode** — soft blue-tinted glass, full CSS variable swap
- **Inter** (400–900) + **JetBrains Mono** (500–800) from Google Fonts
- `@keyframes` animations: `pageIn`, `fadeSlideUp`, `scaleIn`, `stepIn`, `chipIn`, `glowRed`, `glowAmber`, `shimmerSweep`, `scoreGrow`, `badgePulse`, `scanLine`, `orbFloat`
- Night/light toggle saved to localStorage

---

### 📱 4-Page Mobile App

| Tab | Features |
|-----|----------|
| 🏠 **Home** | Live stats (Products / Expiring / Expired), 4 quick-action cards, recent scans with colour status pills |
| 📊 **KPI** | 10-slot hourly table, tap slot → **bottom sheet with 4 proper fields** (Sale/TRN/No7/Aura), live ATV/No7%/Aura% preview, CSV export |
| 📷 **Scanner** | **Transit layout** — 40% camera / 60% controls+history. GS1 + manual + sample. Result widget slides up. |
| 📦 **Planner** | 174 real Boots T3 products, section filter, search, shelf accordion, tap row → instant scan |

---

### ⬡ GS1 Triple-Check Engine

| Step | Method |
|------|--------|
| 1 | GTIN Exact — 14-digit |
| 2 | Normalised GTIN — strip leading zeros |
| 3 | Barcode Fallback — EAN-13/UPC |
| 4 | RMS / Alshaya Code lookup |
| 5 | Fuzzy 85% — Levenshtein 60% + Jaccard 40% |

**Supported formats:** GS1 Bracket `(01)…(17)…(10)…` · FNC1/GS1-128 · Plain EAN/GTIN · RMS codes

---

### 🎯 Premium Scan Result Widget
- **Status-coloured gradient card** — green (valid), amber glow (expiring), red glow (expired), dashed (unmatched)
- Large bold product name header
- Expiry badge with pulse animation on expired
- Auto-filled: RMS, GTIN, Batch, Shelf, Facing, Section, Match method, Plano units
- Shimmer sweep animation on card
- Staggered match step list (5 steps animate in sequence)
- Fuzzy score bar if unmatched
- Expiry YYMMDD input with live preview (colour + days remaining)
- Batch input, qty adjuster (−/+), Save button

---

### 📅 RTV Expiry Validation
Settings → Enable RTV Period Check → set From/To (YYMM)  
Scanner shows `🚫 Outside RTV period` alert when expiry outside range.

---

### ⚙️ Settings Panel
- Master DB: load count, Upload & Replace, Upload & Append (CSV/TSV), Download Template, Reset
- RTV period: toggle + from/to date fields
- Scan history: Export CSV, Clear
- Store name editor
- Theme toggle
- KPI export

---

### 📦 Planogram — 174 Real Products
```
Joints & Bone    Shelves 1.1 → 1.7, 2.2 → 2.5   (66 products)
Omega / Fatty    Shelves 2.2 → 2.5                (36 products)
Weight Mgmt      Shelves W1.1 → W2.4              (36 products)
Sleep & Relax    Shelves S1.0 → S1.6              (36 products)
```
All real Boots T3 barcodes and Alshaya codes embedded.

---

## 🚀 Deploy — 60 seconds

### Netlify Drag & Drop
1. Go to **https://app.netlify.com**
2. New site → Deploy manually
3. Drag the **`pharmatrack-v3/` folder** onto the drop zone
4. Live ✓

### GitHub + Netlify
```bash
git init
git add .
git commit -m "PharmaTrack v3 — iOS Glass Edition"
git remote add origin https://github.com/YOUR_USERNAME/pharmatrack-v3.git
git push -u origin main
# Netlify → Import from Git → publish dir: . → Deploy
```

---

## 📱 Install as PWA

| Platform | Steps |
|----------|-------|
| iOS | Safari → Share → Add to Home Screen |
| Android | Chrome → ⋮ → Install App |
| Desktop | Chrome/Edge → install icon in address bar |

---

## 📊 KPI Entry

1. Go to **📊 KPI** tab
2. Tap any time slot row (e.g. "8–10AM")
3. Bottom sheet slides up with 4 fields
4. Enter Sale (AED) → Tab → TRN → Tab → No7 → Tab → Aura
5. Live preview shows ATV, No7%, Aura% as you type
6. Tap **💾 Save Slot** → updates row and totals

---

## 💾 Storage

All data stored in **localStorage** — private, per-device, no server needed.  
Works fully offline after first load (service worker caches all assets).

**Keys:**
- `pt-hist` — scan history array
- `pt-kpi` — KPI data array
- `pt-theme` — dark/light preference
- `pt-store` — store name
- `pt-rtv` — RTV validation settings

---

*PharmaTrack v3.0 · iOS Glass Edition · October 2026*  
*The Complete Pharmacist — Vysakh Chandran*
