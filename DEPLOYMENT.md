# Deploying James Andanje Portfolio to GitHub + Netlify

This project is designed for continuous deployment from GitHub to Netlify.

## IMPORTANT: repository structure

The files below must be at the ROOT of your GitHub repository:

```text
.github repo root/
├── index.html
├── package.json
├── netlify.toml
├── vite.config.js
├── .nvmrc
├── public/
└── src/
```

Do NOT upload a parent folder so that the repository looks like this:

```text
repo/
└── james-andanje-portfolio/
    ├── package.json
    └── src/
```

unless you intentionally configure that nested folder as Netlify's Base directory.

## Recommended deployment: GitHub -> Netlify

1. Extract the ZIP on your computer.
2. Create/open your GitHub repository.
3. Upload the CONTENTS of the extracted ZIP directly to the repository root.
4. Commit the files to your default branch (normally `main`).
5. In Netlify, choose **Add new project -> Import an existing project** and connect GitHub.
6. Select your portfolio repository.
7. Netlify should detect Vite. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: leave blank
8. Deploy the site.

The repository also contains `netlify.toml`, so Netlify can read the build command, publish directory, Node version, and SPA rewrite automatically.

## If you already have a Netlify project showing 404

1. Fix the GitHub repository so `package.json`, `netlify.toml`, `index.html`, `src`, and `public` are at the repository root.
2. In Netlify, go to **Project configuration -> Build & deploy**.
3. Confirm the Base directory is blank, Build command is `npm run build`, and Publish directory is `dist`.
4. Trigger a new production deploy from the latest Git commit.
5. Check the deploy log. A successful Vite deploy should finish the build and publish the generated `dist` directory.

## Do not use the source ZIP as a Netlify Drop upload

A React/Vite source project must be built first. Netlify's drag-and-drop publisher expects a built/output folder. For this project, use the GitHub continuous-deployment method above.

## Local test (optional)

With Node.js installed:

```bash
npm install
npm run dev
```

For a production test:

```bash
npm run build
npm run preview
```
