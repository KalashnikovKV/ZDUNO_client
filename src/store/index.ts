import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questions/questionsSlice";

export const store = configureStore({
  reducer: {
    quiz: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
