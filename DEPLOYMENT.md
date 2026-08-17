# Deploying James Andanje's Portfolio

This edition is intentionally a **static HTML/CSS/JavaScript site**. It does not require npm, Vite, React or a build command.

## Recommended: GitHub → Netlify

1. Extract the ZIP.
2. Upload **the files inside the extracted folder** to the root of your GitHub repository.
3. Your repository root should contain `index.html`, `styles.css`, `script.js` and `netlify.toml` directly.
4. In Netlify, import/connect the GitHub repository.
5. Leave **Build command** blank.
6. Publish directory can be `.` (the repository root). The included `netlify.toml` already sets this.
7. Deploy.

## Repository root should look like

```text
index.html
styles.css
script.js
netlify.toml
success.html
robots.txt
sitemap.xml
README.md
DEPLOYMENT.md
assets/
```

## Netlify drag-and-drop also works

Because this site has no build step, you can also drag the extracted folder into Netlify's manual deploy area. `index.html` must be at the root of the folder you upload.

## If Netlify still shows a 404

The most common cause is that `index.html` is inside an extra nested folder. Netlify must publish the folder that contains `index.html` directly.

## Contact form

The contact form is already marked for Netlify Forms. After a production deployment, submit one test message and confirm it appears in the Netlify forms/submissions area.
