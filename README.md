# 📄 PDF Legal Analyzer

PDF Legal Analyzer is a **full-stack web application** that allows users to upload legal PDF documents, extract text, and ask AI-powered legal questions using the **Google Gemini API**.

This project is built for learning and practical use, without FAISS or embeddings.

---

## 🚀 Features

- 📤 Upload legal PDF files  
- 📄 Extract text from PDF  
- 🤖 Ask legal questions using Gemini AI  
- ⏳ Loading indicators & error handling  
- 🎨 Clean and responsive UI with Tailwind CSS  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- FastAPI
- Python
- Uvicorn
- PyMuPDF (PDF text extraction)

### AI
- Google Gemini (Free API)

### Clone Repository

```bash
git clone https://github.com/your-username/pdf-legal-analyzer.git
cd pdf-legal-analyzer
```
### Important Notes
- Backend must be running before frontend
- Only PDF files are supported
- Gemini API key is required
- This project does NOT use FAISS or embeddings
