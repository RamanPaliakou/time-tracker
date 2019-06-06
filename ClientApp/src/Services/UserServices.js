import { authHeader } from '../Helpers';
import {appConstants} from "../Constants";

export const userService = {
  login,
  register,
  logout
};

function login(email, password) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({Email:email, Password:password})
  };
  var url = appConstants.urlPrefix + `/users/authenticate`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  });
}

function register(email, password, fullname, username) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({Email: email, Password: password, Username: username, Fullname: fullname})
  };

  var url = appConstants.urlPrefix + `/users/register`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}