import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Register from '../src/components/advisor/register';
import Login from '../src/components/advisor/login';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    Welcome to next.js! Does it work with travis
    <Link href="/home">
      <a>link</a>
    </Link>
    <div className="register-container">
      <Register />
      <style jsx>
        {`
          .register-container {
            padding-top: 5vh;
            margin: 0 auto;
            width: 350px;
            height: 40vh;
            display: flex;
            justify-content: center;
            background-color: #495C70;
            color: white;       
          }
        `}
      </style>
    </div>
    <div className="login-container">
      <Login />
      <style jsx>
        {`
          .login-container {
            padding-top: 5vh;
            margin: 0 auto;
            margin-top: 20px;
            width: 350px;
            height: 40vh;
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
