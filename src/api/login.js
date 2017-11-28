
/* global fetch */

const API_BASE_URL = process.env.BACKEND_URL;

export const loginUser = (advisorInfo) => {
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

