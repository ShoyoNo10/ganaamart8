"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

type Option = {
  id: string;
  text: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  correctOptionId: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Намайг хамгийн ихээр юу догдлуулдаг вэ?",
    options: [
      { id: "a", text: "Чамтай хамт цаг өнгөрөөх" },
      { id: "b", text: "Зүгээр л унтах" },
      { id: "c", text: "Хичээл л хийх" },
    ],
    correctOptionId: "a",
  },
  {
    id: 2,
    question: "Би чамаас хамгийн их юуг мэдрэхийг хүсдэг вэ?",
    options: [
      { id: "a", text: "Хүйтэн хөндий зан" },
      { id: "b", text: "Халамж, ойлголт" },
      { id: "c", text: "Зүгээр л reply" },
    ],
    correctOptionId: "b",
  },
  {
    id: 3,
    question: "Надад хамгийн гоё бэлэг юу вэ?",
    options: [
      { id: "a", text: "Үнэ цэнэтэй жижиг анхаарал" },
      { id: "b", text: "Зөвхөн мөнгө" },
      { id: "c", text: "Юу ч биш" },
    ],
    correctOptionId: "a",
  },
  {
    id: 4,
    question: "Би гомдсон үедээ ихэнхдээ яадаг вэ?",
    options: [
      { id: "a", text: "Шууд уурлаад яваад өгдөг" },
      { id: "b", text: "Дотроо бодоод, анзаараасай гэж хүсдэг" },
      { id: "c", text: "Юу ч мэдрэхгүй байдаг" },
    ],
    correctOptionId: "b",
  },
  {
    id: 5,
    question: "Надад хамгийн чухал зүйл юу вэ?",
    options: [
      { id: "a", text: "Итгэл" },
      { id: "b", text: "Зүгээр л тоглоом" },
      { id: "c", text: "Хэн ч хамаагүй" },
    ],
    correctOptionId: "a",
  },
  {
    id: 6,
    question: "Бид хоёрын харилцаанд би юуг илүү хүсдэг вэ?",
    options: [
      { id: "a", text: "Ойлголцол, тайван хайр" },
      { id: "b", text: "Маргаан" },
      { id: "c", text: "Хол зай" },
    ],
    correctOptionId: "a",
  },
  {
    id: 7,
    question: "Намайг хамгийн их баярлуулдаг жижиг зүйл юу вэ?",
    options: [
      { id: "a", text: "Санамсаргүй хөөрхөн мессеж" },
      { id: "b", text: "Seen" },
      { id: "c", text: "Алга болох" },
    ],
    correctOptionId: "a",
  },
  {
    id: 8,
    question: "Би чиний хувьд юу байгаасай гэж хүсдэг вэ?",
    options: [
      { id: "a", text: "Түр зуурын хүн" },
      { id: "b", text: "Онцгой, үнэ цэнтэй хүн" },
      { id: "c", text: "Зүгээр л танил" },
    ],
    correctOptionId: "b",
  },
];

type AnswerMap = Record<number, string>;

function AsuultPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerMap>({});

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      const selected = selectedAnswers[question.id];
      if (selected === question.correctOptionId) {
        return total + 1;
      }
      return total;
    }, 0);
  }, [selectedAnswers]);

  const answeredCount = useMemo(() => {
    return Object.keys(selectedAnswers).length;
  }, [selectedAnswers]);

  const handleSelect = (questionId: number, optionId: string) => {
    setSelectedAnswers((prev) => {
      if (prev[questionId]) {
        return prev;
      }

      return {
        ...prev,
        [questionId]: optionId,
      };
    });
  };

  const getOptionClassName = (
    question: Question,
    optionId: string,
    selectedOptionId: string | undefined,
  ): string => {
    const baseClass =
      "w-full rounded-2xl border px-4 py-3 text-left text-sm sm:text-base font-medium transition-all duration-200";

    if (!selectedOptionId) {
      return `${baseClass} border-white/20 bg-white/70 text-gray-800 hover:bg-white hover:scale-[1.01]`;
    }

    const isCorrect = optionId === question.correctOptionId;
    const isSelected = optionId === selectedOptionId;

    if (isCorrect) {
      return `${baseClass} border-green-500 bg-green-100 text-green-800 shadow-[0_0_0_1px_rgba(34,197,94,0.2)]`;
    }

    if (isSelected && !isCorrect) {
      return `${baseClass} border-red-500 bg-red-100 text-red-700 shadow-[0_0_0_1px_rgba(239,68,68,0.2)]`;
    }

    return `${baseClass} border-white/15 bg-white/40 text-gray-500`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur">
          <div className="mb-3 inline-flex items-center rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-700">
            💗 Чи намайг хэр мэдэх вэ?
          </div>

          {/* <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            Зөөлхөн, хөөрхөн жижиг quiz
          </h1> */}

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Доорх асуултуудаас нэг хариулт сонгоорой. Зөв бол ногоон, буруу бол
            улаан болж харагдана ✨
          </p>
        </div>

        <div className="space-y-5">
          {questions.map((question, index) => {
            const selectedOptionId = selectedAnswers[question.id];
            const isCorrect = selectedOptionId === question.correctOptionId;
            const isAnswered = Boolean(selectedOptionId);

            return (
              <section
                key={question.id}
                className="rounded-[28px] border border-white/60 bg-white/75 p-5 shadow-lg backdrop-blur"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-sm font-bold text-white shadow-md">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-gray-800 sm:text-lg">
                      {question.question}
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      Нэг хариулт сонгоно уу
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {question.options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(question.id, option.id)}
                      disabled={isAnswered}
                      className={getOptionClassName(
                        question,
                        option.id,
                        selectedOptionId,
                      )}
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span>{option.text}</span>

                        {isAnswered &&
                          option.id === question.correctOptionId && (
                            <span className="text-sm font-bold text-green-700">
                              ✓ Зөв
                            </span>
                          )}

                        {isAnswered &&
                          option.id === selectedOptionId &&
                          option.id !== question.correctOptionId && (
                            <span className="text-sm font-bold text-red-600">
                              ✕ Буруу
                            </span>
                          )}
                      </span>
                    </button>
                  ))}
                </div>

                {isAnswered && (
                  <div
                    className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isCorrect
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {isCorrect
                      ? "Зөв байнаа 💚 Чи сайн мэддэг юм байна."
                      : "ӨӨӨ Даа наахуу2 🧏🏻‍♂️"}
                  </div>
                )}
              </section>
            );
          })}
        </div>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 p-[1px]">
            <div className="rounded-2xl bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Оноо
              </p>
              <p className="mt-1 text-lg font-bold text-gray-800">
                {score} / {questions.length} зөв
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/60 bg-white/70 p-5 text-center shadow-lg backdrop-blur">
          <p className="text-sm text-gray-600 sm:text-base">
            {answeredCount === questions.length
              ? `Дууслаа ✨ Нийт ${score}/${questions.length} зөв хариуллаа. Одоо цааш үзэх цаг боллоо 🤭`
              : "Бүгдийг нь хариулаад дууссан бол 💞"}
          </p>
          <Link
            href="final"
            className="
    inline-flex items-center gap-2
    px-5 py-2.5
    rounded-xl
    bg-white
    border border-pink-300
    text-pink-600 font-semibold
    hover:bg-pink-50
    hover:border-pink-400
    transition mt-2
  "
          >
            Цааш үзэх →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AsuultPage;
