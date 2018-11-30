import { LOGOUT, LOGIN, LOGIN_FAIL } from '../consts';

const initialState = { user: {}, error: '' };

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state, error: action.payload
            };
        case LOGOUT:
            return {
                ...state, ...initialState
            };
        default:
            return state
    }
};

export default userReducer;