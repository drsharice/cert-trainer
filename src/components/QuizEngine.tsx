import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export default function QuizEngine({ questions }: { questions: Question[] }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const handleNext = () => current < questions.length - 1 && setCurrent(current + 1);
  const handlePrev = () => current > 0 && setCurrent(current - 1);
  const handleSubmit = () => setSubmitted(true);

  const score = answers.reduce(
    (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
    0
  );

  if (submitted) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-4">
            Results
          </h2>
          <p className="text-center text-lg mb-8 text-gray-700">
            You scored{" "}
            <strong>
              {score} / {questions.length}
            </strong>{" "}
            ({Math.round((score / questions.length) * 100)}%)
          </p>
          <div className="space-y-6 text-gray-800">
            {questions.map((q, i) => {
              const correct = answers[i] === q.correct;
              return (
                <div
                  key={q.id}
                  className={`border rounded-xl p-4 ${
                    correct
                      ? "border-emerald-400 bg-emerald-50"
                      : "border-rose-400 bg-rose-50"
                  }`}
                >
                  <p className="font-semibold mb-2">
                    {i + 1}. {q.question}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Your answer:</strong>{" "}
                    {typeof answers[i] === "number"
                      ? q.options[answers[i]]
                      : "Not answered"}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Correct answer:</strong> {q.options[q.correct]}
                  </p>
                  <p className="mt-2 text-xs italic text-gray-600">
                    {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-white to-emerald-50 p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-900">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="mb-4 text-gray-800">{q.question}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const selected = answers[current] === i;
            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`block w-full text-left border px-4 py-2 rounded-xl transition font-medium ${
                  selected
                    ? "bg-emerald-700 text-white hover:bg-emerald-800"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          {current < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-semibold"
            >
              <FaCheckCircle /> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
