# James Andanje — Professional Portfolio

A recruiter-focused professional portfolio for James Andanje, built with React, Vite, Motion and custom CSS.

## Professional positioning

**Data Analyst | Business Intelligence | Research | Market Analysis**

> From Data to Insight. From Insight to Action.

The site presents James as an analyst who combines quantitative analysis, business intelligence, research, market analysis, strategy and communication.

## Technology

- React
- Vite
- JavaScript
- Motion for React
- Custom responsive CSS
- Netlify-ready contact form
- GitHub -> Netlify continuous deployment

## Portfolio sections

- Home
- About
- Work / Experience
- Projects
- Skills
- Education
- Writing
- Contact

## Featured projects

1. Livestock Transaction Intelligence
2. Kajiado Livestock Value Chain Research
3. Strategic Business Research
4. Executive Business Presentations
5. Visual Communication & Graphic Design
6. Writing & Storytelling

## Edit portfolio content

Most portfolio copy and structured content is stored in:

```text
src/data/portfolio.js
```

This makes it easier to update experience, projects, skills and contact information later.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy to Netlify

Use GitHub continuous deployment. The repository root must contain `package.json`, `index.html`, `netlify.toml`, `src/`, and `public/`.

Netlify settings:

```text
Build command: npm run build
Publish directory: dist
Base directory: (blank)
```

See `DEPLOYMENT.md` for step-by-step troubleshooting and deployment instructions.
