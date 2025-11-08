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

    // Double-check with local validation for multiple answer questions
    // If API says incorrect but local validation says correct, trust local validation
    if (!result.isCorrect) {
      const localValidation = compareMultipleAnswers(userAnswer, correctAnswer);
      if (localValidation) {
        return {
          isCorrect: true,
          explanation: "Réponse validée localement"
        };
      }
    }

    return result;
  } catch (error) {
    console.error("Error validating answer with Hugging Face:", error);
    // Fallback to improved validation if API fails
    return {
      isCorrect: compareMultipleAnswers(userAnswer, correctAnswer),
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
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ');
}

function compareMultipleAnswers(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);

  // Exact match
  if (normalizedUser === normalizedCorrect) {
    return true;
  }

  // Split by common separators (comma, slash, "et", "and", "e")
  const userParts = normalizedUser
    .split(/[,\/]|\bet\b|\band\b|\be\b/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const correctParts = normalizedCorrect
    .split(/[,\/]|\bet\b|\band\b|\be\b/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // Check if user provided all correct parts
  if (userParts.length !== correctParts.length) {
    // Allow partial credit if at least 80% of answers are correct
    const matchCount = userParts.filter(userPart =>
      correctParts.some(correctPart =>
        userPart === correctPart ||
        userPart.includes(correctPart) ||
        correctPart.includes(userPart)
      )
    ).length;

    return matchCount >= Math.ceil(correctParts.length * 0.8);
  }

  // All parts must match
  return userParts.every(userPart =>
    correctParts.some(correctPart =>
      userPart === correctPart ||
      userPart.includes(correctPart) ||
      correctPart.includes(userPart)
    )
  );
}
