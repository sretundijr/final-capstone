
import React from 'react';
import Head from 'next/head';

// components
import Slider from '../src/components/landing_page/slider';
import Home from '../src/components/landing_page/home';
import Contact from '../src/components/landing_page/contact';

import { showLock } from '../src/components/auth-login';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: 'home',
      navOutput: 'nav',
      shopName: '',
      advisorName: '',
      advisorEmail: '',
      advisorPassword: '',
      confirmPassword: '',
      advisorAccessToken: '',
    };
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }
  handleUserSelection(selection) {
    let selectedComponent = selection;
    if (selection === '') {
      selectedComponent = this.state.userSelection;
    }
    if (this.state.navOutput === 'nav') {
      this.setState({
        navOutput: 'nav-view',
        userSelection: selectedComponent,
      });
    } else {
      this.setState({
        navOutput: 'nav',
        userSelection: selectedComponent,

      });
    }
  }
  handleLogin(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  renderUserSelection() {
    // if (this.state.userSelection === 'sign-in') {
    //   this.state.userSelection = 'home';
    //   return (
    //     <div>
    //       {showLock()}
    //     </div>
    //   );
    // } 
    if (this.state.userSelection === 'home') {
      return <Home />;
    } else if (this.state.userSelection === 'contact') {
      return <Contact />;
    }
    return <Home />;
  }
  render() {
    return (
      <div>
        <Head>
          <title>Technician Assist</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="landing-page">
          <div>
            <nav>
              <Slider
                navOutput={this.state.navOutput}
                onClick={e => this.handleUserSelection(e.target.value)}
                lockEvent={() => showLock()}
              />
            </nav>
          </div>
          <main>
            <div>
              <h1>Please use demo123@demo.com and password 123 for login</h1>
            </div>
            {this.renderUserSelection()}
          </main>
          <style jsx>{`
            h1 {
              text-align: center;
            }
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
                height: auto;
              }
            } 
            @media only screen and (max-width: 450px) {
              main {
                position: absolute;
                top: 8vh;
                height: auto;
              }
            }
          `}
          </style>
        </div>
      </div>
    );
  }
}

