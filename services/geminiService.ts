import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', text: string}[], systemInstruction: string): Promise<string> => {
  if (!ai) {
    initializeGenAI();
    if (!ai) return "I'm sorry, the AI service is currently unavailable (Missing API Key).";
  }

  try {
    const chat = ai!.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I'm having trouble connecting to the server right now.";
  }
};
