import type { Question } from '../types/quiz';
import OptionButton from './OptionButton';
import { motion } from 'framer-motion';

type Props = {
  index: number;
  total: number;
  question: Question;
  selectedOptionId: number | null;
  onSelectOption: (optionId: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function QuestionCard({
  index,
  total,
  question,
  selectedOptionId,
  onSelectOption,
  onNext,
  onPrevious,
}: Props) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <motion.section
      key={question.id}
      className="mt-6 flex flex-col gap-2"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Question bar */}
      <div className="w-full flex justify-center">
        <div className="w-[720px] h-[48px] rounded-[10px] bg-gradient-to-r from-quizOption to-quizOptionLight border border-[#96E5FF] flex items-center justify-center text-[14px] font-medium text-quizPrimary">
          <span className="mr-1">{index + 1}.</span>
          <span>{question.text}</span>
        </div>
      </div>

      {/* Options */}
      <div className="w-full flex justify-center">
        <div className="w-[720px] flex flex-col gap-2">
          {question.options.map((option) => (
            <OptionButton
              key={option.id}
              label={option.text}
              isSelected={selectedOptionId === option.id}
              onClick={() => onSelectOption(option.id)}
            />
          ))}
        </div>
      </div>

      {/* Arrows / Submit */}
<div className="w-full flex justify-center mt-2 pb-2">
  <div className="w-[900px] flex justify-end gap-3">
    {!isFirst && (
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous question"
        className="w-[32px] h-[32px] rounded-[8px] border border-[#96E5FF] bg-[#E6F7FF] flex items-center justify-center text-[16px] text-[#15313D] hover:bg-[#96E5FF] hover:text-white transition-all duration-200"
      >
        ←
      </button>
    )}

    {isLast ? (
      <button
        type="button"
        onClick={onNext}
        className="px-6 h-[36px] rounded-[8px] border border-[#96E5FF] bg-gradient-to-r from-quizOption to-quizOptionLight text-[14px] text-quizPrimary font-medium shadow-sm hover:brightness-105 transition-all duration-200"
      >
        Submit
      </button>
    ) : (
      <button
        type="button"
        onClick={onNext}
        aria-label="Next question"
        className="w-[32px] h-[32px] rounded-[8px] border border-[#96E5FF] bg-[#E6F7FF] flex items-center justify-center text-[16px] text-[#15313D] hover:bg-[#96E5FF] hover:text-white transition-all duration-200"
      >
        →
      </button>
    )}
  </div>
</div>

    </motion.section>
  );
}
