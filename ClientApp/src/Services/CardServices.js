// import config from 'config'; ${config.apiUrl}
import { authHeader } from '../Helpers';
import {appConstants} from "../Constants";

export const cardService = {
  loadCards,
  loadCardData,
  deleteCard,
  updateCard,
  createCard
};

function loadCards(email) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(email)
  };
  const url = appConstants.urlPrefix + `/cards/getcards`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function deleteCard(id) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(id)
  };
  const url = appConstants.urlPrefix + `/cards/deletecard`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function createCard(email,estimate, title) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({email, estimate, title})
  };
  const url = appConstants.urlPrefix + `/cards/createcard`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function updateCard(card) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(card)
  };
  const url = appConstants.urlPrefix + `/cards/updatecard`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}

function loadCardData(id) {

  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(id)
  };
  const url = appConstants.urlPrefix + `/cards/loadcarddata`;
  return fetch(url, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
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