/* global localStorage */

import MockQuestionnaire from './mock-questionnaire';

export const localStorageMock = (input) => {
  return {
    setItem: localStorage.setItem('user-input', JSON.stringify(input)),
  };
};

// Object.defineProperty(window, 'localStorage', { value: localStorageMock });

export const getQuestionnaire = () => MockQuestionnaire();
