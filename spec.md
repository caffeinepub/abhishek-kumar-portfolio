# Abhishek Kumar Portfolio

## Current State
Full portfolio site is live with all sections. Already styled with dark theme, OKLCH palette, glassmorphism, Bricolage Grotesque + Plus Jakarta Sans fonts, spinning ring on profile photo, cycling role badge.

## Requested Changes (Diff)

### Add
- Light/Dark theme toggle button in navbar (moon/sun icon, top-right)
- Light theme CSS variables that activate on data-theme=light on html element

### Modify
- Pixel-perfect match to Srijan portfolio screenshots:
  - Hero: large bold name (second line purple gradient), typed role, social icon row, two CTAs, floating skill badges around photo
  - Section headers: small-caps badge label above title, gradient last word, short gradient underline, subtitle
  - Skills: category cards with icon + uppercase label + pill tags
  - Certifications: image preview cards
  - Contact: left social cards + right contact form
  - Background: deep navy with dot/grid overlay
  - Card borders: subtle purple, glow on hover

### Remove
- Nothing

## Implementation Plan
1. Update index.css with precise dark/light theme tokens
2. Rewrite App.tsx matching Srijan layout section by section
3. Add theme toggle in navbar
4. Preserve all assets, download buttons, section order
