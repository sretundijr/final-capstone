/* global localStorage */

import MockQuestionnaire from './mock-questionnaire';

export const saveUserInputToLocalStorage = (input) => {
  localStorage.setItem('user-input', JSON.stringify(input));
};

export const getMockQuestionnaire = () => MockQuestionnaire();
