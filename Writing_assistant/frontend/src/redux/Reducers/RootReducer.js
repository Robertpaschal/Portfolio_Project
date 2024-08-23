import { combineReducers } from 'redux';
import cardReducers from '../Reducers/cardReducers'
import textEditorReducer from './textEditorReducer'
import contentReducer from './contentReducer';

const RootReducer = combineReducers({
  cards: cardReducers,
  textEditor: textEditorReducer,
  contentReducer: contentReducer
});

export default RootReducer;