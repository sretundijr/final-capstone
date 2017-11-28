
import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

import { setAccessToken, getAccessToken } from '../src/components/auth-login';
import { loginUser } from '../src/api/login';

export default class Callback extends React.Component {
  async componentDidMount() {
    setAccessToken();
    await loginUser(getAccessToken())
      .then((res) => {
        Router.push(`/advisor-dashboard?_id=${res._id}`);
      });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Loading</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="content-container">
          <p>Loading...</p>
          <style jsx>{`
          .content-container {
            text-align: center;
            margin-top: 50vh;
            font-size: 3vw;
          }
          @media only screen and (max-width: 450px) {
            .content-container {
              font-size: 6.0vw;
            }
          }
        `}
          </style>
        </div>
      </div>
    );
  }
}
