import { combineReducers } from 'redux';
import cardReducers from '../Reducers/cardReducers'
import textEditorReducer from './textEditorReducer'
import contentReducer from './contentReducer';
import { inputValueReducer, promptResponsesReducer, loadingReducer } from './geminiApiReducer';
// import geminiApiReducer from './geminiApiReducer';

const RootReducer = combineReducers({
  cards: cardReducers,
  textEditor: textEditorReducer,
  contentReducer: contentReducer,
  inputValue: inputValueReducer,
  promptResponses: promptResponsesReducer,
  loading: loadingReducer,
  // geminiApi: geminiApiReducer,
});

export default RootReducer;