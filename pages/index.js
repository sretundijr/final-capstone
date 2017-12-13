
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
            {this.renderUserSelection()}
          </main>
          <style jsx>{`
            .landing-page {
              margin: 0;
              padding: 0;
            }
            main {
              background-color: #F5F5F5;            
              height: auto;
              width: 100vw;
              position: absolute;
              left: 0;
              margin-top: 50px;
            }
            @media only screen and (max-width: 900px) {
             main {
             }
            }
            @media only screen and (max-width: 750px) {
              main {
                position: absolute;
                height: auto;
                margin-top: 20px;             
              }
            } 
            @media only screen and (max-width: 450px) {
              main {
                position: absolute;
                top: 8vh;
                height: auto;
                margin-top: 20px;              
              }
            }
          `}
          </style>
        </div>
      </div>
    );
  }
}
// background-color: rgb(181, 186, 189);

