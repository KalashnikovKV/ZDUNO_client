import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Question } from "../../types";
import { mockQuestions } from "./mockQuestions";

interface State {
  questions: Question[];
  answers: Answer[];
}

const initialState: State = {
  questions: mockQuestions,
  answers: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    submitAnswer: (
      state,
      action: PayloadAction<{ id: number; userAnswer: string }>
    ) => {
      const question = state.questions.find((q) => q.id === action.payload.id);
      if (!question) return;

      const isCorrect =
        question.correctAnswer.trim().toLowerCase() ===
        action.payload.userAnswer.trim().toLowerCase();

      const existing = state.answers.find(
        (ans) => ans.id === action.payload.id
      );
      if (existing) {
        existing.userAnswer = action.payload.userAnswer;
        existing.isCorrect = isCorrect;
      } else {
        state.answers.push({
          id: question.id,
          userAnswer: action.payload.userAnswer,
          isCorrect,
        });
      }
    },

    // Easily replace mock with API call here
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.answers = [];
    },
  },
});

export const { submitAnswer, setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
