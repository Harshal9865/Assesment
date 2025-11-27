/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        auroraLight: '#BECFEE',
        auroraMid: '#71C6E2',
        auroraSoft: '#D9F4FA',
        quizSurface: '#F7FBFF',
        quizPrimary: '#15313D',
        quizOption: '#C6E9F7',
        quizOptionLight: '#E5F8FF',
        quizBorder: '#FFFFFF',
        quizAccent: '#3CABDA',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        quiz: '0 40px 80px rgba(0,0,0,0.18)',
      },
      borderRadius: {
        quizOuter: '50px',
        quizInner: '36px',
      },
    },
  },
  plugins: [],
};
