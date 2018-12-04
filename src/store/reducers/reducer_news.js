import { GET_NEWS, 
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
        case CREATE_NEWS:
            return {
                ...state, isLoading: true
            };
        case CREATE_NEWS_SUCCESS:
            const payloadBody = JSON.parse(action.payload.body)
            const result = {...payloadBody, id: action.payload.id}
            return {
                ...state, news: state.news.concat([result]), isLoading: false
            };
        case CREATE_NEWS_FAILED:
            return {
                ...state, error: action.payload, isLoading: false
            };
        case DELETE_NEWS:
            return {
                ...state, isLoading: true
            };
        case DELETE_NEWS_SUCCESS:
            return {
                ...state, news: state.news.filter(item => action.payload !== item.id)
            };
        case DELETE_NEWS_FAILED:
            return {
            ...state, error: action.payload, isLoading: false
            };
        case UPDATE_NEWS:
            return {
                ...state, isLoading: true
            };
        case UPDATE_NEWS_SUCCESS:
            const payloadBodyUpdata = JSON.parse(action.payload.body)
            const resultUpdate = {...payloadBodyUpdata, id: action.payload.id, userId: action.payload.userId }
            return {
                ...state, news: state.news.map(item => action.payload.id === item.id ? resultUpdate : item), isLoading: false
            };
        case UPDATE_NEWS_FAILED:
            return {
            ...state, error: action.payload, isLoading: false
            };
        default:
            return state
    }
};

export default newsReducer;