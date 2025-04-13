import { Question } from '../../types';

export const mockQuestions: Question[] = [
  {
    id: 1,
    type: 'choice',
    text: 'What is React?',
    options: ['A database', 'A JS library', 'A compiler'],
    correctAnswer: 'A JS library',
  },
  {
    id: 2,
    type: 'text',
    text: 'What company created React?',
    correctAnswer: 'Facebook',
  },
  {
    id: 3,
    type: 'choice',
    text: 'What is Redux?',
    options: ['A CSS framework', 'A database', 'A state manager'],
    correctAnswer: 'A state manager',
  },
  {
    id: 4,
    type: 'text',
    text: 'What CSS framework is utility-first?',
    correctAnswer: 'Tailwind',
  },
  {
    id: 5,
    type: 'multiple',
    text: 'Which of the following are JavaScript frameworks?',
    options: ['React', 'Angular', 'Laravel', 'Vue'],
    correctAnswer: JSON.stringify(['React', 'Angular', 'Vue']),
  },
  {
    id: 6,
    type: 'multiple',
    text: 'Select all CSS frameworks:',
    options: ['Bootstrap', 'Tailwind', 'Django', 'Foundation'],
    correctAnswer: JSON.stringify(['Bootstrap', 'Tailwind', 'Foundation']),
  },
];
