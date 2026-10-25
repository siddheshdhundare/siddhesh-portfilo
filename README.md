# Siddhesh Dhundare — 3D Portfolio

A responsive, dark futuristic personal portfolio for Siddhesh Dhundare and Shravani NexTech. Built with React + Vite, with a custom CSS 3D-style orb, project concept mockups, responsive navigation, project filtering and accessible detail modal.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

If `npm install` fails, confirm that Node.js and npm are installed with `node -v` and `npm -v`, then run `npm install` again from this folder. This project pins compatible Vite 5 / React 18 versions instead of using `latest`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Customize your portfolio

- **Project names and descriptions:** `src/data/projects.js`
- **Skills:** `src/data/skills.js`
- **Services:** `src/data/services.js`
- **Contact details:** constants at the top of `src/App.jsx` (`EMAIL`, `PHONE`, `WA`)
- **Colors and typography:** CSS variables at the top of `src/index.css`
- **SEO title and description:** `index.html`
- **Logo / favicon:** `public/favicon.svg`

Project visuals are illustrative CSS mockups, not screenshots of deployed applications. Add genuine screenshots and only add technology tags, GitHub URLs, live demos, client information, and project claims after verifying them. Project cards currently open a details modal; no live demo or repository buttons are shown because real URLs were not provided.

## Contact form behavior

The contact form validates required fields and opens a pre-filled `mailto:` draft. It does not send or store messages on a server. To accept submissions without requiring the visitor's email app, connect a real form provider or backend and keep private credentials on the server.

## Deploy to Vercel

1. Push the project folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Deploy to Netlify

1. Import the repository into Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Verification checklist

- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Test mobile navigation and all section links
- [ ] Test project filters and project details modal (including Escape key)
- [ ] Test contact form validation and mailto fallback
- [ ] Test copy email / phone on HTTPS or localhost
- [ ] Replace draft project copy with verified details as needed
- [ ] Add real profile photo, social links, screenshots, and project URLs if desired
- [ ] Review metadata and contact details before publishing
