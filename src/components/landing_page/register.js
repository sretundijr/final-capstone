
import React from 'react';

import TextInput from '../advisor/text-input';
import EmailInput from '../advisor/email-input';
import PasswordInput from '../advisor/password-input';

export default function Register() {
  return (
    <div className="registration-form">
      <div>
        <h4>Sign Up</h4>
      </div>
      <div>
        <form>
          <label htmlFor="shop-name">
            <span>
              Shop Name
            </span>
            <div className="input-container">
              <TextInput
                name="shop-name"
                onChange={''}
                value={''}
              />
            </div>
          </label>
          <label htmlFor="advisor-name">
            <span>
              Your Name
            </span>
            <div className="input-container">
              <TextInput
                name="advisor-name"
                onChange={''}
                value={''}
              />
            </div>
          </label>
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
          <label htmlFor="confirm-password">
            <span>
              Confirm Password
            </span>
            <div className="input-container">
              <PasswordInput
                name="confirm-password"
                onChange={''}
                value={''}
              />
            </div>
          </label>
          <div className="input-container">
            <input
              type="submit"
              onChange={''}
              value="Submit"
              className="submit"
            />
          </div>
        </form>
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
            div {
              font-size: 2.5vw;
             }
             h4 {
               margin-bottom: 0;
               font-size: 3vw;
             }
             .submit {
               width: 100%;
               height: 4vh;
               border: none;
               background: #576E86;
               color: #fff;
               border-radius: 5px;
               outline: none;
             }
             .input-container {
               margin-bottom: 2vh;
             }
          }
          @media only screen and (max-width: 700px) {
            div {
             font-size: 2.5vw;
            }
            h4 {
              margin-bottom: 0;
              font-size: 3vw;
            }
            .submit {
              width: 100%;
              height: 8vh;
              border: none;
              background: #576E86;
              color: #fff;
              border-radius: 5px;
              outline: none;
            }
            .input-container {
              margin-bottom: 2vh;
            }
          }
          @media only screen and (max-width: 450px) {
            div {
             font-size: 5.2vw;
            }
            h4 {
              font-size: 6vw;
            }
            .submit {
              width: 100%;
              border: none;
              background: #576E86;
              color: #fff;
              border-radius: 5px;
              outline: none;
            }
          }
        `}
      </style>
    </div>
  );
}
