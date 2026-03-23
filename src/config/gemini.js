// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-3-flash-preview"; // Recommendation: Use 1.5 for better performance
const API_KEY = "AIzaSyCmORMDQdBbOLddm3eikuJEBLvMrXm5p6g";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // Add other categories as needed
  ];

  // Initialize the chat session
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [], // You can add previous messages here
  });

  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;
