import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import RootReducer from '../Reducers/RootReducer';
import {thunk} from 'redux-thunk';


const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

