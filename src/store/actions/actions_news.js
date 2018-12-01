import axios from 'axios';

import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILED, NEWS_URL } from '../consts';


export function getNews() {
  return async (dispatch) => {
    try {
        dispatch({ type: GET_NEWS })
        const response = await axios.get(NEWS_URL);
        const data = response.data;
        dispatch({ type: GET_NEWS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_NEWS_FAILED, payload: error })
      }
  }
};