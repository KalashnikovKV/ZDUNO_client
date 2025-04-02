export type QuestionType = "choice" | "text";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string;
}

export interface Answer {
  id: number;
  userAnswer: string;
  isCorrect: boolean;
}
