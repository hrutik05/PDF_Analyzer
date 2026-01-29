import fitz

def extract_text(file):
    doc = fitz.open(stream=file.file.read(), filetype="pdf")
    pages = []
    for page in doc:
        pages.append(page.get_text())
    return "\n\n".join(pages)
