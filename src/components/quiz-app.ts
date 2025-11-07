import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { questions, type Question } from '../data/questions';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';

interface QuizState {
  selectedQuestions: Question[];
  currentIndex: number;
  userAnswers: string[];
  showResults: boolean;
  score: number;
}

@customElement('quiz-app')
export class QuizApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      font-family: var(--sl-font-sans);
    }

    .quiz-header {
      background: #DC0018;
      color: white;
      padding: 1.5rem 1rem;
      text-align: center;
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }

    .quiz-header h1 {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .quiz-header p {
      font-size: 0.875rem;
      margin: 0.25rem 0 0;
      opacity: 0.9;
    }

    .content-wrapper {
      max-width: 680px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .start-screen {
      text-align: center;
    }

    .start-screen h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .start-info {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
      margin: 1.5rem 0 2rem;
    }

    .quiz-progress {
      margin-bottom: 2.5rem;
    }

    .progress-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.75rem;
      font-size: 0.875rem;
      color: #666;
    }

    .question-number {
      font-weight: 500;
      color: #1a1a1a;
    }

    sl-progress-bar {
      --height: 4px;
      --track-color: #f0f0f0;
      --indicator-color: #DC0018;
    }

    .question-card {
      background: white;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 1.5rem;
    }

    .category-badges {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .category-badges sl-badge {
      font-size: 0.75rem;
    }

    .question-text {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.5;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      letter-spacing: -0.01em;
    }

    sl-radio-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    sl-radio-button {
      width: 100%;
    }

    sl-radio-button::part(button) {
      width: 100%;
      justify-content: flex-start;
      text-align: left;
      padding: 0.875rem 1rem;
      border: 1.5px solid #e5e5e5;
      border-radius: 8px;
      background: #fafafa;
      transition: all 0.15s ease;
    }

    sl-radio-button::part(button):hover {
      border-color: #DC0018;
      background: white;
    }

    sl-radio-button[checked]::part(button) {
      border-color: #DC0018;
      background: white;
      box-shadow: 0 0 0 3px rgba(220, 0, 24, 0.1);
    }

    sl-input {
      margin-bottom: 1rem;
    }

    sl-input::part(base) {
      border: 1.5px solid #e5e5e5;
      border-radius: 8px;
      font-size: 1rem;
      padding: 0.25rem;
    }

    sl-input::part(base):hover {
      border-color: #DC0018;
    }

    sl-input::part(base):focus-within {
      border-color: #DC0018;
      box-shadow: 0 0 0 3px rgba(220, 0, 24, 0.1);
    }

    sl-alert {
      margin-top: 1rem;
    }

    sl-alert::part(base) {
      border-radius: 8px;
    }

    .navigation-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: space-between;
    }

    sl-button {
      flex: 1;
    }

    sl-button::part(base) {
      font-family: inherit;
      font-weight: 500;
      border-radius: 8px;
      padding: 0.75rem 1.5rem;
      height: auto;
      font-size: 0.9375rem;
    }

    sl-button[variant="primary"]::part(base) {
      background: #DC0018;
      border-color: #DC0018;
    }

    sl-button[variant="primary"]::part(base):hover {
      background: #b50014;
      border-color: #b50014;
    }

    .results-screen {
      text-align: center;
    }

    .results-screen h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }

    .score-display {
      font-size: 4rem;
      font-weight: 700;
      margin: 1.5rem 0;
      color: #DC0018;
      letter-spacing: -0.03em;
    }

    .score-label {
      font-size: 1rem;
      color: #666;
      margin-bottom: 2rem;
    }

    sl-progress-bar.results-progress {
      --height: 12px;
      margin: 2rem 0;
    }

    .results-card {
      background: white;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 1.5rem;
    }

    .results-details {
      text-align: left;
      margin-top: 2.5rem;
    }

    .results-details h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1.5rem;
      letter-spacing: -0.01em;
    }

    .result-item {
      margin-bottom: 1rem;
      padding: 1.25rem;
      border-radius: 8px;
      border: 1.5px solid #e5e5e5;
      background: white;
    }

    .result-item.correct {
      border-color: #22c55e;
      background: #f0fdf4;
    }

    .result-item.incorrect {
      border-color: #ef4444;
      background: #fef2f2;
    }

    .result-question {
      font-weight: 500;
      margin-bottom: 0.75rem;
      color: #1a1a1a;
      font-size: 0.9375rem;
    }

    .result-answer {
      color: #666;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .result-answer strong {
      color: #1a1a1a;
    }

    @media (max-width: 640px) {
      .content-wrapper {
        padding: 1.5rem 1rem;
      }

      .question-card {
        padding: 1.5rem;
      }

      .score-display {
        font-size: 3rem;
      }

      .question-text {
        font-size: 1rem;
      }
    }
  `;

  @state() private quizState: QuizState = {
    selectedQuestions: [],
    currentIndex: 0,
    userAnswers: [],
    showResults: false,
    score: 0
  };

  @state() private currentAnswer = '';
  @state() private quizStarted = false;

  private getRandomQuestions(): Question[] {
    const categories = ['géographie', 'histoire', 'politique', 'social'] as const;
    const selectedQuestions: Question[] = [];

    categories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const nationalQuestions = categoryQuestions.filter(q => q.type === 'national');
      const cantonalQuestions = categoryQuestions.filter(q => q.type === 'cantonal');

      // Get at least 1 cantonal question per category
      const cantonalQuestion = cantonalQuestions[Math.floor(Math.random() * cantonalQuestions.length)];
      selectedQuestions.push(cantonalQuestion);

      // Get 3 more random questions from this category
      const remainingQuestions = categoryQuestions.filter(q => q.id !== cantonalQuestion.id);
      for (let i = 0; i < 3; i++) {
        if (remainingQuestions.length > 0) {
          const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
          selectedQuestions.push(remainingQuestions[randomIndex]);
          remainingQuestions.splice(randomIndex, 1);
        }
      }
    });

    return selectedQuestions.sort(() => Math.random() - 0.5);
  }

  private startQuiz() {
    this.quizState = {
      selectedQuestions: this.getRandomQuestions(),
      currentIndex: 0,
      userAnswers: [],
      showResults: false,
      score: 0
    };
    this.currentAnswer = '';
    this.quizStarted = true;
  }

  private handleAnswerInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.currentAnswer = input.value;
  }

  private handleRadioChange(e: Event) {
    const radioGroup = e.target as any;
    this.currentAnswer = radioGroup.value;
  }

  private nextQuestion() {
    this.quizState.userAnswers.push(this.currentAnswer);
    this.currentAnswer = '';

    if (this.quizState.currentIndex < this.quizState.selectedQuestions.length - 1) {
      this.quizState = {
        ...this.quizState,
        currentIndex: this.quizState.currentIndex + 1
      };
    } else {
      this.calculateScore();
    }
  }

  private previousQuestion() {
    if (this.quizState.currentIndex > 0) {
      this.currentAnswer = this.quizState.userAnswers[this.quizState.currentIndex - 1];
      this.quizState.userAnswers.pop();
      this.quizState = {
        ...this.quizState,
        currentIndex: this.quizState.currentIndex - 1
      };
    }
  }

  private normalizeAnswer(answer: string): string {
    return answer
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, '');
  }

  private checkAnswer(userAnswer: string, correctAnswer: string): boolean {
    const normalizedUser = this.normalizeAnswer(userAnswer);
    const normalizedCorrect = this.normalizeAnswer(correctAnswer);

    // Check for exact match
    if (normalizedUser === normalizedCorrect) {
      return true;
    }

    // Check if the answer contains key parts (for multiple answer questions)
    const correctParts = normalizedCorrect.split(/[,\/]/);
    return correctParts.some(part =>
      normalizedUser.includes(part.trim()) || part.trim().includes(normalizedUser)
    );
  }

  private calculateScore() {
    let score = 0;
    this.quizState.selectedQuestions.forEach((question, index) => {
      if (this.checkAnswer(this.quizState.userAnswers[index], question.answer)) {
        score++;
      }
    });

    this.quizState = {
      ...this.quizState,
      score,
      showResults: true
    };
  }

  private restartQuiz() {
    this.quizStarted = false;
    this.currentAnswer = '';
  }

  private getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      'géographie': 'primary',
      'histoire': 'success',
      'politique': 'warning',
      'social': 'danger'
    };
    return colors[category] || 'neutral';
  }

  private renderStartScreen() {
    return html`
      <div class="content-wrapper">
        <div class="start-screen">
          <h2>Bienvenue au Quiz de Naturalisation</h2>
          <div class="start-info">
            Ce quiz contient 16 questions réparties en 4 thèmes : Géographie, Histoire, Politique et Social.
            <br><br>
            Vous devez répondre correctement à au moins 10 questions pour réussir.
          </div>
          <sl-button variant="primary" size="large" @click=${this.startQuiz}>
            Commencer le Quiz
          </sl-button>
        </div>
      </div>
    `;
  }

  private renderQuiz() {
    const currentQuestion = this.quizState.selectedQuestions[this.quizState.currentIndex];
    const progress = ((this.quizState.currentIndex + 1) / this.quizState.selectedQuestions.length) * 100;

    return html`
      <div class="content-wrapper">
        <div class="quiz-progress">
          <div class="progress-label">
            <span class="question-number">Question ${this.quizState.currentIndex + 1} sur ${this.quizState.selectedQuestions.length}</span>
            <span>${Math.round(progress)}%</span>
          </div>
          <sl-progress-bar value=${progress}></sl-progress-bar>
        </div>

        <div class="question-card">
          <div class="category-badges">
            <sl-badge variant=${this.getCategoryColor(currentQuestion.category)} pill>
              ${currentQuestion.category}
            </sl-badge>
            <sl-badge variant=${currentQuestion.type === 'cantonal' ? 'primary' : 'neutral'} pill>
              ${currentQuestion.type === 'cantonal' ? 'Cantonal' : 'National'}
            </sl-badge>
          </div>

          <div class="question-text">
            ${currentQuestion.question}
          </div>

          ${currentQuestion.isMultipleChoice ? html`
            <sl-radio-group value=${this.currentAnswer} @sl-change=${this.handleRadioChange}>
              ${currentQuestion.options?.map(option => html`
                <sl-radio-button value=${option}>${option}</sl-radio-button>
              `)}
            </sl-radio-group>
          ` : html`
            <sl-input
              placeholder="Entrez votre réponse..."
              value=${this.currentAnswer}
              @sl-input=${this.handleAnswerInput}
              size="large"
            ></sl-input>
          `}

          ${currentQuestion.isMultipleAnswer ? html`
            <sl-alert variant="primary" open>
              <sl-icon slot="icon" name="info-circle"></sl-icon>
              Cette question peut avoir plusieurs réponses valides.
            </sl-alert>
          ` : ''}
        </div>

        <div class="navigation-buttons">
          <sl-button
            variant="default"
            ?disabled=${this.quizState.currentIndex === 0}
            @click=${this.previousQuestion}
          >
            Précédent
          </sl-button>
          <sl-button
            variant="primary"
            @click=${this.nextQuestion}
          >
            ${this.quizState.currentIndex < this.quizState.selectedQuestions.length - 1 ? 'Suivant' : 'Terminer'}
          </sl-button>
        </div>
      </div>
    `;
  }

  private renderResults() {
    const passed = this.quizState.score >= 10;
    const percentage = (this.quizState.score / this.quizState.selectedQuestions.length) * 100;

    return html`
      <div class="content-wrapper">
        <div class="results-screen">
          <div class="results-card">
            <h2>${passed ? 'Félicitations !' : 'Continuez à apprendre'}</h2>

            <div class="score-display">
              ${this.quizState.score}<span style="font-size: 2rem; color: #666;">/16</span>
            </div>

            <div class="score-label">
              ${Math.round(percentage)}% de bonnes réponses
            </div>

            <sl-progress-bar
              class="results-progress"
              value=${percentage}
            ></sl-progress-bar>

            ${passed ? html`
              <sl-alert variant="success" open>
                <sl-icon slot="icon" name="check-circle"></sl-icon>
                Vous avez réussi le test avec ${this.quizState.score} bonnes réponses.
              </sl-alert>
            ` : html`
              <sl-alert variant="warning" open>
                <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
                Il faut au moins 10 bonnes réponses pour réussir. Continuez à étudier !
              </sl-alert>
            `}

            <sl-button variant="primary" size="large" @click=${this.restartQuiz} style="margin-top: 1.5rem; width: 100%;">
              Recommencer le Quiz
            </sl-button>
          </div>

          <div class="results-details">
            <h3>Détails des réponses</h3>
            ${this.quizState.selectedQuestions.map((question, index) => {
              const isCorrect = this.checkAnswer(this.quizState.userAnswers[index], question.answer);
              return html`
                <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                  <div class="category-badges">
                    <sl-badge variant=${this.getCategoryColor(question.category)} pill>
                      ${question.category}
                    </sl-badge>
                  </div>
                  <div class="result-question">${question.question}</div>
                  <div class="result-answer">
                    <strong>Votre réponse :</strong> ${this.quizState.userAnswers[index] || '(pas de réponse)'}
                  </div>
                  <div class="result-answer">
                    <strong>Réponse correcte :</strong> ${question.answer}
                  </div>
                </div>
              `;
            })}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="quiz-header">
        <h1>🇨🇭 Quiz de Naturalisation</h1>
        <p>Canton de Neuchâtel</p>
      </div>

      ${!this.quizStarted ? this.renderStartScreen() :
        this.quizState.showResults ? this.renderResults() : this.renderQuiz()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quiz-app': QuizApp;
  }
}
