
import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="home-container none" />
      <div className="login-header-container">
        <h1 className="login-header">Please use demo123@demo.com and password: 123 for login</h1>

      </div>
      <style jsx>{`
          .none {
            display: none;
          }
          .home-container {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: url("/static/homeBackground.jpeg");
            opacity: .2;
            background-size: 100vw 100vh;
            width: 100vw;
            height: 100vh;
            z-index: 1;
          }
          .filtered {
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
          }
          .login-header-container {
            position: relative;
            display: flex;
            justify-content: center;
            z-index: 1;
          }
          .login-header {
            color: black;
          }
          
          @media only screen and (max-width: 900px) {
            .home-container {
            }
          }
           @media only screen and (max-width: 750px) {
            .home-container {
              display: none;
            }
            .login-header-container {
              height: 100vh;
            }
          }
          @media only screen and (max-width: 450px) {
            .home-container {
              display: none;
            }
            .login-header-container {
              height: 100vh;
            }
          }
        `}
      </style>
    </div >
  );
}
