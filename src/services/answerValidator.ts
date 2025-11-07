export async function validateAnswer(
  userAnswer: string,
  correctAnswer: string,
  question: string
): Promise<{ isCorrect: boolean; explanation?: string }> {
  try {
    const response = await fetch('/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userAnswer,
        correctAnswer,
        question
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error validating answer with Hugging Face:", error);
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
