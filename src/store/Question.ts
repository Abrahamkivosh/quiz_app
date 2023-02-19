import { defineStore } from "pinia";
import { Question, Option, AnsweredQuestion } from "@types/Question";

export const useQuestionStore = defineStore({
  id: "question",
  state: () => ({
    questions: [
      {
        id: 1,
        question: "What is the capital of India?",
        answer: "Delhi",
        options: [
          {
            id: 1,
            text: "Delhi",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Mumbai",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Kolkata",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Chennai",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "What is the capital of Pakistan?",
        answer: "Islamabad",
        options: [
          {
            id: 1,
            text: "Islamabad",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Karachi",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Lahore",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Peshawar",
            isCorrect: false,
          },
        ],
      },
      {
        id: 3,
        question: "What is the capital of Bangladesh?",
        answer: "Dhaka",
        options: [
          {
            id: 1,
            text: "Dhaka",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Chittagong",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Khulna",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Rajshahi",
            isCorrect: false,
          },
        ],
      },
      {
        id: 4,
        question: "What is the capital of Nepal?",
        answer: "Kathmandu",
        options: [
          {
            id: 1,
            text: "Kathmandu",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Pokhara",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Biratnagar",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Birgunj",
            isCorrect: false,
          },
        ],
      },
      {
        id: 5,
        question: "What is the capital of Bhutan?",
        answer: "Thimphu",
        options: [
          {
            id: 1,
            text: "Thimphu",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Paro",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Punakha",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Wangdue Phodrang",
            isCorrect: false,
          },
          {
            id: 5,
            text: "Trongsa",
            isCorrect: false,
          }
        ]
          
      },
      {
        id: 6,
        question: "What is the capital of Sri Lanka?",
        answer: "Colombo",
        options: [
          {
            id: 1,
            text: "Colombo",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Kandy",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Galle",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Jaffna",
            isCorrect: false,
          }]
      },
      {
        id: 7,
        question: "What is the capital of Kenya?",
        answer: "Nairobi",
        options: [
          {
            id: 1,
            text: "Nairobi",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Mombasa",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Kisumu",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Nakuru",
            isCorrect: false,
          }]
      },
      {
        id: 8,
        question: "What is the capital of Tanzania?",
        answer: "Dodoma",
        options: [
          {
            id: 1,
            text: "Dodoma",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Dar es Salaam",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Mwanza",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Arusha",
            isCorrect: false,
          }]
      },
      {
        id: 9,
        question: "What is the capital of Uganda?",
        answer: "Kampala",
        options: [
          {
            id: 1,
            text: "Kampala",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Gulu",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Jinja",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Mbarara",
            isCorrect: false,
          }]
      },
      {
        id: 10,
        question: "What is the capital of Rwanda?",
        answer: "Kigali",
        options: [
          {
            id: 1,
            text: "Kigali",
            isCorrect: true,
          },
          {
            id: 2,
            text: "Butare",
            isCorrect: false,
          },
          {
            id: 3,
            text: "Gitarama",
            isCorrect: false,
          },
          {
            id: 4,
            text: "Kibuye",
            isCorrect: false,
          }]
      }

      
    ] as Question[],
    currentQuestion: {} as Question,
    currentQuestionIndex: 0,
    score: 0,
    isAnswerSubmitted: false,
    selectedOption: {} as Option,
    correctAnswer: {} as Option,
    isCorrect: false,
    isLastQuestion: false,
    isFirstQuestion: false,
    isQuizFinished: false,
    answeredQuestions: [] as AnsweredQuestion[],
    altMessage: {
      icon: "",
      text: "",
    } as {
      icon: string;
      text: string;
    },
  }),
  getters: {
    getQuestions: (state) => state.questions,
    getCurrentQuestion: (state) => state.currentQuestion,
    getCurrentQuestionIndex: (state) => state.currentQuestionIndex,
    getCurrentQuestionNumber: (state) => state.currentQuestionIndex + 1,
    getScore: (state) => state.score,
    getIsAnswerSubmitted: (state) => state.isAnswerSubmitted,
    getSelectedOption: (state) => state.selectedOption,
    getCorrectAnswer: (state) => state.correctAnswer,
    getIsCorrect: (state) => state.isCorrect,
    getIsLastQuestion: (state) => state.isLastQuestion,
    getIsFirstQuestion: (state) => state.isFirstQuestion,
    getIsQuizFinished: (state) => state.isQuizFinished,
    getAnsweredQuestions: (state) => state.answeredQuestions,
    getAltMessage: (state) => state.altMessage,
  },
  actions: {
    async fetchQuestions() {
      //const response = await fetch('/api/questions');
      //const questions = response.json() ; // await response.json();
      const questions = this.questions;
      this.questions = questions;
      // shuffle questions
      this.questions = this.questions.sort(() => Math.random() - 0.5);
      //shuffle options
      this.questions.forEach((question) => {
        question.options = question.options.sort(
          () => Math.random() - 0.5
        );
      });
      // set current question
      this.currentQuestion = questions[0];
      this.isFirstQuestion = this.currentQuestionIndex === 0;
    },
    nextQuestion() {
      this.isAnswerSubmitted = false;
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.isLastQuestion =
      this.currentQuestionIndex === this.questions.length - 1;
      this.isFirstQuestion = this.currentQuestionIndex === 0;
    },
    previousQuestion() {
      this.isAnswerSubmitted = false;
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.isLastQuestion =
      this.currentQuestionIndex === this.questions.length - 1;
      this.isFirstQuestion = this.currentQuestionIndex === 0;
    },

    selectOption(option: Option) {
      this.selectedOption = option;
      this.isAnswerSubmitted = true;
      this.correctAnswer = this.currentQuestion.options.find(
        (option) => option.isCorrect
      );
      this.isCorrect = this.selectedOption.id === this.correctAnswer.id;
      if (this.isCorrect) {
        // check if question is already answered or not
        if (this.answeredQuestions.find((q) => q.id === this.currentQuestion.id)) {
          return;
        }
        this.score++;
        this.answeredQuestions.push({
          id: this.currentQuestion.id,
          optionId: this.selectedOption.id,
          isCorrect: true,
        });

      }else{
        this.answeredQuestions.push({
          id: this.currentQuestion.id,
          optionId: this.selectedOption.id,
          isCorrect: false,
        });
      }

    
    },
    resetQuiz() {
      this.score = 0;
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[0];
      this.isAnswerSubmitted = false;
      this.isLastQuestion = false;
      this.isFirstQuestion = true;
      this.isQuizFinished = false;
    },
    finishQuiz() {
      this.isQuizFinished = true;
    },
    setAltMessage(icon: string, text: string) {
      this.altMessage = { icon, text };
    }
  },
});
