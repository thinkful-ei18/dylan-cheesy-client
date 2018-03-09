import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import thunk from 'redux-thunk';
import cheeseReducer from './reducers/cheese';

const store = createStore(
  combineReducers({
    cheese: cheeseReducer,
    form: formReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;