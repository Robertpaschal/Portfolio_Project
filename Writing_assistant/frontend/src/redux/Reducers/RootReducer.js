import { combineReducers } from 'redux';
import cardReducers from '../Reducers/cardReducers'
import textEditorReducer from './textEditorReducer'

const RootReducer = combineReducers({
  cards: cardReducers,
  textEditor: textEditorReducer
});

export default RootReducer;