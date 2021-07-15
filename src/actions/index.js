export const loginInputs = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return {
    type: 'LOGIN_INPUT',
    name,
    value,
  };
};

export const requestSucess = (payload) => ({
  type: 'REQUEST_SUCESS',
  payload,
});

export const requestError = (payload) => ({
  type: 'REQUEST_ERROR',
  payload,
});

export const fetchTriviaApi = () => (dispatch) => fetch('https://opentdb.com/api_token.php?command=request')
  .then((result) => result.json())
  .then((resJson) => dispatch(requestSucess(resJson)))
  .catch((error) => dispatch(requestError(error.message)));

export const requestQuestions = (payload) => ({
  type: 'REQUEST_QUESTIONS',
  payload,
});

export const fetchTriviaQuestions = (token) => (dispatch) => fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
  .then((result) => result.json())
  .then((resJson) => dispatch(requestQuestions(resJson)));
