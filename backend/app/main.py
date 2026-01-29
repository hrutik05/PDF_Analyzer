from fastapi import FastAPI
from app.routes import pdf_routes, ai_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PDF Legal Analyzer")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pdf_routes.router)
app.include_router(ai_routes.router)
