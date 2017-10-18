
import React from 'react';

import EmailInput from '../advisor/password-input';
import PasswordInput from '../advisor/email-input';

export default function Login() {
  return (
    <div>
      <div>
        <h4>Sign In</h4>
      </div>
      <div>
        <label htmlFor="advisor-email">
          <span>
            Your Email
          </span>
          <div className="input-container">
            <EmailInput
              name="advisor-email"
              onChange={''}
              value={''}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <span>
            Password
          </span>
          <div className="input-container">
            <PasswordInput
              name="password"
              onChange={''}
              value={''}
            />
          </div>
        </label>
        <div>
          <input
            type="submit"
            onChange={''}
            value="Submit"
            className="submit"
          />
        </div>
      </div>
      <style jsx>
        {`
          .input-container {
            margin-bottom: 10px;
          }
          div {
            font-size: 1.3vw;
          }
          h4 {
            font-size: 1.5vw;
            margin-bottom: 20px;
            padding-bottom: 20px;
            text-align: center;            
          }
          .submit {
            margin-top: 20px;
            font-size: 20px;    
            width: 100%;
            height: 40px;
            border: none;
            background: #576E86;
            color: #fff;
            border-radius: 5px;
            outline: none;
          }
          @media only screen and (max-width: 900px) {
          }
          @media only screen and (max-width: 700px) {
            div {
             font-size: 1vw;
            }
            h4 {
              font-size: 2vw;
            }
          }
          @media only screen and (max-width: 450px) {
            div {
             font-size: 5.2vw;
            }
            h4 {
              font-size: 6vw;
            }
          }
        `}
      </style>
    </div>
  );
}
