/* global localStorage fetch */

// api
const API_BASE_URL = process.env.BACKEND_URL;

// import MockQuestionnaire from './mock-questionnaire';

export function getQuestionnaire() {
  return fetch(`${API_BASE_URL}/questionnaire`, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
}

export function saveCompletedQuestionnaire(userInput) {
  return fetch(`${API_BASE_URL}/questionnaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInput),
  });
}

export function getShopAndCustomerData() {
  localStorage.getItem('');
}
