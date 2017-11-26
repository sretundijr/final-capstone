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

export function saveCompletedQuestionnaire(customerId, advisorInfo, customerName, userInput) {
  const completedQuestionnaire = {
    customerId,
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
