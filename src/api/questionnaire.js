/* global localStorage fetch */

// api
import API_BASE_URL from '../../config';

// import MockQuestionnaire from './mock-questionnaire';

export function getQuestionnaire() {
  return fetch(`${API_BASE_URL}/questionnaire`)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
}

export function saveCompletedQuestionnaire(input) {
  console.log(input);
  localStorage.setItem('user-input', JSON.stringify(input));
}

export function getShopAndCustomerData() {
  localStorage.getItem('');
}
