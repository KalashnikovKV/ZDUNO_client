import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../features/questions/questionsSlice";
import { RootState } from "../store";
import { QuestionType } from "../types";

interface Props {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[];
}

export const QuestionItem = ({ id, text, type, options }: Props) => {
  const dispatch = useDispatch();
  const savedAnswer = useSelector((state: RootState) =>
    state.quiz.answers.find((a) => a.id === id)
  );
  const [input, setInput] = useState(savedAnswer?.userAnswer || "");

  const handleSubmit = () => {
    if (!input.trim()) return;
    dispatch(submitAnswer({ id, userAnswer: input }));
  };

  return (
    <div className='bg-white p-4 rounded shadow hover:shadow-md transition-shadow flex flex-col justify-between h-full'>
      <p className='mb-4 text-gray-800 font-medium'>{text}</p>

      {/* Варианты выбора */}
      {type === "choice" && options && (
        <div className='space-y-2 mb-4'>
          {options.map((option) => (
            <label key={option} className='flex items-center gap-2'>
              <input
                type='radio'
                value={option}
                checked={input === option}
                onChange={() => setInput(option)}
                className='accent-blue-600'
              />
              <span className='text-sm text-gray-700'>{option}</span>
            </label>
          ))}
        </div>
      )}

      {/* Ввод текста */}
      {type === "text" && (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type your answer'
          className='border border-gray-300 px-3 py-2 rounded text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400'
        />
      )}

      <button
        onClick={handleSubmit}
        className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition self-start'
      >
        Submit
      </button>
    </div>
  );
};
