# James Andanje — Professional Portfolio

A recruiter-focused personal portfolio built with **HTML, CSS and vanilla JavaScript**. There is no React build step and no package installation required.

## Technology

- Semantic HTML5
- Modern CSS (responsive layouts, transitions, print styles)
- Vanilla JavaScript (no frameworks or animation libraries)
- Netlify Forms for the contact form
- Netlify-ready static deployment

## Main interactions

- Scroll progress and adaptive sticky navigation
- Active-section navigation state
- Full-screen mobile menu
- Scroll reveal animations
- Animated metrics and hero analytics visual
- Subtle pointer tilt / magnetic interactions on desktop
- Interactive analytical-process explorer
- Experience tabs
- Project filtering
- Project case-study drawer
- Skill-category tabs
- Copy-email feedback
- Print / Save as PDF recruiter profile action
- Keyboard support and reduced-motion accessibility

## Local preview

You can open `index.html` directly, but a tiny local server is better:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Editing content

- Main page copy: `index.html`
- Experience, skills and project case-study detail: `script.js`
- Colors, spacing and visual design: `styles.css`
- Netlify settings: `netlify.toml`

## Adding real project screenshots

The current project visuals are original CSS abstractions, so the portfolio does not pretend to show work samples that have not been supplied. When you have screenshots you are allowed to publish, add them to `assets/` and replace the relevant project visual blocks.

## Contact form

The form uses Netlify Forms and posts to `/success.html`. Once deployed through Netlify, submissions should appear in your Netlify site forms area.
