const SEND_GRAVATAR_SRC_IMG = 'SEND_GRAVATAR_SRC_IMG';
const SEND_QUESTIONS = 'SEND_QUESTIONS';
const DECREASE_TIME_TO_RESPOND = 'DECREASE_TIME_TO_RESPOND';
const INITIATE_TIMER = 'INITIATE_TIMER';
const STOP_N_RESET_TIMER_FUNCTION = 'STOP_TIMER_FUNCTION';
const QUESTION_ID_INCREASE = 'QUESTION_ID_INCREASE';
const MODIFY_TIMER = 'MODIFY_TIMER';
const INCREASE_PLAYER_SCORE = 'INCREASE_PLAYER_SCORE';
const MODIFY_NEXT_BTN = 'MODIFY_NEXT_BTN';
const ALLOW_QUESTIONS_BTN_AFTER_NEXT_CLICK = 'ALLOW_QUESTIONS_BTN_AFTER_NEXT_CLICK';
const ADD_QUESTIONS_PLAYED = 'ADD_QUESTIONS_PLAYED';
const RESET_TRIVIA_QUESTIONS_ID = 'RESET_TRIVIA_QUESTIONS_ID';
const RESET_STORE_SCORES = 'RESET_STORE_SCORES';

function sendGravatarSrcImg(name, src, email, token) {
  return {
    type: SEND_GRAVATAR_SRC_IMG,
    name,
    src,
    email,
    token,
  };
}

function sendQuestions(questions) {
  return {
    type: SEND_QUESTIONS,
    questions,
  };
}

function decreaseTimeToRespond(time) {
  return {
    type: DECREASE_TIME_TO_RESPOND,
    time,
  };
}

function InitiateTimer(startTimer) {
  return {
    type: INITIATE_TIMER,
    startTimer,
  };
}

function stopAndResetFunction(stop, reset) {
  return {
    type: STOP_N_RESET_TIMER_FUNCTION,
    stop,
    reset,
  };
}

function questionIdIncrease(increase) {
  return {
    type: QUESTION_ID_INCREASE,
    increase,
  };
}

function modifyTimer(boolean) {
  return {
    type: MODIFY_TIMER,
    boolean,
  };
}

function increasePlayerScore(increase, assertions) {
  return {
    type: INCREASE_PLAYER_SCORE,
    increase,
    assertions,
  };
}

function modifyNextBtn(boolean) {
  return {
    type: MODIFY_NEXT_BTN,
    boolean,
  };
}

function allowQuestionsBtnAfterNextClick(func) {
  return {
    type: ALLOW_QUESTIONS_BTN_AFTER_NEXT_CLICK,
    func,
  };
}

function addQuestionsPlayed(questions) {
  return {
    type: ADD_QUESTIONS_PLAYED,
    questions,
  };
}

function resetTriviaQuestionsId(resetQuestionsPlayed) {
  return {
    type: RESET_TRIVIA_QUESTIONS_ID,
    resetQuestionsPlayed,
  };
}

function resetStoreScores(score, assertions) {
  return {
    type: RESET_STORE_SCORES,
    score,
    assertions,
  };
}

export {
  SEND_GRAVATAR_SRC_IMG,
  sendGravatarSrcImg,
  SEND_QUESTIONS,
  sendQuestions,
  decreaseTimeToRespond,
  DECREASE_TIME_TO_RESPOND,
  InitiateTimer,
  INITIATE_TIMER,
  stopAndResetFunction,
  STOP_N_RESET_TIMER_FUNCTION,
  QUESTION_ID_INCREASE,
  questionIdIncrease,
  modifyTimer,
  MODIFY_TIMER,
  INCREASE_PLAYER_SCORE,
  increasePlayerScore,
  modifyNextBtn,
  MODIFY_NEXT_BTN,
  allowQuestionsBtnAfterNextClick,
  ALLOW_QUESTIONS_BTN_AFTER_NEXT_CLICK,
  ADD_QUESTIONS_PLAYED,
  addQuestionsPlayed,
  resetTriviaQuestionsId,
  RESET_TRIVIA_QUESTIONS_ID,
  RESET_STORE_SCORES,
  resetStoreScores,

};
