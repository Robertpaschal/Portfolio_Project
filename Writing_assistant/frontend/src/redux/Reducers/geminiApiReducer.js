// import { SET_INPUT_VALUE, SET_PROMPT_RESPONSES, SET_LOADING } from '../Actions/geminiActionTypes';

// const initialState = {
//   inputValue: '',
//   promptResponses: [],
//   loading: false,
// };

// const geminiApiReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_INPUT_VALUE':
//       return { ...state, inputValue: action.payload };
//     case 'SET_PROMPT_RESPONSES':
//       return { ...state, promptResponses: action.payload };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     default:
//       return state;
//   }
// };
// export default geminiApiReducer;


import { SET_INPUT_VALUE, SET_PROMPT_RESPONSES, SET_LOADING } from '../Actions/geminiActionTypes';

const initialState = {
  inputValue: '',
  promptResponses: [],
  loading: false,
};

export const inputValueReducer = (state = initialState.inputValue, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export const promptResponsesReducer = (state = initialState.promptResponses, action) => {
  switch (action.type) {
    case SET_PROMPT_RESPONSES:
      return action.payload;
    default:
      return state;
  }
};

export const loadingReducer = (state = initialState.loading, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};


