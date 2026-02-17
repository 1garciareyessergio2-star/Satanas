
import { GoogleGenAI, Type } from "@google/genai";
import { EvictionData } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateEvictionNotice = async (data: EvictionData) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Genera un formato de desalojo formal pero con una temática satánica y de casino. 
      La empresa se llama "Inmobiliaria Satanás & Asociados".
      Datos del inquilino: ${data.tenantName}
      Propiedad: ${data.propertyAddress} en el círculo de ${data.circleOfHell}
      Motivo infernal: ${data.evictionReason}
      Nivel de Pecado: ${data.sinLevel}
      
      El tono debe ser legalista, amenazante pero elegante, como un casino de lujo en el infierno. 
      Usa términos como "apuesta perdida", "deuda de alma", "ejecución de contrato eterno".`,
      config: {
        thinkingConfig: { thinkingBudget: 5000 },
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating notice:", error);
    return "Error al contactar con el Inframundo. Intenta de nuevo.";
  }
};
