
import React from 'react';
import Router from 'next/router';

// import loading from './loading.svg';

import { setAccessToken, getAccessToken } from '../src/components/auth-login';
import { loginUser } from '../src/api/login';

export default class Callback extends React.Component {
  async componentDidMount() {
    setAccessToken();
    await loginUser(getAccessToken())
      .then((res) => {
        console.log(res);
        Router.push(`/advisor-dashboard?_id=${res._id}`);
      });
  }

  render() {
    return null;
    // return (
    //   <div>
    //     <img src={loading} alt="loading" />
    //     <style jsx>{`
    //     div {
    //       position: 'absolute';
    //       display: 'flex';
    //       justifyContent: 'center';
    //       height: '100vh';
    //       width: '100vw';
    //       top: 0;
    //       bottom: 0;
    //       left: 0;
    //       right: 0;
    //       backgroundColor: 'white';
    //     }
    //     `}
    //     </style>
    //   </div>
    // );
  }
}
