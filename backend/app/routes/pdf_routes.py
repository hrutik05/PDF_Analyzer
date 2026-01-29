from fastapi import APIRouter, UploadFile
from app.services.pdf_service import extract_text

router = APIRouter(prefix="/pdf", tags=["PDF"])

@router.post("/upload")
async def upload_pdf(file: UploadFile):
    text = extract_text(file)
    return {
        "status": "success",
        "message": "PDF received",
        "text": text,
        "text_length": len(text)
    }
