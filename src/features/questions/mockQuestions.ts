import { Question } from "../../types";

export const mockQuestions: Question[] = [
  {
    id: 1,
    type: "choice",
    text: "What is React?",
    options: ["A database", "A JS library", "A compiler"],
    correctAnswer: "A JS library",
  },
  {
    id: 2,
    type: "text",
    text: "What company created React?",
    correctAnswer: "Facebook",
  },
  {
    id: 3,
    type: "choice",
    text: "What is Redux?",
    options: ["A CSS framework", "A database", "A state manager"],
    correctAnswer: "A state manager",
  },
  {
    id: 4,
    type: "text",
    text: "What CSS framework is utility-first?",
    correctAnswer: "Tailwind",
  },
];
