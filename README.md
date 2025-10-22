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
