import { useMemo, useState } from 'react';
import QuizLayout from './components/QuizLayout';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import PawBadge from './components/PawBadge';
import ResultScreen from './components/ResultScreen';
import type { Question } from './types/quiz';
import { AnimatePresence } from 'framer-motion';

const questions: Question[] = [
  {
    id: 1,
    text: 'What sound does a cat make?',
    options: [
      { id: 1, text: 'Bhau-Bhau', isCorrect: false },
      { id: 2, text: 'Meow-Meow', isCorrect: true },
      { id: 3, text: 'Oink-Oink', isCorrect: false },
      { id: 4, text: 'Moo-Moo', isCorrect: false },
    ],
  },
  {
    id: 2,
    text: 'What would you probably find in your fridge?',
    options: [
      { id: 1, text: 'Shoes', isCorrect: false },
      { id: 2, text: 'Ice Cream', isCorrect: true },
      { id: 3, text: 'Books', isCorrect: false },
      { id: 4, text: 'Socks', isCorrect: false },
    ],
  },
  {
    id: 3,
    text: 'What color are bananas?',
    options: [
      { id: 1, text: 'Blue', isCorrect: false },
      { id: 2, text: 'Yellow', isCorrect: true },
      { id: 3, text: 'Red', isCorrect: false },
    ],
  },
  {
    id: 4,
    text: 'How many stars are in the sky?',
    options: [
      { id: 1, text: 'Two', isCorrect: false },
      { id: 2, text: 'Infinite', isCorrect: true },
      { id: 3, text: 'One Hundred', isCorrect: false },
    ],
  },
];

type AnswersState = Record<number, number | null>;

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersState>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const scorePercentage = useMemo(() => {
    let correct = 0;
    questions.forEach((question) => {
      const selectedId = answers[question.id];
      const picked = question.options.find((o) => o.id === selectedId);
      if (picked && picked.isCorrect) {
        correct += 1;
      }
    });
    if (!questions.length) return 0;
    return Math.round((correct / questions.length) * 100);
  }, [answers]);

  function handleSelectOption(optionId: number) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((index) => index + 1);
    } else {
      setShowResults(true);
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }
  }

  function handleRestart() {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  }

  if (showResults) {
    return <ResultScreen score={scorePercentage} onRestart={handleRestart} />;
  }

  const selectedOptionId = answers[currentQuestion.id] ?? null;

  return (
    <QuizLayout>
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display italic text-[64px] text-quizPrimary tracking-[-0.04em]">
          Test Your Knowledge
        </h1>
        <div className="px-6 py-2 rounded-full bg-white text-[13px] text-[#7A8B9B]">
          Answer all questions to see your results
        </div>
      </header>

      <div className="mt-10">
        <ProgressBar total={questions.length} currentIndex={currentIndex} />
      </div>

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion.id}
          index={currentIndex}
          total={questions.length}
          question={currentQuestion}
          selectedOptionId={selectedOptionId}
          onSelectOption={handleSelectOption}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </AnimatePresence>

      <PawBadge />
    </QuizLayout>
  );
}
