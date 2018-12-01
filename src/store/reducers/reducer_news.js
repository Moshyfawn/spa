import { GET_NEWS, GET_NEWS_SUCCESS, GET_NEWS_FAILED } from '../consts';

const initialState = { news: [], error: '', isLoading: false };

const newsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state, isLoading: true
            };
        case GET_NEWS_SUCCESS:
            return {
                ...state, news: action.payload, isLoading: false
            };
        case GET_NEWS_FAILED:
            return {
                ...state, error: action.payload, isLoading: false
            };
        default:
            return state
    }
};

export default newsReducer;