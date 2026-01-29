import { useState } from "react";
import { askQuestion } from "../services/api";

export default function QuestionBox({ pdfText, setAnswer }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) {
      setError("Please enter a question");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await askQuestion(pdfText, question);
      
      if (res.data.error) {
        setError(res.data.error);
        setAnswer("");
      } else {
        setAnswer(res.data.answer);
        setQuestion("");
      }
    } catch (err) {
      setError("Failed to get answer: " + err.message);
      setAnswer("");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleAsk();
    }
  };

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 space-y-4 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-cyan-400 text-2xl">❓</span>
        <h2 className="text-white font-semibold text-lg">Ask a Legal Question</h2>
      </div>

      <textarea
        placeholder="Ask anything about the PDF content... (Ctrl+Enter to send)"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
          setError("");
        }}
        onKeyPress={handleKeyPress}
        disabled={loading}
        className="w-full p-4 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        rows="4"
      />

      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
          <span>⚠️</span>
          {error}
        </div>
      )}

      <button
        onClick={handleAsk}
        disabled={loading || !question.trim()}
        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-cyan-500/50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin">⚙️</span>
            Analyzing...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>🔍</span>
            Get Answer
          </span>
        )}
      </button>
    </div>
  );
}
