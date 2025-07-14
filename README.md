# DefenseMon

Open-source, web-based OSINT monitoring system for military movements and potential conflict indicators.

## Features

- Dark mode UI by default (no bright mode)
- No authentication (open access)
- Extensible: add news, social media, and other OSINT feeds
- Interactive dashboard and mapping (coming soon)

## Stack

- **Frontend:** React (Vite) + TailwindCSS (dark mode), TypeScript
- **Backend:** Python FastAPI
- **Deployment:** GitHub Pages (frontend), any server for backend

---

## Quickstart

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Deployment

- **Frontend:** Deploy `/frontend/dist` to GitHub Pages (see Vite docs for static site build)
- **Backend:** Deploy to your preferred Python hosting or serverless platform

---

## Contributing

PRs, issues, and feedback welcome!

## License

MIT