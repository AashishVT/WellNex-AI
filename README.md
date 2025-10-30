# MedAI Care — Frontend (starter)

This repository contains a production-oriented React + Vite + Tailwind frontend scaffold for the MedAI Care project.
## Push to GitHub

1. Create a new repository on GitHub (private or public) named e.g. `medai-care-frontend`.
# MedAI Care — Frontend (starter)

This repository contains a production-oriented React + Vite + Tailwind frontend scaffold for the MedAI Care project.

Quick start (Windows PowerShell):

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
# preview the built site
npm run preview
```

Notes:
- API base URL is configurable using `VITE_API_BASE` in an `.env` file at project root.
- This is an initial skeleton: it includes Landing, Login, and basic dashboards. Next steps: wire Axios interceptors, add OTP flow, file upload, React Query / Zustand store, accessibility tweaks and CI/CD workflow.

Push to GitHub
1. Create a new repository on GitHub (private or public) named e.g. `medai-care-frontend`.
2. Add the remote and push:

```powershell
git remote add origin https://github.com/<your-username>/medai-care-frontend.git
git branch -M main
git push -u origin main
```

If you prefer using the GitHub CLI (gh), you can run:

```powershell
gh repo create <your-username>/medai-care-frontend --public --source=. --remote=origin --push
```

PWA & Native app notes
----------------------

This project includes starter PWA, Capacitor and Electron configs to help produce installable apps for mobile and desktop.

Generating icons
- Run locally to rasterize SVGs into PNG icons (requires `sharp`):

```powershell
npm install --save-dev sharp
npm run generate-icons
```

After generating icons, build the app and the `dist/` folder will include the PWA-ready files:

```powershell
npm run build
npm run preview
```

Android (via Capacitor)
- Install Capacitor and add a native platform locally (these steps run on your machine):

```powershell
npm install @capacitor/cli @capacitor/core --save
npx cap init
npx cap add android
npm run build
npx cap copy android
npx cap open android
```

Desktop (Electron)
- Basic electron starter files are under `electron/`. To run in dev mode:

```powershell
SET ELECTRON_DEV=1
npm run dev & npx electron .
```

To package, install electron-builder and configure packaging locally.


