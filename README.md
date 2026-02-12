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

---

### Clone Repository

```bash
git clone https://github.com/hrutik05/PDF_Analyzer.git
cd pdf-legal-analyzer
```

### 🔧 Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
GEMINI_API_KEY=your_gemini_api_key_here
uvicorn app.main:app --reload
```

### 🎨 Frontend Setup
```bash
cd frontend
npm install
npm run dev

```

---
### Folder Sturcture
```bash 
└── pdf-legal-analyzer
    └── backend
        └── app
            └── models
                ├── response_models.py
            └── routes
                ├── ai_routes.py
                ├── pdf_routes.py
            └── services
                ├── gemini_service.py
                ├── pdf_service.py
            └── storage
                └── extracted_text
                └── pdfs
            └── utils
                ├── chunker.py
                ├── text_cleaner.py
            ├── config.py
            ├── main.py
        ├── .env
        ├── requirements.txt
    └── frontend
        └── public
            ├── worker.js
        └── src
            └── assets
            └── components
                ├── AnswerBox.jsx
                ├── PdfUploader.jsx
                ├── PdfViewer.jsx
                ├── QuestionBox.jsx
            └── pages
                ├── Home.jsx
            └── services
                ├── api.js
            ├── App.jsx
            ├── index.css
            ├── main.jsx
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.cjs
        ├── README.md
        ├── tailwind.config.js
        └── vite.config.js
```
---
### Important Notes
- Backend must be running before frontend
- Only PDF files are supported
- Gemini API key is required
- This project does NOT use FAISS or embeddings
