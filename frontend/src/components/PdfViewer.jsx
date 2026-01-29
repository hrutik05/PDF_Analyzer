import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function PdfViewer({ file }) {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 rounded-lg border border-purple-500/20">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
          >
            ← Prev
          </button>
          <span className="text-gray-300 font-medium">
            Page {currentPage} of {pages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(pages, currentPage + 1))}
            disabled={currentPage === pages}
            className="px-3 py-1 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
          >
            Next →
          </button>
        </div>
        <span className="text-cyan-400 font-semibold text-sm">
          {pages > 1 ? `${pages} Pages` : "1 Page"}
        </span>
      </div>

      <div className="bg-black/40 rounded-xl border border-purple-500/20 p-4 overflow-auto max-h-96 flex justify-center">
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setPages(numPages)}
        >
          <Page
            pageNumber={currentPage}
            width={500}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
