export type Option = {
  id: number;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  text: string;
  options: Option[];
};
