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
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';

interface QuizState {
  selectedQuestions: Question[];
  currentIndex: number;
  userAnswers: string[];
  showResults: boolean;
  score: number;
}

interface QuizConfig {
  géographie: number;
  histoire: number;
  politique: number;
  social: number;
}

type QuestionType = 'all' | 'cantonal' | 'national';

@customElement('quiz-app')
export class QuizApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      font-family: var(--sl-font-sans);
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .hero-header {
      background: linear-gradient(135deg, #DC0018 0%, #8B0012 100%);
      color: white;
      padding: 4rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle" opacity="0.1">🇨🇭</text></svg>');
      background-size: 200px 200px;
      opacity: 0.1;
    }

    .hero-content {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 0.5rem;
      letter-spacing: -0.02em;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .hero-header .subtitle {
      font-size: 1.25rem;
      margin: 0;
      opacity: 0.95;
      font-weight: 400;
    }

    .compact-header {
      background: #DC0018;
      color: white;
      padding: 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
    }

    .compact-header h1 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0;
      flex: 1;
      text-align: center;
    }

    .home-button {
      cursor: pointer;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.2);
      color: white;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .home-button:hover {
      background: rgba(255,255,255,0.2);
    }

    .header-spacer {
      width: 80px;
    }

    .content-wrapper {
      max-width: 680px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .start-screen {
      text-align: center;
    }

    .welcome-card {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .start-screen h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .start-info {
      font-size: 1rem;
      color: #666;
      line-height: 1.6;
      margin: 1rem 0 2rem;
    }

    .category-config {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
      text-align: left;
    }

    .category-item {
      background: white;
      border: 2px solid #e5e5e5;
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.2s ease;
    }

    .category-item:hover {
      border-color: #DC0018;
      box-shadow: 0 4px 12px rgba(220, 0, 24, 0.1);
    }

    .category-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .category-name {
      font-weight: 600;
      font-size: 1.125rem;
      color: #1a1a1a;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .category-icon {
      font-size: 1.5rem;
    }

    .category-count {
      font-size: 0.875rem;
      color: #666;
      margin-bottom: 0.5rem;
    }

    sl-input[type="number"]::part(base) {
      border: 1.5px solid #e5e5e5;
      border-radius: 8px;
    }

    .total-questions {
      background: #f0f9ff;
      border: 2px solid #0284c7;
      border-radius: 12px;
      padding: 1.25rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    .total-questions strong {
      font-size: 2rem;
      color: #0284c7;
      display: block;
      margin-bottom: 0.25rem;
    }

    .question-type-filter {
      margin: 2rem 0;
    }

    .filter-title {
      font-weight: 600;
      font-size: 1rem;
      color: #1a1a1a;
      margin-bottom: 1rem;
      display: block;
    }

    .filter-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0.75rem;
    }

    .filter-option {
      cursor: pointer;
      padding: 0.875rem 1rem;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      background: white;
      text-align: center;
      transition: all 0.2s ease;
      font-weight: 500;
      font-size: 0.9375rem;
    }

    .filter-option:hover {
      border-color: #DC0018;
      background: #fff5f5;
    }

    .filter-option.active {
      border-color: #DC0018;
      background: #DC0018;
      color: white;
    }

    .filter-label {
      display: block;
      margin-bottom: 0.25rem;
    }

    .filter-description {
      font-size: 0.75rem;
      opacity: 0.8;
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
      border-radius: 16px;
      padding: 2.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
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
      padding: 1rem 1.25rem;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      background: white;
      transition: all 0.2s ease;
      font-size: 1rem;
    }

    sl-radio-button::part(button):hover {
      border-color: #DC0018;
      background: #fff5f5;
    }

    sl-radio-button[checked]::part(button) {
      border-color: #DC0018;
      background: #DC0018;
      color: white;
      font-weight: 500;
    }

    sl-radio-button[checked]::part(label) {
      color: white;
    }

    sl-checkbox {
      margin-bottom: 0.75rem;
    }

    sl-checkbox::part(control) {
      border: 2px solid #e5e5e5;
      border-radius: 6px;
    }

    sl-checkbox::part(control--checked) {
      background: #DC0018;
      border-color: #DC0018;
    }

    sl-checkbox::part(label) {
      padding: 1rem 1.25rem;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      background: white;
      transition: all 0.2s ease;
      font-size: 1rem;
      width: 100%;
      display: flex;
      align-items: center;
    }

    sl-checkbox:hover::part(label) {
      border-color: #DC0018;
      background: #fff5f5;
    }

    sl-checkbox[checked]::part(label) {
      border-color: #DC0018;
      background: #DC0018;
      color: white;
      font-weight: 500;
    }

    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    sl-input {
      margin-bottom: 1rem;
    }

    sl-input::part(base) {
      border: 1.5px solid #e5e5e5;
      border-radius: 8px;
      font-size: 1.125rem;
      padding: 0.75rem 1rem;
      min-height: 3rem;
      display: flex;
      align-items: center;
    }

    sl-input::part(input) {
      text-align: center;
      font-size: 1.125rem;
      padding: 0;
    }

    sl-input::part(base):hover {
      border-color: #DC0018;
    }

    sl-input::part(base):focus-within {
      border-color: #DC0018;
      box-shadow: 0 0 0 3px rgba(220, 0, 24, 0.1);
    }

    .help-button {
      margin-top: 1rem;
      width: 100%;
    }

    sl-button[variant="warning"]::part(base) {
      background: #f59e0b;
      border-color: #f59e0b;
      color: white;
    }

    sl-button[variant="warning"]::part(base):hover {
      background: #d97706;
      border-color: #d97706;
    }

    sl-alert {
      margin-top: 1rem;
    }

    sl-alert::part(base) {
      border-radius: 8px;
    }

    .help-alert {
      position: relative;
      padding-right: 8rem;
    }

    .help-alert::part(base) {
      display: flex;
      align-items: center;
    }

    .copy-button {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
    }

    .copy-button::part(base) {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
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

    .feedback-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      z-index: 1000;
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    .feedback-banner.correct {
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
      box-shadow: 0 -4px 20px rgba(34, 197, 94, 0.3);
    }

    .feedback-banner.incorrect {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: 0 -4px 20px rgba(239, 68, 68, 0.3);
    }

    .feedback-content {
      max-width: 680px;
      margin: 0 auto;
    }

    .feedback-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    .feedback-text {
      font-size: 1rem;
      margin-top: 0.5rem;
      opacity: 0.95;
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
  @state() private selectedAnswers: string[] = [];
  @state() private quizStarted = false;
  @state() private showConfig = false;
  @state() private showFeedback = false;
  @state() private isCorrect = false;
  @state() private showHelp = false;
  @state() private copyButtonText = '📋 Copier';
  @state() private questionType: QuestionType = 'all';
  @state() private quizConfig: QuizConfig = {
    géographie: 4,
    histoire: 4,
    politique: 4,
    social: 4
  };

  private getRandomQuestions(): Question[] {
    const categories = ['géographie', 'histoire', 'politique', 'social'] as const;
    const selectedQuestions: Question[] = [];

    categories.forEach(category => {
      const count = this.quizConfig[category];
      if (count === 0) return;

      // Filter by category
      let categoryQuestions = questions.filter(q => q.category === category);

      // Filter by question type (cantonal/national/all)
      if (this.questionType === 'cantonal') {
        categoryQuestions = categoryQuestions.filter(q => q.type === 'cantonal');
      } else if (this.questionType === 'national') {
        categoryQuestions = categoryQuestions.filter(q => q.type === 'national');
      }

      // If filtering by type leaves no questions, skip this category
      if (categoryQuestions.length === 0) return;

      // Get random questions from filtered list
      const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
      const questionsToAdd = shuffled.slice(0, Math.min(count, categoryQuestions.length));
      selectedQuestions.push(...questionsToAdd);
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

  private handleCheckboxChange(e: Event) {
    const checkbox = e.target as any;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedAnswers = [...this.selectedAnswers, value];
    } else {
      this.selectedAnswers = this.selectedAnswers.filter(a => a !== value);
    }
  }

  private nextQuestion() {
    const currentQuestion = this.quizState.selectedQuestions[this.quizState.currentIndex];

    // If showing feedback, move to next question
    if (this.showFeedback) {
      this.showFeedback = false;
      this.showHelp = false;

      // Store the answer (either single or multiple)
      if (currentQuestion.isMultipleAnswer && currentQuestion.isMultipleChoice) {
        this.quizState.userAnswers.push(this.selectedAnswers.join(', '));
        this.selectedAnswers = [];
      } else {
        this.quizState.userAnswers.push(this.currentAnswer);
        this.currentAnswer = '';
      }

      if (this.quizState.currentIndex < this.quizState.selectedQuestions.length - 1) {
        this.quizState = {
          ...this.quizState,
          currentIndex: this.quizState.currentIndex + 1
        };
      } else {
        this.calculateScore();
      }
      return;
    }

    // Validate answer is not empty
    if (currentQuestion.isMultipleAnswer && currentQuestion.isMultipleChoice) {
      if (this.selectedAnswers.length === 0) {
        alert('Veuillez sélectionner au moins une réponse.');
        return;
      }
    } else {
      if (!this.currentAnswer.trim()) {
        alert('Veuillez répondre à la question avant de continuer.');
        return;
      }
    }

    // Check answer and show feedback
    if (currentQuestion.isMultipleAnswer && currentQuestion.isMultipleChoice) {
      this.isCorrect = this.checkAnswer(this.selectedAnswers.join(', '), currentQuestion.answer);
    } else {
      this.isCorrect = this.checkAnswer(this.currentAnswer, currentQuestion.answer);
    }
    this.showFeedback = true;
  }

  private previousQuestion() {
    if (this.quizState.currentIndex > 0) {
      this.showFeedback = false;
      this.showHelp = false;
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
    this.showConfig = false;
    this.currentAnswer = '';
  }

  private showConfigScreen() {
    this.showConfig = true;
  }

  private updateCategoryCount(category: keyof QuizConfig, value: number) {
    // Calculate max available questions for this category based on question type filter
    const availableQuestions = questions.filter(q => {
      if (q.category !== category) return false;
      if (this.questionType === 'cantonal') return q.type === 'cantonal';
      if (this.questionType === 'national') return q.type === 'national';
      return true;
    });

    const maxAvailable = availableQuestions.length;

    this.quizConfig = {
      ...this.quizConfig,
      [category]: Math.max(0, Math.min(maxAvailable, value))
    };
  }

  private getTotalQuestions(): number {
    return Object.values(this.quizConfig).reduce((sum, count) => sum + count, 0);
  }

  private getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'géographie': '🗺️',
      'histoire': '📚',
      'politique': '🏛️',
      'social': '👥'
    };
    return icons[category] || '📝';
  }

  private goHome() {
    if (this.quizStarted && !this.quizState.showResults) {
      if (confirm('Êtes-vous sûr de vouloir quitter le quiz ? Votre progression sera perdue.')) {
        this.restartQuiz();
      }
    } else {
      this.restartQuiz();
    }
  }

  private toggleHelp() {
    this.showHelp = !this.showHelp;
    if (!this.showHelp) {
      this.copyButtonText = '📋 Copier';
    }
  }

  private async copyAnswer() {
    const currentQuestion = this.quizState.selectedQuestions[this.quizState.currentIndex];
    try {
      await navigator.clipboard.writeText(currentQuestion.answer);
      this.copyButtonText = '✓ Copié';
      setTimeout(() => {
        this.copyButtonText = '📋 Copier';
      }, 2000);
    } catch (err) {
      this.copyButtonText = '✗ Erreur';
      setTimeout(() => {
        this.copyButtonText = '📋 Copier';
      }, 2000);
    }
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
          <div class="welcome-card">
            <h2>Préparez-vous pour votre naturalisation</h2>
            <div class="start-info">
              Testez vos connaissances sur la Suisse et le canton de Neuchâtel avec ce quiz interactif.
            </div>
            <sl-button variant="primary" size="large" @click=${this.showConfigScreen} style="width: 100%;">
              Commencer le Quiz
            </sl-button>
          </div>
        </div>
      </div>
    `;
  }

  private renderConfigScreen() {
    const total = this.getTotalQuestions();
    const minRequired = 10;

    return html`
      <div class="content-wrapper">
        <div class="start-screen">
          <div class="welcome-card">
            <h2>Configurez votre quiz</h2>
            <div class="start-info">
              Personnalisez votre quiz selon vos besoins
            </div>

            <div class="question-type-filter">
              <span class="filter-title">Type de questions</span>
              <div class="filter-options">
                <div
                  class="filter-option ${this.questionType === 'all' ? 'active' : ''}"
                  @click=${() => this.questionType = 'all'}
                >
                  <span class="filter-label">🌍 Toutes</span>
                  <span class="filter-description">Cantonales + Nationales</span>
                </div>
                <div
                  class="filter-option ${this.questionType === 'cantonal' ? 'active' : ''}"
                  @click=${() => this.questionType = 'cantonal'}
                >
                  <span class="filter-label">🏔️ Cantonales</span>
                  <span class="filter-description">Neuchâtel uniquement</span>
                </div>
                <div
                  class="filter-option ${this.questionType === 'national' ? 'active' : ''}"
                  @click=${() => this.questionType = 'national'}
                >
                  <span class="filter-label">🇨🇭 Nationales</span>
                  <span class="filter-description">Suisse uniquement</span>
                </div>
              </div>
            </div>

            <div class="category-config">
              ${(['géographie', 'histoire', 'politique', 'social'] as const).map(category => {
                const availableQuestions = questions.filter(q => {
                  if (q.category !== category) return false;
                  if (this.questionType === 'cantonal') return q.type === 'cantonal';
                  if (this.questionType === 'national') return q.type === 'national';
                  return true;
                });

                return html`
                  <div class="category-item">
                    <div class="category-header">
                      <div class="category-name">
                        <span class="category-icon">${this.getCategoryIcon(category)}</span>
                        ${category.charAt(0).toUpperCase() + category.slice(1)}
                      </div>
                    </div>
                    <div class="category-count">
                      ${availableQuestions.length} questions disponibles
                    </div>
                    <sl-input
                      type="number"
                      value=${this.quizConfig[category]}
                      min="0"
                      max=${availableQuestions.length}
                      @sl-input=${(e: any) => this.updateCategoryCount(category, parseInt(e.target.value) || 0)}
                    >
                      <span slot="suffix">questions</span>
                    </sl-input>
                  </div>
                `;
              })}
            </div>

            <div class="total-questions">
              <strong>${total}</strong>
              <div>questions au total</div>
              ${total < minRequired ? html`
                <div style="color: #dc2626; margin-top: 0.5rem; font-size: 0.875rem;">
                  Minimum ${minRequired} questions recommandé
                </div>
              ` : ''}
            </div>

            <div style="display: flex; gap: 0.75rem;">
              <sl-button variant="default" @click=${() => this.showConfig = false} style="flex: 1;">
                Retour
              </sl-button>
              <sl-button
                variant="primary"
                @click=${this.startQuiz}
                ?disabled=${total === 0}
                style="flex: 2;"
              >
                Démarrer (${total} questions)
              </sl-button>
            </div>
          </div>
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

          ${currentQuestion.isMultipleChoice ? (
            currentQuestion.isMultipleAnswer ? html`
              <div class="checkbox-group">
                ${currentQuestion.options?.map(option => html`
                  <sl-checkbox
                    value=${option}
                    ?checked=${this.selectedAnswers.includes(option)}
                    @sl-change=${this.handleCheckboxChange}
                    ?disabled=${this.showFeedback}
                  >${option}</sl-checkbox>
                `)}
              </div>
            ` : html`
              <sl-radio-group value=${this.currentAnswer} @sl-change=${this.handleRadioChange} ?disabled=${this.showFeedback}>
                ${currentQuestion.options?.map(option => html`
                  <sl-radio-button value=${option}>${option}</sl-radio-button>
                `)}
              </sl-radio-group>
            `
          ) : html`
            <sl-input
              placeholder="Entrez votre réponse..."
              value=${this.currentAnswer}
              @sl-input=${this.handleAnswerInput}
              size="large"
              ?disabled=${this.showFeedback}
            ></sl-input>
          `}

          ${!this.showFeedback ? html`
            <sl-button
              variant="warning"
              size="small"
              class="help-button"
              @click=${this.toggleHelp}
            >
              ${this.showHelp ? '🙈 Cacher la réponse' : '💡 Montrer la réponse'}
            </sl-button>
          ` : ''}

          ${this.showHelp && !this.showFeedback ? html`
            <sl-alert variant="warning" open class="help-alert" style="margin-top: 1rem;">
              <sl-icon slot="icon" name="lightbulb"></sl-icon>
              <strong>Réponse :</strong> ${currentQuestion.answer}
              <sl-button
                variant="default"
                size="small"
                class="copy-button"
                @click=${this.copyAnswer}
              >
                ${this.copyButtonText}
              </sl-button>
            </sl-alert>
          ` : ''}

          ${currentQuestion.isMultipleAnswer && !this.showFeedback ? html`
            <sl-alert variant="primary" open>
              <sl-icon slot="icon" name="info-circle"></sl-icon>
              Cette question peut avoir plusieurs réponses valides.
            </sl-alert>
          ` : ''}
        </div>

        <div class="navigation-buttons">
          <sl-button
            variant="default"
            ?disabled=${this.quizState.currentIndex === 0 || this.showFeedback}
            @click=${this.previousQuestion}
          >
            Précédent
          </sl-button>
          <sl-button
            variant="primary"
            @click=${this.nextQuestion}
          >
            ${this.showFeedback
              ? (this.quizState.currentIndex < this.quizState.selectedQuestions.length - 1 ? 'Continuer' : 'Voir les résultats')
              : (this.quizState.currentIndex < this.quizState.selectedQuestions.length - 1 ? 'Vérifier' : 'Terminer')}
          </sl-button>
        </div>
      </div>

      ${this.showFeedback ? html`
        <div class="feedback-banner ${this.isCorrect ? 'correct' : 'incorrect'}">
          <div class="feedback-content">
            <span class="feedback-icon">${this.isCorrect ? '✓' : '✗'}</span>
            <div>${this.isCorrect ? 'Bonne réponse !' : 'Réponse incorrecte'}</div>
            ${!this.isCorrect ? html`
              <div class="feedback-text">
                Réponse correcte : <strong>${currentQuestion.answer}</strong>
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}
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
              ${this.quizState.score}<span style="font-size: 2rem; color: #666;">/${this.quizState.selectedQuestions.length}</span>
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
    const showHero = !this.quizStarted && !this.showConfig;

    return html`
      ${showHero ? html`
        <div class="hero-header">
          <div class="hero-content">
            <h1>🇨🇭 Quiz de Naturalisation</h1>
            <p class="subtitle">Canton de Neuchâtel</p>
          </div>
        </div>
      ` : html`
        <div class="compact-header">
          <div class="home-button" @click=${this.goHome}>
            ← Accueil
          </div>
          <h1>Quiz de Naturalisation • Canton de Neuchâtel</h1>
          <div class="header-spacer"></div>
        </div>
      `}

      ${!this.quizStarted
        ? (this.showConfig ? this.renderConfigScreen() : this.renderStartScreen())
        : (this.quizState.showResults ? this.renderResults() : this.renderQuiz())}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quiz-app': QuizApp;
  }
}
