import type { APIRoute } from 'astro';
import { HfInference } from '@huggingface/inference';

export const prerender = false;

const hf = new HfInference(import.meta.env.PUBLIC_HUGGINGFACE_TOKEN);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { userAnswer, correctAnswer, question } = await request.json();

    const prompt = `Tu es un correcteur pour un quiz de naturalisation suisse.
Évalue si la réponse de l'utilisateur est correcte.

Question: ${question}
Réponse correcte: ${correctAnswer}
Réponse de l'utilisateur: ${userAnswer}

Règles:
- Si la réponse est exacte ou très proche (fautes de frappe mineures, accents manquants), c'est correct
- Si c'est une question à réponses multiples, l'utilisateur doit donner au moins 60% des bonnes réponses
- Sois indulgent sur l'orthographe mais strict sur le contenu
- Pour les noms propres, accepte les variantes communes

Réponds UNIQUEMENT avec un JSON au format:
{"isCorrect": true/false, "explanation": "courte explication si faux"}

Ne donne AUCUN autre texte, juste le JSON.`;

    const response = await hf.chatCompletion({
      model: 'meta-llama/Llama-3.2-3B-Instruct',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.1
    });

    const generatedText = response.choices[0]?.message?.content || "";
    
    // Extract JSON from response
    const jsonMatch = generatedText.match(/\{[^}]+\}/);
    if (!jsonMatch) {
      throw new Error("No valid JSON in response");
    }

    const result = JSON.parse(jsonMatch[0]);
    
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Validation error:', error);
    
    // Fallback to basic validation
    return new Response(JSON.stringify({
      isCorrect: false,
      explanation: "Erreur de validation API"
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
