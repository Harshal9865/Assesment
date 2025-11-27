import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function QuizLayout({ children }: Props) {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(107.96deg,#BECFEE 0%,#71C6E2 50%,#D9F4FA 75%,#BECFEE 100%)',
      }}
    >
      <div
        className="quiz-shell relative bg-gradient-to-br from-white via-white/80 to-white shadow-quiz border border-white/60 rounded-[50px] flex items-center justify-center"
        style={{
  width: 'min(1850px, 95vw)',
  height: 'min(1050px, 95vh)',
}}


      >
        {/* Blue framing like Figma */}
        <div className="absolute inset-[24px] rounded-[40px] border-[3px] border-[#3CABDA] opacity-90 pointer-events-none" />

        {/* Enlarged content area */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-[1400px] max-w-[88%] h-full flex flex-col items-center pt-[64px] pb-[40px]">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
