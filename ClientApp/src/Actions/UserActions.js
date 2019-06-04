import { userConstants } from '../Constants';
import { userService } from '../Services';
import { alertActions } from './';
import { history } from '../Helpers';

export const userActions = {
    login,
    register,
    logout,
    logoutNRedirect
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
          .then(
            user => {
                dispatch(success(user));
                history.push('/home');
                history.go();
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
          );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(email, password, fullname, username) {
    return dispatch => {
        dispatch(request({ email }));

        userService.register(email, password, fullname, username)
          .then(
            user => {
                dispatch(success(user));
                history.push('/home');
                history.go();
            },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
          );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function logoutNRedirect() {
    return dispatch => {
        logout();
        history.push('/login');
        history.go();
    }
}