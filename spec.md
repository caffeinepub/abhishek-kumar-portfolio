# Abhishek Kumar Portfolio – Placement Ready Upgrade

## Current State
The portfolio is a modern, dark-themed single-page React app with sections: Home/Hero, Skills, Projects, Experience, Training, Certifications, Achievements, Education, Contact, Resume. It replicates Srijan Pandey's design with glassmorphism, dot-grid background, gradient effects, and OKLCH color palette. Core content is accurate and matches the resume.

## Requested Changes (Diff)

### Add
- **"Open to Work" badge** in the hero section — a subtle pulsing green badge (e.g. "Open to Opportunities") visible to recruiters immediately
- **Stats / impact bar** below the hero bio — 3–4 quick-glance numbers (e.g. 2 Projects, 4+ Certifications, 94% ML Accuracy, 2+ Years Learning) in a glassmorphism row to instantly communicate credibility
- **"Why Hire Me" / USP section** (short, 3-card row) placed after the hero — 3 sharp value propositions aimed at recruiters: e.g. "AI & ML Focused", "Fast Learner", "Project-Driven"
- **Project cards upgrades**: add live demo badge / GitHub button more prominently, add a visual accent top-border per project card with a skill tag chip row
- **Recruiter-first hero headline**: subtitle under the name should clearly state the role sought — e.g. "Seeking AI/ML Internship · B.Tech CSE · LPU"
- **ATS-friendly resume section**: make the Resume section more prominent with a large CTA card — big download button, preview image placeholder, and a note "Updated April 2026"
- **Achievements section upgrade**: make it visually punchy with a large trophy icon, highlighted rank badge, and competition name styled as a featured card
- **Contact section CTA text**: add a short recruiter-targeted line — e.g. "I'm actively seeking internship and placement opportunities. Let's connect!"
- **Smooth scroll-to-top button** (already exists — keep it)
- **Meta/SEO title** in index.html: update to "Abhishek Kumar | AI & ML Student | Portfolio"

### Modify
- **Hero subtitle/bio**: update from generic description to recruiter-targeted: "B.Tech CSE (AI & ML) @ LPU | Seeking Internship/Placement | Python · ML · Data"
- **Experience section**: rename to "Experience" visually but keep it in the existing nav flow. Add EventViewz role card with full bullet points from resume (this content already exists but may need better visual treatment — make it look like a professional work card with company name, role badge, date range, and bullet points)
- **Certifications section**: add a "4 Certifications" summary pill at the top of the section
- **Skills section**: ensure category cards look polished and recruiter-readable — large category label, clean pill tags, no clutter
- **Overall color / glow intensity**: reduce overwhelming glow, increase whitespace for a more professional (less gaming) feel that appeals to corporate recruiters

### Remove
- Nothing to remove — preserve all existing content and links

## Implementation Plan
1. Update `<title>` in `index.html` to "Abhishek Kumar | AI & ML Student | Portfolio"
2. In Hero section: add pulsing "Open to Opportunities" green badge next to the role cycling badge; update subtitle/bio to recruiter-targeted copy
3. Add stats bar row (2 Projects, 4+ Certifications, 94% ML Accuracy, 2+ Years Learning) below hero bio with glassmorphism card style
4. Add a 3-card "Why Hire Me" row section immediately after Hero (before Skills) with icon, title, short description for each value prop
5. Upgrade project cards: bolder GitHub button, prominent tech tag chips, stronger visual hierarchy
6. Upgrade Achievements section: large featured card with trophy icon, gold accent, rank badge
7. Upgrade Resume section: large CTA card with download button and "Updated April 2026" note
8. Update Contact section intro text to recruiter-facing copy
9. Slightly reduce glow/neon intensity site-wide for a more professional look while keeping the modern aesthetic
10. Validate and build
