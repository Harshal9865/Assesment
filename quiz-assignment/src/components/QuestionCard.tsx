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
      className="mt-12 flex flex-col gap-5"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      aria-label={`Question ${index + 1} of ${total}`}
    >
      <div className="w-full flex justify-center">
        <div className="w-[896px] h-[78px] rounded-[10px] bg-gradient-to-r from-quizOption to-quizOptionLight border border-[#96E5FF] flex items-center justify-center text-[15px] font-medium text-quizPrimary">
          <span className="mr-1">{index + 1}.</span>
          <span>{question.text}</span>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[897px] flex flex-col gap-4">
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

      <div className="w-full flex justify-center mt-6">
        <div className="w-[897px] flex justify-end items-center gap-3">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirst}
            aria-label="Previous question"
            className={`w-[40px] h-[40px] rounded-[8px] border border-[#E2EDF6] flex items-center justify-center text-base transition-all duration-200 ${
              isFirst
                ? 'bg-[#F4F7FB] text-gray-400 cursor-default'
                : 'bg-[#F4F7FB] hover:bg-white hover:shadow-sm text-[#5B6A79]'
            }`}
          >
            ←
          </button>
          {isLast ? (
            <button
              type="button"
              onClick={onNext}
              className="px-7 h-[40px] rounded-[8px] border border-[#96E5FF] bg-gradient-to-r from-quizOption to-quizOptionLight text-[14px] text-quizPrimary font-medium shadow-sm hover:brightness-105 transition-all duration-200"
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              onClick={onNext}
              aria-label="Next question"
              className="w-[40px] h-[40px] rounded-[8px] border border-[#E2EDF6] bg-[#F4F7FB] flex items-center justify-center text-base text-[#5B6A79] hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              →
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
