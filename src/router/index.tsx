import { Routes, Route } from "react-router-dom";
import QuizPage from "../pages/QuizPage";

export const AppRouter = () => (
  <Routes>
    <Route path='*' element={<QuizPage />} />
  </Routes>
);
