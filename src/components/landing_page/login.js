
import React from 'react';
import PropTypes from 'prop-types';

import EmailInput from '../advisor/email-input';
import PasswordInput from '../advisor/password-input';

export default function Login(props) {
  // console.log(props);
  return (
    <div className="login-container">
      <form onSubmit={props.onSubmit}>
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
                name="advisorEmail"
                onChange={props.onChange}
                value={props.email}
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
                name="advisorPassword"
                onChange={props.onChange}
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
      </form>
      <style jsx>{`
          .login-container {
            border-radius: 5px;
            padding-top: 2vh;
            margin: 0 auto;
            margin-top: 50px;
            padding-bottom: 50px;            
            width: 350px;
            height: 50vh;
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
            .login-container {
              width: 350px;
              height: 50vh;      
              margin-top: 5vh;    
            }
            div {
              font-size: 2.5vw;
             }
             h4 {
               margin-bottom: 0;
               font-size: 3.0vw;
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
            .login-container {
              margin-top: 2vh;
              height: 100vh;            
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
            .login-container {
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

Login.defaultProps = {
  email: '',
  value: '',
  onChange: () => { },
  onSubmit: () => { },
};

Login.propTypes = {
  email: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
