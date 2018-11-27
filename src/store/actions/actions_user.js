import { LOGOUT, LOGIN, LOGIN_FAIL } from '../consts';

// user = object : login, password
export function login(user) {
    return async (dispatch) => {
        if (user.login === 'Oleg' && user.password === 'Marina') {
            const fullUser = {
                login : user.login,
                password : user.password,
                firstName : 'Oleg',
                secondName : 'Butorov',
                age : 20
            } 
            dispatch({ type: LOGIN, payload: fullUser })
        } else {
            dispatch({ type: LOGIN_FAIL })
        };
    };
};

export function logout() {
    return async (dispatch) => {
        dispatch({ type: LOGOUT })
    };
};