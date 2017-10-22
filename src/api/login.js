/* global localStorage */

export const saveToLocalStorage = (advisorInfo) => {
  localStorage.setItem('name', advisorInfo);
};

export const getAdvisorInfo = (key) => {
  localStorage.getItem(key);
};
