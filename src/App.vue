<template>
  <div class="container">
    <h1 class="title">Quiz App</h1>
    <div class="quiz">
      <div class="question">
        <div class="question-header">
          <h2 class="question-number">Question {{ questionStore.getCurrentQuestionNumber }}/{{
            questionStore.getQuestions.length }}</h2>
          <h2 class="score">Score: <span>{{ questionStore.getScore }}</span> </h2>
        </div>
        <p class="question-text">
          {{ questionStore.getCurrentQuestion.question }}
        </p>
      </div>
      <div class="options">
        <button class="option " v-for="(option, index) in questionStore.getCurrentQuestion.options" :key="index" :class="{
          correct: isCorrect(option),
          incorrect: isWrong(option),
        }" 
        @click.prevent="selectOption(option)"
        :disabled="disabledOtherOption(option)"
        >
          {{ option.text }}
        </button>

      </div>
      <div class="actionButtons">
        <button class="previous" @click.prevent="questionStore.previousQuestion"
          :disabled="questionStore.getIsFirstQuestion">
          Previous
        </button>
        <button class="next"
         @click.prevent="moveNextOrSubmit"
          :class="[questionStore.getIsLastQuestion ? 'submit' : 'next']">
          {{ questionStore.getIsLastQuestion ? 'Submit' : 'Next' }}

        </button>
          
      </div>
    </div>
    <alert-message v-if="questionStore.getIsAnswerSubmitted"
      :icon="questionStore.getAltMessage.icon"
      :text="questionStore.getAltMessage.text"
     />
  </div>
</template>

<script lang="ts" setup>
import {   onMounted, reactive } from 'vue'
import { useQuestionStore } from '@store/Question'
import { AnsweredQuestion, Option } from "@types/Question";

const questionStore = useQuestionStore()
onMounted(() => {
  questionStore.fetchQuestions()
})
const isCorrect = (option: Option) => {
  let correct = false
  // check if getAnsweredQuestions is empty or not 
  if (questionStore.getAnsweredQuestions.length > 0) {
    // get check if the current question is answered or not
    const answeredQuestion = questionStore.getAnsweredQuestions.find((answeredQuestion: AnsweredQuestion) => answeredQuestion.id === questionStore.getCurrentQuestion.id)
    if (answeredQuestion && answeredQuestion.optionId === option.id) {
      // check if the option is correct or not
      if (answeredQuestion.isCorrect) {
        correct = true
      }
    }
  }
  return correct
}
const isWrong = (option: Option) => {
  let wrong = false
  // check if getAnsweredQuestions is empty or not 
  if (questionStore.getAnsweredQuestions.length > 0) {
    // get check if the current question is answered or not
    const answeredQuestion = questionStore.getAnsweredQuestions.find((answeredQuestion: AnsweredQuestion) => answeredQuestion.id === questionStore.getCurrentQuestion.id)
    if (answeredQuestion && answeredQuestion.optionId === option.id) {
      // check if the option is correct or not
      if (!answeredQuestion.isCorrect) {
        wrong = true
      }
    }
  }
  return wrong
}
const disabledOtherOption = (option: Option) => {
  let disabled = false
  // check if getAnsweredQuestions is empty or not 
  if (questionStore.getAnsweredQuestions.length > 0) {
    // get check if the current question is answered or not
    const answeredQuestion = questionStore.getAnsweredQuestions.find((answeredQuestion: AnsweredQuestion) => answeredQuestion.id === questionStore.getCurrentQuestion.id)
    if (answeredQuestion && answeredQuestion.optionId !== option.id) {
      disabled = true
    }
  }
  return disabled
}
const selectOption = (option: Option) => {
  questionStore.selectOption(option)

  if (questionStore.getIsCorrect ){
    questionStore.setAltMessage('fa-check','Correct Answer')
  }else{
    questionStore.setAltMessage('fa-times','Wrong Answer'  )
  }

}



const submitQuiz = () => {
  questionStore.finishQuiz()
}
const moveNextOrSubmit = () => {
  if (questionStore.getIsLastQuestion) {
    submitQuiz()
  } else {
    questionStore.nextQuestion()
  }
}


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .quiz {
    width: 50%;
    height: auto;
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem;

    .question {
      .question-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .question-number {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .score {
          font-size: 1.2rem;
          font-weight: 500;

          span {
            font-weight: 700;
          }
        }
      }

      .question-text {
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 1rem;
      }
    }

    .options {
      margin-top: 2rem;

      .correct {
        background-color: #43a047;
        border: 1px solid #43a047;
        color: #fff;
        &:hover {
          background-color: #43a047 !important;
          border: 1px solid #43a047;
          color: #fff;
        }
      }

      .incorrect {
        background-color: #e53935;
        border: 1px solid #e53935;
        color: #fff;
        &:hover {
          background-color: #e53935 !important;
          border: 1px solid #e53935;
          color: #fff;
        }
      }

      .option {
        width: 100%;
        padding: 0.5rem 1rem;
        border: 1px solid #000;
        border-radius: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;

        &:hover {
          background-color: #e0e0e0;
        }
      }
    }


    .actionButtons {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;

      .previous {
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;

        &:disabled {
          background-color: #e0e0e0;
          border: 1px solid #bdbdbd;
          color: #bdbdbd;
          cursor: not-allowed;
          
        }
      }

      .next {
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;

        &:disabled {
          background-color: #e0e0e0;
          border: 1px solid #bdbdbd;
          color: #bdbdbd;
          cursor: not-allowed;
        }
      }

      .submit {
        background-color: #43a047;
        border: 1px solid #43a047;
        color: #FFFFFF;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
      }

    }

  }





}
</style>