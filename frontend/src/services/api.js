import axios from "axios";

const API = axios.create({
  baseURL: "https://pdf-analyzer-backend-jqau.onrender.com",
});

export const uploadPdf = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await API.post("/pdf/upload", formData);
    if (!response.data.text) {
      throw new Error("No text extracted from PDF");
    }
    return response;
  } catch (error) {
    console.error("PDF upload error:", error);
    throw error;
  }
};

export const askQuestion = (context, question) => {
  return API.post("/ai/ask", { context, question });
};
