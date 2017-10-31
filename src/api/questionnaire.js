/* global localStorage fetch */

// api
import API_BASE_URL from '../../config';

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

export function saveCompletedQuestionnaire(advisorInfo, customerName, userInput) {
  const completedQuestionnaire = {
    advisorName: advisorInfo,
    customerName,
    customerAnswers: userInput,
  };
  return fetch(`${API_BASE_URL}/questionnaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(completedQuestionnaire),
  });
  // console.log(completedQuestionnaire);
  // localStorage.setItem('user-input', JSON.stringify(completedQuestionnaire));
}

export function getShopAndCustomerData() {
  localStorage.getItem('');
}
