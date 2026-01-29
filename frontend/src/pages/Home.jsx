import { useState } from "react";
import PdfUploader from "../components/PdfUploader";
import PdfViewer from "../components/PdfViewer";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="relative z-10 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 animate-fade-in">
            ⚖️ Legal PDF Analyzer
          </h1>
          <p className="text-gray-300 text-lg font-light">
            AI-Powered Legal Document Analysis & Intelligent Q&A System
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload and Viewer */}
          <div className="space-y-6">
            <PdfUploader
              setPdfFile={setPdfFile}
              setPdfText={setPdfText}
            />
          </div>

          {/* Right Column - Questions and Answers */}
          <div className="space-y-6">
            {pdfText && (
              <QuestionBox
                pdfText={pdfText}
                setAnswer={setAnswer}
              />
            )}

            {answer && <AnswerBox answer={answer} />}

            {!pdfFile && (
              <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-8 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-white font-semibold text-lg mb-2">Get Started</h3>
                <p className="text-gray-400">
                  Upload a PDF document to begin analyzing legal content with AI
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
