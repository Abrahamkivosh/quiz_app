
export interface Option{
    id: number;
    text: string;
    isCorrect: boolean;
  }
export interface Question {
    id: number;
    question: string;
    answer: string;
    options: Option[];
  }
  
export interface AnsweredQuestion {
    id: number;
    optionId: number;
    isCorrect: boolean;
}