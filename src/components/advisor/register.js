
import React from 'react';

import TextInput from './text-input';
import EmailInput from './email-input';
import PasswordInput from './password-input';

import AdvisorContainer from '../../styles/advisor/questionnaire-form';

export default function Register() {
  return (
    <div>
      <div>
        <form className="form-style-4">
          <label htmlFor="shop-name">
            <span>
              Shop Name
            </span>
            <TextInput
              name="shop-name"
              onChange={''}
              value={''}
            />
          </label>
          <label htmlFor="advisor-name">
            <span>
              Your Name
            </span>
            <TextInput
              name="advisor-name"
              onChange={''}
              value={''}
            />
          </label>
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
          <label htmlFor="confirm-password">
            <span>
              Confirm Password
            </span>
            <PasswordInput
              name="confirm-password"
              onChange={''}
              value={''}
            />
          </label>
        </form>
      </div>
      <style js>{AdvisorContainer}</style>
    </div>
  );
}
