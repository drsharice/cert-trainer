import { useState } from "react";

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

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const score = answers.reduce((acc, ans, i) => {
    if (ans === questions[i].correct) return acc + 1;
    return acc;
  }, 0);

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-emerald-600">Results</h2>
        <p className="text-lg">
          You scored <strong>{score}</strong> out of {questions.length} (
          {Math.round((score / questions.length) * 100)}%)
        </p>
        <div className="mt-8 text-left space-y-6">
          {questions.map((q, i) => {
            const correct = answers[i] === q.correct;
            return (
              <div
                key={q.id}
                className={`border rounded-xl p-4 ${
                  correct ? "border-emerald-400 bg-emerald-50" : "border-rose-400 bg-rose-50"
                }`}
              >
                <p className="font-semibold mb-2">
                  {i + 1}. {q.question}
                </p>
                <p className="text-sm">
                  <strong>Your answer:</strong>{" "}
                  {typeof answers[i] === "number"
                    ? q.options[answers[i]]
                    : "Not answered"}
                </p>
                <p className="text-sm">
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
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">
        Question {current + 1} of {questions.length}
      </h2>
      <p className="mb-4">{q.question}</p>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={`block w-full text-left border px-4 py-2 rounded-xl transition ${
              answers[current] === i
                ? "bg-emerald-600 text-white"
                : "hover:bg-emerald-50"
            }`}
          >
            {opt}
          </button>
        ))}
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
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
