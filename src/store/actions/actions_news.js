import axios from 'axios';

import { 
  NEWS_URL, 
  GET_NEWS, 
  GET_NEWS_SUCCESS, 
  GET_NEWS_FAILED, 
  CREATE_NEWS, 
  CREATE_NEWS_SUCCESS, 
  CREATE_NEWS_FAILED, 
  DELETE_NEWS, 
  DELETE_NEWS_SUCCESS, 
  DELETE_NEWS_FAILED,
  UPDATE_NEWS,
  UPDATE_NEWS_SUCCESS,
  UPDATE_NEWS_FAILED } from '../consts';

const headers = {"Content-type": "application/json; charset=UTF-8"};

export function getNews() {
  return async (dispatch) => {
    try {
        dispatch({ type: GET_NEWS })
        const response = await axios.get(NEWS_URL);
        const data = response.data;
        dispatch({ type: GET_NEWS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_NEWS_FAILED, payload: error })
      };
  };
};

export function createNews(news) {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_NEWS });
      const response = await axios.post(NEWS_URL, {
        body: JSON.stringify(news),
        // header: header
        headers
      })
      const data = response.data;
      dispatch({ type: CREATE_NEWS_SUCCESS, payload: data })
  } catch (error) {
        dispatch({ type: CREATE_NEWS_FAILED, payload: error })
    };

  };
};

export function deleteNews(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_NEWS });
      await axios.delete(`${NEWS_URL}/${id}`)
      dispatch({ type: DELETE_NEWS_SUCCESS, payload: id })
  } catch (error) {
      dispatch({ type: DELETE_NEWS_FAILED, payload: error })
    };
  };
};

export function updateNews(news) {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_NEWS });
      const response = await axios.patch(`${NEWS_URL}/${news.id}`, {
        body: JSON.stringify(news),
        headers
      })
      const data = response.data;
      console.log(data);
      dispatch({ type: UPDATE_NEWS_SUCCESS, payload: data })
  } catch (error) {
      dispatch({ type: UPDATE_NEWS_FAILED, payload: error })
    };
  };
};