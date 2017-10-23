
import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../advisor/text-input';
import EmailInput from '../advisor/email-input';
import PasswordInput from '../advisor/password-input';

export default function Register(props) {
  return (
    <div className="register-container">
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
                  name="shopName"
                  onChange={props.onChange}
                  value={props.shopName}
                />
              </div>
            </label>
            <label htmlFor="advisor-name">
              <span>
                Your Name
              </span>
              <div className="input-container">
                <TextInput
                  name="advisorName"
                  onChange={props.onChange}
                  value={props.advisorName}
                />
              </div>
            </label>
            <label htmlFor="advisor-email">
              <span>
                Your Email
              </span>
              <div className="input-container">
                <EmailInput
                  name="advisorEmail"
                  onChange={props.onChange}
                  value={props.email}
                />
              </div>
            </label>
            <label htmlFor="password">
              <span>
                Password
              </span>
              <div className="input-container">
                <PasswordInput
                  name="advisorPassword"
                  onChange={props.onChange}
                />
              </div>
            </label>
            <label htmlFor="confirm-password">
              <span>
                Confirm Password
              </span>
              <div className="input-container">
                <PasswordInput
                  name="confirmPassword"
                  onChange={props.onChange}
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
      </div>
      <style jsx>{`
          .register-container {
            border-radius: 5px;
            padding-top: 2vh;
            margin: 0 auto;
            margin-top: 50px;            
            width: 350px;
            height: 75vh;
            display: flex;
            justify-content: center;
            background-color: #495C70;
            color: white;       
          }
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
            .register-container {
              width: 350px;
              height: 600px;
              margin-top: 2vh;                         
            }
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
          @media only screen and (max-width: 750px) {
            .register-container {
              margin-top: 2vh;                           
            }
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
            .register-container {
              width: 100vw;
              height: 100vh; 
              margin-top: 2vh;            
            }
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

Register.defaultProps = {
  shopName: '',
  advisorName: '',
  email: '',
  onChange: () => { },
};

Register.propTypes = {
  shopName: PropTypes.string,
  advisorName: PropTypes.string,
  email: PropTypes.string,
  onChange: PropTypes.func,
};
