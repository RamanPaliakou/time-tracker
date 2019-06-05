// import config from 'config'; ${config.apiUrl}
import { authHeader } from '../Helpers';
import {appConstants} from "../Constants";

export const cardService = {
  initCards,
  loadCards,
};

function loadCards(email) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(email)
  };
  console.log(requestOptions);
  const url = appConstants.urlPrefix + `/cards/getcards`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      console.log(data);
    });
}

function initCards(email) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(email)
  };

  const url = appConstants.urlPrefix + `/cards/initcards`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      console.log(data);
    });
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        console.log("unauthorized");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}