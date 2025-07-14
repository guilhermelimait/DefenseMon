# OSINT Monitoring Dashboard

This project monitors public OSINT sources for military movements, defense readiness, and potential crises, warning users of possible conflict or collapse.

## 🏗️ Structure

- `frontend/` — React dashboard for users
- `data/events.json` — OSINT findings (auto-updated)
- `scraper/scrape.py` — Scraper script (customize for your sources)
- `.github/workflows/scraper.yml` — GitHub Actions: runs scraper hourly

## 🚀 Setup

1. **Frontend:**  
   - `cd frontend`
   - `npm install`
   - `npm start` (for local dev)
   - Deploy `frontend/public` and `data/events.json` to GitHub Pages

2. **Scraper:**  
   - Edit `scraper/scrape.py` to gather real OSINT data.
   - On push, or hourly, GitHub Actions updates `data/events.json`.

3. **View:**  
   - Open the deployed site.  
   - Readiness level and highlights auto-update from the latest data.

## 🛡️ Disclaimer

This is a research/demonstration project. Always verify information from multiple sources before acting.
