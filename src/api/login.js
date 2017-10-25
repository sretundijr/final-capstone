
/* global localStorage */

export const saveToLocalStorage = (advisorInfo) => {
  console.log(advisorInfo);
  localStorage.setItem(advisorInfo.advisorName, JSON.stringify(advisorInfo));
};

export const getAdvisorInfo = (key) => {
  localStorage.getItem(key);
};
