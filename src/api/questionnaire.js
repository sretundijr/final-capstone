/* global localStorage */

// import MockQuestionnaire from './mock-questionnaire';

export function saveCompletedQuestionnaire(input) {
  console.log(input);
  localStorage.setItem('user-input', JSON.stringify(input));
}

export function getShopAndCustomerData() {
  localStorage.getItem('');
}
