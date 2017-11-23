
/* global localStorage fetch */

const API_BASE_URL = process.env.BACKEND_URL;

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

export const loginUser = (advisorInfo) => {
  // console.log(advisorInfo);
  const accessToken = {
    advisorInfo,
  };
  return fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accessToken),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
};

export const registerNewUser = (advisorInfo) => {
  console.log(advisorInfo);
  return fetch(`${API_BASE_URL}/login/new-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(advisorInfo),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
};

