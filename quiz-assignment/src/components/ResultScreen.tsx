import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

type Props = {
  score: number;
  onRestart: () => void;
};

export default function ResultScreen({ score, onRestart }: Props) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(value, score, {
      duration: 1.1,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [score, value]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#F1FBFF]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="px-6 py-2 rounded-full bg-white text-[12px] text-[#7A8B9B] shadow-sm">
          Keep Learning!
        </div>
        <div className="text-center">
          <p className="font-display italic text-[48px] text-quizPrimary leading-tight">
            Your Final score is
          </p>
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <motion.span className="font-display italic text-[96px] text-quizPrimary leading-none">
              {rounded}
            </motion.span>
            <span className="font-display italic text-[40px] text-quizPrimary leading-none">
              %
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="mt-4 inline-flex items-center justify-center px-10 py-3 rounded-[10px] border border-[#96E5FF] bg-gradient-to-r from-quizOption to-quizOptionLight text-[14px] font-medium text-quizPrimary shadow-sm hover:brightness-105 transition-all duration-200"
        >
          Start Again
        </button>
      </div>
    </motion.div>
  );
}
