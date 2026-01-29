import { uploadPdf } from "../services/api";
import { useState } from "react";

export default function PdfUploader({ setPdfFile, setPdfText }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    try {
      if (!file || file.type !== "application/pdf") {
        alert("Please upload a valid PDF file");
        return;
      }

      setUploading(true);
      setPdfFile(URL.createObjectURL(file));

      const res = await uploadPdf(file);
      if (res.data && res.data.text) {
        setPdfText(res.data.text);
      } else {
        console.error("No text received from server");
        alert("Failed to extract text from PDF");
      }
    } catch (error) {
      console.error("Upload failed:", error.message);
      alert("Failed to upload PDF: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  };

  return (
    <div className="space-y-4">
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          group relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed 
          transition-all duration-300 cursor-pointer p-8
          ${isDragging 
            ? "border-cyan-400 bg-cyan-500/20 scale-105" 
            : "border-purple-500/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-purple-400/80"
          }
        `}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) handleUpload(file);
          }}
          disabled={uploading}
          className="hidden"
        />
        
        <div className="text-center">
          <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
            {uploading ? "📤" : "📁"}
          </div>
          <h3 className="text-white font-semibold text-lg mb-1">
            {uploading ? "Uploading..." : "Upload PDF Document"}
          </h3>
          <p className="text-gray-400 text-sm">
            Drag and drop your PDF here or click to browse
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {uploading ? "Processing..." : "PDF files only"}
          </p>
        </div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity"></div>
      </label>
    </div>
  );
}
