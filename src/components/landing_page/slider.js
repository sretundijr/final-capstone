
import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOutput: 'nav',
    };
  }
  navEvent() {
    if (this.state.navOutput === 'nav') {
      this.setState({
        navOutput: 'nav-view',
      });
    } else {
      this.setState({
        navOutput: 'nav',
      });
    }
  }
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="logo">
            <a href="#">Technician Assist</a>
          </div>
          <div className="menu">
            <button onClick={() => this.navEvent()} className="menu-btn">Menu</button>
          </div>
        </div>
        <div
          role="presentation"
          onClick={() => this.navEvent()}
          className={this.state.navOutput}
        >
          <ul>
            <li><a onClick={this.props.onClick} href="#">HOME</a></li>
            <li><a onClick={this.props.onClick} href="#">SIGN UP</a></li>
            <li><a onClick={this.props.onClick} href="#">SIGN IN</a></li>
            <li><a onClick={this.props.onClick} href="#">CONTACT</a></li>
          </ul>
        </div>
        <style jsx>
          {`
            .top-bar {
              height: 8vh;
              width: 100vw;
              background-color: #495C70;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 5;
            }
            .top-bar .logo {
                position: absolute;
                top: 15px;
                left: 15px;
            }
            .top-bar .logo a {
                color: #fff;
                font-size: 2.0vw;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 5px;
            }
            .top-bar .menu {
                position: absolute;
                right: 15px;
                top: 15px;
            }
            .menu-btn {
              border: none;
              outline: none;
              background-color: #495C70;              
              color: #fff;
              font-size: 2.0vw;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 5px;            
            }
            /*nav*/
            
            .nav {
             display: none;
              background-color: rgb(181, 186, 189);              
            }
            .nav-view {
              position: fixed;            
              right: 0;
              top: 8vh;
              width: 15vw;
              height: 100vh;
              z-index: 10;
              background-color: #495C70;
            }
            .nav-view ul {
                margin: 0;
                padding: 0;
            }
            .nav-view li {
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            .nav-view a {
                color: #fff;
                display: block;
                padding: 10px;
                border-bottom: solid 1px rgba(255, 255, 255, 0.4);
                text-decoration: none;
            }
            @media only screen and (max-width: 900px) {
              .nav-view {
                position: fixed;            
                right: 0;
                top: 8vh;
                width: 15vw;
                height: 100vh;
                z-index: 10;
                background-color: #495C70;
              }
              .top-bar {
                height: 8vh;
              }
            }
            @media only screen and (max-width: 750px) {
              .nav-view {
                top: 12vh;
                width: 20vw;
              }
              .top-bar {
                height: 12vh;                
              }
              .top-bar .logo a {
                font-size: 2.5vw;              
              }
              .menu-btn {
                font-size: 2.5vw;
              }
            }
            @media only screen and (max-width: 450px) {
              .nav-view {
                text-align: center;
                position: absolute;
                width: 100vw;
                top: 10vh;
              }
              .top-bar {
                height: 10vh;
              }
              .top-bar .logo {
                position: absolute;
                top: 15px;
                left: 15px;
              }
              .top-bar .logo a {
                color: #fff;
                font-size: 4.0vw;              
                text-transform: uppercase;
                text-decoration: none;
              }
              .top-bar .menu {
                position: absolute;
                right: 15px;
                top: 10px;
              }
              .menu-btn {
                height: 5vh;
                font-size: 4.0vw;              
              }

            }
          `}
        </style>
      </div>
    );
  }
}
