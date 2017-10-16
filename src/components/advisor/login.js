
import React from 'react';

import EmailInput from './email-input';
import PasswordInput from './password-input';

export default function Login() {
  return (
    <div>
      <div>
        <h4>Sign In</h4>
        <style jsx>
          {`
            h4 {
              margin-bottom: 20px;
              padding-bottom: 20px;
            }
          `}
        </style>
      </div>
      <div>
        <label htmlFor="advisor-email">
          <span>
            Your Email
          </span>
          <EmailInput
            name="advisor-email"
            onChange={''}
            value={''}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <span>
            Password
          </span>
          <PasswordInput
            name="password"
            onChange={''}
            value={''}
          />
        </label>
      </div>
    </div>
  );
}
