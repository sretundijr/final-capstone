
/* global localStorage */

export const saveCurrentUser = (name) => {
  localStorage.setItem('current', JSON.stringify(name));
};

// todo rename - used to register a user
export const saveToLocalStorage = (advisorInfo) => {
  console.log(advisorInfo);
  const advisorName = advisorInfo.advisorName;
  localStorage.setItem(advisorName, JSON.stringify(advisorInfo));
  saveCurrentUser(advisorName);
};

