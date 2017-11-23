
/* global window localStorage */

import Auth0Lock from 'auth0-lock';

const authRedirectUrl = process.env.AUTH0_URL;

const lock = () => new Auth0Lock(
  'ZUnbJR4LHk83x4iVA0yqo2wBoHxW2PXQ',
  'advisor-login.auth0.com',
  {
    auth: {
      audience: 'https://advisor-login.auth0.com/userinfo',
      redirectUrl: authRedirectUrl,
      responseType: 'token',
      params: {
        scope: 'openid email user_metadata',
      },
    },
    oidcConformant: true,
    additionalSignUpFields: [
      {
        name: 'fullName',
        placeholder: 'Enter your full name',
      },
      {
        name: 'shopName',
        placeholder: 'Enter your shop name',
      },
    ],
  },
);

export const showLock = () => lock().show();

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('No access token found');
  }
  return accessToken;
};

const getParameterByName = (name) => {
  const match = RegExp(`[#&]${name}=([^&]*)`).exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export const setAccessToken = () => {
  const ACCESS_TOKEN_KEY = 'access_token';
  const accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

