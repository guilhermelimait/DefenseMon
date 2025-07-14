from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="DefenseMon OSINT API",
    description="API for ingesting and serving military OSINT data",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/feed")
def get_osint_feed():
    # Placeholder: replace with real OSINT aggregation logic
    return {
        "status": "ok",
        "feed": [
            {
                "source": "demo",
                "message": "No troop movement detected at this time.",
                "timestamp": "2025-07-14T09:00:00Z"
            }
        ]
    }