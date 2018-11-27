import { LOGOUT, LOGIN, LOGIN_FAIL } from '../consts';

const initianState = { user: {}, error: '' };

const userReducer = (state=initianState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state, error: 'fuck you!'
            };
        case LOGOUT:
            return {
                ...state, ...initianState
            };
        default:
            return state
    }
};

export default userReducer;