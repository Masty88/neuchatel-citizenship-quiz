import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true // Needed for client-side usage
});

export async function validateAnswer(
  userAnswer: string,
  correctAnswer: string,
  question: string
): Promise<{ isCorrect: boolean; explanation?: string }> {
  try {
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

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.1-70b-versatile",
      temperature: 0.1,
      max_tokens: 200,
      response_format: { type: "json_object" }
    });

    const response = chatCompletion.choices[0]?.message?.content;
    if (!response) {
      throw new Error("No response from Groq");
    }

    const result = JSON.parse(response);
    return result;
  } catch (error) {
    console.error("Error validating answer with Groq:", error);
    // Fallback to basic validation if API fails
    return {
      isCorrect: normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer),
      explanation: "Validation basique (API indisponible)"
    };
  }
}

function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '');
}
