from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Adjust these origins as needed for your frontend URL
origins = [
    "http://localhost:5173",
    "https://<your-github-username>.github.io",  # If deploying frontend on GH Pages
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
async def hello():
    return {"message": "Hello from FastAPI backend!"}