import { useSelector } from "react-redux";
import { RootState } from "../store";
import { QuestionItem } from "../components/QuestionItem";
import { useTimer } from "../hooks/useTimer";
import { TimerCircle } from "../components/TimerCircle";

export default function QuizPage() {
  const questions = useSelector((state: RootState) => state.quiz.questions);
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const seconds = useTimer(60);

  const correctCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className='min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-12'>
      <div className='max-w-4xl mx-auto space-y-8'>
        {/* Header */}
        <header className='text-center'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-800'>
            ZDUNO Company
          </h1>
          {seconds > 0 && (
            <div className='flex justify-center items-center mt-2 gap-3'>
              <TimerCircle seconds={seconds} />
              <p className='text-gray-700 text-sm sm:text-base'>
                Time left: <span className='font-semibold'>{seconds}</span> sec
              </p>
            </div>
          )}
        </header>

        {/* Вопросы — только если таймер не истёк */}
        {seconds > 0 ? (
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {questions.map((q) => (
              <QuestionItem
                key={q.id}
                id={q.id}
                text={q.text}
                type={q.type}
                options={q.options}
              />
            ))}
          </section>
        ) : (
          <section className='text-center mt-10'>
            <p className='text-xl text-gray-700'>Time is up!</p>
          </section>
        )}

        {/* Результат — всегда видим */}
        <footer className='text-center mt-6'>
          <p className='text-lg sm:text-xl text-gray-700'>
            Correct answers:
            <span className='font-semibold ml-2'>{correctCount}</span> /{" "}
            {questions.length}
          </p>
        </footer>
      </div>
    </div>
  );
}
