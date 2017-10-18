import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Register from '../src/components/advisor/register';
import Login from '../src/components/advisor/login';
import Slider from '../src/components/slider';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <nav>
        <Slider />
      </nav>
    </div>
    <div className="register-container">
      <Register />
      <style jsx>
        {`
          .register-container {
            border-radius: 5px;
            padding-top: 2vh;
            margin: 0 auto;
            margin-top: 100px;            
            width: 350px;
            height: 75vh;
            display: flex;
            justify-content: center;
            background-color: #495C70;
            color: white;       
          }
          @media only screen and (max-width: 900px) {
            .register-container {
              width: 350px;
              height: 50vh;
            }
          }
          @media only screen and (max-width: 700px) {
            .register-container {
              width: 100vw;
              height: 110vh;
              padding-bottom: 6vh;
            }
          }
          @media only screen and (max-width: 450px) {
            .register-container {
              width: 100%;
              height: 75vh;            
            }
          }
        `}
      </style>
    </div>
    <div className="login-container">
      <Login />
      <style jsx>
        {`
          .login-container {
            border-radius: 5px;            
            padding-top: 2vh;
            margin: 0 auto;
            margin-top: 20px;
            width: 350px;
            height: 50vh;
            display: flex;
            justify-content: center;
            background-color: #495C70;
            color: white;       
          }
        `}
      </style>
    </div>
  </div>
);
