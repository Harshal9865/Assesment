import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function QuizLayout({ children }: Props) {
  return (
    <div
      className="min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(107.96deg,#BECFEE 0%,#71C6E2 50%,#D9F4FA 75%,#BECFEE 100%)',
      }}
    >
      <div className="quiz-root w-[1625px] h-[920px] max-w-none rounded-quizOuter bg-gradient-to-br from-white via-white/75 to-white shadow-quiz flex items-center justify-center">
        <div className="w-[1480px] h-[780px] rounded-quizInner border border-white/80 bg-quizSurface px-[148px] pt-[96px] pb-[72px] relative overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
