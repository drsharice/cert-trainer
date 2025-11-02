import { useEffect, useMemo, useState } from "react";

export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

type Props = {
  questions: Question[];
  numQuestions?: number; // default = 15
};

export default function QuizEngine2({ questions, numQuestions = 15 }: Props) {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  // Randomly select 15 unique questions on mount or restart
  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numQuestions);
    setQuizQuestions(selected);
    setAnswers(new Array(numQuestions).fill(null));
    setIndex(0);
    setSubmitted(false);
  }, [questions, numQuestions]);

  const total = quizQuestions.length;
  const q = quizQuestions[index];
  const selected = answers[index];

  const score = useMemo(() => {
  if (!submitted) return 0;
  return answers.reduce((acc: number, a, i) => {
    return acc + (a === quizQuestions[i]?.correct ? 1 : 0);
  }, 0);
}, [submitted, answers, quizQuestions]);

  function choose(optionIdx: number) {
    setAnswers(prev => {
      const next = [...prev];
      next[index] = optionIdx;
      return next;
    });
  }

  function prev() {
    setIndex(i => Math.max(0, i - 1));
  }

  function next() {
    setIndex(i => Math.min(total - 1, i + 1));
  }

  function submit() {
    setSubmitted(true);
    // Wait for render, then scroll smoothly to top of quiz
    setTimeout(() => {
      const quizTop = document.getElementById("quiz-top");
      if (quizTop) {
        quizTop.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 200);
  }

  // -------------------- RESULTS VIEW --------------------
  // -------------------- RESULTS VIEW --------------------
if (submitted) {
  return (
    <div
      id="quiz-top"
      className="rounded-2xl shadow-md border border-slate-200 bg-white/90 p-6"
      style={{
        maxHeight: "80vh",         // limit height to viewport
        overflowY: "auto",         // enable vertical scroll
        scrollbarWidth: "thin",
        scrollbarColor: "#94d3ac #f0fdf4",
      }}
    >
      <h2 className="text-2xl font-semibold text-center mb-2">Results</h2>
      <p className="text-center mb-6">
        You scored{" "}
        <span className="font-bold text-emerald-700">{score}</span> out of{" "}
        {total}.
      </p>

      <div className="space-y-4">
        {quizQuestions.map((item, i) => {
          const correct = item.correct;
          const user = answers[i];
          const isCorrect = user === correct;
          return (
            <div
              key={item.id}
              className="rounded-xl border p-4 bg-white shadow-sm"
            >
              <div className="font-medium mb-2">
                {i + 1}. {item.question}
              </div>
              <div className="text-sm mb-1">
                Your answer:{" "}
                <span
                  className={
                    isCorrect
                      ? "text-emerald-700 font-semibold"
                      : "text-rose-700 font-semibold"
                  }
                >
                  {user !== null ? item.options[user] : "No selection"}
                </span>
              </div>
              <div className="text-sm">
                Correct:{" "}
                <span className="font-semibold text-emerald-700">
                  {item.options[correct]}
                </span>
              </div>
              {item.explanation && (
                <div className="text-xs text-slate-600 mt-2">
                  {item.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="px-4 py-2 text-sm rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100"
        >
          ⬆ Scroll to Top
        </button>

        <button
          onClick={() => {
            const shuffled = [...questions].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, numQuestions);
            setQuizQuestions(selected);
            setAnswers(new Array(numQuestions).fill(null));
            setIndex(0);
            setSubmitted(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-5 py-2 rounded-lg font-semibold text-white"
          style={{
            backgroundColor: "#059669", // emerald-600 fallback
            border: "1px solid #047857",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={e =>
            (e.currentTarget.style.backgroundColor = "#047857")
          }
          onMouseLeave={e =>
            (e.currentTarget.style.backgroundColor = "#059669")
          }
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}


  // -------------------- ACTIVE QUIZ VIEW --------------------
  if (!q) return null;

  return (
    <div
      id="quiz-top"
      className="rounded-2xl shadow-md border border-slate-200 p-6 bg-white/90"
    >
      <div className="text-sm text-slate-600 mb-3 text-center">
        Question {index + 1} of {total}
      </div>

      <h2 className="text-lg font-semibold text-center mb-4">{q.question}</h2>

      <div className="space-y-2 mb-6">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              className={[
                "w-full text-left px-4 py-3 rounded-lg border transition shadow-sm",
                isSelected
                  ? "border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50"
                  : "border-slate-200 hover:bg-slate-50",
              ].join(" ")}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          disabled={index === 0}
          className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300 disabled:opacity-40"
          aria-label="Previous question"
          title="Previous"
        >
          <span>◀</span>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {index < total - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-300"
            aria-label="Next question"
            title="Next"
          >
            <span className="hidden sm:inline">Next</span>
            <span>▶</span>
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={answers.some(a => a === null)}
            className="px-5 py-2 rounded-lg font-semibold text-white disabled:opacity-50"
            style={{
              backgroundColor: "#059669", // emerald-600 override
              border: "1px solid #047857",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = "#047857")
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = "#059669")
            }
            aria-label="Submit quiz"
            title="Submit"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
