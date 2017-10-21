
import React from 'react';
import Head from 'next/head';

import Register from '../src/components/landing_page/register';
import Login from '../src/components/landing_page/login';
import Slider from '../src/components/landing_page/slider';
import Home from '../src/components/landing_page/home';
import Contact from '../src/components/landing_page/contact';

const renderSignUp = () => {
  return (
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
              height: 600px;
              margin-top: 2vh;                         
            }
          }
          @media only screen and (max-width: 750px) {
            margin-top: 2vh;                           
          }
          @media only screen and (max-width: 450px) {
            .register-container {
              width: 100vw;
              height: 100vh; 
              margin-top: 2vh;            
            }
          }
        `}
      </style>
    </div>
  );
};

const renderLogin = () => {
  return (
    <div className="login-container">
      <Login />
      <style jsx>
        {`
        .login-container {
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
          .login-container {
            width: 350px;
            height: 600px;            
            margin-top: 2vh;    
          }
        }
        @media only screen and (max-width: 750px) {
          .login-container {
            margin-top: 2vh;
          }
        }
        @media only screen and (max-width: 450px) {
          .login-container {
            width: 100vw;
            height: 100vh; 
            margin-top: 2vh;            
          }
        }
      `}
      </style>
    </div>
  );
};


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: 'HOME',
    };
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }
  handleUserSelection(selection) {
    this.setState({
      userSelection: selection,
    });
  }
  renderUserSelection() {
    if (this.state.userSelection === 'SIGN IN') {
      return renderLogin();
    } else if (this.state.userSelection === 'SIGN UP') {
      return renderSignUp();
    } else if (this.state.userSelection === 'HOME') {
      return <Home />;
    } else if (this.state.userSelection === 'CONTACT') {
      return <Contact />;
    }
    return '';
  }
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="landing-page">
          <div>
            <nav>
              <Slider onClick={e => this.handleUserSelection(e.target.text)} />
            </nav>
          </div>
          <main>
            {this.renderUserSelection()}
          </main>
          <style jsx>
            {`
            main {
              background-color: rgb(181, 186, 189);
              height: 100vh;
              width: 100vw;
              position: fixed;
              top: 8vh;
              left: 0;
            }
            @media only screen and (max-width: 900px) {
             main {
             }
            }
            @media only screen and (max-width: 750px) {
              main {
                position: absolute;
                top: 12vh;
                height 650px;
              }
            } 
            @media only screen and (max-width: 450px) {
              main {
                position: fixed;
                top: 8vh;
                height: 100vh;
              }
            }
          `}
          </style>
        </div>
      </div>
    );
  }
}

