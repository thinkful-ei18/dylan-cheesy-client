import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  ADD_CHEESE_ERROR,
  ADD_CHEESE_REQUEST,
  ADD_CHEESE_SUCCESS
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: action.cheeses
    });
  } else if (action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  } else if (action.type === ADD_CHEESE_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === ADD_CHEESE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cheeses: [...state.cheeses, action.cheese]
    });
  } else if (action.type === ADD_CHEESE_ERROR) {
    return Object.assign({}, state, { loading: false, error: action.error });
  }
  return state;
}
