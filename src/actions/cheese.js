import { REACT_APP_API_BASE_URL } from "../config";

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
});

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest());
  return fetch(`${REACT_APP_API_BASE_URL}/cheeses`)
    .then(res => res.json())
    .then(res => dispatch(fetchCheesesSuccess(res)))
    .catch(err => dispatch(fetchCheesesError(err)));
}